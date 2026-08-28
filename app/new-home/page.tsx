"use client";

import { useState, type FormEvent } from "react";
import Script from "next/script";

const GTM_ID = "GTM-KV2KL3XD";

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
    name: "Alex Simonson",
    badge: "SALES SAVANT",
    bio: "Experienced Martech sales leader, Alex leads our commercial operations and client engagements, providing our vendor clients with commercial clarity and sales leadership best practices.",
    quote:
      "\u201CA clear communicator, Alex has been extremely effective and has driven the sales and marketing team to a joined up well oiled machine.\u201D",
    cite: "\u2014 Matt Alridge, former CEO, Mango Solutions",
    linkedin: "https://www.linkedin.com/in/alex-simonson/",
  },
  {
    initials: "JF",
    name: "John Field",
    badge: "MARTECH MAVEN",
    bio: "Most recently a Gartner Senior Director Analyst, John is a true Martech Maven, with a two-decade career leading pre-sales, product marketing and product strategy for some of the best-known Martech vendors.",
    quote:
      "\u201CStarted at a point in our trajectory where we really needed someone to step in and contribute. And boy o' boy did you. I can't thank you enough for everything you've done for us.\u201D",
    cite: "\u2014 Justin Anovick, former Chief Product Officer, Optimizely",
    linkedin: "https://www.linkedin.com/in/martechmaven/",
  },
  {
    initials: "IT",
    name: "Ian Truscott",
    badge: "MARKETING CHAP",
    bio: "Ian has done the full martech tour. As a 4x CMO, he understands the buy side, his agency and analyst experience makes him a trusted advisor, and his passion for software started early in his career as a hands-on techie.",
    quote:
      "\u201CI recommend anyone looking for a voice of reason in the software technology world to seek Ian's input.\u201D",
    cite: "\u2014 Siobhan Fagan, Editor-in-Chief, Reworked",
    linkedin: "https://www.linkedin.com/in/iantruscott/",
  },
];

export default function NewHome() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms honeypot: if this hidden field is filled in, it's a bot —
    // let their API silently swallow it rather than special-casing it here.
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager */}

      <div className="font-manrope bg-paper text-void text-lg leading-[1.7]">
      {/* NAV */}
      <header className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[22px]">
          <div className="font-display text-[1.1rem] font-bold">
            Martech Insiders<span className="text-accent">™</span>
            <span aria-hidden="true" className="cursor-blink ml-1 text-accent font-medium">
              |
            </span>
          </div>
          <a
            href="#contact"
            className="border-[1.5px] border-void px-[18px] py-[11px] font-mono text-[0.8rem] tracking-wide transition-colors hover:border-accent hover:bg-accent hover:text-paper"
          >
            GET IN TOUCH
          </a>
        </div>
      </header>

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
            href="#contact"
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
            href="#contact"
            className="mt-11 inline-block bg-void px-[26px] py-4 font-mono text-[0.88rem] tracking-wide text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ABOUT US / TEAM */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1180px] px-8 py-24">
          <Eyebrow>[ about us ]</Eyebrow>
          <h2 className="font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">Meet the Team</h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name}>
                <div className="mb-[22px] flex h-[68px] w-[68px] items-center justify-center border-[1.5px] border-accent font-mono text-[1.05rem] text-accent">
                  {m.initials}
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold">{m.name}</h3>
                <span className="my-[10px] inline-block border-[1.5px] border-cobalt px-3 py-[5px] font-mono text-[0.78rem] tracking-wide text-cobalt">
                  {m.badge}
                </span>
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

      {/* CONTACT */}
      <section id="contact" className="bg-void text-paper">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 py-24 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[0.82rem] tracking-wide text-accent inline-block mb-5">
              [ get in touch ]
            </span>
            <h2 className="mb-[18px] font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">
              Let&rsquo;s talk
            </h2>
            <p className="mb-[26px] text-[1.1rem] text-[#b8bbc0]">
              Whether you&rsquo;re weighing a martech decision or telling a vendor story, we&rsquo;d like to
              hear from you.
            </p>
            <div className="font-mono text-[0.9rem]">
              <div className="mb-[10px]">
                Email:{" "}
                <a href="mailto:hello@martechinsiders.com" className="text-accent">
                  hello@martechinsiders.com
                </a>
              </div>
              <div>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/martechinsiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  linkedin.com/company/martechinsiders
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="05ca13d7-6f81-4d42-87fe-59423d57482f" />
              <input type="hidden" name="subject" value="New enquiry — Martech Insiders" />
              <input type="hidden" name="from_name" value="Martech Insiders website" />
              <div className="mb-[22px]">
                <label htmlFor="name" className="mb-2 block font-mono text-[0.78rem] tracking-wide text-[#8b8f96]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-[1.5px] border-[#363a42] bg-transparent px-4 py-3.5 font-body text-base text-paper focus:border-accent focus:outline-none"
                />
              </div>
              <div className="mb-[22px]">
                <label htmlFor="email" className="mb-2 block font-mono text-[0.78rem] tracking-wide text-[#8b8f96]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-[1.5px] border-[#363a42] bg-transparent px-4 py-3.5 font-body text-base text-paper focus:border-accent focus:outline-none"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[0.78rem] tracking-wide text-[#8b8f96]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y border-[1.5px] border-[#363a42] bg-transparent px-4 py-3.5 font-body text-base text-paper focus:border-accent focus:outline-none"
                />
              </div>

              {/* Web3Forms' recognized honeypot field - bots fill it in, humans never see it */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-accent px-7 py-4 font-mono text-[0.88rem] tracking-wide text-void transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="mt-4 text-[0.88rem] text-[#8b8f96]">
                Goes straight to our inbox — no CRM, no marketing lists.
              </p>
              {status === "success" && (
                <div className="mt-[18px] border-[1.5px] border-accent px-[18px] py-4 font-mono text-[0.92rem] text-accent">
                  Thanks — we&rsquo;ll be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mt-[18px] border-[1.5px] border-red-400 px-[18px] py-4 font-mono text-[0.92rem] text-red-400">
                  Something went wrong — please email us directly at hello@martechinsiders.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hairline py-[72px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="mb-4 font-display text-[1.2rem] font-bold">Martech Insiders™</h3>
            <p className="max-w-[44ch] text-[1.02rem] text-muted">
              Martech Insiders helps CMS and DXP buyers and vendors make better decisions through experienced,
              independent advice from practitioners who have spent decades inside the category.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-display text-[1.05rem] font-bold">Get in touch</h3>
            <div className="mb-[26px] font-mono text-[0.9rem]">
              <div className="mb-[10px]">
                Email:{" "}
                <a href="mailto:hello@martechinsiders.com" className="text-cobalt">
                  hello@martechinsiders.com
                </a>
              </div>
              <div>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/company/martechinsiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cobalt"
                >
                  linkedin.com/company/martechinsiders
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-11 max-w-[1180px] border-t border-hairline px-8 pt-[26px] text-center text-[0.82rem] leading-[1.8] text-muted">
          <p>
            Rockstar CMO Ltd trading as Martech Insiders™ | Company registration no: 11714688 | Registered
            office: 49 Greek Street, London, W1D 4EG, UK.
          </p>
          <p>
            Martech Insiders is a{" "}
            <a
              href="https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1/UK00003521957"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              registered UK trademark
            </a>
            .
          </p>
          <p className="mt-4">
            <a href="/privacy-policy" className="text-accent">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
