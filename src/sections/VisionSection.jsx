import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const VisionSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-16 bg-[#f3e6c9] overflow-hidden"
    >
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover"></div>

      {/* Butterfly Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/butterfly.jpg')" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ===== Heading ===== */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-32 h-[1px] bg-gray-400"></div>
            <p className="tracking-widest text-gray-700 uppercase text-sm">
              Inspired From
            </p>
            <div className="w-32 h-[1px] bg-gray-400"></div>
          </div>

          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            The Art of <br />
            Perfect Transformation
          </h2>
        </div>

        {/* ===== Content Grid ===== */}
        <div
          className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-800 font-montserrat">
            <p>
              Project spread across approx.{" "}
              <strong>4.85 Hectares (12 Acres)</strong>
            </p>

            <p>
              <strong>7 Towers (Phase 1)</strong>
            </p>

            <p>
              Landscape Greens in{" "}
              <strong>3.44 Hectares (8.5 Acres)</strong> inspired by Butterfly
            </p>

            <p>
              Grand Entrance – <strong>Triple Height Lobby</strong>
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-gray-800 font-montserrat">
            <p>
              Club & Project Interiors on the{" "}
              <strong>Art Deco Theme</strong>
            </p>

            <p>
              One of the biggest Clubhouse of the region{" "}
              <strong>6867 Sq.Mt. (75000 Sq.Ft.)</strong> spread over multiple
              levels with <strong>60+ amenities</strong>
            </p>

            <p>
              Almost <strong>8.5 Acres</strong> Central Landscaped Greens
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
