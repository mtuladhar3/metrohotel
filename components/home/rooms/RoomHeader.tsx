// src/components/rooms/RoomHeader.tsx
'use client';

export default function RoomHeader() {
  return (
    <div className="room-header text-center flex flex-col items-center mb-10 select-none">
      {/* Monospace Subtitle Badge */}
      <span className="inline-block px-3 py-1 rounded-full bg-[#f4f4f3] border border-black/5 text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase mb-4 shadow-2xs">
        Reef Dreams In Motion
      </span>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
        <span>Our Lagoon </span>
        <span className="font-serif italic text-slate-400 font-normal">
          Collection
        </span>
      </h2>
    </div>
  );
}