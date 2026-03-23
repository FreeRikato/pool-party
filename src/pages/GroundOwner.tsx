import { useState } from "react";
import Select from "../components/Select";

export default function GroundOwner() {
  const [formData, setFormData] = useState({
    facilityName: "",
    sportType: "Tennis",
    location: "",
    hourlyRate: "",
    availableSlots: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero & Form Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Headline Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-12 -left-6 w-32 h-32 kinetic-gradient opacity-10 rounded-full blur-3xl"></div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[0.95] tracking-tight mb-8">
                List Your Facility{" "}
                <span className="text-primary italic">and Grow</span> Your
                Community.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md mb-12">
                Turn your empty courts into vibrant hubs. Streamline bookings,
                manage your schedule, and connect with thousands of local
                athletes instantly.
              </p>
              {/* Stats Display */}
              <div className="flex gap-4 mt-8">
                <div className="bg-surface-container-low p-6 rounded-xl flex-1">
                  <span className="block font-headline text-3xl font-bold text-primary">
                    45%
                  </span>
                  <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                    Avg. Booking Increase
                  </span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex-1 mt-4">
                  <span className="block font-headline text-3xl font-bold text-secondary">
                    2.4k
                  </span>
                  <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                    Active Local Players
                  </span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="add_business"
                  >
                    add_business
                  </span>
                  New Facility Registration
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">
                      Facility Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Downtown Arena"
                      value={formData.facilityName}
                      onChange={(e) =>
                        setFormData({ ...formData, facilityName: e.target.value })
                      }
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all font-body outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">
                      Sport Type
                    </label>
                    <Select
                      value={formData.sportType}
                      onChange={(value) =>
                        setFormData({ ...formData, sportType: value })
                      }
                      options={[
                        { value: "Tennis", label: "Tennis" },
                        { value: "Basketball", label: "Basketball" },
                        { value: "Futsal", label: "Futsal" },
                        { value: "Padel", label: "Padel" },
                        { value: "Swimming", label: "Swimming" },
                      ]}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">
                      Location/Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter full street address"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all font-body outline-none"
                      />
                      <span
                        className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
                        data-icon="location_on"
                      >
                        location_on
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">
                      Hourly Rate ($)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={formData.hourlyRate}
                      onChange={(e) =>
                        setFormData({ ...formData, hourlyRate: e.target.value })
                      }
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all font-body outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">
                      Available Slots
                    </label>
                    <input
                      type="text"
                      placeholder="08:00 AM - 10:00 PM"
                      value={formData.availableSlots}
                      onChange={(e) =>
                        setFormData({ ...formData, availableSlots: e.target.value })
                      }
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all font-body outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="w-full kinetic-gradient text-on-primary-container font-headline font-bold py-4 rounded-full text-lg shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                    >
                      Add Facility
                    </button>
                    <p className="text-center text-xs text-on-surface-variant mt-4 font-label">
                      By clicking &quot;Add Facility&quot;, you agree to our Terms of
                      Service for Partners.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Bento Grid Style */}
        <section className="bg-surface-container-low py-24 -mx-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
                Why list on Pool Play?
              </h2>
              <div className="h-1.5 w-24 bg-primary-container rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Feature 1: Main Highlight */}
              <div className="md:col-span-4 lg:col-span-3 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between group overflow-hidden relative">
                <div className="z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <span
                      className="material-symbols-outlined text-primary group-hover:text-white"
                      data-icon="trending_up"
                    >
                      trending_up
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">
                    Increased Bookings
                  </h3>
                  <p className="text-on-surface-variant mb-6">
                    Gain access to a passionate community of players actively
                    looking for spaces. Our algorithm prioritizes high-quality
                    listings to maximize your revenue.
                  </p>
                </div>
                <img
                  className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 z-10"
                  alt="Athletes playing tennis"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcqZpoXrLvyPwf9W5nttZFZ7Zwiig1QLCWkp8G-QYRTFrVLO3KtSte_W8nYZWxrb-ppwHe8pqXqM-SVYHmk_N2FatXD-d0J8fL4pl0FbsQyHddPz7ETrU43FxZG9gNJdrs1rSyFbNSomDxYA5klX-QQfUGYBINpH3o9WqUlcj_Yb6b094KeJg0V0iEyn0JGFa5Rc2vQ-C-xVc7DalOQVbSmJcgt3nFJR8rV71I5LDvaFKmDOWu8I3i22wIzen45SkqYETC06Sj7Is"
                />
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-2 lg:col-span-3 bg-secondary text-on-secondary p-8 rounded-3xl shadow-sm flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <span
                    className="material-symbols-outlined text-[160px]"
                    data-icon="calendar_month"
                  >
                    calendar_month
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined"
                    data-icon="event_available"
                  >
                    event_available
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Easy Slot Management
                </h3>
                <p className="opacity-80">
                  Intuitive drag-and-drop calendar interface. Block out
                  maintenance hours or set dynamic pricing for peak times with
                  just a few clicks.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-2 lg:col-span-2 bg-surface-container-highest p-8 rounded-3xl shadow-sm">
                <span
                  className="material-symbols-outlined text-primary mb-4 text-3xl"
                  data-icon="payments"
                >
                  payments
                </span>
                <h4 className="font-headline text-xl font-bold mb-2">
                  Automated Payouts
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Secure, weekly payouts directly to your bank account. No more
                  chasing manual payments.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-2 lg:col-span-2 bg-surface-container-highest p-8 rounded-3xl shadow-sm">
                <span
                  className="material-symbols-outlined text-primary mb-4 text-3xl"
                  data-icon="analytics"
                >
                  analytics
                </span>
                <h4 className="font-headline text-xl font-bold mb-2">
                  Detailed Analytics
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Track your growth with heatmaps, occupancy rates, and player
                  demographic insights.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="md:col-span-4 lg:col-span-2 bg-surface-container-highest p-8 rounded-3xl shadow-sm">
                <span
                  className="material-symbols-outlined text-primary mb-4 text-3xl"
                  data-icon="support_agent"
                >
                  support_agent
                </span>
                <h4 className="font-headline text-xl font-bold mb-2">
                  24/7 Owner Support
                </h4>
                <p className="text-sm text-on-surface-variant">
                  A dedicated team to help you optimize your facility profile
                  and resolve any player disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard View Preview */}
        <section className="py-24">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-1 shadow-sm overflow-hidden ring-1 ring-outline-variant/10">
            <div className="bg-surface-container-low px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-headline text-xl font-bold">
                  Manager Dashboard
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Live overview for &quot;Arena One - Central Park&quot;
                </p>
              </div>
              <div className="flex gap-2">
                <div className="bg-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-on-surface-variant border border-outline-variant/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>{" "}
                  Live
                </div>
                <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-surface-variant transition-colors">
                  Export Report
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: List */}
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-4">
                    Upcoming Bookings
                  </h4>
                  {/* Booking Row 1 */}
                  <div className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary">
                        AM
                      </div>
                      <div>
                        <p className="font-bold">Alex Martinez</p>
                        <p className="text-sm text-on-surface-variant">
                          Court 1 • Tennis • 18:00 - 19:00
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-primary">$45.00</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-primary-container/20 text-on-primary-container px-2 py-1 rounded">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  {/* Booking Row 2 */}
                  <div className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary">
                        SR
                      </div>
                      <div>
                        <p className="font-bold">Sarah Reed</p>
                        <p className="text-sm text-on-surface-variant">
                          Court 3 • Padel • 19:30 - 21:00
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-primary">$60.00</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-primary-container/20 text-on-primary-container px-2 py-1 rounded">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  {/* Booking Row 3 */}
                  <div className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-on-secondary flex items-center justify-center font-bold text-secondary-dim">
                        JK
                      </div>
                      <div>
                        <p className="font-bold">John Kim</p>
                        <p className="text-sm text-on-surface-variant">
                          Court 1 • Tennis • 21:00 - 22:00
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-on-surface-variant">
                        $45.00
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-outline-variant/20 text-on-surface-variant px-2 py-1 rounded">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Visual Data */}
                <div className="lg:col-span-4 space-y-6">
                  <h4 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em]">
                    Popularity Heatmap
                  </h4>
                  <div className="bg-surface-container-low p-6 rounded-3xl aspect-square flex flex-col justify-end gap-2 overflow-hidden relative">
                    <div className="flex items-end gap-1 h-full">
                      <div
                        className="flex-1 bg-secondary-container rounded-t-lg"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="flex-1 bg-secondary-container rounded-t-lg"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="flex-1 bg-primary-container rounded-t-lg"
                        style={{ height: "90%" }}
                      ></div>
                      <div
                        className="flex-1 bg-primary rounded-t-lg"
                        style={{ height: "100%" }}
                      ></div>
                      <div
                        className="flex-1 bg-primary-container rounded-t-lg"
                        style={{ height: "85%" }}
                      ></div>
                      <div
                        className="flex-1 bg-secondary-container rounded-t-lg"
                        style={{ height: "50%" }}
                      ></div>
                      <div
                        className="flex-1 bg-secondary-container rounded-t-lg"
                        style={{ height: "30%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-on-surface-variant mt-2 uppercase">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Sun</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none"></div>
                  </div>
                  <div className="bg-primary text-on-primary p-6 rounded-3xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-70">
                        Weekly Rev
                      </p>
                      <p className="text-2xl font-headline font-bold">$4,280</p>
                    </div>
                    <span
                      className="material-symbols-outlined text-4xl opacity-50"
                      data-icon="account_balance_wallet"
                    >
                      account_balance_wallet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
