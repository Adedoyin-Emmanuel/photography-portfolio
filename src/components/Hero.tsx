import { LuArrowDownRight as ArrowDownRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 border-b-4 border-foreground"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-between text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-foreground/60 mb-10 md:mb-14">
          <span>Portfolio &mdash; 2018 / 2026</span>
          <span className="hidden sm:block">No. 014</span>
        </div>

        {/* Title + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-heading font-black tracking-[-0.04em] leading-[0.85] text-[18vw] md:text-[14vw] lg:text-[11rem] xl:text-[13rem]">
              IRIS
              <br />
              <span className="italic font-serif font-medium">Lane</span>
              <span className="text-accent">.</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop"
                alt="Portrait of Iris Lane, photographer"
                className="w-full h-[360px] md:h-[460px] lg:h-[420px] xl:h-[480px] object-cover grayscale"
                loading="eager"
              />
              <div className="absolute -bottom-3 -left-3 bg-background border-2 border-foreground px-3 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                The Photographer
              </div>
            </div>
          </div>
        </div>

        {/* Sub row */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
          <p className="md:col-span-6 lg:col-span-5 text-lg md:text-xl leading-snug text-foreground/80 font-serif">
            A photographer working between New York and Lisbon. I make quiet,
            high-contrast images of people, places, and the light between them.
          </p>

          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-foreground/50">
              Based in
            </span>
            <span className="text-base font-medium">Brooklyn, NY</span>
          </div>

          <div className="md:col-span-3 lg:col-span-4 flex md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border-2 border-foreground px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See the work
              <ArrowDownRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 md:mt-24">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=2000&q=80&auto=format&fit=crop"
            alt="Featured photograph — northern light over a mountain lake"
            className="w-full h-[55vh] md:h-[78vh] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
