// Homepage "Insider Insights" panel — a simplified take on the blog index
// (components/blog/BlogIndexContent.tsx + PostCard.tsx): the three latest
// posts as title, excerpt and author only (no tag pill, no date), with a
// link through to /blog. Server component: reads content/blog at build
// time, so a new post appears here on the next deploy.

import Link from "next/link";
import { getLocalPosts } from "@/lib/blog/local-content";
import { AuthorByline } from "@/components/blog/AuthorByline";

const BORDER = ["border-t-accent", "border-t-cobalt", "border-t-void"];

export function LatestInsights({ count = 3 }: { count?: number }) {
  const posts = getLocalPosts().slice(0, count);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-[1180px] px-8 py-24">
        <span className="mb-5 inline-block font-mono text-[0.82rem] tracking-wide text-accent">
          [ ideas ]
        </span>
        <h2 className="font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">Insider Insights</h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post, i) => (
            <div key={post.slug} className={`flex flex-col border-t-4 pt-6 ${BORDER[i % BORDER.length]}`}>
              <h3 className="mb-3 font-display text-[1.2rem] font-semibold leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-cobalt">
                  {post.title}
                </Link>
              </h3>
              {post.excerpt && (
                <p className="mb-5 text-[1.02rem] leading-relaxed text-muted">{post.excerpt}</p>
              )}
              <div className="mt-auto font-mono text-[0.78rem] text-muted">
                <AuthorByline author={post.author} />
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-11 inline-block bg-void px-[26px] py-4 font-mono text-[0.88rem] tracking-wide text-paper transition-colors hover:bg-accent"
        >
          Read all insights
        </Link>
      </div>
    </section>
  );
}
