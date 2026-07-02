import Hero from "@/components/home/Hero";
import PictureTiles from "@/components/home/PictureTiles";
import VisitSection from "@/components/home/VisitSection";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <PictureTiles />
      <Section>
        <VisitSection />
      </Section>
    </>
  );
}
