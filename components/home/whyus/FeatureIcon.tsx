// src/components/home/why-us/FeatureIcon.tsx
'use client';

interface FeatureIconProps {
  name: 'pool' | 'interior' | 'living' | 'entertainment';
  className?: string;
}

export default function FeatureIcon({ name, className = 'w-10 h-10' }: FeatureIconProps) {
  switch (name) {
    case 'pool':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
          <path d="M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M2 17c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M6 14V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10" />
          <line x1="6" y1="7" x2="10" y2="7" />
          <line x1="6" y1="10" x2="10" y2="10" />
        </svg>
      );
    case 'interior':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
          <path d="M12 2v4M8 6h8M9 6l-2 5h10l-2-5M12 11v5" />
          <path d="M10 16h4M8 20h8" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      );
    case 'living':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
          <rect x="4" y="6" width="16" height="10" rx="1" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <path d="M7 16v3M17 16v3" />
        </svg>
      );
    case 'entertainment':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
          <path d="M6 3l6 4 6-4-6 17L6 3z" />
          <line x1="6" y1="3" x2="18" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}