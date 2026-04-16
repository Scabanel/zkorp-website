import type { BlogPost } from "@/lib/blog-helpers";
import { p, h2, q, list, img, tweet, cta } from "@/lib/blog-helpers";

const post: BlogPost = {
  slug: "after-1-year-of-building-privacy-dapps-we-launched-our-fhevm",
  date: "Apr 13, 2026",
  dateISO: "2026-04-13",
  category: "FHE Project",
  title: "After 1 year of building privacy dApps, we launched our FHEVM CookBook",
  excerpt:
    "After a year building on FHEVM, one thing became obvious to us: the hard part is not understanding the promise of privacy. It's shipping the right implementation.",
  accent: "#FFCC00",
  tags: ["FHEVM", "CookBook", "Zama", "Privacy", "zKorp"],
  readTime: "3 min",
  author: "Steven Klinger",
  authorHandle: "@scabanel_",
  coverImage:
    "/blog/after-1-year-of-building-privacy-dapps-we-launched-our-fhevm/fhevm-cookbook-cover-preview.png",
  content: [
    h2("Sharing our expertise with privacy builders"),
    p(
      "After a year building on FHEVM, one thing became obvious to us: the hard part is not understanding the promise of privacy. It's shipping the right implementation."
    ),
    q("FHEVM is not magic."),
    p(
      "You do not get a correct privacy-first app by sprinkling encrypted types into Solidity and hoping the rest will work itself out."
    ),
    p("You need to know a lot of things:"),
    list([
      "when inputs must be encrypted on the client side",
      "how input proofs bind ciphertext to a caller and contract",
      "why every new handle needs fresh ACL grants",
      "why encrypted control flow differs from standard Solidity",
      "when user decryption is enough and when public decryption + proof verification + finalize are required",
      "which examples an AI agent can actually trust",
    ]),
    p("That is exactly why we built the FHEVM Cookbook."),

    h2("Our next big step in privacy"),
    p(
      "It is the logical continuation of the last year we spent building on Zama's stack and turning privacy into real products, including Onyx."
    ),
    tweet("2041116927708348918"),
    q("The idea is simple: official docs explain the protocol, the cookbook reduces the assembly cost of shipping with it."),

    h2("What is inside the CookBook?"),
    p("Two big sections: skills and snippets."),
    p("Skills are made for AI agents and are a practical tool to accelerate production."),
    p("All builders need AI to ship faster, but not at all costs. That's why we are helping with concrete skills."),
    img(
      "/blog/after-1-year-of-building-privacy-dapps-we-launched-our-fhevm/fhevm-cookbook-skills-overview.jpg",
      "FHEVM CookBook visual"
    ),
    p("Snippets are specific answers for production problems builders encounter."),
    p("They are deep technical articles with code, explanation, and concrete actions."),

    h2("It will evolve continuously"),
    p("At launch, there are more than 15 skills and one snippet ready to use."),
    p("We will keep updating the website with more technical content around FHEVM."),
    q("Bookmark this website because it will become your ally."),
    cta("GO TO OUR FHEVM COOKBOOK", "https://www.fhevm-cookbook.xyz/", {
      variant: "zama",
      align: "center",
    }),

    h2("Why privacy matters now"),
    p("When it comes to privacy, we choose to build on top of FHEVM because we deeply trust this technology."),
    p("It's robust, secure, usable, and quantum proof (which will matter even more in the coming years)."),
    p(
      "Public-by-default systems leak more than they should: payment flows, voting intent, and strategic behavior."
    ),
    p(
      "Privacy should be a first-class property of onchain applications, not an afterthought."
    ),
    tweet("2041860314807898557"),
    p(
      "If builders are going in this direction, they need more than theory. They need patterns, snippets, and skills they can ship with."
    ),
    p("That is the purpose of this cookbook."),
    cta("GO TO OUR FHEVM COOKBOOK", "https://www.fhevm-cookbook.xyz/", {
      variant: "zama",
      align: "center",
    }),
  ],
};

export default post;
