// src/components/home/why-us/FeatureCard.tsx
'use client';

import FeatureIcon from './FeatureIcon';
import { Feature } from './whyUsData';

interface FeatureCardProps {
  feature: Feature;
  isLast?: boolean;
}

export default function FeatureCard({ feature, isLast = false }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col justify-between pt-6 lg:pt-0 pr-0 lg:pr-6 why-us-card-anim ${
        !isLast ? 'lg:border-r lg:border-white/20' : ''
      }`}
    >
      <div className="space-y-4">
        {/* Minimalist Gold Line Icon */}
        <div className="text-amber-500 mb-3">
          <FeatureIcon name={feature.iconName} className="w-12 h-12" />
        </div>

        {/* Feature Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm sm:text-sm text-gray-300 font-normal">
          {feature.description}
        </p>
      </div>
    </div>
  );
}