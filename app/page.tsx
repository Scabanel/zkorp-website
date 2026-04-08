import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import NarrativePrivacy from "@/components/NarrativePrivacy";
import NarrativeGaming from "@/components/NarrativeGaming";
import NarrativeAI from "@/components/NarrativeAI";
import Team from "@/components/Team";
import InRealLife from "@/components/InRealLife";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <NarrativePrivacy />
        <NarrativeGaming />
        <NarrativeAI />
        <Team />
        <InRealLife />
        <Contact />
      </main>
    </>
  );
}
