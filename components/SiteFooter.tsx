import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";

export function SiteFooter() {
  return (
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
        <p className="mt-4 flex justify-center gap-4">
          <a href="/privacy-policy" className="text-accent">
            Privacy Policy
          </a>
          <CookiePreferencesLink />
        </p>
      </div>
    </footer>
  );
}
