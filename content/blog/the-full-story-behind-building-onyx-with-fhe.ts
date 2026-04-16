import type { BlogPost } from "@/lib/blog-helpers";
import { p, h2, h3, list, img, code, cta } from "@/lib/blog-helpers";

const post: BlogPost = {
  slug: "the-full-story-behind-building-onyx-with-fhe",
  date: "Apr 1, 2026",
  dateISO: "2026-04-01",
  category: "FHE Project",
  title: "The full story behind building Onyx with FHE",
  excerpt:
    "When it comes to payment streaming protocol, we think Sablier or Superfluid. But when it comes to confidentiality?",
  accent: "#FFCC00",
  tags: ["Onyx", "FHE", "Zama", "DeFi", "zKorp"],
  readTime: "8 min",
  author: "Steven Klinger",
  authorHandle: "@scabanel_",
  coverImage:
    "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-cover.jpg",
  content: [
    h2("What is Onyx?"),
    p(
      "Onyx is a confidential payment streaming protocol where balances and flow rates remain encrypted onchain."
    ),
    p(
      "We built it during the Zama Builder Villa (March 30 to April 2, 2026), an invitation-only retreat focused on fully homomorphic encryption in production-grade EVM systems."
    ),
    p(
      "Our thesis was simple: payment streams are one of the most useful primitives in DeFi, but today every salary stream, vesting schedule, and grant disbursement is publicly visible by default."
    ),
    p(
      "Onyx keeps composability and verifiability while adding real confidentiality for institutions, teams, and individuals."
    ),

    h2("Why FHE? The privacy gap in streaming protocols"),
    p("Most existing privacy approaches in DeFi fall into two families:"),
    list([
      "ZK-based systems: strong for validity proofs and unlinkability, but shared mutable private state is harder to model for long-lived apps.",
      "Offchain confidential compute: useful, but trust often depends on enclave operators and attestation assumptions.",
    ]),
    p(
      "FHE gives us a different model: smart contracts can compute directly on encrypted values without exposing plaintext during execution."
    ),
    p(
      "For a streaming protocol, it means Onyx can keep deposits and withdrawals encrypted while still deriving stream state from public timing data."
    ),

    h2("Architecture overview"),
    img(
      "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-architecture-overview.jpg",
      "Onyx architecture overview"
    ),
    p(
      "Onyx is built around three layers: confidential token transfer, stream accounting logic, and a frontend encryption flow."
    ),
    p(
      "Plaintext is never exposed onchain. Authorized users can decrypt relevant values locally in the browser."
    ),

    h2("Core smart contract: the stream"),
    p(
      "Each stream stores timing fields in cleartext, while financial state stays encrypted as euint values."
    ),
    p(
      "Instead of storing a visible flow rate, the contract computes streamed amounts over time from encrypted deposit plus public timestamps."
    ),
    code(`pragma solidity ^0.8.27;

import {FHE, euint64, euint128, externalEuint64} from "@fhevm/solidity/lib/FHE.sol";
import {IERC7984} from "@openzeppelin/confidential-contracts/interfaces/IERC7984.sol";

contract OnyxStream {
    struct Stream {
        address sender;
        address recipient;
        address token;
        uint64 startTime;
        uint64 endTime;
        euint64 eDeposit;
        euint64 eWithdrawn;
    }

    mapping(uint256 => Stream) private streams;
    uint256 public nextStreamId;
}`, "solidity"),
    p(
      "The frontend sends an encrypted deposit and an input proof. The stream contract stores encrypted accounting values, while the ERC-7984 token handles confidential transfer."
    ),

    h2("Computing the withdrawable amount"),
    p(
      "The key computation is encrypted all the way through: streamed amount minus already withdrawn amount."
    ),
    code(`function _computeStreamed(Stream storage s) internal returns (euint64) {
    if (block.timestamp < s.startTime) return FHE.asEuint64(0);
    if (block.timestamp >= s.endTime) return s.eDeposit;

    euint128 deposit128 = FHE.asEuint128(s.eDeposit);
    uint128 elapsed = uint128(block.timestamp - s.startTime);
    uint128 duration = uint128(s.endTime - s.startTime);

    return FHE.asEuint64(FHE.div(FHE.mul(deposit128, elapsed), duration));
}

function _computeWithdrawable(Stream storage s) internal returns (euint64) {
    euint64 streamed = _computeStreamed(s);
    return FHE.sub(streamed, s.eWithdrawn);
}`, "solidity"),
    p(
      "Design note: time remains public while amounts remain encrypted. That constraint keeps computation cheaper and compatible with current FHEVM division rules."
    ),

    h2("Frontend encryption flow"),
    p(
      "Onyx uses Zama's React SDK wrapper to encrypt deposit amounts in the browser before any transaction is sent."
    ),
    code(`import { useEncrypt } from "@zama-fhe/react-sdk";

const encrypt = useEncrypt();

const encrypted = await encrypt.mutateAsync({
  values: [{ value: depositAmount, type: "euint64" }],
  contractAddress: STREAM_ADDRESS,
  userAddress,
});

const eDeposit = toHex(encrypted.handles[0]);
const inputProof = toHex(encrypted.inputProof);`, "typescript"),
    p(
      "The proof binds ciphertext input to the user wallet and target contract, which prevents replay in another contract context."
    ),

    h2("What can slow down this kind of project"),
    h3("1. Arithmetic constraints can dictate architecture"),
    p(
      "Not all FHE operations have the same cost profile. Ciphertext-vs-ciphertext operations are generally more expensive, and division has stricter constraints."
    ),
    h3("2. ACL complexity on encrypted handles"),
    p(
      "Permissions live on ciphertext handles, and new handles are produced after FHE operations. Permissions do not carry over automatically."
    ),
    p(
      "That creates a subtle failure mode: math can be correct but a resulting handle can still be unusable if ACL grants are missing."
    ),
    h3("3. End-to-end testing remains harder than standard Solidity"),
    p(
      "Local tooling has improved, but real E2E still requires validating the full encrypted pipeline: frontend encryption, relayer behavior, reencryption flow, signing, and testnet conditions."
    ),

    h2("Why this matters for DeFi"),
    img(
      "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-defi-impact.jpg",
      "Implications of confidential streaming"
    ),
    p(
      "Confidentiality and composability are not mutually exclusive in the FHEVM model. Contracts can still compose around encrypted handles without decrypting values."
    ),

    h2("Technical overview"),
    img(
      "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-technical-overview.jpg",
      "Onyx technical overview"
    ),

    h2("Know more about Onyx"),
    p(
      "If you want to go deeper, read the original build thread and check the visual recap below."
    ),
    img(
      "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-builder-villa-document.jpg",
      "Onyx recap visuals"
    ),
    p(
      "We are continuing to iterate on confidential payments. If you have ideas, use-cases, or integrations to discuss, reach out."
    ),
    img(
      "/blog/the-full-story-behind-building-onyx-with-fhe/onyx-fhe-team-signoff.jpg",
      "zKorp team message"
    ),
    cta("Read the original X thread", "https://x.com/zKorp_/status/2039637403594268979"),
  ],
};

export default post;
