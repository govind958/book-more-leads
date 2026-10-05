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
    name: "Contractor Advanced",
    badge: "Contractor Advanced",
    popularBadge: "MOST POPULAR",
    monthlyPrice: 297,
    yearlyPrice: 2970,
    description: "Complete system built to help contractors scale and capture lost leads.",
    features: [
      "Functional Website (10–20 pages)",
      "Automated Lead Follow Up",
      "Missed Call Text Back",
      "5-Star Magic Review Funnel",
      "One-Click Marketing Campaigns",
      "On-Site SEO",
    ],
    isPopular: true,
  },
];

const contractorAdvancedFeatures = [
  {
    title: "Functional Website (10–20 pages)",
    description:
      "No customer wants to go back and forth over email… Get a website that turns leads into text conversations.",
    points: [
      "Website chat that creates text conversations and instant SMS confirmations sent to your leads on autopilot.",
      "Quote forms with automated text confirmations to your phone and your customer's phone, creating an SMS conversation with your lead.",
      "Hyperlinked phone numbers throughout the site.",
      "Website fully optimized to create text conversations. Everything gets sent to you over text, never email.",
    ],
  },
  {
    title: "Automated Lead Follow Up",
    description:
      "Once again, it's not rocket science… it's going to make you more money and make you look more professional.",
    points: [
      "Instant SMS confirmations sent to all website leads.",
    ],
  },
  {
    title: "Missed Call Text Back",
    description:
      "It's not rocket science… getting back to customers right away is going to make you more money.",
    points: [
      "Responding within an hour makes you 7 times more likely to qualify a lead.",
      "67% of customers will go to a competitor if they don't receive a quick response to their missed call.",
    ],
  },
  {
    title: "5-Star Magic Review Funnel",
    description:
      "Okay… It's not magic but it comes pretty close, and it's automated.",
    points: [
      "We'll prevent any bad reviews from being published on any of your public pages.",
      "Automatically follow up with customers until they leave you a review (we promise not to harass them with more than 4 reminders).",
    ],
  },
  {
    title: "One-Click Marketing Campaigns",
    description:
      "You know it, and we know it… The best customers are referrals and return customers. Let's get you both.",
    points: [
      "\"Sounds complicated...\" We set it all up and all you have to do is click a button. If you can't do that we might have a problem.",
      "We'll design marketing campaigns to automatically send discount offers to your past customers and request referrals at the same time.",
    ],
  },
  {
    title: "On-Site SEO",
    description:
      "Okay, let's see how much we can confuse you… Some nerdy tech mumbo jumbo with a bunch of buzzwords but it's actually super important.",
    points: [
      "Keyword research",
      "Optimizing all content for keywords",
      "Adding alt tags & JSON schema",
      "Optimizing images & page speed",
    ],
  },
];

const otherServices = [
  {
    title: "Google My Business Optimizations",
    description:
      "Optimize your local map listing to ensure higher local search visibility, drive direct phone calls, and gain high-intent regional traffic.",
  },
  {
    title: "Advanced SEO",
    description:
      "Comprehensive off-site link building, local citation authority, technical site auditing, and targeted content generation to outrank competitors.",
  },
  {
    title: "Google Ads",
    description:
      "High-converting Pay-Per-Click campaigns designed specifically for high-ticket contracting services, capturing homeowners looking to buy right now.",
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
    question: "What other services do you offer?",
    answer:
      "Beyond the Contractor Advanced plan, we offer additional services including Google My Business Optimizations, Advanced SEO, and Google Ads management.",
  },
];

const NAVBAR_TO_CONTENT_GAP = "mt-16 sm:mt-20 md:mt-24 lg:mt-28";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  /* State for Feature Accordions */
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const [openOtherService, setOpenOtherService] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#070e12] text-white font-sans overflow-x-hidden">
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
           
            <h1 className="mt-4 sm:mt-6 text-[clamp(1.75rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
               Our  <span className="text-blue-400">Price</span>
              <br className="hidden sm:inline" /> 
            </h1>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[clamp(0.8rem,2vw,1.125rem)] leading-6 sm:leading-7 text-slate-300">
              Unlimited contacts, unlimited Users. Scale your business without a tax on growth.
            </p>

            {/* TOGGLE BUTTONS */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <div className="inline-flex rounded-lg border border-slate-700/80 bg-slate-900/80 p-1.5">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`rounded-md px-6 sm:px-8 py-2.5 text-sm font-semibold transition-all ${
                    billing === "monthly"
                      ? "bg-blue-600 text-white"
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
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Save with annual
                </button>
              </div>
            </div>
          </Reveal>

          {/* PRICING CARD */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            {plans.map((plan, index) => {
              const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <Reveal key={plan.name} delay={index * 120} className="w-full max-w-md">
                  <div
                    className={`relative flex flex-col rounded-[24px] p-6 sm:p-8 text-center border border-slate-800 bg-[#0f172a] shadow-xl`}
                  >
                    {/* MOST POPULAR BADGE */}
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {plan.popularBadge}
                      </div>
                    )}

                    {/* PLAN TITLE */}
                    <div className="mt-2">
                      <h3 className="text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    {/* PRICE */}
                    <div className="mt-6 flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-400">
                        /{billing === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-xs leading-5 text-slate-300 sm:text-sm">
                      {plan.description}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-6 border-t border-slate-800" />

                    {/* FEATURES LIST */}
                    <ul className="space-y-4 text-xs font-medium text-slate-300 sm:text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="border-b border-slate-800/60 pb-3 last:border-0 flex items-center justify-center gap-2">
                          <Check className="h-4 w-4 text-blue-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* BOOK A CALL BUTTON */}
                    <div className="mt-8">
                      <a
                        href="/growth"
                        className="block w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
                      >
                        BOOK A CALL
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* FEATURE BREAKDOWN & OTHER SERVICES SECTION */}
          <div className="mt-20 sm:mt-28">
            <Reveal className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Service Breakdown
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              {/* LEFT COLUMN: CONTRACTOR ADVANCED EXPLAINERS */}
              <Reveal delay={100}>
                <div className="rounded-2xl border border-slate-800 bg-[#0f172a] p-4 sm:p-6">
                  <div className="rounded-xl bg-[#1e293b] py-3.5 px-4 text-center font-bold text-white text-lg sm:text-xl border border-slate-700/50 mb-6">
                    Contractor Advanced
                  </div>

                  <div className="space-y-3">
                    {contractorAdvancedFeatures.map((feat, idx) => {
                      const isOpen = openFeature === idx;

                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-800 bg-[#070e12] overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFeature(isOpen ? null : idx)}
                            className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left hover:bg-slate-800/30"
                          >
                            <span className="text-sm font-semibold text-slate-100">
                              {feat.title}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-blue-400" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`grid transition-all duration-200 ease-in-out ${
                              isOpen ? "grid-rows-[1fr] border-t border-slate-800" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="p-4 text-xs sm:text-sm text-slate-300 space-y-3">
                                <p className="text-slate-300 font-normal leading-relaxed">
                                  {feat.description}
                                </p>
                                <ul className="space-y-2 pt-2 border-t border-slate-800">
                                  {feat.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2 text-slate-400">
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* RIGHT COLUMN: OTHER SERVICES */}
              <Reveal delay={200}>
                <div className="rounded-2xl border border-slate-800 bg-[#0f172a] p-4 sm:p-6">
                  <div className="rounded-xl bg-[#1e293b] py-3.5 px-4 text-center font-bold text-white text-lg sm:text-xl border border-slate-700/50 mb-6">
                    Other Services
                  </div>

                  <div className="space-y-3">
                    {otherServices.map((service, idx) => {
                      const isOpen = openOtherService === idx;

                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-800 bg-[#070e12] overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenOtherService(isOpen ? null : idx)}
                            className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left hover:bg-slate-800/30"
                          >
                            <span className="text-sm font-semibold text-slate-100">
                              {service.title}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-blue-400" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`grid transition-all duration-200 ease-in-out ${
                              isOpen ? "grid-rows-[1fr] border-t border-slate-800" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 border-y border-slate-800 bg-[#0d1d2b] py-16 sm:py-24">
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
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
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-blue-500"
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
                <Check className="h-3.5 w-3.5 text-blue-400" />
                20-minute call
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-blue-400" />
                No pressure
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-blue-400" />
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
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left hover:bg-slate-900/30"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
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