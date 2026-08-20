import { LuCamera as Camera, LuHeart as Heart, LuBuilding2 as Building2, LuBookOpen as BookOpen, LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

const services = [
  {
    icon: Camera,
    title: "Portraits",
    price: "From $850",
    desc: "Editorial-leaning portrait sessions in studio or on location. Includes a styled lookbook and 30+ retouched frames.",
    points: ["2 hr session", "1 location", "Online gallery"],
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    price: "From $4,200",
    desc: "Full-day, documentary-style coverage for couples who want their day remembered exactly as it felt.",
    points: ["Up to 10 hr coverage", "2nd shooter optional", "Heirloom album"],
  },
  {
    icon: Building2,
    title: "Brand & Commercial",
    price: "On request",
    desc: "Campaigns, lookbooks, and lifestyle imagery for brands that care about restraint and craft.",
    points: ["Full production", "Usage license", "Retouch included"],
  },
  {
    icon: BookOpen,
    title: "Editorial & Print",
    price: "On request",
    desc: "Feature stories and assignment work for magazines, journals, and independent publications worldwide.",
    points: ["Story development", "Travel-ready", "Print files"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-b-4 border-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              03 &mdash; Services
            </span>
            <h2 className="font-heading font-black tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl mt-3">
              What I <span className="italic font-serif font-medium">shoot</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-base md:text-lg font-serif text-foreground/70 leading-snug">
            Bookings open three months in advance. Every project starts with a
            short call to make sure we&rsquo;re a good fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-foreground">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`group relative p-8 md:p-10 lg:p-12 flex flex-col gap-6 transition-colors duration-200 hover:bg-foreground hover:text-background cursor-pointer ${
                  i % 2 === 0 ? "md:border-r-2" : ""
                } ${i < services.length - 2 ? "border-b-2" : ""} border-foreground`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-12 h-12 border-2 border-current">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    {s.price}
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>

                <p className="font-serif text-base md:text-lg leading-relaxed opacity-90">
                  {s.desc}
                </p>

                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest opacity-80">
                  {s.points.map((p) => (
                    <li key={p} className="before:content-['/_'] before:opacity-50">
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border-b-2 border-current pb-1">
                    Enquire
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
