import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

import {
  HeroSection,
  FeaturesGrid,
  VisionSection,
  ClubhouseSection,
  AmenitiesSection,
  FloorPlansSection,
  LocationSection,
  CTASection,
  Footer,
  AboutSection,
  MobileContactBar,
  ArchitectSection,
} from "./sections";
import LeadForm from "./sections/LeadForm";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white">
      <Navigation scrollY={scrollY} />

      <section>
        <HeroSection />
      </section>

      <section>
        <LeadForm />
      </section>
{/* 
      <section>
        <FeaturesGrid />
      </section> */}

      <section>
        <VisionSection />
      </section>

      <section>
        <ClubhouseSection />
      </section>

      <section>
        <AmenitiesSection />
      </section>

      <section>
        <FloorPlansSection />
      </section>

      <section>
        <ArchitectSection />
      </section>

      <section>
        <LocationSection />
      </section>

      <section>
        <AboutSection />
      </section>

      <section>
        <CTASection />
      </section>

      <section>
        <Footer />
      </section>

      <section>
        <MobileContactBar />
      </section>
    </main>
  );
};

export default App;