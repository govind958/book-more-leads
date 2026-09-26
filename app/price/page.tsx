"use client";

import { useState, type ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Globe,
  PhoneCall,
  Search,
  Star,
  Workflow,
  Zap,
} from "lucide-react";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const monthlyPrice = 299;
  const yearlyPrice = monthlyPrice * 10;
  const yearlySavings = monthlyPrice * 12 - yearlyPrice;

  const features = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "High-Converting Website",
      description:
        "A professional contractor website designed to turn visitors into calls, messages, and quote requests.",
      items: [
        "Modern mobile-friendly website",
        "Clear calls-to-action",
        "Quote request forms",
        "Click-to-call buttons",
        "Lead-focused page structure",
      ],
    },
    {
      icon: <PhoneCall className="h-5 w-5" />,
      title: "Missed-Call Textback",
      description:
        "When you can't answer the phone, your system can immediately follow up with the caller.",
      items: [
        "Automatic missed-call response",
        "Instant text conversation",
        "Lead notification",
        "Never leave a caller wondering what happened",
      ],
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Automated Lead Follow-Up",
      description:
        "Keep new inquiries moving instead of letting them sit unanswered in your inbox.",
      items: [
        "Instant lead response",
        "Automated follow-up messages",
        "Conversation tracking",
        "Follow-up sequences",
        "Lead status management",
      ],
    },
    {
      icon: <CalendarCheck className="h-5 w-5" />,
      title: "Appointment Booking",
      description:
        "Make it easy for qualified prospects to take the next step without endless back-and-forth.",
      items: [
        "Online appointment booking",
        "Calendar integration",
        "Booking confirmations",
        "Automated reminders",
      ],
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Review Automation",
      description:
        "Make asking happy customers for reviews a consistent part of your process.",
      items: [
        "Automated review requests",
        "Post-job follow-up",
        "Google review link",
        "Simple customer experience",
      ],
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Local Visibility",
      description:
        "Build the online foundation customers need when searching for a contractor in your area.",
      items: [
        "Local SEO foundations",
        "Business profile optimization",
        "On-page optimization",
        "Local service positioning",
      ],
    },
  ];

  const faqs = [
    {
      question: "What do I get for $299/month?",
      answer:
        "You get a connected lead-to-job system built around your contractor business. Depending on your setup, that can include your website, missed-call textback, automated lead follow-up, appointment booking, review automation, and local visibility support.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fee is required for the standard monthly plan. We'll discuss exactly what needs to be built during your strategy call before anything moves forward.",
    },
    {
      question: "Do I have to manage the software myself?",
      answer:
        "No. The goal is to keep things simple for you. We handle the technical setup and automation so you can focus on running your contracting business.",
    },
    {
      question: "How long does setup take?",
      answer:
        "The timeline depends on the website, integrations, and automations your business needs. After your onboarding information is received, we'll give you a clear launch timeline.",
    },
    {
      question: "Can this work with my existing website?",
      answer:
        "Yes. In some cases we'll work with your existing website and improve the lead journey. In other cases, building a new website may make more sense. We'll determine that during the initial call.",
    },
    {
      question: "Is this only for roofing companies?",
      answer:
        "No. Book More Leads is built for home-service businesses including roofing, HVAC, plumbing, electrical, solar, landscaping, remodeling, painting, and other contractor businesses.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#091413] text-slate-100">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.045]" />

      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* NAVBAR */}
       {/* NAVBAR */}
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>

          <div className="leading-none">
            <div className="text-[15px] font-extrabold tracking-tight text-white">
              BOOK MORE <span className="text-blue-400">LEADS</span>
            </div>
            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Lead → Job System
            </div>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          <a
            href="/products"
            className="transition-colors hover:text-white"
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

        {/* CTA */}
        <a
          href="/callbooking"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
        >
          Book a Call
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>


      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-14 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-24 md:pt-28 lg:pb-20 lg:pt-32">
        <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
          Our Price.
        </h1>
      </section>

      {/* PRICING CARD */}
      <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-500/30 bg-slate-900/70 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:rounded-[32px]">
            {/* Glow */}
            <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />

            {/* Popular label */}
            <div className="border-b border-blue-500/20 bg-blue-500/[0.06] px-5 py-3 text-center sm:px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400 sm:text-[11px] sm:tracking-[0.22em]">
                The Lead → Job System
              </span>
            </div>

            <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT */}
              <div className="border-b border-slate-800 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Zap className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:mt-7 sm:text-3xl">
                  Book More Leads
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Everything you need to capture, respond to, follow up with,
                  and convert more opportunities.
                </p>

                {/* BILLING TOGGLE */}
                <div className="mt-7 flex w-full max-w-sm rounded-xl border border-slate-800 bg-slate-950/70 p-1">
                  <button
                    type="button"
                    onClick={() => setBilling("monthly")}
                    className={`flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                      billing === "monthly"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                        : "text-slate-500 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>

                  <button
                    type="button"
                    onClick={() => setBilling("yearly")}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                      billing === "yearly"
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                        : "text-slate-500 hover:text-white"
                    }`}
                  >
                    Yearly
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                        billing === "yearly"
                          ? "bg-white/15 text-white"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      Save 2 Months
                    </span>
                  </button>
                </div>

                {/* PRICE */}
                <div className="mt-7 flex items-end gap-2 sm:mt-8">
                  <span className="text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl">
                    ${billing === "monthly" ? monthlyPrice : yearlyPrice}
                  </span>

                  <span className="mb-2 text-sm text-slate-500">
                    {billing === "monthly" ? "/ month" : "/ year"}
                  </span>
                </div>

                {/* YEARLY CALCULATOR */}
                <div className="mt-3 min-h-[34px]">
                  {billing === "yearly" ? (
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                      <span className="text-slate-500">
                        Normally ${monthlyPrice * 12}/year
                      </span>

                      <span className="text-blue-400">•</span>

                      <span className="font-semibold text-blue-400">
                        Save ${yearlySavings}/year
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-600">
                      No complicated packages. No unnecessary software.
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="relative mt-8 sm:mt-9">
                  <div className="pointer-events-none absolute -inset-4 rounded-full bg-blue-600/20 blur-2xl" />

                  <a
                    href="/bookingcall"
                    className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/40 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:px-7"
                  >
                    Book a Free Strategy Call

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                    20-minute call
                  </span>

                  <span className="hidden h-1 w-1 self-center rounded-full bg-slate-700 sm:block" />

                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                    No pressure
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-6 sm:p-9 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Included
                </p>

                <div className="mt-6 space-y-5 sm:mt-7">
                  <IncludedFeature
                    icon={<Globe className="h-4 w-4" />}
                    title="High-Converting Website"
                    description="Built to generate calls, messages, and quote requests."
                  />

                  <IncludedFeature
                    icon={<PhoneCall className="h-4 w-4" />}
                    title="Missed-Call Textback"
                    description="Automatically follow up when you can't answer."
                  />

                  <IncludedFeature
                    icon={<Workflow className="h-4 w-4" />}
                    title="Automated Lead Follow-Up"
                    description="Keep prospects moving instead of letting leads go cold."
                  />

                  <IncludedFeature
                    icon={<CalendarCheck className="h-4 w-4" />}
                    title="Appointment Booking"
                    description="Give qualified prospects an easy next step."
                  />

                  <IncludedFeature
                    icon={<Star className="h-4 w-4" />}
                    title="Review Automation"
                    description="Consistently ask happy customers for reviews."
                  />

                  <IncludedFeature
                    icon={<Search className="h-4 w-4" />}
                    title="Local Visibility"
                    description="Build the online foundation for local customers."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="relative z-10 border-y border-slate-800/60 bg-[#07100f]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Built around one goal
          </p>

          <h2 className="mt-6 text-4xl font-extrabold leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            TURN MORE
            <br />
            <span className="text-blue-400">LEADS INTO JOBS.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Your website gets the attention. Your system responds. Your
            follow-up keeps the conversation moving. Your calendar gets the
            appointment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-6 sm:py-28 lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            One simple monthly system
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
            Ready to stop losing
            <span className="block text-blue-400">good leads?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Let's look at how your business currently handles leads and see
            what your Lead → Job System could look like.
          </p>

          <div className="relative mt-10 inline-block">
            <div className="pointer-events-none absolute -inset-5 rounded-full bg-blue-600/30 blur-2xl" />

            <a
              href="/bookingcall"
              className="group relative inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-2xl shadow-blue-950/50 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:px-10"
            >
              Book a Free Strategy Call

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
              See what you're missing
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Questions? We've got answers.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-800 border-y border-slate-800 sm:mt-14">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180 text-blue-400" : ""
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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>

              <div className="text-sm font-extrabold tracking-tight text-white">
                BOOK MORE <span className="text-blue-400">LEADS</span>
              </div>
            </a>

            <p className="mt-3 text-xs text-slate-600">
              The Lead → Job System for Contractors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
            <a href="/#system" className="hover:text-white">
              System
            </a>

            <a href="/#how-it-works" className="hover:text-white">
              How It Works
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>

            <a
              href="/bookingcall"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 px-5 py-5 text-center text-[11px] text-slate-700 sm:px-6">
          © {new Date().getFullYear()} Book More Leads. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------
   COMPONENTS
------------------------------------------------------- */

function IncludedFeature({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3.5 sm:gap-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-bold text-white">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}