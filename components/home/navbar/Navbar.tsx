// src/components/home/navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import OffCanvasMenu from './OffCanvasMenu';
import BranchesMegaMenu from './BranchesMegaMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-navbar', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    const navAnim = gsap.from('.hero-navbar', {
      yPercent: -100,
      paused: true,
      duration: 0.35,
      ease: 'power2.out',
    }).progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self: any) => {
        const currentScroll = self.scroll();
        const direction = self.direction;

        if (currentScroll <= 100) {
          navAnim.play();
        } else if (direction === 1) {
          setIsBranchesOpen(false);
          navAnim.reverse();
        } else if (direction === -1) {
          navAnim.play();
        }
      },
    });
  }, []);

  return (
    <>
      <nav className="hero-navbar fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 text-white font-light border-b border-white/10 backdrop-blur-md bg-black/20 transition-all">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
          <span className="text-base sm:text-xl italic font-serif">✦</span>
          <span className="text-lg sm:text-2xl lg:text-3xl font-serif tracking-tight font-normal">
            Metro Hotel
          </span>
        </div>

        {/* Right Actions: Book Now + Hamburger Menu */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* CTA Button */}
          <button className="flex items-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition-all text-[11px] sm:text-xs tracking-widest uppercase whitespace-nowrap">
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center p-1.5 hover:opacity-75 transition-opacity cursor-pointer"
          >
            <div className="flex flex-col gap-[5px] w-5 sm:w-6">
              <span className="w-full h-[1px] bg-white"></span>
              <span className="w-full h-[1px] bg-white"></span>
              <span className="w-full h-[1px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* Branches Mega Menu Component */}
        <BranchesMegaMenu
          isOpen={isBranchesOpen}
          onClose={() => setIsBranchesOpen(false)}
        />
      </nav>

      {/* OffCanvas Overlay Component */}
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}