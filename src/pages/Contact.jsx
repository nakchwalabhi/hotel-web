import { useState } from "react";

const contactCards = [
  { label: "Reception", value: "+44 345 678 903" },
  { label: "Email", value: "luxury_hotels@gmail.com" },
  { label: "Address", value: "497 Evergreen Rd. Roseville, CA 95673" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center text-slate-900">
        <h1 className="font-['Times_New_Roman'] text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
          Our hospitality team is available around the clock for bookings, custom requests, and assistance.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-5">
        <aside className="space-y-4 lg:col-span-2">
          {contactCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{card.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{card.value}</p>
            </div>
          ))}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src="/footer.png" alt="Hotel entrance" className="h-56 w-full object-cover" />
          </div>
        </aside>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg lg:col-span-3">
          <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-slate-900">Send a message</h2>
          <p className="mt-2 text-sm text-slate-600">We usually reply within 24 hours.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none ring-amber-200 transition focus:ring"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none ring-amber-200 transition focus:ring"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="How can we help you?"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none ring-amber-200 transition focus:ring"
            />
            <button
              type="submit"
              className="rounded-lg bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </form>

          {submitted && (
            <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 animate-pop-in">
              Thank you! Your request has been received.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
