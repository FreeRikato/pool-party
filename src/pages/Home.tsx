import { Link } from "react-router";

export default function Home() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10 relative">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-bold text-sm tracking-widest uppercase mb-6">
              Find Courts. Find Players. Play More.
            </span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-[0.95] tracking-tighter mb-8">
              The Ultimate <span className="text-primary italic">Platform</span>{" "}
              for Athletes.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Join the fastest growing sports community. Whether it&apos;s a casual
              match or a competitive tournament, the court is waiting for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-court"
                className="px-8 py-4 rounded-full font-bold text-lg kinetic-gradient text-on-primary-container shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2"
              >
                Book a Court
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/find-players"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Find Players
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Action basketball"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE2BNvrrWOS9WRwb1ZrrxI3Wp0Q2VpzgtOyKUrEjxa5wclJRVYaVctxixcACVJkmve1b-M_4FUpPqW9mbbhciLrV6y6ic6pcl_9-LxvOgi207DXpGahk2C42R4lZ6UcF8Jeqp49rKB0jHCPQvFUXKs4CBw-R2zquucldKOMReuBuWbD2C09VXsgjS6BwzxenpJh3aIiaZCquKld6rBv-f08bl5o4nEggXJoX2rowOFP5HqJUUEWszzlKDngt6kTGvyxyH_pTnWrr4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Accented Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 text-on-surface">
              How Pool Play Works
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              We&apos;ve streamlined the entire process of organizing your sports
              life. Whether you want to reserve a court or find a group of
              players for a game, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features: Asymmetric Bento Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Find Courts */}
          <div className="group relative bg-surface-container-lowest rounded-[2.5rem] p-12 overflow-hidden flex flex-col justify-between min-h-[500px] transition-all hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">
                  stadium
                </span>
              </div>
              <h3 className="font-headline font-bold text-4xl mb-4">Find Courts</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xs mb-8">
                Instant booking for the best local facilities. Filter by sport,
                surface, and amenities.
              </p>
              <Link
                to="/book-court"
                className="group/btn flex items-center gap-2 font-bold text-primary text-lg"
              >
                Explore Venues
                <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                  east
                </span>
              </Link>
            </div>
            {/* Cut-out effect */}
            <div className="absolute right-[-10%] bottom-[-5%] w-2/3 opacity-20 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-4">
              <img
                alt="Court texture"
                className="rounded-3xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvf6HymRz52Eq-bJkZyJ1KhNKxksLJGS4sKHK97suVhelAnY9U2oAjQYNLnpSEF6EXMmcJ37u2QNfjkozd7mpQX2W18rkUumgLul2aMK24lgMUYdKiCccVkkV5tr-FoaDUr2mzXb2BgfHpMm99K-6_C5-EFIfRVfzutt8c6SAZAalIGOR5xsFidWlIlsmluKTjqwba2VNQmzEo7x0KGbkhEnH54O0uK-HJFX1qdsO6jTLxbuIo9IUsyUfyC6N5RH7q-jeiPc0kXtk"
              />
            </div>
          </div>

          {/* Card 2: Find Players */}
          <div className="group relative bg-surface-container-highest rounded-[2.5rem] p-12 overflow-hidden flex flex-col justify-between min-h-[500px] transition-all hover:shadow-2xl">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                  groups
                </span>
              </div>
              <h3 className="font-headline font-bold text-4xl mb-4">Find Players</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xs mb-8">
                Match with players of your skill level. Join public games or
                create your own community.
              </p>
              <Link
                to="/find-players"
                className="group/btn flex items-center gap-2 font-bold text-secondary text-lg"
              >
                Browse Community
                <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                  east
                </span>
              </Link>
            </div>
            {/* Overlap Imagery */}
            <div className="absolute right-[-5%] bottom-[-10%] w-3/4 opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-x-4">
              <img
                alt="Athletes high-fiving"
                className="rounded-3xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnpY7SWexSSrnSjZ9n5HajhpdL7A_u4uDDKer8DKm61-YFcQmtgb6DT7Ut2yVrV8w82c9vwnS-Az7iNWgE4BH8wuRaV7CBzu1dn3_oZsu-XeZgyyOHN-DmFdp6-nJ3-XC5xrtZ7x984jTCA_Mra2QoM_4uB6B-5ZraZ39NySYSn0GVfNqE8Y5OO0TRj3N7aWfA9eBAo3YdTSkIlQw8fEjcL8qFxrB13wzy_vE90DaSE4PuplZiubsqkkyopnzBrFgian20uTY7iNs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto kinetic-gradient rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-on-primary-container relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline font-black text-4xl md:text-6xl mb-6 italic leading-tight">
              Ready to hit the court?
            </h2>
            <p className="text-xl font-medium opacity-90">
              Sign up today and get your first court booking at 50% off. Join
              the movement.
            </p>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-2xl hover:scale-110 transition-transform shadow-2xl">
              Join Now
            </button>
          </div>
          {/* Abstract BG Texture */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
