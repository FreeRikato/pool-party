import { useState } from "react";

interface Player {
  id: number;
  name: string;
  rating: number;
  games: number;
  skillLevel: string;
  sport: string;
  bio: string;
  image: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Alex J.",
    rating: 4.9,
    games: 24,
    skillLevel: "Intermediate",
    sport: "Tennis",
    bio: "Competitive player looking for early morning sets. I play aggressive baseline.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAifl_wxvOHSrBIlaSKE7tRAClpe4o5pb-776q72Q-xjAuVSf4lidwodWbKw6ZD4kiC11HmGXDx9-zAKZ4o654-ZdyhIdEP5--oUt41crCGN2ugcJ0JK_ElfE2JoOw_U6eMxSE-PJ0kF-VzabGPozsxPzsbwie8GuFyO2MJZnWpt6I0YZuxftDRKJsKdHpESk1N-VRfPpYYyglowZUIN19qT08OopTBQxvt-DP03E2H54_sjXZB2lQ2lOm2U3A_Hc9009OXkRpq1ig",
  },
  {
    id: 2,
    name: "Samantha K.",
    rating: 5.0,
    games: 52,
    skillLevel: "Advanced",
    sport: "Padel",
    bio: "Looking for doubles partners for weekend tournaments. Let's hit some bandejas!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALiIpOnrG4z2FjbjKaiDtO7NTNByY1Id3akXcy6N0dffOLlI34eJ9mYLnuJ0wl8DkcIX4-QFCAjdwIfMvHihpnzRTbIhSQWuR2_UtC395j33EwN56bErhPRUg6zWlxEHhYtg8ngmCKE3FgvAMU1LTpTu88sNEmQeesJlpViTqrpEuvAM_gF_z85OMhfS_kKuOqhAFvsP7yjV_MQZLaALfqu1KtwjaS1yjhRgewGHAjxjNRGmeTrC-afgNqOeNlS3ldUGNVXoYbpH8",
  },
  {
    id: 3,
    name: "Marcus T.",
    rating: 4.7,
    games: 12,
    skillLevel: "Beginner",
    sport: "Pickleball",
    bio: "Just started playing and loving it. Looking for chill games and learning tips.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmRNIfeRU_lE7cXOxY2GGO_ryf9PKiM0MHO9oPCqdNuNA-mme323p3qoABjcZJ--oJU_S6QKS7x4oAlBpKe8cfIYKksjps4TkLkhLF2hyUgPoio4ILmoVRjngNS23GiGkH0izZe9C483cY099vz4AO9leywEbzht0jGvFPPgqa9bpRpiaAJGl4whP0Acoi8-E3jiYWy1pB91n7QfCE6exNqBXdKzphwUL8CC_z0SPDkhoAOnwdq3YIAmUu2M1uGKHi-fVFqllrGs4",
  },
  {
    id: 4,
    name: "Elena R.",
    rating: 4.8,
    games: 31,
    skillLevel: "Intermediate",
    sport: "Tennis",
    bio: "Available for evening sessions. Consistent rally player, focused on improving footwork.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjv2DqxsXXQbhlXGl8PvgXHzAQ5ADmWmlVHdmGfa4YKoEShBBuW-Y65u4Te5XFr3dd75mCyi-nhlb6HOkh_xDdp__0XQyYQBElxlrvgJGa7Djyhy5BlYl8jazinDjyktD_mfRSX_NJU7L4U-I493WzzohPTifiqfIBAlUX4fVoAdOf-1t4hqpXzoJA6LNlQgvjcuekF2nVWLq5T0-JkFREriQVibMvvt_fPrpdw3Bhw0AOtkbkYdixFZb9BkPMDWtaQq7SmXD26YU",
  },
];

export default function SoloPlayer() {
  const [sport, setSport] = useState("Tennis");
  const [skillLevel, setSkillLevel] = useState("Intermediate");
  const [timePreference, setTimePreference] = useState("Morning");

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero & Filters Section */}
        <section className="mb-16">
          <div className="relative bg-secondary-container rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img
                alt="Athletic pattern"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA06ZLkHqiD28XI1IyrE-GPh0KkvcEfSLIHHd29fjO4UxHzuNfy2MRuc2KV7aAeHoO1DPmV-zz1wwk5dhXKD73zA5mYk0VuKWU3wqv8zXkkngMKZs3_B4p7XF79iU0hs4hU3WHvrLXpyeSc60Aj11o96qi_i0EgY16qVyXJQF3N7RMVD65W21gDiNtJGDRufENHv-0fx_mpDv9wMtxBifl6aixWZJtpiXLsYaw2O0sEE9w5FsrKJvpM74JpWVMpNo8N52iV35DDx2k"
              />
            </div>
            <div className="z-10 flex-1">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-secondary-container leading-none mb-6 -ml-1">
                Find Your <br />
                <span className="text-primary italic">Perfect Match.</span>
              </h1>
              <p className="text-lg text-on-secondary-container/80 max-w-md font-body mb-8">
                Connect with players in your area. Set your skill level, pick a
                sport, and get on the court today.
              </p>
            </div>

            {/* Filter Card */}
            <div className="z-10 w-full max-w-md bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-on-surface/5">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Select Sport
                  </label>
                  <div className="relative">
                    <select
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface font-medium"
                    >
                      <option>Tennis</option>
                      <option>Padel</option>
                      <option>Pickleball</option>
                      <option>Badminton</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-4 pointer-events-none text-outline">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                      Skill Level
                    </label>
                    <select
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface font-medium"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Pro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                      Time Preference
                    </label>
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface font-medium"
                    >
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>
                <button className="w-full kinetic-gradient text-on-primary-container font-headline font-extrabold text-lg py-5 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                  Find Players
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest mb-4">
                Results
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
                Match Found! Meet your next teammates.
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>

          {/* Bento Grid Players */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <div
                key={player.id}
                className="group bg-surface-container-low rounded-[2rem] p-6 hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-surface-container-lowest shadow-lg -mt-10 mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                      <img
                        alt={player.name}
                        className="w-full h-full object-cover"
                        src={player.image}
                      />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">
                      {player.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="material-symbols-outlined text-primary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-sm font-bold text-on-surface-variant">
                        {player.rating} ({player.games} games)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1 rounded-lg bg-tertiary-container text-on-tertiary-container text-xs font-bold font-label">
                      {player.skillLevel}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface-variant text-xs font-bold font-label">
                      {player.sport}
                    </span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                  {player.bio}
                </p>
                <button className="w-full bg-surface-container-lowest text-primary font-label font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  Invite to Game
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    send
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
