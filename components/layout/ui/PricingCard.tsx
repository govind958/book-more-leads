"use client";

const features = [
  "Professional Contractor Website",
  "Local SEO & Google Visibility",
  "Automated Review Generation",
  "Appointment Booking System",
  "Automated Lead Follow-Up",
  "Past Customer & Referral Follow-Up",
];

const customFeatures = [
  "Custom Website & Features",
  "Custom Automations",
  "Custom Lead Management",
  "Custom Integrations",
  "Built Around Your Workflow",
  "Dedicated Setup & Support",
];

export default function PricingCard() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto grid w-full max-w-[880px] grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Lead → Job System */}
        <div className="relative w-full">

          {/* Halo */}
          <div className="absolute -inset-4 rounded-[2rem] bg-[#2563EB]/20 blur-2xl" />

          <div className="relative rounded-2xl bg-[#0F1D30] p-6 text-white shadow-xl sm:p-7">

            <div className="mb-5 inline-flex rounded-full bg-[#1D3552] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Lead → Job System
            </div>

            <h3 className="text-xl font-bold">
              Everything you need to turn leads into jobs
            </h3>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-extrabold">$297</span>
              <span className="mb-1 text-sm text-slate-400">/ month</span>
            </div>

            <div className="my-6 h-px bg-[#263B50]" />

            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB]">
                    <span className="text-xs">✓</span>
                  </div>

                  <span className="text-sm text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/callbooking"
              className="mt-7 flex h-12 items-center justify-center rounded-lg bg-[#1683F7] text-sm font-bold text-white transition hover:bg-[#0f75df]"
            >
              Start Your 14-Day Trial
            </a>

            <p className="mt-3 text-center text-xs text-slate-400">
              No long-term commitment
            </p>
          </div>
        </div>

        {/* Custom Orders */}
        <div className="relative w-full">

          {/* Different Blue Halo */}
          <div className="absolute -inset-4 rounded-[2rem] bg-[#60A5FA]/25 blur-2xl" />

          {/* Different Card Color */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#172E4A] via-[#163B63] to-[#15538A] p-6 text-white shadow-xl sm:p-7">

            <div className="mb-5 inline-flex rounded-full bg-[#244D73] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#BFDBFE]">
              Custom Orders
            </div>

            <h3 className="text-xl font-bold">
              Need something built specifically for your business?
            </h3>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-extrabold">
                Custom
              </span>
            </div>

            <div className="my-6 h-px bg-[#37678F]" />

            <div className="space-y-3">
              {customFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#60A5FA]">
                    <span className="text-xs text-[#0F1D30]">✓</span>
                  </div>

                  <span className="text-sm text-blue-50">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/callbooking"
              className="mt-7 flex h-12 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#15538A] transition hover:bg-blue-50"
            >
              Talk About Your Project
            </a>

            <p className="mt-3 text-center text-xs text-blue-100/70">
              Built around your business
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}