import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const LocationSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const locations = [
    {
      title: "Yamuna Expressway",
      description: "Seamless connectivity to Delhi and Agra",
      color: "amber",
    },
    {
      title: "Noida International Airport",
      description: "Upcoming airport in close proximity",
      color: "amber",
    },
    {
      title: "Metro Connectivity",
      description: "Proposed metro stations nearby",
      color: "amber",
    },
    {
      title: "Educational Hubs",
      description: "Amity, Sharda, Galgotias universities",
      color: "emerald",
    },
    {
      title: "IT Parks & Offices",
      description: "HCL, Oracle, Microsoft nearby",
      color: "emerald",
    },
    {
      title: "Entertainment",
      description: "F1 Track, Film City, Cricket Stadium",
      color: "emerald",
    },
  ];

  return (
    <section
      ref={ref}
      id="location"
      className="relative py-20 bg-gradient-to-b from-[#f9f6f1] to-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-100 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            Prime Location
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 font-montserrat text-lg">
            Strategically positioned at the heart of growth, connectivity and
            future infrastructure.
          </p>
        </div>

        {/* Premium Map Container */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-amber-100">
            <img
              src="/map.jpg"   // make sure this is in your public folder
              alt="Location Map"
              className="w-full h-auto object-cover"
            />

            {/* Elegant overlay label */}
          </div>
        </div>

        {/* Location Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="flex items-start">
                  <span
                    className={`text-3xl mr-5 transition-transform duration-300 group-hover:translate-x-1 ${
                      location.color === "amber"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  >
                    ▸
                  </span>

                  <div>
                    <h4 className="font-playfair text-2xl font-bold mb-3 text-gray-900">
                      {location.title}
                    </h4>
                    <p className="text-gray-600 font-montserrat leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;