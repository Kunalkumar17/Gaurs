import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Download,Phone } from 'lucide-react';

const CTASection = () => {
    const phoneNumber = "918745805409";
    const whatsappMessage = "Hi, I Need the Brochure";
    const [ref, isVisible] = useScrollAnimation();

    return (
      <section ref={ref} className="py-32 bg-gradient-to-r from-gray-900 via-stone-900 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Experience Timeless Luxury
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
            <p className="text-2xl mb-16 text-gray-300 font-light">
              Schedule a site visit and discover your dream home at Gaur Butterfly
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
            target="_blank"
            rel="noopener noreferrer"
              className="rounded-full border-2 border-amber-500 text-amber-500 px-6 py-2 uppercase text-sm tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center h-14"
            >
              <Download size={16} />
              Brochure
            </a>
              <a
          href={`tel:+${phoneNumber}`}
          className="w-full rounded-full h-1/2 flex items-center border-2 justify-center gap-2 py-4 bg-gray-900 text-white font-semibold tracking-wide"
        >
          <Phone size={18} />
          Call Now
        </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default CTASection;
