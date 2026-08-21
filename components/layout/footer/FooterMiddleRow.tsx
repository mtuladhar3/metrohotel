// Footer middle row with address and CTA.
'use client';

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { FOOTER_INFO } from '@/data/footer';

export default function FooterMiddleRow() {
  return (
    <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-b border-white/10 footer-middle-anim">
      {/* Address Block */}
      <div className="flex items-start gap-3 text-white-300 text-xs sm:text-sm font-light">
        <MapPin className="w-4 h-4 text-white-400 shrink-0 mt-0.5" />
        <div className="flex flex-col text-left">
          <span>{FOOTER_INFO.address}</span>
          <span>{FOOTER_INFO.city}</span>
        </div>
      </div>

      {/* Book Button */}
      <Link
        href={FOOTER_INFO.ctaHref}
        className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 hover:border-white text-white text-xs sm:text-sm font-light tracking-wide transition-all duration-300 bg-black/30 hover:bg-white hover:text-slate-900"
      >
        <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
        <span>{FOOTER_INFO.ctaText}</span>
      </Link>
    </div>
  );
}