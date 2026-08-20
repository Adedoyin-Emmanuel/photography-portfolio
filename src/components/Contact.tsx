import { useState, type FormEvent } from "react";
import { LuMail as Mail, LuMapPin as MapPin, LuInstagram as Instagram, LuArrowRight as ArrowRight, LuCheck as Check } from "react-icons/lu";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Heading column */}
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.25em] text-background/60">
            04 &mdash; Contact
          </span>
          <h2 className="font-heading font-black tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl lg:text-8xl mt-4">
            Let&rsquo;s <br />
            make <span className="italic font-serif font-medium">something</span>
            <span className="text-accent">.</span>
          </h2>

          <p className="mt-8 max-w-md font-serif text-lg text-background/80 leading-relaxed">
            Tell me a bit about your project &mdash; dates, location, and what
            you have in mind. I reply to every enquiry within two working days.
          </p>

          <ul className="mt-10 space-y-4 text-base">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a
                href="mailto:hello@irislane.studio"
                className="border-b border-background/40 hover:border-background transition-colors duration-200 cursor-pointer"
              >
                hello@irislane.studio
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-accent" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="border-b border-background/40 hover:border-background transition-colors duration-200 cursor-pointer"
              >
                @iris.lane
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <span className="text-background/80">Brooklyn, NY &mdash; available worldwide</span>
            </li>
          </ul>
        </div>

        {/* Form column */}
        <div className="lg:col-span-6">
          <form
            onSubmit={onSubmit}
            className="bg-background text-foreground p-6 md:p-10 border-2 border-background"
          >
            {sent ? (
              <div className="py-10 text-center flex flex-col items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-accent text-background">
                  <Check size={26} />
                </span>
                <h3 className="font-heading font-black text-3xl tracking-tight">
                  Message received.
                </h3>
                <p className="font-serif text-foreground/70 max-w-sm">
                  Thanks for reaching out &mdash; I&rsquo;ll be in touch within
                  two working days.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@studio.com"
                />
                <Field label="Project type" name="project" placeholder="Wedding, editorial, brand…" />
                <Field label="Date" name="date" placeholder="Month / year" />
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest font-semibold text-foreground/70"
                  >
                    Tell me more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Where, when, the feeling you're after…"
                    className="w-full bg-transparent border-2 border-foreground px-4 py-3 text-base font-serif placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-shadow duration-200"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-foreground/60 font-serif italic">
                    By sending, you agree to be contacted about your project.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Send enquiry
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-widest font-semibold text-foreground/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border-2 border-foreground px-4 py-3 text-base placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-shadow duration-200"
      />
    </div>
  );
}
