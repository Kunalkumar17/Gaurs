import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const architects = [
  {
    title: "Globally Recognized Icon of Indian Architecture",
    subtitle: "The Enduring Legacy of Hafeez Contractor",
    description: [
      "India’s most renowned architect and a Padma Bhushan awardee.",
      "Revolutionized urban living with designs that balance innovation, functionality, and grandeur.",
      "Work ranging from futuristic campuses to soaring high-rises.",
    ],
    works: [
      "D Y Patil Sports Stadium, Navi Mumbai",
      "Lavasa City, Pune",
      "Turbhe Railway Station, Navi Mumbai",
    ],
    name: "Hafeez Contractor",
    role: "Project Architect",
    image: "/contracter.JPG",
  },
  {
    title: "Transforming Modern Landscapes",
    subtitle: "Landscape Architect",
    description: [
      "Under the visionary leadership of Clint Owen, SCI has established a reputation for high quality professional planning and design.",
      "Active projects across eight countries in Asia.",
      "Providing diverse and site-specific design solutions for developers and architects.",
    ],
    works: [
      "Cap Ternay Resort & Spa, Seychelles",
      "Embarcadero Park, Indonesia",
      "Hsinchu Hsinpu Eco Community, Taiwan",
      "Pantai Sentral Park, Malaysia",
    ],
    name: "Clint Owen",
    role: "Design Director",
    image: "/contracter2.JPG",
  },
];

const ArchitectSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-20 bg-[#f3e6c9] overflow-hidden"
    >
        <div className="text-center mb-24">
  <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
    Architectural Excellence
  </h2>
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
  <p className="max-w-2xl mx-auto text-gray-700 font-montserrat text-lg">
    Designed by globally acclaimed architectural and landscape experts,
    bringing innovation, elegance and timeless craftsmanship to every detail.
  </p>
</div>
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover"></div>

      <div className="container mx-auto px-6 relative z-10 space-y-32">
        {architects.map((arch, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center"
          >
            {/* TEXT SIDE */}
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {arch.title}
              </h2>

              <h3 className="text-xl md:text-2xl text-amber-700 font-semibold mb-6 tracking-wide uppercase">
                {arch.subtitle}
              </h3>

              <ul className="space-y-3 text-gray-700 font-montserrat mb-8">
                {arch.description.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="text-amber-600 mr-3">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="uppercase tracking-widest text-sm text-gray-800 mb-3">
                  Signature Works
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {arch.works.map((work, i) => (
                    <li key={i}>• {work}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div
              className={`relative ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <div className="w-[70%] rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.15)] bg-[#e9dcc0] p-6">
                <img
                  src={arch.image}
                  alt={arch.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-6 text-center md:text-left">
                <h5 className="font-playfair text-2xl font-bold text-gray-900">
                  {arch.name}
                </h5>
                <p className="text-gray-600 uppercase tracking-wide text-sm">
                  {arch.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitectSection;
