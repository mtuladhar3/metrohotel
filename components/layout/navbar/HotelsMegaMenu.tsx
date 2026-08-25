// Hotels mega menu: name list on the left, preview image on the right.
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { SubMenuItem } from '@/data/menu';

type HotelsMegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: SubMenuItem[];
  viewAllHref?: string;
};

export default function HotelsMegaMenu({
  isOpen,
  onClose,
  items,
  viewAllHref = '/hotels',
}: HotelsMegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  if (!items.length) return null;

  return (
    <div
      className={`absolute top-full left-0 z-40 w-full pt-2 transition duration-300 ${
        isOpen
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="h-[380px] overflow-hidden rounded-b-xl border border-white/10 bg-[#111111] text-white shadow-2xl">
        <div className="grid h-full grid-cols-[minmax(220px,260px)_1fr]">
          {/* Left: hotel names */}
          <div className="flex h-full flex-col justify-between border-r border-white/10 bg-[#161616] px-6 py-8">
            <ul className="space-y-0.5">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`group flex items-center justify-between py-2.5 text-base transition-colors ${
                        isActive
                          ? 'font-medium text-amber-500'
                          : 'font-normal text-white/70 hover:text-amber-500'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0 opacity-100 text-amber-500'
                            : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
  href={viewAllHref}
  onClick={onClose}
  className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500"
>
  View all hotels
</Link>
          </div>

          {/* Right: image preview */}
          <div className="relative h-full overflow-hidden bg-slate-900">
            {items.map((item, index) => (
              <div
                key={item.href}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: item.image ? `url(${item.image})` : undefined,
                }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />

            {active ? (
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="max-w-md text-2xl leading-tight text-white drop-shadow-md sm:text-3xl">
                  {active.title}
                </h3>
                {active.description ? (
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 drop-shadow-sm">
                    {active.description}
                  </p>
                ) : null}
                <Link
                  href={active.href}
                  onClick={onClose}
                  className="group mt-6 inline-flex w-fit items-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:text-amber-500"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}