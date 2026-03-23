import { Link } from "react-router";

export default function About() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-sm mb-6">
              HOW IT WORKS
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-none mb-8">
              Getting Started is <span className="text-primary">Simple.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              We&apos;ve streamlined the journey from your couch to the court. No
              more endless group chats or missed opportunities. Just pure play.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative bg-surface-container-low rounded-3xl p-4 overflow-hidden shadow-2xl transform rotate-2">
              <img
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover"
                alt="Athletic person preparing for a match"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDghaMVCCMvQTXsGGwEXNNc0OIChK6f-0qNLEjg4uzgOPBmT7l7WEuc4O4qShWOYhvsKvPD9h6d_Z-5Ma1wVs0HKydM99y5XcJTuAqtEyeK1bInIxlH3oOQOQWGhyzvEBnV3CmiB2dvvE1wNfj8w0hnYnb7gNX6wfukKoc1zu6ErN4ZTcxKt0ivNn_sAu5KkbdniZTkKBlDkUglMxnnCyiT8298tfYukZZl4x5NzY9njzAjl6V5rsOI5hocztNvZV6CpAx1ZC8kU"
              />
              <div className="absolute bottom-10 left-10 glass-panel p-6 rounded-2xl shadow-xl max-w-xs border border-white/20">
                <p className="font-headline font-bold text-on-surface">
                  &ldquo;The fastest way I&apos;ve ever found a competitive match.&rdquo;
                </p>
                <p className="text-sm text-on-surface-variant mt-2">
                  — Alex, Semi-Pro Tennis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Step 1 */}
            <div className="flex-1 group">
              <div className="mb-8 relative">
                <span className="text-9xl font-headline font-black text-outline-variant/10 absolute -top-12 -left-4">
                  01
                </span>
                <div className="w-16 h-16 kinetic-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 mb-6 relative z-10">
                  <span className="material-symbols-outlined text-3xl">
                    sports_tennis
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">
                  Choose Your Sport
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Select from a wide range of available sports disciplines near
                  you. From Padel to Basketball, we&apos;ve got the arena waiting.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 bg-surface-container-lowest rounded-xl flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary">
                    sports_soccer
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Soccer
                  </span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary">
                    sports_tennis
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Tennis
                  </span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary">
                    sports_basketball
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Hoops
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 group mt-12 md:mt-24">
              <div className="mb-8 relative">
                <span className="text-9xl font-headline font-black text-outline-variant/10 absolute -top-12 -left-4">
                  02
                </span>
                <div className="w-16 h-16 kinetic-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 mb-6 relative z-10">
                  <span className="material-symbols-outlined text-3xl">
                    calendar_month
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">
                  Book Your Court
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Real-time availability and instant confirmation. Choose your
                  preferred time slot and duration with zero friction.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl shadow-on-surface/5 border border-outline-variant/10 group-hover:-translate-y-4 transition-transform duration-500">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-headline font-bold text-sm">
                    Saturday, Oct 12
                  </span>
                  <span className="material-symbols-outlined text-outline-variant">
                    expand_more
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-surface-container-low rounded-lg opacity-40">
                    <span className="font-medium text-sm">
                      08:00 AM - 09:30 AM
                    </span>
                    <span className="text-xs font-bold">BOOKED</span>
                  </div>
                  <div className="flex justify-between p-3 kinetic-gradient text-on-primary-container rounded-lg shadow-md ring-4 ring-primary-container/20">
                    <span className="font-bold text-sm">
                      10:00 AM - 11:30 AM
                    </span>
                    <span className="text-xs font-black">AVAILABLE</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-container-low rounded-lg">
                    <span className="font-medium text-sm">
                      12:00 PM - 01:30 PM
                    </span>
                    <span className="text-xs font-bold text-primary">
                      SELECT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 group mt-12 md:mt-0">
              <div className="mb-8 relative">
                <span className="text-9xl font-headline font-black text-outline-variant/10 absolute -top-12 -left-4">
                  03
                </span>
                <div className="w-16 h-16 kinetic-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 mb-6 relative z-10">
                  <span className="material-symbols-outlined text-3xl">
                    groups
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">
                  Play and Match
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Invite your squad or find new players at your skill level.
                  Track scores, climb leaderboards, and stay active.
                </p>
              </div>
              <div className="relative h-64">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden border-8 border-surface-container-lowest z-20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <img
                    className="w-full h-full object-cover"
                    alt="Athletes high-fiving"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkdO6ncaMHTRBuuSPsszKZqPwUAqGQdgG5P7u4zEu7v35f5jrUFHRAsAnLcnNekONiJwtrL5SZSN2EpPztuzoQLOfkBKbOF-4Vr5F3B8iXNL03d6IJf6zN52CWgwK-5hwGFAm_dPIysq_lxo7YD2mN9TSRMD8nDHm_1L7Z7IPTNjSMOd2TEzRD6uD6dTS2JmjQf92AkZBXz4EM-RTDo2Rm-zJlAOUWde5iTsv2cqeFU-RmPmzvL0VpbQhhDJurgWXUBUquqyQ-_HY"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full overflow-hidden border-8 border-surface-container-lowest z-10 shadow-lg group-hover:-translate-x-4 transition-transform duration-500">
                  <img
                    className="w-full h-full object-cover"
                    alt="Players walking together"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5B22kx3Vq8HKcCMvSCV83QzIEAuC2owbYmo742m1undQhIa0rDidIu2TFA8lPDCNg38V10eAeXuwLkMKW98y_i1WtLMPEhWVLfQJCMiJn-eDPcCHZPiCx-ED5NdrjAjoJ4Eqjkd7ze0dH6iff25bfT9dpU7QFHLhDAF-66NTg31vUOL5EpWl-6JdReS17CJWyI_ZSGjV-kP3GF4mScly8pIgaRImRNYkJJLXCexPYrak6YlEZNyHHmRaRbWodu7vts6BiAiYhExo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tight mb-12">
            Our Mission to Get <br />
            <span className="text-transparent bg-clip-text kinetic-gradient">
              Everyone Playing.
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-left mt-20">
            <div>
              <h4 className="text-2xl font-headline font-bold mb-6">
                Democratizing Access
              </h4>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                We believe sports shouldn&apos;t be gated by complicated booking
                systems or exclusive memberships. Pool Play was built to open up
                every court, pitch, and field to the community.
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    visibility
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Community Vision</p>
                  <p className="text-sm text-on-surface-variant">
                    Connecting 1M+ players by 2025.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 kinetic-gradient blur-[100px] opacity-20 rounded-full"></div>
              <div className="relative bg-surface-container-highest rounded-[3rem] p-1 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  className="rounded-[2.9rem] w-full h-[400px] object-cover"
                  alt="Athletes in action"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6qrkMZ51kYmp2EvcJ1xgZcYoVFBwMIiQ1Hf06ota3GHtb7Ig2uVU4GJj-nhHcDG96yOceGwIwXCdHbP99jBLKURV3JkwumOGohrxMhSQRbyz5ao4JT1D40Y8P65ROXFVCmNA0EAbPZTP4mxO0zt2b31T2aU4t5b6hComVsimgG4El-3_3MJuCcAZfL-VMzQzLLlgS5Ez4Sh9o-vIq375aTlW0NMyPyJNUINKTjpu-Q_BTjGRw5hrcBvy-UNcBjZ-6dEr-V-Lqgg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="kinetic-gradient rounded-[2rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
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
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-black mb-8 relative z-10">
            Ready to Take the Field?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <Link
              to="/book-court"
              className="bg-white text-primary font-headline font-black text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl"
            >
              Start Booking Now
            </Link>
            <Link
              to="/find-players"
              className="bg-transparent border-2 border-white/40 text-white font-headline font-bold text-lg px-10 py-5 rounded-full hover:bg-white/10 transition-colors"
            >
              Find Local Matches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
