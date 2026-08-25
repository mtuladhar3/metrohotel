'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import HotelAvailabilityModal from './HotelAvailabilityModal';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'accommodations', label: 'Accommodations' },
  { id: 'offers', label: 'Offers' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'faq', label: 'FAQs' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const;

type NavId = (typeof NAV_ITEMS)[number]['id'];

type HotelStickyHeaderProps = {
  isVisible: boolean;
  isScrollingUp: boolean;
  hotelName?: string;
  phone?: string;
};

export default function HotelStickyHeader({
  isVisible,
  isScrollingUp,
  hotelName = 'Metro Hotel',
  phone = '+977-9801234567',
}: HotelStickyHeaderProps) {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [activeId, setActiveId] = useState<NavId>('overview');

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as NavId);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: NavId) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveId(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div
        style={{ top: isScrollingUp ? '64px' : '0px' }}
        className={`fixed right-0 left-0 z-40 transform border-b border-slate-200 bg-white transition-all duration-300 ${
          isVisible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        {/* Top bar: hotel name + actions */}
        <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-2.5 sm:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-2 sm:px-6">
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-bold tracking-wider text-slate-900 uppercase sm:text-sm">
                {hotelName}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <div className="hidden items-center gap-4 text-xs font-medium text-slate-800 sm:flex">
                <button type="button" className="flex items-center gap-1 hover:underline">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="tracking-wider uppercase">Map</span>
                </button>
                <a href={`tel:${phone}`} className="flex items-center gap-1 hover:underline">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{phone}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsAvailabilityOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3.5 py-2 text-[10px] font-medium tracking-[0.14em] text-white uppercase transition hover:bg-slate-800 sm:px-5 sm:text-[11px]"
              >
                Check availability
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section navigation */}
        <nav aria-label="Hotel sections" className="bg-white px-4 sm:px-10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6">
            <ul className="flex items-center gap-5 overflow-x-auto py-0 sm:gap-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`relative py-3 text-[12px] tracking-wide whitespace-nowrap transition-colors sm:text-[13px] ${
                        isActive
                          ? 'font-medium text-slate-900'
                          : 'font-normal text-slate-700 hover:text-slate-800'
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute right-0 bottom-0 left-0 h-[3px] bg-slate-900 transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      <HotelAvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
        hotelName={hotelName}
      />
    </>
  );
}
