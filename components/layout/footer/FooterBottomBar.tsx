// Footer bottom bar with nav links and copyright.
'use client';

import Link from 'next/link';
import { FOOTER_NAV_LINKS, FOOTER_INFO } from '@/data/footer';

export default function FooterBottomBar() {
  return (
    <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 text-white-400 text-xs sm:text-sm font-light footer-bottom-anim">
      {/* Copyright Line */}
      <p className="text-center lg:text-left">{FOOTER_INFO.copyright}</p>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6 sm:gap-8">
        {FOOTER_NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-5 text-slate-300">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.78 5.65c1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.23 0-1.62.76-1.62 1.54V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}