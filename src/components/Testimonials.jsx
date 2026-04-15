import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Calm, serene, and beautifully retro — a perfect place to unwind.",
    author: "Mr. and Mrs. Baxter, United Kingdom",
  },
  {
    quote: "Peaceful, elegant, and perfectly located — a true escape.",
    author: "Mr. and Mrs. Thompson, Canada",
  },
  {
    quote: "Warm hospitality with a touch of old-world charm.",
    author: "Ava Rodriguez, Spain",
  },
  {
    quote: "A beautiful place to slow down and breathe again.",
    author: "Sophie Laurent, France",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return undefined;

    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const current = testimonials[index];

  const showNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const showPrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mx-auto mt-6 w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-16 lg:py-14">
      <div className="rounded-3xl bg-slate-900 px-5 py-10 text-center text-white shadow-2xl sm:px-10">
        <h2 className="font-['Times_New_Roman'] text-4xl font-bold">Testimonials</h2>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto mt-6 max-w-3xl"
        >
          <blockquote
            key={current.author}
            className={direction === "next" ? "animate-soft-slide-left" : "animate-soft-slide-right"}
          >
            <p className="text-base leading-relaxed text-white/95 sm:text-xl">“{current.quote}”</p>
            <footer className="mt-4 text-sm text-amber-200 sm:text-base">{current.author}</footer>
          </blockquote>
        </div>

        <div className="mt-7 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-full bg-amber-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200"
            onClick={showPrev}
            aria-label="Previous testimonial"
          >
            Prev
          </button>
          <button
            type="button"
            className="rounded-full bg-amber-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200"
            onClick={showNext}
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
