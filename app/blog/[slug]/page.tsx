import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react"
import { BLOG_POSTS_DATA } from "@/data/blog"

type PageProps = {
  params: Promise<{ slug: string }>
}

const ARTICLE_CONTENT = {
  "garden-open-kitchen": {
    eyebrow: "Dining",
    readingTime: "5 min read",
    heading: "A table shaped by the garden",
    quote:
      "The most memorable meals make you feel connected to the place where every ingredient began.",
    listTitle: "What makes the open kitchen special",
    list: [
      "Seasonal produce selected daily with local growers",
      "A view of each dish as it comes together at the pass",
      "Menus that change dynamically with garden harvests",
    ],
    steps: [
      "Arrive early for an aperitif in the garden terrace.",
      "Choose a table near the open kitchen pass.",
      "Let the team recommend a seasonal wine pairing.",
    ],
  },
  "live-jazz-nights": {
    eyebrow: "Evenings",
    readingTime: "4 min read",
    heading: "When the dining room finds its rhythm",
    quote:
      "A good live set gives the room a pulse without ever asking guests to stop their conversation.",
    listTitle: "The jazz-night ritual",
    list: [
      "An intimate set list curated for the acoustic hall",
      "A relaxed dinner service gracefully paced around the music",
      "Classic cocktails prepared at the bar",
    ],
    steps: [
      "Reserve a dinner table for the first set.",
      "Start with a signature house cocktail.",
      "Stay for the final late-night encore and dessert.",
    ],
  },
  "sunset-rooftop-dining": {
    eyebrow: "Rooftop",
    readingTime: "6 min read",
    heading: "The city at its most generous hour",
    quote:
      "Sunset is a reminder to slow down long enough to notice where you are.",
    listTitle: "A rooftop evening, considered",
    list: [
      "Uninterrupted skyline views from every table",
      "Seasonal plates designed for sharing",
      "Cocktails that follow the light from day into twilight",
    ],
    steps: [
      "Book an hour before golden hour.",
      "Order a selection of shared first courses.",
      "Settle in for dessert after the city lights come on.",
    ],
  },
} as const

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS_DATA.find((item) => item.slug === slug)

  return post
    ? { title: `${post.title} | Metro Hotel Journal`, description: post.description }
    : { title: "Article not found | Metro Hotel" }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS_DATA.find((item) => item.slug === slug)
  const content = ARTICLE_CONTENT[slug as keyof typeof ARTICLE_CONTENT]

  if (!post || !content) {
    notFound()
  }

  // Filter out the active post to create the recent sidebar articles list
  const recentPosts = BLOG_POSTS_DATA.filter((item) => item.slug !== slug).slice(0, 4)

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Full-Bleed Hero Image Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[650px] w-full flex flex-col justify-end p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-black/20" />
        </div>


        <div className="relative z-10 max-w-7xl w-full px-6 sm:px-10 lg:px-14 mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-amber-300">
            <span>{content.eyebrow}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">{content.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] max-w-4xl">
            {post.title}
          </h1>

          <p className="text-stone-200 text-base sm:text-lg font-light leading-normal max-w-4xl pt-1">
            {post.description}
          </p>
        </div>
      </section>

      {/* 2. Main Layout Container with Article & Recent Posts Sidebar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Intro Paragraphs */}
            <section className="space-y-4 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              <p>
                At Metro Hotel, every gathering begins with a sense of place.
                The details are never an afterthought; they are the quiet
                gestures that turn a visit into a story worth retelling.
              </p>
              <p>
                Our team creates room for the experience to unfold naturally,
                pairing thoughtful service with an atmosphere that feels
                distinctly local. It is hospitality with enough ease to let the
                moment take the lead.
              </p>
            </section>

            {/* In-Content Image Showcase */}
            <div className="space-y-2 my-6">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              <p className="text-xs font-serif italic text-stone-500 text-right pr-1">
                A closer look at the atmosphere inside Metro Hotel.
              </p>
            </div>

            {/* Highlight Section */}
            <section className="pt-6 border-t border-stone-200/70 space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-amber-800 uppercase">
                The Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-950 leading-tight">
                {content.heading}
              </h2>
              <p className="text-stone-600 text-base font-light leading-relaxed pt-1">
                The best hotel moments are often unhurried. They leave space for a conversation to stretch, for a familiar flavour to become a new favourite, and for the setting to become part of the occasion.
              </p>
            </section>

            {/* Pull Quote */}
            <blockquote className="my-6 py-4 px-6 border-l-2 border-amber-800 text-lg sm:text-xl font-serif italic text-stone-900 leading-snug">
              &ldquo;{content.quote}&rdquo;
            </blockquote>

            {/* Clean Standard List with Lead Icons */}
            <section className="pt-6 border-t border-stone-200/70 space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-amber-800 uppercase">
                Details
              </span>
              <h2 className="text-2xl font-serif text-stone-950">
                {content.listTitle}
              </h2>

              <ul className="space-y-2.5 pt-1">
                {content.list.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700 text-base font-light leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-1 stroke-[1.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Clean Step-by-Step Guide with Icons */}
            <section className="pt-6 border-t border-stone-200/70 space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-amber-800 uppercase">
                Your Evening
              </span>
              <h2 className="text-2xl font-serif text-stone-950">
                Make an evening of it
              </h2>

              <ul className="space-y-2.5 pt-1">
                {content.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-700 text-base font-light leading-normal">
                    <Sparkles className="w-4 h-4 text-amber-800 shrink-0 mt-1 stroke-[1.5]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Compact Article End Footer */}
            <footer className="pt-8 border-t border-stone-200 flex items-center justify-between">
              <p className="text-sm font-serif italic text-stone-600">
                Metro Hotel Journal
              </p>
              <Link
                href="/blog"
                className="text-xs font-semibold tracking-widest uppercase text-amber-900 hover:text-stone-950 transition-colors"
              >
                All Stories →
              </Link>
            </footer>

          </article>

          {/* Right Sidebar: Recent Articles */}
          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-stone-200/80 pt-10 lg:pt-0 lg:pl-10">
            <div className="sticky top-10 space-y-6">
              
              <div className="border-b border-stone-200/80 pb-3">
                <h3 className="text-xs font-bold tracking-[0.2em] text-amber-900 uppercase">
                  Recent Stories
                </h3>
              </div>

              <div className="space-y-5">
                {recentPosts.map((recentPost) => {
                  const tag = "readTime" in recentPost 
                    ? (recentPost as Record<string, unknown>).readTime as string
                    : "category" in recentPost
                    ? (recentPost as Record<string, unknown>).category as string
                    : "Story"

                  return (
                    <Link
                      key={recentPost.slug}
                      href={`/blog/${recentPost.slug}`}
                      className="group flex items-start gap-4 p-2 -mx-2 rounded-xl hover:bg-stone-100/60 transition-colors"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-200">
                        <Image
                          src={recentPost.image}
                          alt={recentPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>

                      <div className="space-y-1 my-auto">
                        <span className="text-[10px] font-medium tracking-widest uppercase text-amber-800">
                          {tag}
                        </span>
                        <h4 className="text-sm font-serif text-stone-900 leading-snug group-hover:text-amber-900 transition-colors line-clamp-2">
                          {recentPost.title}
                        </h4>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Newsletter Card */}
              <div className="p-5 rounded-2xl bg-amber-900/5 border border-amber-900/10 space-y-2 mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Stay Informed
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Subscribe to receive curated hotel stories and seasonal dining menu previews.
                </p>
                <Link
                  href="/blog"
                  className="inline-block text-[11px] font-semibold uppercase tracking-widest text-amber-900 hover:text-stone-950 pt-1"
                >
                  Join Newsletter →
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>

    </main>
  )
}