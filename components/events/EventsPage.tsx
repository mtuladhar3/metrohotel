import { EVENTS_DATA } from '@/data/events';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import EventCard from '@/components/events/EventCard';

export default function EventsPage() {
  return (
    <main className="bg-[#fff] text-slate-900">
      <BreadcrumbSection
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
        ]}
        eyebrow="Metro Event Collection"
        title="Curated Experiences & Gatherings"
        description="Discover our upcoming galas, private banquets, and exclusive cultural events."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
            Our Events
          </p>
          <h2 className="text-4xl sm:text-5xl">
            An experience for every occasion
          </h2>
        </div>

        {/* 3 in a row grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS_DATA.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              image={event.image}
              href={event.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
