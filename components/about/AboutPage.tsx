import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutMission from './AboutMission';
// import AboutTeam from './AboutTeam';
// import AboutValues from './AboutValues';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import { BREADCRUMB_DATA } from '@/data/breadcrumbs';

export default function AboutPage() {
  const data = BREADCRUMB_DATA.about;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <BreadcrumbSection
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        bgImage={data.bgImage}
      />
      <AboutStory />
      <AboutMission />
      {/* <AboutTeam />
      <AboutValues /> */}
    </main>
  );
}