export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-xs">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-[22px] sm:px-8">
        <a href="/" className="whitespace-nowrap font-display text-[0.95rem] font-bold sm:text-[1.1rem]">
          Martech Insiders<span className="text-accent">™</span>
          <span aria-hidden="true" className="cursor-blink ml-1 text-accent font-medium">
            |
          </span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-7">
          <a
            href="/blog"
            className="whitespace-nowrap font-mono text-[0.7rem] tracking-wide transition-colors hover:text-accent sm:text-[0.8rem]"
          >
            INSIGHTS
          </a>
          <a
            href="/#contact"
          className="whitespace-nowrap border-[1.5px] border-void px-2.5 py-[9px] font-mono text-[0.7rem] tracking-wide sm:px-[18px] sm:py-[11px] sm:text-[0.8rem] transition-colors hover:border-accent hover:bg-accent hover:text-paper"
        >
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  );
}
