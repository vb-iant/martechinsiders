export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-xs">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[22px]">
        <a href="/" className="font-display text-[1.1rem] font-bold">
          Martech Insiders<span className="text-accent">™</span>
          <span aria-hidden="true" className="cursor-blink ml-1 text-accent font-medium">
            |
          </span>
        </a>
        <div className="flex items-center gap-8">
          <a
            href="/blog"
            className="font-mono text-[0.8rem] tracking-wide text-void transition-colors hover:text-accent"
          >
            BLOG
          </a>
          <a
            href="/#contact"
            className="border-[1.5px] border-void px-[18px] py-[11px] font-mono text-[0.8rem] tracking-wide transition-colors hover:border-accent hover:bg-accent hover:text-paper"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
