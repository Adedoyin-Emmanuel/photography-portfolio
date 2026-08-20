import { LuInstagram as Instagram, LuMail as Mail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t-2 border-foreground">
        <div>
          <div className="font-heading font-black text-2xl tracking-tight">
            IRIS&nbsp;LANE<span className="text-accent">.</span>
          </div>
          <p className="font-serif italic text-foreground/60 mt-1">
            Photographer &mdash; Brooklyn / Lisbon
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@irislane.studio"
            aria-label="Email"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
          >
            <Instagram size={16} />
          </a>
        </div>

        <div className="text-xs uppercase tracking-widest text-foreground/60">
          &copy; {new Date().getFullYear()} Iris Lane Studio &mdash; All rights reserved
        </div>
      </div>
    </footer>
  );
}
