export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-20 blur-[140px]"
      />

      <div className="relative flex flex-col items-center text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Martech Insiders<span className="align-super text-[0.35em]">™</span>
        </h1>

        <p className="font-body mt-6 text-xl font-light tracking-wide text-accent sm:text-2xl md:text-3xl">
          coming soon
          <span aria-hidden="true">...</span>
          <span aria-hidden="true" className="cursor-blink ml-1">
            _
          </span>
        </p>

        <span className="sr-only">
          Martech Insiders is launching soon. Check back for updates.
        </span>
      </div>
    </main>
  );
}
