import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Context from "@/components/Context";
import OurValue from "@/components/OurValue";
import BuildProjects from "@/components/BuildProjects";
import Team from "@/components/Team";
import InRealLife from "@/components/InRealLife";
import WorkProjects from "@/components/WorkProjects";
import Awards from "@/components/Awards";
import ContentSection from "@/components/ContentSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Context />
        <OurValue />
        <BuildProjects />
        <Team />
        <InRealLife />
        <WorkProjects />
        <Awards />
        <ContentSection />
        <Contact />
      </main>
    </>
  );
}
