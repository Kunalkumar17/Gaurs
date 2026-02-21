import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AboutSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="aboutus"
      className="relative py-20 bg-[#f3e6c9] overflow-hidden"
    >
      <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            About Us
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
        </div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ====== STATS ====== */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { number: "30+", label: "Years of Commitment" },
            { number: "70+", label: "Projects Delivered" },
            { number: "45,000+", label: "Possessions Given" },
            { number: "75,000+", label: "Units Delivered" },
            { number: "3 Lakh+", label: "Happy Customers" },
            { number: "100 Million+", label: "Sq. Ft. Delivered" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-playfair font-bold text-amber-800 mb-2">
                {item.number}
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ====== BRAND STATEMENT ====== */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            A Legacy of Unrivalled Luxury
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed font-montserrat">
            At Gaurs Group, we create living spaces that breathe beauty and
            luxury. Our impeccably designed homes craft lifestyles of elegance
            and distinction. Each development is a testament to our commitment
            to excellence — built for timeless experiences and cherished
            memories.
          </p>
        </div>

        {/* ====== BUSINESS VERTICALS ====== */}
        <div className="text-center mb-20">
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-widest text-gray-800 uppercase">
            {[
              "Real Estate",
              "Retail",
              "Education",
              "Hotels",
              "NBFC",
              "Contracting",
              "Sports",
              "Energy",
            ].map((item, i) => (
              <span key={i} className="relative">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ====== PROJECT SHOWCASE ====== */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-center text-3xl font-playfair font-semibold mb-12 text-gray-900">
            Iconic Developments
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img
              src="/legacy.jpg"
              alt="Legacy by Gaurs"
              className="mx-auto h-30 md:h-40 object-contain transition"
            />
            <img
              src="/trecento.jpg"
              alt="Trecento Residences"
              className="mx-auto h-30 md:h-40 object-contain transition"
            />
            <img
              src="/islands.jpg"
              alt="The Islands"
              className="mx-auto h-30 md:h-40 object-contain transition"
            />
            <img
              src="/nyc.jpg"
              alt="Gaur NYC Residences"
              className="mx-auto h-30 md:h-40 object-contain transition"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
