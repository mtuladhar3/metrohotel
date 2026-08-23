// Site-wide navbar.
'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_MENU_ITEMS } from '@/data/menu';
import OffCanvasMenu from './OffCanvasMenu';
import NavMegaMenu from './NavMegaMenu';
import HotelsMegaMenu from './HotelsMegaMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMegaId, setOpenMegaId] = useState<string | null>(null);

  const activeMega = NAV_MENU_ITEMS.find((item) => item.id === openMegaId && item.subMenu);
  const hotelsMega = openMegaId === 'hotels' ? activeMega : null;
  const otherMega = openMegaId && openMegaId !== 'hotels' ? activeMega : null;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-navbar', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    const navAnim = gsap
      .from('.hero-navbar', {
        yPercent: -100,
        paused: true,
        duration: 0.35,
        ease: 'power2.out',
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self: { scroll: () => number; direction: number }) => {
        const currentScroll = self.scroll();
        const direction = self.direction;

        if (currentScroll <= 100) {
          navAnim.play();
        } else if (direction === 1) {
          setOpenMegaId(null);
          navAnim.reverse();
        } else if (direction === -1) {
          navAnim.play();
        }
      },
    });
  }, []);

  return (
    <>
      <nav className="hero-navbar fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 text-white backdrop-blur-md transition-all">
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="flex cursor-pointer items-center justify-center p-1.5 transition-opacity hover:opacity-75 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-[5px] sm:w-6">
              <span className="h-[1px] w-full bg-white" />
              <span className="h-[1px] w-full bg-white" />
              <span className="h-[1px] w-full bg-white" />
            </div>
          </button>

          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2 lg:min-w-[180px]"
            onClick={() => setOpenMegaId(null)}
          >
            <span className="text-base italic sm:text-xl">✦</span>
            <span className="text-lg tracking-tight sm:text-2xl lg:text-3xl">Metro Hotel</span>
          </Link>

          {/* Desktop nav links + scoped mega menus */}
          <div
            className="relative hidden lg:block"
            onMouseLeave={() => setOpenMegaId(null)}
          >
            <ul className="flex items-center gap-1 xl:gap-2">
              {NAV_MENU_ITEMS.map((item) => {
                const hasMega = Boolean(item.subMenu?.length);
                const isActive = openMegaId === item.id;

                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => {
                      if (hasMega) setOpenMegaId(item.id);
                      else setOpenMegaId(null);
                    }}
                  >
                    {hasMega ? (
                      <button
                        type="button"
                        aria-expanded={isActive}
                        onClick={() => setOpenMegaId(isActive ? null : item.id)}
                        className={`inline-flex items-center gap-1 px-3 py-2 text-[12px] uppercase tracking-[0.16em] transition-colors xl:px-3.5 ${
                          isActive ? 'text-amber-500' : 'text-white/85 hover:text-amber-500'
                        }`}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpenMegaId(null)}
                        className="inline-flex px-3 py-2 text-[12px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-amber-500 xl:px-3.5"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Keep both menus mounted so hover bridge (pt-2) stays inside this wrapper */}
            <HotelsMegaMenu
              key={hotelsMega ? 'hotels-open' : 'hotels-closed'}
              isOpen={Boolean(hotelsMega?.subMenu)}
              onClose={() => setOpenMegaId(null)}
              items={
                hotelsMega?.subMenu ??
                NAV_MENU_ITEMS.find((item) => item.id === 'hotels')?.subMenu ??
                []
              }
              viewAllHref="/hotels"
            />

            <NavMegaMenu
              isOpen={Boolean(otherMega?.subMenu)}
              onClose={() => setOpenMegaId(null)}
              items={otherMega?.subMenu ?? []}
              heading={otherMega?.title ?? ''}
              viewAllHref={otherMega?.href ?? '/'}
              viewAllLabel={otherMega ? `All ${otherMega.title}` : 'View all'}
            />
          </div>

          {/* CTA */}
          <div className="flex min-w-0 items-center justify-end gap-3 sm:gap-6 lg:min-w-[180px]">
            <Link
              href="/hotels"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-white/15 px-3.5 py-2 text-[11px] uppercase tracking-widest backdrop-blur-md transition-all hover:bg-white/25 sm:px-6 sm:py-2.5 sm:text-xs"
            >
              <span>Book Now</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </nav>

      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
