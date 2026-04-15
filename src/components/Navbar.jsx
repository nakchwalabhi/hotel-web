import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/facilities", label: "Facilities" },
  { to: "/rooms", label: "Rooms" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm md:text-base tracking-wide transition-colors ${
    isActive ? "text-amber-300" : "text-white hover:text-amber-200"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-30 px-5 py-4 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 backdrop-blur-md sm:px-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="rounded-xl bg-amber-300 px-3 py-2 text-center font-['Times_New_Roman'] leading-none text-slate-900 shadow-lg">
            <p className="text-base font-bold tracking-[0.3em]">LUX</p>
            <p className="text-[0.58rem] tracking-[0.42em]">HOTELS</p>
          </div>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.35em] text-white/90 sm:block">
            Luxury Hotels
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-white/40 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-3 rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
