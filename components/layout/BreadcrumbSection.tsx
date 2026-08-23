import Link from 'next/link';
import VideoBackground from '@/components/home/cta/VideoBackground';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbSectionProps = {
  /** Small uppercase label above the title */
  eyebrow?: string;
  title: string;
  /** Supporting text under the title */
  description?: string;
  /** Trail shown above the eyebrow, e.g. Home / Hotels */
  crumbs?: BreadcrumbItem[];
};

export default function BreadcrumbSection({
  eyebrow,
  title,
  description,
  crumbs,
}: BreadcrumbSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-600 px-6 pt-24 pb-32 text-center text-white sm:px-10 sm:pt-32 sm:pb-40">
      <VideoBackground />

      <div className="relative z-10 mx-auto max-w-3xl pt-10">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="transition-colors hover:text-amber-500">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-amber-500' : undefined}>{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-500">{eyebrow}</p>
        ) : null}

        <h1 className={`text-5xl leading-tight sm:text-7xl ${eyebrow || crumbs ? 'mt-4' : ''}`}>
          {title}
        </h1>

        {description ? (
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {/* Flush Bottom White Wave Cutout */}
      <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-28 text-[#ff] fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 L1440,120 L1440,40 C960,120 480,120 0,40 Z"></path>
        </svg>
      </div>
    </section>
  );
}