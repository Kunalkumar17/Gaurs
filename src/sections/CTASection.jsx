import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const CTASection = () => {
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
              <button className="group relative px-12 py-5 bg-amber-600 text-white rounded-full font-montserrat font-bold text-sm tracking-widest overflow-hidden transition-all hover:shadow-2xl hover:shadow-amber-900/50">
                <span className="relative z-10">DOWNLOAD BROCHURE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button className="px-12 py-5 border-2 border-white text-white rounded-full font-montserrat font-bold text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                CALL NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default CTASection;
