import { useState } from "react";

interface Court {
  id: number;
  name: string;
  sport: string;
  rating: number;
  price: number;
  location: string;
  image: string;
  slots: string[];
}

const courts: Court[] = [
  {
    id: 1,
    name: "Green Valley Arena",
    sport: "SOCCER",
    rating: 4.9,
    price: 45,
    location: "122 Oak Street, Silicon Suburbs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcw2ftiE_KnNGAwX_k1yyEdnE89Z6Qzddcnl3fRk6iPMMps2iURF4cVaJ6dfhwuM9M06A5IBKmGQxKxbJdR0TJrgLGiobK9Mk3kTX6JQm8iEDjgblKFRpr6LHUHvh1gUHr7mYPsQR_B1GeG2HIiOCsN5KXkJclc7uKiSthY3CfyghpfPvvB3vO4EG-mAZJFDGXG3bJUzVvZB7iAIvc4VDRMVngt35FpVd0xtzo_zvV66wNeleq4sA9eyahRBH_-K-Nri7qQxLwI5w",
    slots: ["18:00 - 19:00", "19:00 - 20:00", "21:00 - 22:00"],
  },
  {
    id: 2,
    name: "Downtown Sports Hub",
    sport: "TENNIS",
    rating: 4.7,
    price: 30,
    location: "Grand Plaza, 5th Floor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD79sFQ6TTsn6b_f58kCsXOtPfvRpfkwHd7ptt6Qk1BZ_wOUpXNO5xIQGfGKjTDosckzG0s-Pv6Cf3eOUJeuHWxCT0in3FFNizWF-gTzzCURDtQ2Z-g3BbMwRaLIFHIciNy4WZzydRxCnLnXZe-tjTCwSo1V6fEcKghFminSqAh0DsWPJJ_E9H17UkSHBpKJM0ERNEO79riViEbHKZBFZ2aC5Ugn0F2HHjPMoxMC7vCUOybysWunKpjyPcEQwJRRxGQ7gKav3z8rcc",
    slots: ["16:00 - 17:00", "17:00 - 18:00", "20:00 - 21:00"],
  },
  {
    id: 3,
    name: "Apex Elite Complex",
    sport: "BASKETBALL",
    rating: 4.8,
    price: 55,
    location: "North Industrial Park",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRzP4mcIUBEPhX1Co56yfR4AZGLhrsCxEMWy6uZyhJerF3q7X9l50bBWTvHzS4xfDNARejj05_lAXOD9aEZz6pc11lG7H86JeMHNUlkVoVGrB-60UpN7zzmApkY_e3Yp8L6UrKf8m4GaoL3Ea4uaNyPrJr5MX4s2_fHYxP4DOVETVO_OQAvWQ13LunR4BfeKFnQA6XEiT92WT3w24I43JuPqWbgYnUOkKw159gsuJW998eSy3_bdNsoxa0y923Udau2OS-v7g5mLg",
    slots: ["10:00 - 11:00", "14:00 - 15:00", "19:00 - 20:00"],
  },
];

export default function CourtBooking() {
  const [sport, setSport] = useState("Soccer");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [timePreference, setTimePreference] = useState("Morning (6am - 12pm)");

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="relative mb-16 mt-8">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 font-headline">
              THE <span className="text-primary italic">ARENA</span> <br />
              IS YOURS
            </h1>
            <p className="max-w-md text-on-surface-variant font-body text-lg">
              Book the highest-rated courts in the city. Professional grade
              surfaces for the competitive spirit.
            </p>
          </div>
          <div className="absolute -top-10 -right-4 w-1/2 h-64 bg-secondary-container/30 -skew-x-12 rounded-xl -z-0"></div>
        </header>

        {/* Booking Interface: Filters */}
        <section className="bg-surface-container-low rounded-xl p-8 mb-12 shadow-sm border-none">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sport Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
                Sport
              </label>
              <div className="relative">
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body font-medium"
                >
                  <option>Soccer</option>
                  <option>Tennis</option>
                  <option>Basketball</option>
                  <option>Badminton</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                  expand_more
                </span>
              </div>
            </div>

            {/* Location Input */}
            <div className="flex flex-col gap-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search city or area..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-body font-medium"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  location_on
                </span>
              </div>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col gap-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-body font-medium"
                />
              </div>
            </div>

            {/* Time Selector */}
            <div className="flex flex-col gap-2">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
                Time Preference
              </label>
              <div className="relative">
                <select
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body font-medium"
                >
                  <option>Morning (6am - 12pm)</option>
                  <option>Afternoon (12pm - 5pm)</option>
                  <option>Evening (5pm - 10pm)</option>
                  <option>Night (10pm - 2am)</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                  schedule
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="kinetic-gradient text-on-primary-container px-10 py-4 rounded-full font-headline font-extrabold text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all shadow-lg">
              Find Available Slots
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                search
              </span>
            </button>
          </div>
        </section>

        {/* Availability Heatmap */}
        <div className="mb-12 flex flex-col gap-4">
          <h3 className="font-headline font-bold text-lg">
            Peak Activity Heatmap
          </h3>
          <div className="w-full h-3 flex rounded-full overflow-hidden bg-surface-container-highest">
            <div className="h-full bg-secondary-fixed w-1/4"></div>
            <div className="h-full bg-primary-fixed w-1/2"></div>
            <div className="h-full bg-secondary-fixed w-1/4"></div>
          </div>
          <div className="flex justify-between text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-tighter">
            <span>06:00 AM</span>
            <span>12:00 PM (Peak)</span>
            <span>10:00 PM</span>
          </div>
        </div>

        {/* Available Courts Section */}
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-black tracking-tight font-headline">
            AVAILABLE <span className="text-primary">COURTS</span>
          </h2>
          <p className="text-sm font-body text-on-surface-variant">
            12 courts found near your location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courts.map((court) => (
            <div
              key={court.id}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={court.name}
                  src={court.image}
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-amber-500 text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-xs font-bold font-headline">
                    {court.rating}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-md font-headline font-bold text-xs">
                  {court.sport}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors">
                    {court.name}
                  </h3>
                  <span className="text-primary font-black font-headline">
                    ${court.price}
                    <span className="text-xs text-on-surface-variant font-normal">
                      /hr
                    </span>
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-body mb-6 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  {court.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {court.slots.map((slot, index) => (
                    <button
                      key={index}
                      className={`px-3 py-2 rounded-lg text-xs font-bold font-headline transition-colors ${
                        index === 2
                          ? "bg-primary-container text-on-primary-container"
                          : "bg-surface-container hover:bg-primary-container hover:text-on-primary-container"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <button className="mt-auto w-full bg-on-surface text-white py-4 rounded-xl font-headline font-extrabold text-xs uppercase tracking-widest hover:bg-primary transition-all active:scale-95">
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Ground Owner Section */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-96">
          <div className="md:col-span-8 bg-surface-container-high rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group">
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700"
              alt="Athlete walking onto field"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-sYiIqPPLjz_uc6dkxeTpkHz0ayw9Elq9tfqWAb9S0KhW30M4hakPJD7ExfgMM-2drylxThRbyaBUUfrycCarOwcXzMBRJVR1wTx1kE0tqUD0hnfobNTG-QDfOFIxaBO4-jakPzb9rMcyScrelS3aR2K8ryYMe6Ubjc7B2Tg2BSFBTuVuNK7vqTiuNIm2-cq9JQOt-QXO4f2PzV2oPc8KEaT2KcyPnb064wOskEOQLj-cUc_e3B2s-ZLuMC-NWknE8oTCMQnsBvY"
            />
            <div className="relative z-10">
              <span className="text-primary font-headline font-black text-sm uppercase tracking-[0.3em] mb-2 block">
                Premium Experience
              </span>
              <h2 className="text-4xl font-black mb-4 font-headline">
                WANT TO LIST YOUR OWN ARENA?
              </h2>
              <p className="max-w-md text-on-surface font-body mb-8">
                Join the 500+ venue owners who have scaled their booking revenue
                with Pool Play analytics and management tools.
              </p>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-extrabold text-xs tracking-widest">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="md:col-span-4 bg-primary-container rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl text-on-primary-container mb-4">
              bolt
            </span>
            <h3 className="text-2xl font-black text-on-primary-container leading-tight font-headline">
              INSTANT <br /> CONFIRMATION
            </h3>
            <p className="text-on-primary-container/80 font-body text-sm mt-4">
              No waiting. No calls. Just show up and play.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
