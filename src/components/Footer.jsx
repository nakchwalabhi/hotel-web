import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/facilities", label: "Facilities" },
  { to: "/rooms", label: "Rooms" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setEmail("");
    setShowPopup(true);
  };

  useEffect(() => {
    if (!showPopup) return undefined;
    const timer = setTimeout(() => setShowPopup(false), 3500);
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <footer className="relative mt-12 border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-16">
        <div>
          <h2 className="font-['Times_New_Roman'] text-2xl font-bold tracking-[0.25em] text-amber-300">LUXURY</h2>
          <p className="mt-1 text-[0.7rem] tracking-[0.45em] text-white/80">HOTELS</p>
          <div className="mt-4 space-y-1 text-sm text-white/75">
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
            <p>+44 345 678 903</p>
            <p>luxury_hotels@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-white/75 transition hover:text-amber-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Follow</h3>
          <div className="mt-3 space-y-3 text-sm text-white/75">
            <a className="flex items-center gap-2 hover:text-amber-200" href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/fb-logo.png" alt="Facebook" className="h-4 w-4" /> Facebook
            </a>
            <a className="flex items-center gap-2 hover:text-amber-200" href="https://x.com" target="_blank" rel="noreferrer">
              <img src="/x.png" alt="X" className="h-4 w-4" /> X
            </a>
            <a className="flex items-center gap-2 hover:text-amber-200" href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/instagram.png" alt="Instagram" className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Newsletter</h3>
          <form className="mt-3 flex" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email address"
              className="w-full rounded-l-lg border border-amber-300/40 bg-transparent px-3 py-2 text-sm outline-none ring-amber-200 transition focus:ring"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-amber-300 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-lg bg-slate-900 px-5 py-3 text-sm text-white shadow-2xl animate-pop-in">
          Thanks for subscribing ✨
        </div>
      )}
    </footer>
  );
};

export default Footer;
