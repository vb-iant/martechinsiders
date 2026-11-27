import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LetsTalk } from "@/components/LetsTalk";
import { LatestInsights } from "@/components/blog/LatestInsights";

const TAG = "font-mono text-[0.82rem] tracking-wide text-accent inline-block mb-5";

function Eyebrow({ children, invisible = false }: { children: string; invisible?: boolean }) {
  return <span className={`${TAG}${invisible ? " invisible" : ""}`}>{children}</span>;
}

const services = [
  {
    title: "Market research",
    paragraphs: [
      "We have a passion for and curiosity about marketing technology, and the problems it solves — especially today, with AI in the mix.",
      "Our industry research explores the challenges facing customer experience leaders and marketers, and how the right technology can genuinely help.",
    ],
  },
  {
    title: "Client Services",
    paragraphs: [
      "Multiple CMO surveys tell us technology can swallow up 20–30% of a marketing budget — a fixed cost that eats into campaigns, events, and paid ads.",
      "Getting that spend right, and proving its return, is critical — and that's exactly where we help.",
    ],
  },
  {
    title: "Vendor advisory",
    paragraphs: [
      "We help innovative vendors understand buyer needs and the wider category, and sharpen how they tell their differentiated story.",
      "That's how they build real trust in the market — something features and functions can't do alone.",
    ],
  },
];

const team = [
  {
    initials: "AS",
    photo: "/team/alex-simonson.png",
    name: "Alex Simonson",
    badge: "SALES SAVANT",
    practice: ["Commercial Advisory", "Sales Leadership"],
    bio: "Experienced Martech sales leader, Alex leads our commercial operations and client engagements, providing our vendor clients with commercial clarity and sales leadership best practices.",
    quote:
      "\u201CA clear communicator, Alex has been extremely effective and has driven the sales and marketing team to a joined up well oiled machine.\u201D",
    cite: "\u2014 Matt Alridge, former CEO, Mango Solutions",
    linkedin: "https://www.linkedin.com/in/alex-simonson/",
  },
  {
    initials: "JF",
    photo: "/team/john-field.png",
    name: "John Field",
    badge: "MARTECH MAVEN",
    practice: ["Analyst Advisory", "Technology Selection"],
    bio: "Most recently a Gartner Senior Director Analyst, John is a true Martech Maven, with a two-decade career leading pre-sales, product marketing and product strategy for some of the best-known Martech vendors.",
    quote:
      "\u201CStarted at a point in our trajectory where we really needed someone to step in and contribute. And boy o' boy did you. I can't thank you enough for everything you've done for us.\u201D",
    cite: "\u2014 Justin Anovick, former Chief Product Officer, Optimizely",
    linkedin: "https://www.linkedin.com/in/martechmaven/",
  },
  {
    initials: "IT",
    photo: "/team/ian-truscott.png",
    name: "Ian Truscott",
    badge: "CANDID COUNSEL",
    practice: ["Marketing Strategy", "Content & Editorial"],
    bio: "From hands-on techie to 4x CMO, with agency and analyst stops along the way, Ian is a real Insider. He's faced the awkward questions from both sides: what buyers should ask, and how vendors should answer.",
    quote:
      "\u201CI recommend anyone looking for a voice of reason in the software technology world to seek Ian's input.\u201D",
    cite: "\u2014 Siobhan Fagan, Editor-in-Chief, Reworked",
    linkedin: "https://www.linkedin.com/in/iantruscott/",
  },
];

// The Insider Circle: advisors and partners outside the core team. Both kinds
// share one 96px-tall media slot so names and badges line up whatever the
// image shape — a square headshot sits like the team photos, a wide logo is
// contained within the slot, left-aligned.
const circle = [
  {
    kind: "ADVISOR",
    name: "Jeff Clark",
    media: { type: "photo" as const, src: "/circle/jeff-clark.png" },
    bio: "Independent marketing consultant with extensive experience running high-tech marketing teams and a former Research Director at Forrester Research.",
    link: { href: "https://www.linkedin.com/in/jjclark08/", label: "Connect on LinkedIn →" },
  },
  {
    kind: "PARTNER",
    name: "Torrie Communications",
    media: { type: "logo" as const, src: "/circle/torrie-communications.svg" },
    bio: "Led by experienced AR (Analyst Relations) expert, Beth Torrie, Torrie Communications helps organizations incrementally improve each interaction and meet or exceed their overall goals with industry analysts.",
    link: { href: "https://www.torriecommunications.com", label: "Visit torriecommunications.com →" },
  },
];

export default function Home() {
  return (
    <div className="font-manrope bg-paper text-void text-lg leading-[1.7]">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <Eyebrow>[ briefing ]</Eyebrow>
          <h1 className="font-display text-[2.3rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.8rem] lg:text-[3.4rem]">
            Because we&rsquo;ve been there, we are the Martech Insiders
          </h1>
        </div>
        <div>
          <Eyebrow invisible>[ briefing ]</Eyebrow>
          <p className="mb-5 text-[1.15rem] text-muted">
            Not career consultants or analysts who haven&rsquo;t sat in your seat — we are insiders from the
            marketing technology industry.
          </p>
          <p className="mb-5 text-[1.15rem] text-muted">
            We&rsquo;ve advised large corporations on their marketing technology choices as analysts and
            consultants. We&rsquo;ve been on the inside, helping drive sales, marketing, and product strategy
            for some of the best-known marketing technology vendors, and we&rsquo;ve been on the buyer side as
            marketing leaders.
          </p>
          <p className="mb-8 text-[1.15rem] text-muted">
            The combination creates a specialist consultancy that helps buyers and vendors make better
            decisions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-void px-[26px] py-4 font-mono text-[0.88rem] tracking-wide text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1180px] px-8 py-24">
          <Eyebrow>[ services ]</Eyebrow>
          <h2 className="font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">How We Help</h2>
          <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="border-t-[3px] border-accent pt-6">
                <h3 className="font-display text-[1.25rem] font-semibold mb-4">{s.title}</h3>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mb-3.5 text-[1.03rem] text-muted last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-11 inline-block bg-void px-[26px] py-4 font-mono text-[0.88rem] tracking-wide text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* INSIDER INSIGHTS — latest blog posts */}
      <LatestInsights />

      {/* ABOUT US / TEAM */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1180px] px-8 py-24">
          <Eyebrow>[ meet the team ]</Eyebrow>
          <h2 className="font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">Our Insiders</h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name}>
                <img
                  src={m.photo}
                  alt={m.name}
                  width={96}
                  height={96}
                  className="mb-[22px] h-[96px] w-[96px] border-[1.5px] border-accent object-cover"
                />
                <h3 className="font-display text-[1.2rem] font-semibold">{m.name}</h3>
                <span className="my-[10px] inline-block border-[1.5px] border-cobalt px-3 py-[5px] font-mono text-[0.78rem] tracking-wide text-cobalt">
                  {m.badge}
                </span>
                <p className="mb-3 font-mono text-[0.74rem] uppercase leading-[1.6] tracking-wide text-muted">
                  {m.practice.map((area, i) => (
                    <span key={area}>
                      {i > 0 && <span className="mx-1.5 text-accent">/</span>}
                      {area}
                    </span>
                  ))}
                </p>
                <p className="min-h-[150px] text-[1.02rem] text-muted">{m.bio}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-[22px] inline-block font-mono text-[0.78rem] tracking-wide text-cobalt hover:underline"
                >
                  Connect on LinkedIn →
                </a>
                <blockquote className="mb-2.5 border-l-2 border-hairline pl-4 text-[1.02rem] italic">
                  {m.quote}
                </blockquote>
                <cite className="block pl-[18px] font-mono text-[0.8rem] not-italic text-muted">
                  {m.cite}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDER CIRCLE — advisors & partners */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1180px] px-8 py-24">
          <Eyebrow>[ partners &amp; advisors ]</Eyebrow>
          <h2 className="font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">The Insider Circle</h2>
          <p className="mt-4 max-w-[640px] text-[1.05rem] text-muted">
            The advisors and partners we work alongside.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {circle.map((c) => (
              <div key={c.name} className="border-t-[3px] border-hairline pt-7">
                <div className="mb-[22px] flex h-[96px] items-center">
                  {c.media.type === "photo" ? (
                    <img
                      src={c.media.src}
                      alt={c.name}
                      width={96}
                      height={96}
                      className="h-[96px] w-[96px] border-[1.5px] border-accent object-cover"
                    />
                  ) : (
                    <img
                      src={c.media.src}
                      alt={`${c.name} logo`}
                      className="h-auto max-h-[60px] w-auto max-w-full object-contain object-left"
                    />
                  )}
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold">{c.name}</h3>
                <span className="my-[10px] inline-block border-[1.5px] border-cobalt px-3 py-[5px] font-mono text-[0.78rem] tracking-wide text-cobalt">
                  {c.kind}
                </span>
                <p className="mb-4 text-[1.02rem] text-muted">{c.bio}</p>
                <a
                  href={c.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[0.78rem] tracking-wide text-cobalt hover:underline"
                >
                  {c.link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <LetsTalk />

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
