import React, { useEffect, useRef, useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const AmenitiesSection = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const value = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TOTAL_WIDTH = 4000; // slightly bigger than max left value
    const translate = -progress * (TOTAL_WIDTH - window.innerWidth);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#e7e5df]"
    >
      <div className="pt-20  pb-0 text-center">
    <h2 className="text-5xl md:text-6xl font-[Cormorant_Garamond] font-semibold text-gray-900 tracking-wide">
      Curated Lifestyle Amenities
    </h2>

    <div className="w-16 h-[1px] bg-gray-400 mx-auto mt-6 mb-6"></div>

    <p className="text-gray-600 font-[Inter] text-sm tracking-widest uppercase">
      Designed For Elevated Living
    </p>
  </div>
      
      <div className="sticky top-0 h-screen overflow-hidden">
      <div
        className="relative h-full"
        style={{
        width: "4000px",
        transform: `translateX(${translate}px)`
      }}
      >

  {/* ---------------- HERO 1 ---------------- */}
  <div className="absolute left-[750px] top-[18vh]">
    <div className="w-[400px] h-[400px] rounded-[24px] overflow-hidden shadow-lg">
      <img src="/amenities/restaurant.jpg" className="w-full h-full object-cover" />
    </div>
    <div className="mt-6 max-w-[360px]">
      <h3 className="text-2xl font-serif text-gray-800 mb-2">
        The Star Restaurant
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        A refined culinary destination designed with ambient lighting,
        architectural detail, and understated elegance.
      </p>
      <div className="mt-4 w-10 h-[1px] bg-gray-800"></div>
    </div>
  </div>

  {/* ---------------- HERO 2 ---------------- */}
  <div className="absolute left-[2250px] top-[18vh]">
    <div className="w-[400px] h-[400px] rounded-[24px] overflow-hidden shadow-lg">
      <img src="/amenities/gym.jpg" className="w-full h-full object-cover" />
    </div>
    <div className="mt-6 max-w-[360px]">
      <h3 className="text-2xl font-serif text-gray-800 mb-2">
        The Sculpt Gym
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        A modern fitness sanctuary equipped with premium facilities
        and thoughtfully curated interiors.
      </p>
      <div className="mt-4 w-10 h-[1px] bg-gray-800"></div>
    </div>
  </div>

  {/* ---------------- SMALL FLOATING ITEMS ---------------- */}

  {[
    { left: 100, top: "18vh", img: "concourse.jpg", name: "The Concourse", desc: "Grand architectural entrance with refined finishes." },
    { left: 400, top: "45vh", img: "lobby.jpg", name: "Lobby", desc: "Double-height lobby with curated artwork." },
    { left: 1350, top: "25vh", img: "socialarea.jpg", name: "Social Center", desc: "Contemporary co-working lounge." },
    { left: 1650, top: "45vh", img: "bowling-alley.jpg", name: "Bowling Alley", desc: "Professional lanes for refined recreation." },
    { left: 1950, top: "18vh", img: "virtual-golf.jpg", name: "Virtual Golf Club", desc: "State-of-the-art golf simulation." },
    { left: 2750, top: "50vh", img: "home-theater.jpg", name: "Theater Vault", desc: "Private cinema with immersive acoustics." },
    { left: 3050, top: "25vh", img: "badminton-court.jpg", name: "Badminton Court", desc: "Indoor court with premium flooring." },
    { left: 3350, top: "43vh", img: "squash-square.jpg", name: "Squash Square", desc: "International-standard squash arena." },
    { left: 3650, top: "35vh", img: "table-tennis.jpg", name: "Table Tennis Lounge", desc: "Elegant competition-grade tables." }
  ].map((item, i) => (
    <div
      key={i}
      className="absolute"
      style={{ left: `${item.left}px`, top: item.top }}
    >
      <div className="w-[190px] h-[220px] rounded-[18px] overflow-hidden shadow-sm">
        <img
          src={`/amenities/${item.img}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 max-w-[200px]">
        <h4 className="font-serif text-base text-gray-800">
          {item.name}
        </h4>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  ))}

</div>
</div>
    </section>
  );
};

export default AmenitiesSection
