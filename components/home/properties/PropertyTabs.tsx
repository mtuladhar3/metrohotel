// src/components/home/properties/PropertyTabs.tsx
'use client';

import { ArrowRight } from 'lucide-react';
import { PropertyData } from './PropertySection';

interface PropertyTabsProps {
  properties: PropertyData[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function PropertyTabs({
  properties,
  activeId,
  onSelect,
}: PropertyTabsProps) {
  return (
    <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8 pr-0 lg:pr-8">
      {/* Property Names List */}
      <div className="space-y-4">
        {properties.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div key={item.id} className="transition-all duration-300">
              <button
                onClick={() => onSelect(item.id)}
                className={`text-left w-full text-2xl sm:text-3xl font-medium tracking-tight transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-300 hover:text-slate-500'
                }`}
              >
                {item.name}
              </button>

              {/* Expanded details under active item */}
              {isActive && (
                <div className="property-tab-details mt-3 space-y-4 animate-fade-in">
                  {/* Subtle horizontal underline */}
                  <div className="w-24 h-[1px] bg-slate-900" />

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Link */}
      <div className="pt-6">
        <a
          href={`#details-${activeId}`}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors group"
        >
          <span>Accommodation Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}