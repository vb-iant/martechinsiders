// "Let's talk" contact panel: contact details plus a CTA to /contact.
// Shared by the homepage and the blog index.

export function LetsTalk() {
  return (
    <section id="contact" className="bg-accent text-paper">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono text-[0.82rem] tracking-wide text-paper inline-block mb-5">
            [ get in touch ]
          </span>
          <h2 className="mb-[18px] font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">
            Let&rsquo;s talk
          </h2>
          <p className="mb-[26px] text-[1.1rem] text-paper/85">
            Whether you&rsquo;re weighing a martech decision or telling a vendor story, we&rsquo;d like to
            hear from you.
          </p>
          <div className="font-mono text-[0.9rem]">
            <div className="mb-[10px]">
              Email:{" "}
              <a href="mailto:hello@martechinsiders.com" className="font-semibold text-paper underline">
                hello@martechinsiders.com
              </a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/company/martechinsiders"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-paper underline"
              >
                linkedin.com/company/martechinsiders
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center border-[1.5px] border-paper/40 p-10">
          <p className="mb-7 font-display text-[1.35rem] font-semibold leading-snug">
            Tell us what you&rsquo;re working on and we&rsquo;ll get back to you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-void px-7 py-4 font-mono text-[0.88rem] tracking-wide text-accent transition-colors hover:bg-paper hover:text-void"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
