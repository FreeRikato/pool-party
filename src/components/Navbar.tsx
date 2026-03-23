import { Link, NavLink } from "react-router";

export default function Navbar() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/book-court", label: "Book a Court" },
    { to: "/find-players", label: "Find Players" },
    { to: "/ground-owners", label: "Ground Owners" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black text-primary italic font-headline tracking-tight"
        >
          Pool Play
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-headline font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-600 hover:text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-slate-600 font-label font-semibold hover:opacity-80 transition-all scale-95 active:scale-90">
            Log In
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label font-bold hover:opacity-80 transition-all scale-95 active:scale-90">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
