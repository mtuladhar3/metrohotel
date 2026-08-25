// src/components/home/branches/BranchCard.tsx
import Link from 'next/link';
import type { Branch } from '@/data/branches';

interface BranchCardProps {
  branch: Branch;
}

export default function BranchCard({ branch }: BranchCardProps) {
  return (
    <Link href={`/branches/${branch.id}`} className="block h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-2">
        <div
          className="aspect-[4/3] w-full shrink-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${branch.image})` }}
        />
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            {branch.location && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                {branch.location}
              </p>
            )}
            <h3 className="text-xl font-medium text-slate-900 group-hover:text-amber-900 transition-colors">
              {branch.name}
            </h3>
          </div>
          {branch.description && (
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {branch.description}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}