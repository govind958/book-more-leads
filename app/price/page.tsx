"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowRight,
  Check,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Reveal — fades + slides content in the first time it scrolls      */
/*  into view. Pure IntersectionObserver, no animation library.       */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    badge: "Starter",
    monthlyPrice: 97,
    yearlyPrice: 970,
    description: "Perfect for smaller businesses and solo marketers",
    features: [
      "3 Sub-Accounts",
      "Unlimited Contacts",
      "Unlimited Users",
      "24/7 Support",
      "All Core Features",
    ],
    isPopular: false,
  },
  {
    name: "Unlimited",
    badge: "Unlimited",
    popularBadge: "MOST POPULAR",
    monthlyPrice: 297,
    yearlyPrice: 2970,
    description: "Built for growing agencies",
    featuresHeader: "Everything in Starter Plan and...",
    features: [
      "Unlimited Sub-Accounts",
      "Rebill Phone & Email (no markup)",
      "Basic API Access",
    ],
    isPopular: true,
  },
  {
    name: "Agency Pro",
    badge: "Agency Pro",
    monthlyPrice: 497,
    yearlyPrice: 4970,
    description: "Ideal for SaaSPRENEURs & Agencies looking to go SaaS",
    featuresHeader: "Everything in Unlimited Plan and...",
    features: [
      "SaaS Mode",
      "Automated Sub-Account Creation",
      "Rebill Phone & Email with Markup",
      "User/Agent Reporting",
    ],
    isPopular: false,
  },
];

const faqs = [
  {
    question: "What is included in the 14-day free trial?",
    answer:
      "You get full access to all features on your chosen plan for 14 days with zero restrictions. You won't be charged until the trial period ends.",
  },
  {
    question: "Can I change or cancel my plan later?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard.",
  },
  {
    question: "Are there limits on contacts or users?",
    answer:
      "No! All plans include unlimited contacts and unlimited users so your team can scale without any arbitrary growth penalties.",
  },
  {
    question: "How does SaaS Mode work on the Agency Pro plan?",
    answer:
      "SaaS Mode allows you to repackage and resell the platform under your own brand, set your own pricing, and automate sub-account provisioning for your clients.",
  },
];

const NAVBAR_TO_CONTENT_GAP = "mt-16 sm:mt-20 md:mt-24 lg:mt-28";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#070e12] text-white font-sans overflow-x-hidden">
      {/* HERO GLOW / BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[350px] w-[90vw] sm:h-[500px] sm:w-[600px] md:h-[600px] md:w-[800px] -translate-x-1/2 rounded-full bg-[#0d1d2b] blur-[100px] sm:blur-[140px] opacity-60" />

      {/* NAVBAR */}
      <Navbar />

      {/* PRICING SECTION */}
      <section
        id="pricing"
        className={`relative z-10 scroll-mt-20 ${NAVBAR_TO_CONTENT_GAP}`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          {/* HEADER */}
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-slate-800 bg-[#0f172a] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Pricing & Plans
            </span>

            <h1 className="mt-4 sm:mt-6 text-[clamp(1.75rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              Start with a <span className="text-blue-400">FREE 14-day trial</span> on
              <br className="hidden sm:inline" /> any plan below!
            </h1>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[clamp(0.8rem,2vw,1.125rem)] leading-6 sm:leading-7 text-slate-300">
              Unlimited contacts, unlimited Users. Scale your business without a tax on growth.
            </p>

            {/* TOGGLE BUTTONS */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <div className="inline-flex rounded-lg border border-slate-700/80 bg-slate-900/80 p-1.5 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`rounded-md px-6 sm:px-8 py-2.5 text-sm font-semibold transition-all ${
                    billing === "monthly"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  className={`rounded-md px-6 sm:px-8 py-2.5 text-sm font-semibold transition-all ${
                    billing === "yearly"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Save with annual
                </button>
              </div>
            </div>
          </Reveal>

          {/* PRICING CARDS GRID */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
            {plans.map((plan, index) => {
              const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <Reveal key={plan.name} delay={index * 120}>
                  <div
                    className={`relative flex flex-col rounded-[24px] p-6 sm:p-8 text-center transition-all ${
                      plan.isPopular
                        ? "border-2 border-blue-500 bg-[#0c1e3f] shadow-[0_0_50px_rgba(37,99,235,0.25)] lg:-translate-y-4"
                        : "border border-slate-800 bg-[#0f172a] shadow-xl shadow-black/40"
                    }`}
                  >
                    {/* MOST POPULAR BADGE */}
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-blue-400/30 bg-blue-600 px-6 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        {plan.popularBadge}
                      </div>
                    )}

                    {/* PLAN TITLE BADGE */}
                    <div className="mt-2">
                      <span className="inline-block rounded-md border border-slate-700/60 bg-slate-800/50 px-4 py-1 text-sm font-medium text-slate-200">
                        {plan.badge}
                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="mt-6 flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-400">
                        /{billing === "monthly" ? "Month" : "Year"}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 min-h-[40px] text-xs leading-5 text-slate-300 sm:text-sm">
                      {plan.description}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-6 border-t border-slate-800/80" />

                    {/* FEATURES HEADER (IF ANY) */}
                    {plan.featuresHeader && (
                      <p className="mb-6 text-sm font-semibold text-slate-200">
                        {plan.featuresHeader}
                      </p>
                    )}

                    {/* FEATURES LIST */}
                    <ul className="space-y-4 text-xs font-medium text-slate-300 sm:text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="border-b border-slate-800/40 pb-3 last:border-0 flex items-center justify-center gap-2">
                          <Check className="h-4 w-4 text-cyan-300 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 overflow-hidden border-y border-slate-800 bg-[#0d1d2b]/60 py-16 sm:py-24 lg:py-32">
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              One connected system
            </p>

            <h2 className="mt-4 sm:mt-5 text-[clamp(1.75rem,5vw,3.75rem)] font-extrabold tracking-tight text-white">
              More opportunities.
              <span className="block text-blue-400">Less leakage.</span>
            </h2>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-slate-300">
              Stop letting good opportunities disappear between the first inquiry and the booked job.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mt-8 sm:mt-10">
              <a
                href="/callbooking"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-blue-950/50 transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="-space-x-2 flex items-center">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt=""
                    className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/80?img=32"
                    alt=""
                    className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/80?img=47"
                    alt=""
                    className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-blue-600 object-cover"
                  />
                </div>

                <span>Book a Free Strategy Call</span>

                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                20-minute call
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                No pressure
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                See where leads are being lost
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        className="relative z-10 scroll-mt-20 bg-[#070e12] border-t border-slate-800"
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <Reveal className="text-center">
            <span className="inline-flex rounded-full border border-slate-800 bg-[#0f172a] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-4 sm:mt-5 text-[clamp(1.5rem,4vw,3rem)] font-extrabold tracking-tight text-white">
              Questions? We've got answers.
            </h2>

            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
              Everything you need to know about pricing and plans.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 sm:mt-14 divide-y divide-slate-800 border-y border-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] pb-4 sm:pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}