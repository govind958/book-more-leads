"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import SetupSteps from "@/components/layout/ui/HOWITWORKS";
import PricingCard from "@/components/layout/ui/PricingCard";
import SuccessStoriess from "@/components/layout/ui/SuccessStories";
import TargetIndustries from "@/components/layout/ui/TargetIndustries";
import Navbar from "@/components/layout/Navbar";
import PlatformCompatibility from "@/components/layout/ui/PlatformCompatibility";
import MoneyBackGuarantee from "@/components/layout/ui/MoneyBackGuarantee";

import {
  CalendarCheck,
  Check,
  ChevronDown,
  Globe,
  PhoneCall,
  Search,
  Star,
  Repeat,
  ArrowUpRight,
  ArrowRight,
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

const faqs = [
  {
    question: "What makes your agency model different from traditional agencies?",
    answer:
      "Traditional agencies charge thousands in upfront setup fees ($2,000–$5,000) and lock contractors into 12-month retainers. We provide an all-in-one growth system—custom SEO site, review automation, missed-call auto-texting—for $297/month with zero setup fees.",
  },
  {
    question: "Are there really no setup fees or long-term contracts?",
    answer:
      "Yes. We charge a simple $297/month flat rate with $0 setup fees and no long-term contract lock-ins. Cancel anytime if you're not satisfied.",
  },
  {
    question: "How involved do I need to be in setting this up?",
    answer:
      "Minimal. After a quick 20-minute onboarding call, our team builds and configures your entire system so you can stay focused on your jobs.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Once we collect your business info during onboarding, your custom website and lead automation workflows are live within a few business days.",
  },
];

const NAVBAR_TO_CONTENT_GAP = "mt-16 sm:mt-20 md:mt-24 lg:mt-28";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#070e12] text-white font-sans overflow-x-hidden">
      {/* HERO GLOW / BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[350px] w-[90vw] sm:h-[500px] sm:w-[600px] md:h-[600px] md:w-[800px] -translate-x-1/2 rounded-full bg-[#0d1d2b] blur-[100px] sm:blur-[140px] opacity-60" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className={`relative z-10 scroll-mt-20 ${NAVBAR_TO_CONTENT_GAP} px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32`}
      >
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          {/* Top Pill / Badge */}
          <Reveal>
            <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-700/80 bg-slate-900/80 py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md sm:mb-8">
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
                New
              </span>
              <span className="truncate">$0 setup fee — everything live in 14 days</span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={100}>
            <h1 className="w-full max-w-4xl text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              While You Run the Crew,
              <span className="mt-2 block text-[clamp(2rem,6vw,4.5rem)] font-normal italic tracking-normal text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text sm:mt-3">
                We Book the Jobs
              </span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={200}>
            <p className="mt-6 w-full max-w-2xl text-[clamp(0.85rem,2vw,1.125rem)] font-light leading-relaxed text-slate-300 sm:mt-8">
              Your complete done-for-you growth engine: 15–20 page SEO website, automated 5-star review capture, missed-call text-back with AI follow-up, and seasonal rebooking campaigns —{" "}
              <strong className="font-semibold text-white">$297/month</strong>,{" "}
              <strong className="font-semibold text-white">$0 setup</strong>, no contracts.
            </p>
          </Reveal>

          {/* CTA + Risk Reversal */}
          <Reveal delay={300} className="mt-8 flex w-full flex-col items-center sm:mt-10">
            <button
              onClick={() => (window.location.href = "/growth")}
              className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-950/50 transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>BOOK A CALL</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>

            <p className="mt-4 text-xs font-medium tracking-wide text-slate-400">
              No setup fees · Cancel anytime · Paid ads only if you want them later
            </p>

            {/* Social Proof */}
            <div className="mt-6 flex w-full items-center justify-center gap-3.5 sm:mt-7">
              {/* Avatar Stack */}
              <div className="flex shrink-0 -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Client avatar ${i + 1}`}
                    className="h-9 w-9 rounded-full border-2 border-slate-900 object-cover ring-2 ring-slate-700/50 sm:h-10 sm:w-10"
                  />
                ))}
              </div>

              {/* Rating Stars & Text */}
              <div className="flex min-w-0 flex-col items-start gap-0.5 text-left">
                <div className="flex items-center gap-1.5">
                  <div className="flex shrink-0 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white">4.9/5</span>
                </div>
                <span className="whitespace-nowrap text-xs text-slate-400">
                  Trusted by <span className="font-semibold text-slate-300">20k+ contractors</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLATFORM COMPATIBILITY */}
      <PlatformCompatibility />

      {/* SETUP STEPS */}
      <SetupSteps />

      {/* SUCCESS STORIES */}
      <SuccessStoriess />

      {/* PRICING CARD */}
      <PricingCard />

      {/* TARGET INDUSTRIES */}
      <TargetIndustries />

      {/* MONEY BACK GUARANTEE / CTA */}
      <MoneyBackGuarantee />

      {/* FAQ SECTION */}
      <section id="faq" className="relative z-10 border-t border-slate-800 bg-[#070e12] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-slate-800 bg-[#0f172a] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>
            <h2 className="mt-4 sm:mt-5 text-[clamp(1.5rem,4vw,3rem)] font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
              Everything you need to know about getting started.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 sm:mt-14 divide-y divide-slate-800 border-y border-slate-800 text-center">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white w-full text-center">
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
                      <p className="mx-auto max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-300 text-center">
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