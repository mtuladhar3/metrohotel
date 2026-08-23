import BlogCard from '@/components/home/blog/BlogCard';
import BlogHeader from '@/components/home/blog/BlogHeader';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import { BLOG_POSTS_DATA } from '@/data/blog';

export default function Page() {
  return (
    <main className="bg-[#f5f5f3] text-slate-900">
      <BreadcrumbSection
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
        eyebrow="Metro Journal"
        title="Stories for Your Next Stay"
        description="Explore the places, flavours, and experiences that make every Metro Hotel stay memorable."
      />

      <section className="w-full px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <BlogHeader />
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS_DATA.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
