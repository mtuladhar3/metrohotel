import { notFound, redirect } from 'next/navigation';

const legacyEventSlugs: Record<string, string> = {
  corporate: 'meetings-conferences',
  weddings: 'weddings',
  'private-dining': 'celebrations',
  'cocktail-parties': 'cocktail-parties',
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = legacyEventSlugs[slug];

  if (!canonicalSlug) {
    notFound();
  }

  redirect(`/meetings-events/${canonicalSlug}`);
}
