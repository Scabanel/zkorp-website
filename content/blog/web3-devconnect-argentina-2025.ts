import type { BlogPost } from "@/lib/blog-helpers";
import { p, h2, h3, q, list, vid, cta } from "@/lib/blog-helpers";

const post: BlogPost = {
  slug: "web3-devconnect-argentina-2025",
  date: "Nov 25, 2025",
  dateISO: "2025-11-25",
  category: "Event Coverage",
  title: "Web3 is not dead: Devconnect Argentina 2025 proves it!",
  excerpt: "Our team was at Devconnect Argentina 2025. FHE, Starknet BTCFi, Dojo gaming - here's what we learned and what's coming next.",
  accent: "#F07060",
  tags: ["Devconnect", "FHE", "Starknet", "Event"],
  readTime: "6 min",
  author: "Steven Klinger",
  authorHandle: "@scabanel_",
  coverImage: "web3.jpg",
  content: [
    p("Let's get one thing straight: the era of bullshit crypto projects is over. For sure, there are still shady projects and people who'll try to take advantage of this market…like in every market (hello AI!)"),
    p("But now, more than ever, Web3 is refocusing on what actually matters: bringing value to customers."),
    p("Not hype, not vaporware: concrete and usable value."),

    h2("It's FHE time baby!"),
    p("Right now, the hottest subject for that value is FHE (Fully Homomorphic Encryption)."),
    p("We talk a lot about privacy in AI and blockchain, but in most systems today, data still needs to be decrypted at some point to be processed. That's a bottleneck."),
    q("Fully Homomorphic Encryption solves this. It lets you compute on encrypted data without ever decrypting it."),
    p("Imagine asking an AI (or not) to analyze your medical records or financial ones. It will give you the answer you want, without ever seeing your data. Results with privacy."),
    p("That's what we are working at the moment at zKorp, especially with our client Zama."),
    p("It unlocks private DeFi (Decentralized finance, we are sure you already know that!) and encrypted governance. It's the missing layer between autonomy, privacy, and decentralization."),
    p("And because we don't just watch what's going on technically, we flew to Devconnect Argentina to talk about it, show our tech expertise, but mostly, speak about our delivered projects."),
    p("While our team in France was busy building solutions for our clients, we sent (with his consent) Thomas / Cheelax there to represent us!"),

    h2("Why Devconnect Argentina 2025 mattered to us?"),
    p("Behind our screens, where we are \"Z\" technical team for \"Z\" Web3 projects, we positioned ourselves right at the intersection of two massive narrative arcs: onchain confidentiality with Zama and gaming stress test applications with Dojo but also Starknet."),
    p("Zama asked us to be there too to represent and talk about our work with them on two projects: deBerry's and Ascend."),

    h2("Zama at the center of everything"),
    h3("Zama's CoFHE shop: Confidentiality goes public"),
    p("If you were in Buenos Aires, you probably couldn't miss the Zama CoFHE Shop. We were right in the middle of it."),
    p("We showcased two apps developed in collaboration with Zama, deBerry's and Ascend"),
    list([
      "~2,000 players on each app.",
      "~15,000 transactions processed (give or take).",
      "Zero privacy leaks.",
    ]),
    p("deBerry's is a fully confidential onchain auction platform with one promise: no info leakage. Not the bid, not the strategy behind it. All that with a mobile-first UX for non-crypto natives."),
    p("We proved that FHE isn't just a cryptographic curiosity. It's a product-ready tech stack and at zKorp, we know how to use it."),
    vid("_9OughD300Y"),

    h3("The Zama keynote & what's next"),
    p("Zama's keynote was a blast, dropping major alpha for the year ahead:"),
    list([
      "Mainnet is coming; soon the dapps we developed with them will get to their final home!",
      "Zama token is coming too! It will be used to pay for the encryptions and will be given as rewards to stakers.",
      "Transparency is very important, but for companies, institutions and countries, you need confidentiality sometimes.",
    ]),

    h2("Starknet, BTCFi, and Dojo: Bitcoin meets real onchain gaming"),
    h3("Starknet's announcements"),
    p("While FHE was locking down privacy, Starknet was unlocking liquidity."),
    p("Starknet is positioning itself as the first dual-settlement Layer 2 for both BTC and ETH."),
    p("The goal: Unlocking the trillion-dollar liquidity of BTC for complex DeFi and gaming!"),
    p("On the tech side: heavy focus on how ZK-STARKs can scale Bitcoin execution layers, essentially bringing smart contracts to Bitcoin via validity proofs."),

    h3("Dojo night & Eternum Blitz"),
    p("Thomas finished the trip at the Dojo Night, witnessing a live-streamed competition of Eternum Blitz. This was the concrete proof of onchain game engines being finally ready for real-time UX."),
    p("It's not just \"gaming.\" It's high-performance, verifiable computation."),
    p("And zKorp is ready to build the rails for it."),

    h2("What about us?"),
    h3("The deal flow: we don't network, we qualify"),
    p("Let's be real. We didn't fly 11,000 km to collect business cards. We went to create partnerships, to strengthen bonds, to close."),
    p("We met a lot of people and very cool projects and at zKorp, we are focusing on where we add value to these projects."),
    p("We are not looking for \"gigs\"."),
    p("We are looking to meet projects and partners who deeply need our technical expertise and knowledge. Because when it comes to your customers, your users and your community, your project needs to be efficient, tested and strong to meet demand and rally support around your vision."),

    h3("What's next?"),
    p("Web3 is a market, not a tool. It's about producing for concrete needs."),
    p("Devconnect Argentina confirmed one thing: the infrastructure is ready. FHE is usable, the \"toy phase\" is over, and things are growing fast, really fast."),
    p("For zKorp, the next few months are mapped out:"),
    list([
      "Continue to work with our existing clients as their tech experts team, to help them bring value.",
      "Ship value, alongside useful and strong code.",
      "Continue to deploy our sales and marketing strategy, to bring knowledge and value to you about all this tech ecosystem.",
      "Meet and work with new meaningful projects.",
    ]),
    p("So if you are building on FHE or \"simply\" want to create/solidify your Web3 project, you know where to find us."),
    p("We are here to stay."),
    q("WE 👏 ARE 👏 ZKORP."),

    cta("Book a call with us →", "https://calendly.com/cheelax"),
  ],
};

export default post;
