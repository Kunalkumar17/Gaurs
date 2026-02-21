import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const phoneNumber = "918745805409";
  const whatsappMessage = "Hi, I Need the Brochure";

  const heroImages = [
    {
      src: "/photo1.webp",
      alt: "Gaur Butterfly Exterior View",
    },
    {
      src: "/photo2.jpg",
      alt: "Gaur Butterfly Amenities",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mt-18 md:mt-0">

  {/* ================= IMAGE PART ================= */}
  <div className="relative h-[45vh] md:h-screen w-full overflow-hidden">

    {heroImages.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
    ))}

    <div className="absolute inset-0 bg-black/60"></div>

    {/* TEXT ON IMAGE */}
    <div className="absolute inset-0 flex items-center px-6 sm:px-12">
      <div className="max-w-2xl text-white">

        <div className="w-16 h-[2px] bg-amber-500 mb-6"></div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight mb-6">
          A World Where Life <br />
          <span className="font-semibold">
            Becomes Extraordinary
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-md">
          Where timeless design, unmatched connectivity, and future-ready
          infrastructure redefine modern living.
        </p>

      </div>
    </div>
  </div>

  {/* ================= WHITE BUTTON AREA ================= */}
  {/* <div className="bg-white px-6 py-8 flex flex-col gap-4 md:hidden">

    <a
     href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
                target="_blank"
                rel="noopener noreferrer"
                  className="border h-12 rounded-full border-amber-500 text-amber-500 px-6 py-2 uppercase text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Brochure
      </a>

    <a href={'aboutus'} className="w-full h-14 py-4 border rounded-full border-gray-400 text-gray-800 text-sm tracking-widest uppercase flex justify-center">
      About Us
    </a>

  </div> */}

</section>
  );
};

export default HeroSection;