// Shared footer links and site info.
export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com' },
];

export const FOOTER_INFO = {
  address: '66 broklyn golden street,',
  city: 'New York 10030',
  copyright: 'Copyright © 2026 Hotel Metro. All Rights Reserved. Developed By Webtech Nepal.',
  ctaText: 'Book Your Stay',
  ctaHref: '/reserve',
};