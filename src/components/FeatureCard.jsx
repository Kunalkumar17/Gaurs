import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const FeatureCard = ({ Icon, title, subtitle, delay }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative p-14 bg-white border border-gray-200 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle Hover Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"></div>

      {/* Icon */}
      <div className="mb-8 text-gray-700">
        <Icon size={32} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-[Cormorant_Garamond] font-semibold text-gray-900 mb-4 tracking-wide">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-gray-300 mb-6"></div>

      {/* Subtitle */}
      <p className="text-gray-600 font-[Inter] leading-relaxed text-sm">
        {subtitle}
      </p>
    </div>
  );
};

export default FeatureCard;
