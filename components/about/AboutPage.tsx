import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutMission from './AboutMission';
// import AboutTeam from './AboutTeam';
// import AboutValues from './AboutValues';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      {/* <AboutTeam />
      <AboutValues /> */}
    </main>
  );
}