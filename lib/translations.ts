export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      context: "Context",
      value: "Our Value",
      build: "Build",
      team: "Team",
      projects: "Projects",
      awards: "Awards",
      content: "Content",
      testimonials: "Testimonials",
      blog: "Blog",
      workWithUs: "Work with us →",
    },
    hero: {
      badge: "Web3 Tech Builders · 2026",
      tagline: "Web3 Tech Builders for Technical Ambitious Projects",
      sub: '"Z" Technical Experts for "Z" Web3 Projects',
      cta1: "Discover our work →",
      cta2: "Work with us",
      scroll: "Scroll",
    },
    context: {
      sectionLabel: "01 / Your Context",
      title: "Your Context",
      p1a: "Today, Web3 companies keep reassuring their clients and investors about ROI of their technology. And for that, this technology needs to be",
      p1b: "the more efficient possible",
      p1c: "and",
      p1d: "keeps evolving fast",
      p2: "More than just technology expertise, you need to work with real partners who can help you grow.",
      p3: "Your tech, our expertise and a common goal.",
      p4: "That's where we operate.",
      sticker: "More than 15 projects shipped on mainnet!",
    },
    value: {
      sectionLabel: "02 / Our Expertise",
      title: "What We Bring on Your Table",
      introStart: "Technical expertise in your Web3 context, with",
      introStrong: "our team of more than 10 years of experience each",
      introEnd: "and multiple projects shipped worldwide.",
      services: [
        {
          label: "Smart contract development",
          items: [
            { text: "Solidity · Cairo & Starknet", bold: false },
            { text: "Use of OpenZeppelin for security and best practices", bold: false },
          ],
        },
        {
          label: "Integration, Security & Delivery",
          items: [
            { text: "Complete integration of dapps (Node.js, TypeScript, React Native, GraphQL)", bold: false },
            { text: "Dockerized development environments", bold: false },
            { text: "Understanding of Layer 2 architecture and cross-chain bridges", bold: true },
            { text: "Hands-on experience building mainnet-ready products", bold: true },
            { text: "Proven ability to stress-test early tech and deliver stable deployments", bold: true },
          ],
        },
      ],
      metrics: [
        { n: "+15", label: "Projects on Mainnet" },
        { n: "+$75K", label: "Won in Hackathons" },
        { n: "10y+", label: "Experience per Expert" },
        { n: "6", label: "Core Team Members" },
      ],
    },
    build: {
      sectionLabel: "03 / We Are Builders",
      title: "Building Strong Projects",
      introStart: "Do you need expert guidance to build your project? Our team is here, from",
      introHighlight: "A",
      introTo: "to",
      introEnd: "Z",
      steps: [
        "Product Roadmap",
        "Technical Advisory",
        "Architecture",
        "Tech Mentorship",
        "Production & Delivery",
      ],
      sticker: "We tailor our solutions to your specific needs",
    },
    team: {
      sectionLabel: "04 / Who We Are",
      titleStart: "We are Web3 builders, we are",
      titleBrand: "zKorp",
      intro:
        "We work with Web3 companies because we deeply trust utility and future of this ecosystem, in many global fields. That's why we became specialists in this technical area, to transform projects into concrete proof of problem's solving.",
    },
    irl: {
      sectionLabel: "05 / In Real Life",
      title: "Above the Screen",
      introStart: "We are both active online",
      introAnd: "AND",
      introEnd: "in real life.",
      details: [
        "Involvement in IRL events, panels around the world (ETHcc, Devcon...)",
        "One month residency in New York for close work with Dojo/Starknet ecosystem",
      ],
      videoTitle: "Building FHE consumer apps",
      videoSub: "DeBerry's / PlayAscend @ Zama CoFHE Shop",
      watchYt: "Watch on YouTube →",
    },
    projects: {
      sectionLabel: "06-11 / Our Projects",
      titleStart: "We worked on",
      titleHighlight: "these projects",
      items: [
        {
          tagline: "First consumer apps on fhEVM",
          description:
            "Zama entrusts us with their first consumer apps on fhEVM. Reward distribution system plugged to a set of dapps to reward contribution to an ecosystem.",
          metric: "4 327 Users and 35 016 draws at peak",
        },
        {
          tagline: "Experimental infrastructure on Starknet",
          description:
            "Experimental infrastructure layer built on Starknet that rethinks how sports fans participate, how incentives align and how digital assets are created. Built for a mobile-app.",
          metric: "Free-to-play prediction market · Composable collectibles · Fighter registry",
        },
        {
          tagline: "Fully confidential onchain auction platform",
          description:
            "Fully confidential onchain auction platform with one promise: no info leakage. Not the bid, not the strategy behind it. Mobile-first UX for non-crypto natives.",
          metric: "We proved that FHE isn't just a cryptographic curiosity - it's product-ready",
        },
        {
          tagline: "First mobile app using Zama",
          description:
            "The first mobile app using Zama where you're fighting an evil AI bot in a fully encrypted rock-paper-scissors battle. Battle-tested infrastructure.",
          metric: "Identified zero-day bugs during infra stress-testing",
        },
        {
          tagline: "Confidential DeFi - Your balance, encrypted onchain",
          description:
            "In 2026, Zama massively invests in DeFi. Turn your public gold tokens into confidential gold. Your balance stays encrypted onchain, meaning that only YOU can see it.",
          metric: "Pioneer in confidential DeFi infrastructure",
        },
        {
          tagline: "Onboarding Web2 players to Web3 games",
          description:
            "For the biggest onchain game on Starknet, we integrate onramper to help Web2 players jumping quickly on web3 games. We built a specific client for that: LootAdventurer.",
          metric: "Biggest onchain game on Starknet",
        },
      ],
    },
    awards: {
      sectionLabel: "12 / Awards",
      title: "Serial builders...and winners",
      introStart: "More than",
      introStrong: "$75K won",
      introEnd:
        "by creating games who serves at testing key features of Starknet ecosystem and their limits.",
      githubLink: "Our Github repository →",
    },
    content: {
      sectionLabel: "13 / Our Content",
      title: "More than Tech Experts, Content Creators",
      intro:
        "We are using our skills in content production, videos & live to gather communities and help our client's project grow.",
      watchYt: "Watch on YouTube",
      videos: [
        { title: "Playing Your Game", description: "Our retro-gaming content series" },
        { title: "WE ARE ZKORP", description: "Tech experts on Web3 market, before it was cool" },
      ],
    },
    testimonials: {
      sectionLabel: "14 / Testimonials",
      title: "What Our Partners Say",
    },
    contact: {
      sectionLabel: "15 / Work With Us",
      title: "Want to work with us?",
      xCta: "Contact us on X",
      emailText: "or send us an email to book a call",
    },
    blog: {
      sectionLabel: "Blog / Insights",
      title: "Blog",
      intro: "Field insights from the zKorp team - tech, Web3, onchain gaming.",
      readMore: "Read more →",
      backHome: "← Back to home",
    },
  },
  fr: {
    nav: {
      context: "Contexte",
      value: "Notre Valeur",
      build: "Construction",
      team: "Équipe",
      projects: "Projets",
      awards: "Récompenses",
      content: "Contenu",
      testimonials: "Témoignages",
      blog: "Blog",
      workWithUs: "Travailler avec nous →",
    },
    hero: {
      badge: "Bâtisseurs Web3 Techniques · 2026",
      tagline: "Bâtisseurs Web3 pour Projets Techniques Ambitieux",
      sub: '"Z" Experts Techniques pour "Z" Projets Web3',
      cta1: "Voir nos projets →",
      cta2: "Travailler avec nous",
      scroll: "Défiler",
    },
    context: {
      sectionLabel: "01 / Contexte",
      title: "Votre Contexte",
      p1a: "Aujourd'hui, les entreprises Web3 cherchent à convaincre leurs clients et investisseurs du ROI de leur technologie. Pour cela, cette technologie doit être",
      p1b: "la plus efficace possible",
      p1c: "et",
      p1d: "évoluer rapidement",
      p2: "Au-delà de l'expertise technique, vous avez besoin de vrais partenaires capables de vous aider à grandir.",
      p3: "Votre tech, notre expertise et un objectif commun.",
      p4: "C'est là que nous intervenons.",
      sticker: "Plus de 15 projets livrés sur mainnet !",
    },
    value: {
      sectionLabel: "02 / Notre Valeur",
      title: "Ce que nous apportons",
      introStart: "Expertise technique dans votre contexte Web3, avec",
      introStrong: "une équipe cumulant plus de 10 ans d'expérience chacun",
      introEnd: "et de nombreux projets livrés dans le monde entier.",
      services: [
        {
          label: "Développement de smart contracts",
          items: [
            { text: "Solidity · Cairo & Starknet", bold: false },
            { text: "Utilisation d'OpenZeppelin pour la sécurité et les bonnes pratiques", bold: false },
          ],
        },
        {
          label: "Intégration, Sécurité & Livraison",
          items: [
            { text: "Intégration complète de dapps (Node.js, TypeScript, React Native, GraphQL)", bold: false },
            { text: "Environnements de développement dockerisés", bold: false },
            { text: "Maîtrise de l'architecture Layer 2 et des bridges cross-chain", bold: true },
            { text: "Expérience terrain en livraison de produits mainnet-ready", bold: true },
            { text: "Capacité prouvée à stress-tester des technos jeunes et livrer des déploiements stables", bold: true },
          ],
        },
      ],
      metrics: [
        { n: "+15", label: "Projets sur Mainnet" },
        { n: "+75K$", label: "Gagnés en Hackathons" },
        { n: "10a+", label: "Expérience par Expert" },
        { n: "6", label: "Membres de l'Équipe" },
      ],
    },
    build: {
      sectionLabel: "03 / Construction de Projets",
      title: "Construire des Projets Solides",
      introStart:
        "Besoin d'un accompagnement expert pour construire votre projet ? Notre équipe est là, de",
      introHighlight: "A",
      introTo: "à",
      introEnd: "Z",
      steps: [
        "Feuille de Route Produit",
        "Conseil Technique",
        "Architecture",
        "Mentorat Technique",
        "Production & Livraison",
      ],
      sticker: "Nous adaptons nos solutions à vos besoins spécifiques",
    },
    team: {
      sectionLabel: "04 / Qui Sommes-nous",
      titleStart: "Nous sommes des bâtisseurs Web3, nous sommes",
      titleBrand: "zKorp",
      intro:
        "Nous travaillons avec des entreprises Web3 parce que nous croyons profondément en l'utilité et l'avenir de cet écosystème, dans de nombreux domaines. C'est pourquoi nous sommes devenus spécialistes de ce domaine technique, pour transformer les projets en preuves concrètes de résolution de problèmes.",
    },
    irl: {
      sectionLabel: "05 / Sur le Terrain",
      title: "Au-delà de l'Écran",
      introStart: "Nous sommes actifs aussi bien en ligne",
      introAnd: "QUE",
      introEnd: "sur le terrain.",
      details: [
        "Participation à des événements IRL, panels dans le monde entier (ETHcc, Devcon...)",
        "Un mois de résidence à New York pour travailler en proximité avec l'écosystème Dojo/Starknet",
      ],
      videoTitle: "Construire des apps FHE grand public",
      videoSub: "DeBerry's / PlayAscend @ Zama CoFHE Shop",
      watchYt: "Voir sur YouTube →",
    },
    projects: {
      sectionLabel: "06-11 / Projets Réalisés",
      titleStart: "Nous avons travaillé sur",
      titleHighlight: "ces projets",
      items: [
        {
          tagline: "Premières apps grand public sur fhEVM",
          description:
            "Zama nous confie ses premières applications grand public sur fhEVM. Système de distribution de récompenses connecté à un ensemble de dapps pour récompenser les contributions à un écosystème.",
          metric: "4 327 utilisateurs et 35 016 tirages au pic",
        },
        {
          tagline: "Infrastructure expérimentale sur Starknet",
          description:
            "Couche d'infrastructure expérimentale construite sur Starknet qui repense la participation des fans de sport, l'alignement des incitations et la création d'actifs numériques. Conçu pour mobile.",
          metric: "Marché de prédiction free-to-play · Collectibles composables · Registre de combattants",
        },
        {
          tagline: "Plateforme d'enchères onchain entièrement confidentielle",
          description:
            "Plateforme d'enchères onchain totalement confidentielle avec une promesse : zéro fuite d'information. Ni la mise, ni la stratégie. UX mobile-first pour les non-initiés crypto.",
          metric: "Nous avons prouvé que le FHE n'est pas qu'une curiosité cryptographique - c'est prêt pour la prod",
        },
        {
          tagline: "Première app mobile utilisant Zama",
          description:
            "La première app mobile utilisant Zama où vous combattez un bot IA maléfisant dans un pierre-papier-ciseaux entièrement chiffré. Infrastructure battle-tested.",
          metric: "Bugs zero-day identifiés lors des tests de stress de l'infrastructure",
        },
        {
          tagline: "DeFi Confidentiel - Votre solde, chiffré onchain",
          description:
            "En 2026, Zama investit massivement dans la DeFi. Transformez vos tokens gold publics en gold confidentiel. Votre solde reste chiffré onchain - seul VOUS pouvez le voir.",
          metric: "Pionnier de l'infrastructure DeFi confidentielle",
        },
        {
          tagline: "Onboarding des joueurs Web2 vers les jeux Web3",
          description:
            "Pour le plus grand jeu onchain sur Starknet, nous intégrons un onramper pour aider les joueurs Web2 à rejoindre rapidement les jeux web3. Nous avons développé un client dédié : LootAdventurer.",
          metric: "Le plus grand jeu onchain sur Starknet",
        },
      ],
    },
    awards: {
      sectionLabel: "12 / Équipe Primée",
      title: "Bâtisseurs en série...et vainqueurs",
      introStart: "Plus de",
      introStrong: "75K$ gagnés",
      introEnd:
        "en créant des jeux qui servent à tester les fonctionnalités clés de l'écosystème Starknet et leurs limites.",
      githubLink: "Notre dépôt Github →",
    },
    content: {
      sectionLabel: "13 / Contenu",
      title: "Plus que des Experts Tech, des Créateurs de Contenu",
      intro:
        "Nous utilisons nos compétences en production de contenu, vidéos & live pour rassembler des communautés et aider les projets de nos clients à se développer.",
      watchYt: "Voir sur YouTube",
      videos: [
        { title: "Playing Your Game", description: "Notre série de contenu rétro-gaming" },
        { title: "WE ARE ZKORP", description: "Des experts tech sur le marché Web3, avant que ce soit à la mode" },
      ],
    },
    testimonials: {
      sectionLabel: "14 / Témoignages",
      title: "Ce que disent nos partenaires",
    },
    contact: {
      sectionLabel: "15 / Travailler avec nous",
      title: "Envie de travailler avec nous ?",
      xCta: "Contactez-nous sur X",
      emailText: "ou envoyez-nous un email pour réserver un appel",
    },
    blog: {
      sectionLabel: "Blog / Insights",
      title: "Blog",
      intro: "Retours terrain de l'équipe zKorp - tech, Web3, gaming onchain.",
      readMore: "Lire la suite →",
      backHome: "← Retour à l'accueil",
    },
  },
} as const;
