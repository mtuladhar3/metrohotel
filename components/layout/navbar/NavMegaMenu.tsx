// Desktop mega menu for nav items with image submenus.
'use client';

import Link from 'next/link';
import type { SubMenuItem } from '@/data/menu';

type NavMegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: SubMenuItem[];
  heading: string;
  viewAllHref: string;
  viewAllLabel?: string;
};

export default function NavMegaMenu({
  isOpen,
  onClose,
  items,
  heading,
  viewAllHref,
  viewAllLabel = 'View all',
}: NavMegaMenuProps) {
  if (!items.length) return null;

  return (
    <div
      className={`absolute top-full left-0 z-40 w-full pt-2 transition duration-300 ${
        isOpen
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="flex h-[380px] flex-col overflow-hidden rounded-b-xl border border-white/10 bg-[#111111] text-white shadow-2xl">
        <div className="flex h-full flex-col px-5 py-6">
          <div className="mb-5 flex shrink-0 items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500">
                Explore
              </p>
              <h3 className="mt-1 text-xl text-white">{heading}</h3>
            </div>
            <Link
              href={viewAllHref}
              onClick={onClose}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-amber-500"
            >
              {viewAllLabel}
            </Link>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-3 gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-slate-900 shadow-lg transition-all duration-300 hover:border-white/40"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-800" />
                )}

                {/* Bottom → top gradient for title readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <h4 className="text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-white drop-shadow-md transition-colors group-hover:text-amber-500">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
