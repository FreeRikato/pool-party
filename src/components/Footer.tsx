import { Link } from "react-router";

export default function Footer() {
  const platformLinks = [
    { to: "/book-court", label: "Book a Court" },
    { to: "/find-players", label: "Find Players" },
    { to: "/ground-owners", label: "Ground Owners" },
    { to: "/about", label: "About" },
  ];

  const companyLinks = [
    { to: "/about", label: "About" },
    { to: "#", label: "Contact" },
    { to: "#", label: "Careers" },
    { to: "#", label: "Terms" },
  ];

  return (
    <footer className="w-full px-6 md:px-12 py-12 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1">
          <span className="text-xl font-bold text-slate-900 dark:text-white font-headline block mb-4">
            Pool Play
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
            The leading platform for modern athletes to connect, play, and grow.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-white mb-6">
            Platform
          </h4>
          <ul className="space-y-4">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-slate-500 dark:text-slate-400 hover:text-primary underline-offset-4 hover:underline transition-all duration-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-white mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-slate-500 dark:text-slate-400 hover:text-primary underline-offset-4 hover:underline transition-all duration-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-white mb-6">
            Connect
          </h4>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              language
            </span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              share
            </span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
              mail
            </span>
          </div>
          <p className="mt-8 text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Pool Play. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
