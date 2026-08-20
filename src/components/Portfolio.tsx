import { useMemo, useState } from "react";
import { categories, photos, type Category } from "../data/photos";
import { LuPlus as Plus } from "react-icons/lu";

function shapeClass(shape: "tall" | "wide" | "square") {
  switch (shape) {
    case "tall":
      return "row-span-2 aspect-[3/4]";
    case "wide":
      return "md:col-span-2 aspect-[16/10]";
    case "square":
    default:
      return "aspect-square";
  }
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () => (active === "All" ? photos : photos.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="py-20 md:py-32 border-b-4 border-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section head */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              01 &mdash; Selected Work
            </span>
            <h2 className="font-heading font-black tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl mt-3">
              The <span className="italic font-serif font-medium">archive</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-base md:text-lg font-serif text-foreground/70 leading-snug">
            A working catalogue of personal and commissioned projects, filed by
            subject. Updated quarterly.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-widest border-2 border-foreground transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-transparent text-foreground hover:bg-foreground hover:text-background"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(220px,_auto)]">
          {visible.map((photo) => (
            <figure
              key={photo.id}
              className={`group relative overflow-hidden bg-muted cursor-pointer ${shapeClass(
                photo.shape
              )}`}
              tabIndex={0}
            >
              <img
                src={photo.src}
                alt={`${photo.title} &mdash; ${photo.location}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-focus:scale-[1.03]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 group-focus:bg-foreground/30 transition-colors duration-300" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-300">
                <div className="flex items-end justify-between gap-3 text-background">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-background/70">
                      {photo.category} &middot; {photo.year}
                    </div>
                    <div className="font-heading font-bold text-lg md:text-xl mt-1 leading-tight">
                      {photo.title}
                    </div>
                    <div className="text-xs md:text-sm text-background/80 mt-0.5">
                      {photo.location}
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 border-2 border-background">
                    <Plus size={16} />
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center py-16 text-foreground/60 font-serif italic">
            Nothing filed under this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
