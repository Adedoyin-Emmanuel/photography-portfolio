export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-b-4 border-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80&auto=format&fit=crop"
              alt="Portrait of Iris Lane"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-widest text-foreground/60">
            <span>Self portrait</span>
            <span>Brooklyn, 2024</span>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-4">
            02 &mdash; About
          </span>
          <h2 className="font-heading font-black tracking-[-0.03em] leading-[0.95] text-5xl md:text-6xl lg:text-7xl">
            I chase the <br />
            <span className="italic font-serif font-medium">honest light</span>
            <span className="text-accent">.</span>
          </h2>

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 font-serif text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              I&rsquo;ve been making pictures for the better part of a decade,
              first on borrowed 35mm cameras, now on a small kit I carry
              everywhere. My work sits between documentary and editorial &mdash;
              quiet, observed, never staged twice.
            </p>
            <p>
              Clients include The New York Times, Apartamento, Aesop, and a
              long list of couples who wanted their day remembered as it
              actually felt. I travel for work and like long shoots over short
              ones.
            </p>
          </div>

          {/* Stats */}
          <dl className="mt-10 md:mt-14 grid grid-cols-3 gap-6 border-t-2 border-foreground pt-8">
            {[
              { k: "Years shooting", v: "09" },
              { k: "Weddings filed", v: "120+" },
              { k: "Countries", v: "27" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-widest text-foreground/60">
                  {s.k}
                </dt>
                <dd className="font-heading font-black text-4xl md:text-5xl tracking-tight mt-2">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
