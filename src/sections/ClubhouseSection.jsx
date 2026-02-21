import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const ClubhouseSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    "Double-height lobby with statement art",
    "Art Deco inspired architecture",
    "Signature Art Gallery",
    "Five-level modern clubhouse",
    "Instagram-worthy interiors",
    "Curated aesthetics throughout",
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-[#111111] text-white"
    >
      <div className="max-w-7xl mx-auto px-10">

        {/* Heading */}
        <div
          className={`text-center mb-32 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-[Cormorant_Garamond] font-semibold tracking-wide mb-6">
            The Biggest Clubhouse
          </h2>

          <div className="w-16 h-[1px] bg-gray-600 mx-auto mb-6"></div>

          <p className="text-xl font-[Inter] font-light tracking-wide text-gray-400">
            Of The Region
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-20 items-start">

          {/* LEFT COLUMN */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="mb-12">
              <div className="text-5xl font-[Cormorant_Garamond] font-semibold mb-4">
                6,867 m²
              </div>
              <p className="text-gray-400 font-[Inter] text-sm uppercase tracking-widest">
                75,000 Sq. Ft. Spread Across Five Levels
              </p>
            </div>

            <div className="border-t border-gray-800 pt-10 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-gray-500 mt-2"></div>
                  <p className="text-gray-300 font-[Inter] text-base leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative overflow-hidden rounded-[24px] shadow-2xl">
              <img
                src="/amenities/clubhouse.jpg" // Replace with your image path
                alt="Clubhouse Interior"
                className="w-full h-[600px] object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h4 className="text-4xl font-[Cormorant_Garamond] font-semibold mb-8">
              Art Deco Inspired Architecture
            </h4>

            <div className="border-t border-gray-800 pt-8 space-y-6">
              <p className="text-gray-300 font-[Inter] leading-relaxed">
                Inspired by the geometry, symmetry, and ornamental refinement
                of the Art Deco movement, the clubhouse reflects architectural
                discipline blended with contemporary elegance.
              </p>

              <p className="text-gray-300 font-[Inter] leading-relaxed">
                Designed with clean lines, curated detailing, and thoughtful
                spatial planning, it represents a seamless balance between
                heritage and modern innovation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClubhouseSection;

