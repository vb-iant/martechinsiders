import type { Metadata } from "next";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";

export const metadata: Metadata = {
  title: "Privacy Policy | Martech Insiders",
  description: "Privacy policy",
};

const TAG = "font-mono text-[0.82rem] tracking-wide text-accent inline-block mb-5";

function Eyebrow({ children }: { children: string }) {
  return <span className={TAG}>{children}</span>;
}

export default function PrivacyPolicy() {
  return (
    <div className="font-manrope bg-paper text-void text-lg leading-[1.7]">
      {/* NAV */}
      <header className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[22px]">
          <a href="/new-home" className="font-display text-[1.1rem] font-bold">
            Martech Insiders<span className="text-accent">™</span>
            <span aria-hidden="true" className="cursor-blink ml-1 text-accent font-medium">
              |
            </span>
          </a>
          <a
            href="/new-home#contact"
            className="border-[1.5px] border-void px-[18px] py-[11px] font-mono text-[0.8rem] tracking-wide transition-colors hover:border-accent hover:bg-accent hover:text-paper"
          >
            GET IN TOUCH
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-[820px] px-8 py-24">
        <Eyebrow>[ legal ]</Eyebrow>
        <h1 className="font-display text-[2.1rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.5rem]">
          Privacy Policy
        </h1>

        <p className="mt-10 text-[1.05rem] text-muted">
          This notice describes how Rockstar CMO Ltd – trading as Martech Insiders™ (&ldquo;we&rdquo; or
          &ldquo;us&rdquo;) handle the personal information that you may provide us with when transacting
          with us or visiting our website.
        </p>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Your data protection rights</h2>
        <p className="mb-4 text-[1.05rem] text-muted">Under data protection law, you have rights including:</p>
        <ul className="mb-4 list-disc space-y-3 pl-6 text-[1.05rem] text-muted marker:text-accent">
          <li>
            Your right of access – You have the right to ask us for copies of your personal information.
          </li>
          <li>
            Your right to rectification – You have the right to ask us to rectify personal information you
            think is inaccurate. You also have the right to ask us to complete information you think is
            incomplete.
          </li>
          <li>
            Your right to erasure – You have the right to ask us to erase your personal information in
            certain circumstances.
          </li>
          <li>
            Your right to restriction of processing – You have the right to ask us to restrict the
            processing of your personal information in certain circumstances.
          </li>
          <li>
            Your right to object to processing – You have the right to object to the processing of your
            personal information in certain circumstances.
          </li>
          <li>
            Your right to data portability – You have the right to ask that we transfer the personal
            information you gave us to another organisation, or to you, in certain circumstances.
          </li>
          <li>
            You are not required to pay any charge for exercising your rights. If you make a request, we
            have one month to respond to you.
          </li>
          <li>Please contact us, if you wish to make a request.</li>
        </ul>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Contact Details</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          Martech Insiders – C/O Rockstar CMO Ltd, 49 Greek Street, London, W1D 4EG or use our{" "}
          <a href="/new-home#contact" className="text-cobalt hover:underline">
            contact us form
          </a>
          .
        </p>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">
          The type of personal information we collect
        </h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          We currently collect and process the following personal data:
        </p>
        <ul className="mb-4 list-disc space-y-3 pl-6 text-[1.05rem] text-muted marker:text-accent">
          <li>Name and business contact details, including job title and company</li>
          <li>Web session data (for example, IP address and browser) captured when visiting our website</li>
        </ul>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Why do we collect data?</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          Most of the personal information we process is provided to us directly by you for one of the
          following reasons:
        </p>
        <ul className="mb-4 list-disc space-y-3 pl-6 text-[1.05rem] text-muted marker:text-accent">
          <li>Sales and marketing communications</li>
          <li>To be able to transact with us and engage our services</li>
          <li>To provide a better website experience</li>
          <li>To optimize our marketing and messaging</li>
        </ul>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Legal basis</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for
          processing this information are:
        </p>
        <ul className="mb-4 list-disc space-y-3 pl-6 text-[1.05rem] text-muted marker:text-accent">
          <li>Your consent</li>
          <li>We have a contractual obligation</li>
          <li>We have a legal obligation</li>
          <li>We have a legitimate interest</li>
        </ul>
        <p className="mb-4 text-[1.05rem] text-muted">
          You can remove your consent at any time by unsubscribing from our email communications using the
          &lsquo;unsubscribe&rsquo; link in the communication or by emailing{" "}
          <a href="mailto:hello@martechinsiders.com" className="text-cobalt hover:underline">
            hello@martechinsiders.com
          </a>
          .
        </p>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">
          How do we store your personal information?
        </h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          We store your information in our sales and marketing systems. We ensure that all systems enable
          compliance with GDPR and local privacy laws in the countries in which our clients are based.
        </p>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Sharing your data</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          We do not share this data with any third party unless we are required by law or to complete a
          transaction you have authorized. This includes marketing partners in the case of a co-hosted
          event, provided your consent is obtained through the registration process. We may also share this
          data internally to fulfil the sales, marketing, and service activities listed above.
        </p>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">How to complain</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          If you have any concerns about our use of your personal information, you can make a complaint to
          us at the address above or by emailing{" "}
          <a href="mailto:hello@martechinsiders.com" className="text-cobalt hover:underline">
            hello@martechinsiders.com
          </a>
          .
        </p>
        <p className="mb-4 text-[1.05rem] text-muted">
          You can also complain to the ICO if you are unhappy with how we have used your data.
        </p>
        <ul className="mb-4 list-disc space-y-3 pl-6 text-[1.05rem] text-muted marker:text-accent">
          <li>
            Information Commissioner&rsquo;s Office – Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9
            5AF
          </li>
          <li>Helpline number: 0303 123 1113</li>
          <li>
            ICO website:{" "}
            <a
              href="https://www.ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cobalt hover:underline"
            >
              www.ico.org.uk
            </a>
          </li>
        </ul>

        <h2 className="mt-16 mb-5 font-display text-[1.3rem] font-semibold">Any questions?</h2>
        <p className="mb-4 text-[1.05rem] text-muted">
          We respect your privacy and take seriously how we manage your data.
        </p>
        <p className="text-[1.05rem] text-muted">
          If you have any questions or feedback on this policy, please{" "}
          <a href="/new-home#contact" className="text-cobalt hover:underline">
            get in touch
          </a>
          .
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hairline py-[72px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="mb-4 font-display text-[1.2rem] font-bold">Martech Insiders™</h3>
            <p className="max-w-[44ch] text-[1.02rem] text-muted">
              Martech Insiders helps CMS and DXP buyers and vendors make better decisions through
              experienced, independent advice from practitioners who have spent decades inside the category.
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
          <p className="mt-4 flex justify-center gap-4">
            <a href="/privacy-policy" className="text-accent">
              Privacy Policy
            </a>
            <CookiePreferencesLink />
          </p>
        </div>
      </footer>
    </div>
  );
}
