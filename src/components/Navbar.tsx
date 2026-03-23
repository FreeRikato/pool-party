import { Link, NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/book-court", label: "Book a Court" },
    { to: "/find-players", label: "Find Players" },
    { to: "/ground-owners", label: "Ground Owners" },
    { to: "/about", label: "About" },
  ];

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return parts[0].charAt(0).toUpperCase() + parts[1].toLowerCase();
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel shadow-sm">
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

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={logout}
                className="font-label font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                Logout
              </button>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shadow-md">
                <span className="font-label font-bold text-on-primary-container text-sm">
                  {getInitials(user.name)}
                </span>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="font-label font-semibold text-slate-600 hover:text-primary transition-all scale-95 active:scale-90"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label font-bold hover:opacity-80 transition-all scale-95 active:scale-90"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
