import React from 'react'
import FeatureCard from '../components/FeatureCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Building2 , Crown , Landmark } from 'lucide-react';

const FeaturesGrid = () => {

    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
  Icon={Building2}
  title="Architectural Excellence"
  subtitle="Thoughtfully designed spaces reflecting timeless elegance."
  delay={100}
/>

<FeatureCard
  Icon={Crown}
  title="Premium Living"
  subtitle="Crafted for those who seek refinement and exclusivity."
  delay={200}
/>

<FeatureCard
  Icon={Landmark}
  title="Iconic Landmark"
  subtitle="A defining presence within the region."
  delay={300}
/>
          </div>
        </div>
      </section>
    );
  };

  export default FeaturesGrid;
