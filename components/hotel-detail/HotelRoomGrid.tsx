import type { HotelRoom } from '@/components/hotel-detail/hotelData';
import HotelRoomCard from './HotelRoomCard';

type HotelRoomGridProps = {
  rooms: HotelRoom[];
};

export default function HotelRoomGrid({ rooms }: HotelRoomGridProps) {
  return (
    <section id="accommodations" className="scroll-mt-36 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">Rooms</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Spaces made for unhurried stays</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Each room is composed for comfort, quiet, and a clear sense of place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {rooms.map((room) => (
            <HotelRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
