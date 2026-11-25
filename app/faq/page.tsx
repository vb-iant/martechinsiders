import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Martech Insiders",
  description:
    "Answers to common questions about Martech Insiders: who we are, how we help martech vendors and buyers, how we stay independent, and how Insider Credits pricing works.",
  path: "/faq",
  image: "/opengraph-image",
});

/*
 * Answer blocks are plain strings so the same copy feeds both the page and
 * the FAQPage JSON-LD. Links use markdown syntax: [text](url).
 */
type Block = string | { list: string[] };
type QA = { q: string; a: Block[] };
type Section = { title: string; items: QA[] };

const EMAIL = "[hello@martechinsiders.com](mailto:hello@martechinsiders.com)";

const FAQ: Section[] = [
  {
    title: "About Martech Insiders",
    items: [
      {
        q: "What is Martech Insiders?",
        a: [
          "Martech Insiders is an independent analyst and advisory firm for marketing technology. We help martech vendors understand buyer needs and their category, and sharpen how they tell their differentiated story. We do this through independent research, defined advisory services, and bespoke engagements. We also help organizations evaluate, choose, and audit their marketing technology.",
        ],
      },
      {
        q: "Who do you work with?",
        a: [
          "We work with two groups. Martech vendors of any size, from product marketing to the leadership team, use us for advisory, research, and analyst positioning. Organizations buying or running marketing technology use us to evaluate, choose, and audit their platforms.",
        ],
      },
      {
        q: "Who is behind Martech Insiders?",
        a: [
          "Martech Insiders is run by three people who have spent their careers inside martech vendors. John Field most recently served as a Gartner Senior Director Analyst, after two decades leading pre-sales, product marketing, and product strategy at well-known martech vendors. Ian Truscott has been a CMO four times, with leadership roles at Alterian, SDL (now RWS), censhare, and Spotler, plus agency and analyst roles along the way. Alex Simonson is an experienced martech sales leader who runs our commercial operations and client engagements.",
        ],
      },
      {
        q: "Why does martech need a new kind of analyst firm?",
        a: [
          "Traditional analyst coverage of martech is thinning just as the market changes faster. Gartner has scaled back its web content management and DXP coverage, and the largest firms' evaluations tend to leave out smaller vendors. That leaves many capable vendors without credible third-party perspective, and buyers with fewer independent voices to check vendor claims against. Martech Insiders offers named, accountable judgment from people who have done the job.",
        ],
      },
      {
        q: "Which areas of martech do you cover?",
        a: [
          "We cover marketing technology broadly, with our deepest expertise in content management systems (CMS) and digital experience platforms (DXP), where our team has spent most of its career.",
        ],
      },
      {
        q: "Why does Martech Insiders specialize in CMS and DXP?",
        a: [
          "CMS and DXP is where our team has the deepest experience and where independent analyst coverage has thinned the most. John covered web content management and DXP as a Gartner analyst, and between us we have worked across the CMS and DXP vendor landscape for more than two decades.",
        ],
      },
    ],
  },
  {
    title: "For martech vendors",
    items: [
      {
        q: "How does Martech Insiders help martech vendors?",
        a: [
          "We give vendor leadership and product marketing teams an insider's view of their market, buyers, and competitors, with candid recommendations. Our advisory services include:",
          {
            list: [
              "Advisory workshops, half or full day, with one of our analysts",
              "Insider Inquiries: a two-hour call, or written feedback on a topic you brief us on",
              "Reviews of your analyst briefings and product demos",
              "Packaging and pricing advisory",
              "Category Insider Reports and competitive analysis",
              "Win/loss analysis, including interviews with prospects and your team",
            ],
          },
        ],
      },
      {
        q: "What is sponsored research?",
        a: [
          "Sponsored research is content a vendor funds and we research and write: whitepapers, briefs, short perspectives, case studies, and live sessions such as webinars, podcasts, and keynotes. We always clearly label sponsored content and the vendor's perspective.",
        ],
      },
      {
        q: "Can you help us prepare for Gartner Magic Quadrants and Forrester Waves?",
        a: [
          "Yes. Our analyst positioning work prepares vendors for evaluations such as Magic Quadrants and Waves, from briefing strategy to submissions. We can also review an analyst briefing before you give it. Our team includes a former Gartner analyst, so you get the view from the other side of the table.",
        ],
      },
      {
        q: "Do you work with smaller vendors?",
        a: [
          "Yes. We work with martech vendors of any size, including the many that fall below the revenue thresholds of the large analyst firms. Our flexible Insider Credits model is particularly useful for smaller vendors whose needs change over the course of an engagement.",
        ],
      },
      {
        q: "Can vendors brief Martech Insiders for free?",
        a: [
          `Yes. Every vendor relevant to our coverage can have one complimentary briefing per calendar quarter. We see vendors as an important source of market intelligence. Email ${EMAIL} to book yours.`,
        ],
      },
    ],
  },
  {
    title: "For organizations buying or using martech",
    items: [
      {
        q: "How can Martech Insiders help organizations with their marketing technology?",
        a: [
          "We give marketing and digital leaders independent advice on choosing, auditing, and getting more from their martech. We have spent our careers on the vendor side, so we know how platforms are sold, where the gaps tend to be, and which questions to ask.",
        ],
      },
      {
        q: "What is a martech audit?",
        a: [
          "A martech audit is an independent review of the marketing technology you already have. We look at:",
          {
            list: [
              "Whether each platform still fits your goals and ways of working",
              "Where tools overlap, sit unused, or don't connect",
              "What you pay against what you use, ahead of renewals",
              "Whether to optimize, consolidate, replace, or renegotiate",
            ],
          },
        ],
      },
      {
        q: "When does a martech audit make sense?",
        a: [
          "Common triggers are an upcoming renewal, a new marketing or digital leader, a merger, rising costs, or a stack that has grown tool by tool without a plan. It is also worth doing before any major re-platforming decision.",
        ],
      },
      {
        q: "Can you help us choose a new marketing platform?",
        a: [
          "Yes. We help you define what you need, build a shortlist that fits, and test vendor claims through structured demos and reference checks. We can support the whole selection or give a second opinion on a decision you are close to making. This includes CMS and DXP selections, where our team has the deepest experience.",
        ],
      },
      {
        q: "Why use an independent analyst rather than a vendor or implementation partner?",
        a: [
          "Vendors and implementation partners have a stake in which platform you choose and how much work it needs. We don't sell software or implementation services, so our only interest is that you make the right decision.",
        ],
      },
    ],
  },
  {
    title: "Independence",
    items: [
      {
        q: "How do you stay independent when you work with both vendors and buyers?",
        a: [
          "We keep vendor work and buyer advisory structurally separate. We always clearly label sponsored content and vendor perspectives, and buying our services doesn't influence our assessment of a category.",
          "We don't accept payment from vendors in connection with a client's platform decision, and we are transparent with buyers about our vendor relationships.",
        ],
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "How does pricing work?",
        a: [
          "We price in Insider Credits rather than rigid statements of work. You buy a block of credits and spend them on whichever engagements fit the challenge in front of you, quarter to quarter. Larger commitments get better package rates. Contact us for a rate card.",
        ],
      },
      {
        q: "What if what we need isn't on the menu?",
        a: [
          "We run bespoke engagements, such as launch support, partner program strategy, and custom research. We scope the work with you, agree a credit estimate up front and draw it down from your Insider Credits as we go.",
        ],
      },
      {
        q: "Can you work with us if you already have an analyst or consultancy?",
        a: [
          "Yes. Many vendors already work with Gartner, Forrester, or other analyst firms, and we complement those relationships, for example by helping you prepare for briefings and evaluations so you get more from them. Buyers often already have an agency or implementation partner, and we act as an independent check alongside them.",
        ],
      },
      {
        q: "How do we get started?",
        a: [
          `Get in touch through [martechinsiders.com/contact](/contact) or email ${EMAIL}. A complimentary briefing is a good first step.`,
        ],
      },
    ],
  },
];

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of Array.from(text.matchAll(LINK_RE))) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <a key={i} href={m[2]} className="text-cobalt hover:underline">
        {m[1]}
      </a>
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function toPlain(blocks: Block[]): string {
  return blocks
    .map((b) => (typeof b === "string" ? b.replace(LINK_RE, "$1") : b.list.map((l) => `• ${l}`).join("\n")))
    .join("\n\n");
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((s) =>
    s.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: toPlain(item.a) },
    }))
  ),
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function FAQPage() {
  return (
    <div className="font-manrope bg-paper text-void text-lg leading-[1.7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <section className="mx-auto max-w-[820px] px-8 py-24">
        <span className="font-mono text-[0.82rem] tracking-wide text-accent inline-block mb-5">[ faq ]</span>
        <h1 className="font-display text-[2.1rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.5rem]">
          Frequently asked questions
        </h1>

        <nav aria-label="FAQ sections" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.88rem]">
          {FAQ.map((s) => (
            <a key={s.title} href={`#${slug(s.title)}`} className="text-cobalt hover:underline">
              {s.title}
            </a>
          ))}
        </nav>

        {FAQ.map((section) => (
          <div key={section.title} id={slug(section.title)} className="scroll-mt-24">
            <h2 className="mt-16 mb-2 border-b border-hairline pb-3 font-display text-[1.6rem] font-semibold">
              {section.title}
            </h2>
            {section.items.map((item) => (
              <Fragment key={item.q}>
                <h3 className="mt-10 mb-3 font-display text-[1.2rem] font-semibold">{item.q}</h3>
                {item.a.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i} className="mb-4 text-[1.05rem] text-muted">
                      {renderInline(block)}
                    </p>
                  ) : (
                    <ul
                      key={i}
                      className="mb-4 list-disc space-y-2 pl-6 text-[1.05rem] text-muted marker:text-accent"
                    >
                      {block.list.map((li) => (
                        <li key={li}>{renderInline(li)}</li>
                      ))}
                    </ul>
                  )
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
