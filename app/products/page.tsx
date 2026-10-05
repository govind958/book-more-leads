"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  PhoneCall,
  RefreshCcw,
  Star,
} from "lucide-react";

/*
 * ------------------------------------------------------------------
 * SMOOTH SCROLL — add these two rules to your globals.css:
 *
 *   html { scroll-behavior: smooth; }
 *   section[id] { scroll-margin-top: 5rem; }  // offsets the fixed navbar
 * ------------------------------------------------------------------
 */

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

const systems = [
  {
    number: "1",
    label: "ATTRACT",
    title: "GET FOUND",
    description:
      "Give local customers a clear reason to find, trust, and contact your contracting business.",
    icon: Globe,
    // Swap these for your own photos in /public
    image:
      "https://kimi-web-img.kimi.ai/img/intariandesign.com/3a706935d1ef49d3233b3d3ae779bed04f5ad111.webp",
    points: [
      "High-converting contractor website",
      "Local visibility foundations",
      "Clear offers and calls-to-action",
    ],
  },
  {
    number: "2",
    label: "CAPTURE",
    title: "DON'T LOSE LEADS",
    description:
      "Make sure new opportunities get an immediate response instead of disappearing into missed calls and inboxes.",
    icon: PhoneCall,
    image:
      "https://kimi-web-img.kimi.ai/img/trusteyman.com/b0c439b2f6480c6995c28a7401bf3ea9f4a2a7f1.jpeg",
    points: [
      "Missed-call textback",
      "Lead capture and notifications",
      "Instant response workflows",
    ],
  },
  {
    number: "3",
    label: "DELIVER",
    title: "TURN JOBS INTO REVIEWS",
    description:
      "Keep prospects moving toward appointments while creating a repeatable process for asking happy customers for reviews.",
    icon: Star,
    image:
      "https://kimi-web-img.kimi.ai/img/www.neit.edu/a7a5d92b638f9ac08de6ac42d90615b5740d7c87.jpg",
    points: [
      "Lead follow-up sequences",
      "Appointment booking",
      "Automated review requests",
    ],
  },
  {
    number: "4",
    label: "REPEAT",
    title: "BRING CUSTOMERS BACK",
    description:
      "Stay connected after the job so your past customers can become repeat business and referrals.",
    icon: RefreshCcw,
    image:
      "https://kimi-web-img.kimi.ai/img/www.prestigeroofinglv.com/946cb8ddbcd757c5653b72aa23d656f55d08adf8.jpg",
    points: [
      "Customer follow-up",
      "Repeat-job opportunities",
      "Long-term customer touchpoints",
    ],
  },
];

const faqs = [
  {
    question: "What exactly is the Lead → Job System?",
    answer:
      "It's a connected system designed around the journey from a potential customer finding your business to becoming a booked job and eventually a repeat customer. Depending on your business, it can include your website, lead capture, missed-call textback, follow-up, appointment booking, review automation, and customer re-engagement.",
  },
  {
    question: "Do I need to use every part of the system?",
    answer:
      "No. We build around what your business actually needs. If your website is already working well, we can focus on lead response and follow-up. If you're losing opportunities because people can't easily contact you, we can start there.",
  },
  {
    question: "What happens when I miss a call?",
    answer:
      "The system can automatically send a follow-up message so the caller knows their inquiry was received. This helps create a faster response while you're on a job, driving, with a customer, or otherwise unable to answer.",
  },
  {
    question: "Can the system automatically follow up with leads?",
    answer:
      "Yes. Follow-up can be configured around the way your business handles new inquiries. The goal is to keep conversations moving instead of allowing a potential customer to sit unanswered.",
  },
  {
    question: "Can customers book appointments automatically?",
    answer:
      "Yes. We can connect your lead response and follow-up with appointment booking so prospects have a simple next step without requiring endless back-and-forth.",
  },
  {
    question: "Will this replace my existing website?",
    answer:
      "Not necessarily. We can work with your existing website when it makes sense, or build a new contractor-focused website when your current site is creating unnecessary friction for potential customers.",
  },
  {
    question: "Is this only for roofing companies?",
    answer:
      "No. The system is designed for home-service businesses including roofing, HVAC, plumbing, electrical, solar, landscaping, remodeling, painting, and other contractor businesses.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the parts of the system your business actually needs. Book a strategy call and we'll walk through the setup and monthly service options.",
  },
];

const NAVBAR_TO_SYSTEM_GAP = "mt-16 sm:mt-20 md:mt-24 lg:mt-28";

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#070e12] text-white font-sans overflow-x-hidden">
      {/* HERO GLOW / BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[350px] w-[90vw] sm:h-[500px] sm:w-[600px] md:h-[600px] md:w-[800px] -translate-x-1/2 rounded-full bg-[#0d1d2b] blur-[100px] sm:blur-[140px] opacity-60" />

      {/* NAVBAR */}
      <Navbar />

      {/* SYSTEM SECTION */}
      <section
        id="system"
        className={`relative z-10 scroll-mt-20 ${NAVBAR_TO_SYSTEM_GAP}`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          {/* HEADER */}
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-slate-800 bg-[#0f172a] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              The Lead → Job System
            </span>

            {/* clamp() keeps the type fluid on every screen size */}
            <h1 className="mt-4 sm:mt-6 text-[clamp(1.75rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              One system for{" "}
              <span className="text-blue-400">more booked jobs.</span>
            </h1>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[clamp(0.8rem,2vw,1.125rem)] leading-6 sm:leading-7 text-slate-300">
              Everything we build is connected around one goal: helping contractors capture more opportunities, respond faster, and turn more leads into jobs.
            </p>
          </Reveal>

          {/* RESPONSIVE VERTICAL SCROLLING TIMELINE */}
          <div className="relative mx-auto mt-12 sm:mt-16 w-full max-w-3xl">
            {/* Dashed line — offsets match the circle centers:
                48px circle → 23px · 64px → 31px · 80px → 39px */}
            <div className="absolute left-[23px] sm:left-[31px] md:left-[39px] top-6 bottom-8 w-[2px] border-l-2 border-dashed border-blue-400/40" />

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {systems.map((system, index) => {
                const Icon = system.icon;

                return (
                  <Reveal key={system.number} delay={index * 120}>
                    <div className="relative flex items-stretch sm:items-center gap-3 sm:gap-6 md:gap-8 group">
                      {/* Circle Number Badge */}
                      <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 shrink-0 items-center justify-center self-start sm:self-center rounded-full bg-[#0f172a] border-2 border-slate-800 text-white shadow-xl shadow-black/40 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400">
                        <span className="text-lg sm:text-2xl md:text-3xl font-black text-white">
                          {system.number}
                        </span>
                      </div>

                      {/* Pill Card with image background */}
                      <div className="group/card relative min-w-0 flex-1 overflow-hidden rounded-[20px] sm:rounded-[24px] sm:rounded-r-[100px] border border-slate-800 bg-[#0f172a] shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-blue-950/40">
                        {/* Photo background — subtle at rest, blooms on hover */}
                        <img
                          src={system.image}
                          alt=""
                          loading="lazy"
                          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14] transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-30"
                        />
                        {/* Readability overlay — heavier on the text side */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]/40" />

                        {/* Card content */}
                        <div className="relative z-10 p-4 sm:px-8 sm:py-7">
                          {/* Card Header (Underlined Title) */}
                          <div className="flex items-center gap-2 sm:gap-3 border-b border-slate-800/80 pb-1.5 w-full sm:w-fit">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 shrink-0" />
                            <h2 className="text-xs sm:text-lg md:text-xl font-bold uppercase tracking-wider text-white truncate sm:whitespace-normal">
                              {system.label} &bull; {system.title}
                            </h2>
                          </div>

                          {/* Description Text */}
                          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base leading-normal sm:leading-relaxed text-slate-300 font-normal">
                            {system.description}
                          </p>

                          {/* Content Points */}
                          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                            {system.points.map((point) => (
                              <span
                                key={point}
                                className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-slate-700/80 bg-[#070e12]/70 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs text-slate-300"
                              >
                                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-cyan-300 shrink-0" />
                                <span>{point}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* FLOW BADGES */}
          <Reveal
            delay={150}
            className="mx-auto mt-12 sm:mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-center"
          >
            <span className="rounded-full border border-slate-800 bg-[#0f172a] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400 shadow-sm">
              Attract
            </span>

            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500" />

            <span className="rounded-full border border-slate-800 bg-[#0f172a] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300 shadow-sm">
              Capture
            </span>

            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500" />

            <span className="rounded-full border border-slate-800 bg-[#0f172a] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-amber-400 shadow-sm">
              Deliver
            </span>

            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500" />

            <span className="rounded-full border border-slate-800 bg-[#0f172a] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400 shadow-sm">
              Repeat
            </span>
          </Reveal>
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
              Everything you need to know about the Lead → Job System.
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