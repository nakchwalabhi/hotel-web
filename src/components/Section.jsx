import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Section = ({
  bg,
  children,
  title = "LUXURY",
  subtitle = "HOTELS",
  eyebrow = "WELCOME TO",
  description = "Book your stay and enjoy luxury redefined at the most affordable rates.",
  ctaText = "Book Now",
  ctaLink = "/contact",
}) => {
  return (
    <>
      <section className="relative min-h-[86vh] w-full overflow-hidden">
        <img src={bg} alt="Hotel background" className="absolute inset-0 h-full w-full object-cover" />
        <img src="/bg-img.png" alt="Overlay texture" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/55 to-slate-900/45" />

        <div className="relative z-10 flex min-h-[86vh] flex-col">
          <Navbar />
          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 sm:px-8 lg:px-16">
            <div className="max-w-2xl animate-fade-in-up">
              <p className="mb-3 text-sm tracking-[0.45em] text-amber-200/95 sm:text-base">{eyebrow}</p>
              <h1 className="font-[Times_New_Roman] text-5xl font-bold leading-none text-white sm:text-7xl md:text-8xl">
                {title}
              </h1>
              <h2 className="mt-3 font-[Times_New_Roman] text-xl tracking-[0.4em] text-white/95 sm:text-3xl">{subtitle}</h2>
              <p className="mt-5 max-w-xl text-sm text-white/90 sm:text-lg">{description}</p>
              <Link
                to={ctaLink}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <img src="/h-icon.png" alt="Booking icon" className="h-5 w-5" />
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">{children}</main>
    </>
  );
};

export default Section;
