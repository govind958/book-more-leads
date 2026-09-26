"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Globe,
  PhoneCall,
  RefreshCcw,
  Star,
  Workflow,
} from "lucide-react";

const systems = [
  {
    number: "01",
    label: "ATTRACT",
    title: "Get Found",
    description:
      "Give local customers a clear reason to find, trust, and contact your contracting business.",
    icon: Globe,
    color: "blue",
    points: [
      "High-converting contractor website",
      "Local visibility foundations",
      "Clear offers and calls-to-action",
    ],
    gradient:
      "from-[#102b46] via-[#0b1c2d] to-[#08151f]",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-400/20",
    iconColor: "text-blue-400",
    numberColor: "text-blue-300/70",
    dot: "bg-blue-400",
    accent: "text-blue-400",
  },
  {
    number: "02",
    label: "CAPTURE",
    title: "Don't Lose Leads",
    description:
      "Make sure new opportunities get an immediate response instead of disappearing into missed calls and inboxes.",
    icon: PhoneCall,
    color: "orange",
    points: [
      "Missed-call textback",
      "Lead capture and notifications",
      "Instant response workflows",
    ],
    gradient:
      "from-[#3a2818] via-[#211811] to-[#120f0b]",
    border: "border-orange-400/20",
    iconBg: "bg-orange-400/10",
    iconBorder: "border-orange-300/20",
    iconColor: "text-orange-300",
    numberColor: "text-orange-200/60",
    dot: "bg-orange-300",
    accent: "text-orange-300",
  },
  {
    number: "03",
    label: "DELIVER",
    title: "Turn Jobs Into Reviews",
    description:
      "Keep prospects moving toward appointments while creating a repeatable process for asking happy customers for reviews.",
    icon: Star,
    color: "yellow",
    points: [
      "Lead follow-up sequences",
      "Appointment booking",
      "Automated review requests",
    ],
    gradient:
      "from-[#383317] via-[#24210f] to-[#141308]",
    border: "border-yellow-400/20",
    iconBg: "bg-yellow-400/10",
    iconBorder: "border-yellow-300/20",
    iconColor: "text-yellow-300",
    numberColor: "text-yellow-200/60",
    dot: "bg-yellow-300",
    accent: "text-yellow-300",
  },
  {
    number: "04",
    label: "REPEAT",
    title: "Bring Customers Back",
    description:
      "Stay connected after the job so your past customers can become repeat business and referrals.",
    icon: RefreshCcw,
    color: "purple",
    points: [
      "Customer follow-up",
      "Repeat-job opportunities",
      "Long-term customer touchpoints",
    ],
    gradient:
      "from-[#30243e] via-[#21182d] to-[#120d1a]",
    border: "border-purple-400/20",
    iconBg: "bg-purple-400/10",
    iconBorder: "border-purple-300/20",
    iconColor: "text-purple-300",
    numberColor: "text-purple-200/60",
    dot: "bg-purple-300",
    accent: "text-purple-300",
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

const NAVBAR_TO_SYSTEM_GAP = "mt-20 sm:mt-24 lg:mt-28";

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b0a] text-slate-100">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />

      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      {/* NAVBAR */}

      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>

          <div className="leading-none">
            <div className="text-[15px] font-extrabold tracking-tight text-white">
              BOOK MORE{" "}
              <span className="text-blue-400">LEADS</span>
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Lead → Job System
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          <a
            href="/products"
            className="text-white transition-colors"
          >
            Products
          </a>

          <a
            href="/price"
            className="transition-colors hover:text-white"
          >
            Price
          </a>

          
        </div>

        <a
          href="/callbooking"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
        >
          Book a Call
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>

      {/* SYSTEM */}

      <section
        id="system"
        className={`relative z-10 ${NAVBAR_TO_SYSTEM_GAP}`}
      >
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          {/* HEADER */}

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              The Lead → Job System
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              One system for{" "}
              <span className="text-blue-400">
                more booked jobs.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Everything we build is connected around one goal:
              helping contractors capture more opportunities, respond
              faster, and turn more leads into jobs.
            </p>
          </div>

          {/* SYSTEM DIAGRAM */}

          <div className="relative mt-16">
            {/* Desktop connector */}

            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[42px] hidden h-px bg-slate-700/70 xl:block" />

            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[39px] hidden xl:block">
              <span className="absolute left-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.6)]" />
              <span className="absolute left-1/3 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(253,186,116,0.5)]" />
              <span className="absolute left-2/3 h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.5)]" />
              <span className="absolute right-0 h-2 w-2 translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,0.5)]" />
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {systems.map((system) => {
                const Icon = system.icon;

                return (
                  <div
                    key={system.number}
                    className={`group relative overflow-hidden rounded-[28px] border ${system.border} bg-gradient-to-br ${system.gradient} p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]`}
                  >
                    {/* Glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl transition-all duration-500 group-hover:bg-white/[0.06]" />

                    {/* Top */}

                    <div className="relative flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${system.iconBorder} ${system.iconBg}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${system.iconColor}`}
                        />
                      </div>

                      <span
                        className={`text-xs font-bold tracking-[0.22em] ${system.numberColor}`}
                      >
                        {system.number}
                      </span>
                    </div>

                    {/* Label */}

                    <div
                      className={`relative mt-7 text-[10px] font-bold uppercase tracking-[0.22em] ${system.accent}`}
                    >
                      {system.label}
                    </div>

                    {/* Title */}

                    <h2 className="relative mt-2 text-2xl font-extrabold tracking-tight text-white">
                      {system.title}
                    </h2>

                    {/* Description */}

                    <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-slate-300/75">
                      {system.description}
                    </p>

                    {/* Divider */}

                    <div className="relative my-6 h-px bg-white/[0.08]" />

                    {/* Points */}

                    <div className="relative space-y-3">
                      {system.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5"
                        >
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                            <Check
                              className={`h-2.5 w-2.5 ${system.iconColor}`}
                            />
                          </div>

                          <span className="text-xs leading-5 text-slate-300/80">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom */}

                    <div className="relative mt-7 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${system.dot}`}
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Connected to your system
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FLOW LABEL */}

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-center">
            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
              Attract
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-slate-700" />

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-orange-300">
              Capture
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-slate-700" />

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-yellow-300">
              Deliver
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-slate-700" />

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-purple-300">
              Repeat
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative z-10 overflow-hidden border-y border-slate-800/60">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            One connected system
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
            More opportunities.
            <span className="block text-blue-400">
              Less leakage.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Stop letting good opportunities disappear between the first
            inquiry and the booked job.
          </p>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute -inset-5 rounded-full bg-blue-600/25 blur-2xl" />

            <a
              href="/callbooking"
              className="group relative inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-2xl shadow-blue-950/50 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:px-9"
            >
              <div className="-space-x-2 flex items-center">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
                />

                <img
                  src="https://i.pravatar.cc/80?img=32"
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
                />

                <img
                  src="https://i.pravatar.cc/80?img=47"
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
                />
              </div>

              <span>Book a Free Strategy Call</span>

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-blue-400" />
              20-minute call
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-blue-400" />
              No pressure
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-blue-400" />
              See where leads are being lost
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="relative z-10 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Questions? We've got answers.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Everything you need to know about the Lead → Job System.
            </p>
          </div>

          <div className="mt-14 divide-y divide-slate-800 border-y border-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-blue-400"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl text-sm leading-7 text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="relative z-10 border-t border-slate-800/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>

              <div className="text-sm font-extrabold tracking-tight text-white">
                BOOK MORE{" "}
                <span className="text-blue-400">LEADS</span>
              </div>
            </a>

            <p className="mt-3 text-xs text-slate-600">
              The Lead → Job System for Contractors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
            <a
              href="#system"
              className="transition-colors hover:text-white"
            >
              System
            </a>

            <a
              href="/#how-it-works"
              className="transition-colors hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="transition-colors hover:text-white"
            >
              FAQ
            </a>

            <a
              href="/callbooking"
              className="inline-flex items-center gap-1.5 text-blue-400 transition-colors hover:text-blue-300"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 px-6 py-5 text-center text-[11px] text-slate-700">
          © {new Date().getFullYear()} Book More Leads. All rights reserved.
        </div>
      </footer>
    </main>
  );
}