import React from 'react'
import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Form  from '../components/Form.jsx'

const FloorPlansSection = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('3bhk');
    const [preview, setPreview] = useState({
      visible: false,
      bgX: 50,
      bgY: 50,
      });

    const floorPlans = {
      '3bhk': {
        title: '3 BHK Floor Plan',
        description: 'Spacious 3 bedroom layout with modern design',
        image: '/floor-plans/3bhk.jpg' // Placeholder - replace with actual image
      },
      '4bhk': {
        title: '4 BHK Floor Plan',
        description: 'Luxurious 4 bedroom residence with premium amenities',
        image: '/floor-plans/4bhk.jpg' // Placeholder - replace with actual image
      },
      'roof': {
        title: 'Roof Plan',
        description: 'Exclusive rooftop amenities and layout',
        image: '/floor-plans/roofplan.webp' // Placeholder - replace with actual image
      },
    };

    const planTypes = [
      { key: '3bhk', label: '3 BHK', icon: '🏠' },
      { key: '4bhk', label: '4 BHK', icon: '🏛️' },
      { key: 'roof', label: 'Roof Plan', icon: '🏗️' },
    ];

    const Stat = ({ value, label }) => (
  <div>
    <div className="text-3xl font-[Cormorant_Garamond] text-gray-900 mb-1">
      {value}
    </div>
    <div className="text-xs uppercase tracking-widest text-gray-500 font-[Inter]">
      {label}
    </div>
  </div>
);

    return (
      <section ref={ref} id='floor-plans' className="pt-20 bg-[#f4f2ee]">

        {showForm && <Form onClose={() => setShowForm(false)} />}
  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}
    <div className={`text-center mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
      <h2 className="text-6xl md:text-7xl font-[Cormorant_Garamond] font-semibold text-gray-900 mb-6 tracking-wide">
        Floor Plans
      </h2>
      <div className="w-20 h-[1px] bg-gray-400 mx-auto mb-6"></div>
      <p className="text-gray-600 text-lg font-[Inter] font-light tracking-wide">
        Thoughtfully designed layouts for refined living
      </p>
    </div>

    {/* Selector */}
    <div className="flex justify-center gap-8 mb-10">
      {planTypes.map((plan) => (
        <button
          key={plan.key}
          onClick={() => setSelectedPlan(plan.key)}
          className={`text-sm hover:cursor-pointer font-[Inter] tracking-widest uppercase transition-all ${
            selectedPlan === plan.key
              ? "text-black border-b border-black pb-1"
              : "text-gray-400 hover:text-black"
          }`}
        >
          {plan.label}
        </button>
      ))}
    </div>

    {/* Layout Container */}
    <div className={`transition-all duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>

      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="relative">

  {/* Base Image */}
  <div
    className="relative w-full aspect-[4/3] overflow-hidden rounded-[12px] bg-white shadow-sm blur-100"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;

      setPreview({
        visible: true,
        bgX,
        bgY,
      });
    }}
    onMouseLeave={() =>
      setPreview({ visible: false, bgX: 50, bgY: 50 })
    }
  >
    <img
  src={floorPlans[selectedPlan].image}
  alt=""
  onClick={() => setShowForm(true)}
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
  draggable={false}
  className="w-full h-full object-contain cursor-pointer blur-md"
/>
  </div>

</div>



        {/* Content */}
        <div>
          <h3 className="text-4xl font-[Cormorant_Garamond] font-semibold text-gray-900 mb-6">
            {floorPlans[selectedPlan].title}
          </h3>

          <p className="text-gray-600 font-[Inter] text-base leading-relaxed mb-10">
            {floorPlans[selectedPlan].description}
          </p>

          <div className="grid grid-cols-3 gap-10 border-t border-gray-200 pt-8">

            {selectedPlan === '3bhk' && (
              <>
                <Stat value="3" label="Bedrooms" />
                <Stat value="3" label="Bathrooms" />
                <Stat value="1,800+" label="Sq. Ft." />
              </>
            )}

            {selectedPlan === '4bhk' && (
              <>
                <Stat value="4" label="Bedrooms" />
                <Stat value="4" label="Bathrooms" />
                <Stat value="2,400+" label="Sq. Ft." />
              </>
            )}

            {selectedPlan === 'roof' && (
              <>
                <Stat value="Premium" label="Amenities" />
                <Stat value="360°" label="Views" />
                <Stat value="Exclusive" label="Access" />
              </>
            )}
          </div>

          {/* Download Button */}
          <div className="mt-14">
            <button onClick={() => setShowForm(true)} className="px-8 py-4 border border-black text-sm tracking-widest font-[Inter] uppercase hover:bg-black hover:text-white transition-all duration-300">
              Request Floor Plan
            </button>
          </div>
        </div>

      </div>
    </div>

    {/* Disclaimer */}
    <div className="mt-24 text-center max-w-3xl mx-auto">
      <p className="text-gray-500 text-sm font-[Inter] leading-relaxed">
        Floor plans are subject to minor variations. Dimensions are approximate.
        Please consult our sales team for detailed specifications.
      </p>
    </div>

  </div>
</section>
    );
  };

  export default FloorPlansSection
