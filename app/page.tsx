"use client";

import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Layout,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Conversion-Focused Websites",
    description:
      "Professional websites designed to turn visitors into calls, quote requests, and booked appointments.",
    icon: Layout,
  },
  {
    number: "02",
    title: "Instant Lead Capture",
    description:
      "Capture new inquiries immediately and make sure every lead gets where it needs to go.",
    icon: Zap,
  },
  {
    number: "03",
    title: "24/7 Lead Follow-Up",
    description:
      "Automated SMS and email follow-up keeps conversations moving while you are busy on the job.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Appointment Booking",
    description:
      "Let qualified prospects book calls and estimates directly without endless back-and-forth.",
    icon: Sparkles,
  },
];

const processSteps = [
  {
    number: "1",
    title: "We find the leaks",
    description:
      "We look at your website, lead flow, and follow-up process to find where potential jobs are being lost.",
  },
  {
    number: "2",
    title: "We build your system",
    description:
      "We build your conversion-focused website and automated lead follow-up system around your business.",
  },
  {
    number: "3",
    title: "You start booking more",
    description:
      "Your system responds, follows up, and helps move new inquiries toward booked calls and estimates—even when you are busy.",
  },
];

const reviews = [
  {
    initials: "JD",
    title: "Finally, marketing that makes sense",
    text: "They showed me where leads were actually falling through instead of selling me more marketing.",
    name: "Contractor Owner",
  },
  {
    initials: "MK",
    title: "Leads no longer wait for me",
    text: "When I am on a job, the system keeps the conversation moving instead of letting the lead go cold.",
    name: "Mike R.",
  },
  {
    initials: "AR",
    title: "Simple and useful",
    text: "The website looks professional and the follow-up system takes a lot of work off my plate.",
    name: "Alex R.",
  },
  {
    initials: "TS",
    title: "The follow-up was the missing piece",
    text: "We did not need more leads first. We needed to stop losing the ones we already had.",
    name: "Tom S.",
  },
];

/* =========================================================
   REVIEW CARD (reused for both marquee copies)
========================================================= */

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:w-[340px]">
      {/* Stars */}
      <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-sm font-bold text-slate-950">{review.title}</h3>

      {/* Text */}
      <p className="mt-2 text-sm leading-6 text-slate-500">{review.text}</p>

      {/* Reviewer */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[9px] font-black text-white">
          {review.initials}
        </div>
        <p className="text-xs font-bold text-slate-800">{review.name}</p>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">

          {/* Logo */}
          <a
            href="/"
            aria-label="Home"
            onClick={() => setMobileMenuOpen(false)}
            className="relative block h-[58px] w-[220px] shrink-0 overflow-hidden sm:h-[62px] sm:w-[250px]"
          >
            <img
              src="/2.svg"
              alt="Book More Leads"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <a
              href="#what-we-do"
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-[#1473FF]/10 hover:text-slate-950"
            >
              What We Do
            </a>
            <a
              href="#how-it-works"
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-[#1473FF]/10 hover:text-slate-950"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-[#1473FF]/10 hover:text-slate-950"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-[#1473FF]/10 hover:text-slate-950"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-[15px] font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
            >
              Contact
            </a>
            <a
              href="/bookingcall"
              className="rounded-full bg-[#1473FF] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(20,115,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0867E8] hover:shadow-[0_14px_36px_rgba(20,115,255,0.35)]"
            >
              Book Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:border-[#1473FF]/40 hover:bg-[#1473FF]/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-[22px] w-[22px]" />
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="block h-[2px] w-5 rounded-full bg-slate-900" />
                <span className="block h-[2px] w-5 rounded-full bg-slate-900" />
                <span className="block h-[2px] w-5 rounded-full bg-slate-900" />
              </span>
            )}
          </button>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 pb-6 lg:hidden">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <a
                href="#what-we-do"
                onClick={closeMobileMenu}
                className="border-b border-slate-200 py-4 text-base font-medium text-slate-800 transition-colors hover:text-slate-950"
              >
                What We Do
              </a>
              <a
                href="#how-it-works"
                onClick={closeMobileMenu}
                className="border-b border-slate-200 py-4 text-base font-medium text-slate-800 transition-colors hover:text-slate-950"
              >
                How It Works
              </a>
              <a
                href="#reviews"
                onClick={closeMobileMenu}
                className="border-b border-slate-200 py-4 text-base font-medium text-slate-800 transition-colors hover:text-slate-950"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="border-b border-slate-200 py-4 text-base font-medium text-slate-800 transition-colors hover:text-slate-950"
              >
                Contact
              </a>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="/bookingcall"
                  onClick={closeMobileMenu}
                  className="flex h-12 items-center justify-center rounded-full bg-[#1473FF] text-sm font-semibold text-white transition-colors hover:bg-[#0867E8]"
                >
                  Book Call
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50">

        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28">

          {/* CENTERED HERO */}
          <div className="mx-auto max-w-5xl text-center">

            {/* HEADLINE */}
            <h1 className="mt-7 text-[3.1rem] font-black leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[5.7rem]">
              Website Design &
              <span className="block text-blue-600">Lead Follow-Up</span>
              Systems for Contractors
            </h1>

            {/* INTRO */}
            <div className="mx-auto mt-7 max-w-2xl">
              <p className="text-base font-bold leading-7 text-slate-900 sm:text-lg">
                You do not need more marketing. You need fewer leads falling
                through the cracks.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                We build conversion websites and automated follow-up systems
                that help you respond faster, stay consistent, and close more
                inquiries while you are on the job.
              </p>
            </div>

            {/* SOCIAL PROOF */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

              {/* AVATARS */}
              <div className="flex items-center" aria-hidden="true">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-[9px] font-black text-white shadow-sm">
                  JD
                </div>
                <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[9px] font-black text-white shadow-sm">
                  MK
                </div>
                <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[9px] font-black text-white shadow-sm">
                  AR
                </div>
                <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[9px] font-black text-white shadow-sm">
                  TS
                </div>
              </div>

              <div className="hidden h-6 w-px bg-slate-200 sm:block" aria-hidden="true" />

              {/* RATING */}
              <div className="flex items-center gap-1" aria-hidden="true">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </div>

              <p className="text-sm font-bold text-slate-900">
                4.9/5{" "}
                <span className="font-semibold text-slate-500">
                  from active contractors
                </span>
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/bookingcall"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
              >
                Book a Strategy Call
                <Phone className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#what-we-do"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md sm:w-auto"
              >
                What We Do
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* TRUST ITEMS */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Built for contractors
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Fast setup
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                24/7 lead automation
              </div>
            </div>
          </div>

          {/* SMALL PROOF CARDS */}
          <div className="mx-auto mt-14 grid max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3">
            <div className="border-b border-slate-200 px-6 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="text-xl font-black text-slate-950">24/7</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Lead Response
              </p>
            </div>
            <div className="border-b border-slate-200 px-6 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="text-xl font-black text-slate-950">7-10 Days</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Typical Setup
              </p>
            </div>
            <div className="px-6 py-6 text-center">
              <p className="text-xl font-black text-slate-950">One System</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Website + Follow-Up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section
        id="what-we-do"
        className="scroll-mt-24 bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          {/* CENTERED HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-400">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Engineered to turn traffic
              <span className="block">into paying jobs.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              We build the digital system behind your contracting business so
              you can focus on the actual work instead of chasing every new
              inquiry.
            </p>
          </div>

          {/* CENTERED 2 × 2 SERVICE GRID */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group flex min-h-[250px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800"
                >
                  {/* ICON */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  {/* NUMBER */}
                  <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-600">
                    {service.number}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section
  id="how-it-works"
  className="bg-white py-16 sm:py-20 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[52px]">
        ⏱️ Setup Your System in 3 Easy Steps:
      </h2>
    </div>

    {/* THREE STEPS */}
    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 lg:mt-20">

      {/* STEP 1 */}
      <div className="relative text-center">

        {/* NUMBER */}
        <div className="absolute left-1/2 top-[-22px] z-20 flex h-16 w-16 -translate-x-[125px] items-center justify-center rounded-full bg-blue-500 text-3xl font-black text-white shadow-[0_8px_18px_rgba(37,99,235,0.30)]">
          1
        </div>

        {/* IMAGE BOX */}
        <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f1f1f1] shadow-[0_10px_15px_rgba(0,0,0,0.12)] sm:h-[230px] sm:w-[230px]">
          <img
            src="/how-it-works/step-1.png"
            alt="Step 1"
            className="h-full w-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="mx-auto mt-14 max-w-[360px] text-2xl font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[28px]">
          Step 1: Get your system
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-[360px] text-[17px] leading-8 tracking-[0.01em] text-slate-700">
          We set everything up for your business.
        </p>
      </div>


      {/* STEP 2 */}
      <div className="relative text-center">

        {/* NUMBER */}
        <div className="absolute left-1/2 top-[-22px] z-20 flex h-16 w-16 -translate-x-[125px] items-center justify-center rounded-full bg-blue-500 text-3xl font-black text-white shadow-[0_8px_18px_rgba(37,99,235,0.30)]">
          2
        </div>

        {/* IMAGE BOX */}
        <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f1f1f1] shadow-[0_10px_15px_rgba(0,0,0,0.12)] sm:h-[230px] sm:w-[230px]">
          <img
            src="/how-it-works/step-2.png"
            alt="Step 2"
            className="h-full w-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="mx-auto mt-14 max-w-[360px] text-2xl font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[28px]">
          Step 2: Connect your leads
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-[360px] text-[17px] leading-8 tracking-[0.01em] text-slate-700">
          Your leads flow directly into your system.
        </p>
      </div>


      {/* STEP 3 */}
      <div className="relative text-center">

        {/* NUMBER */}
        <div className="absolute left-1/2 top-[-22px] z-20 flex h-16 w-16 -translate-x-[125px] items-center justify-center rounded-full bg-blue-500 text-3xl font-black text-white shadow-[0_8px_18px_rgba(37,99,235,0.30)]">
          3
        </div>

        {/* IMAGE BOX */}
        <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f1f1f1] shadow-[0_10px_15px_rgba(0,0,0,0.12)] sm:h-[230px] sm:w-[230px]">
          <img
            src="/how-it-works/step-3.png"
            alt="Step 3"
            className="h-full w-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="mx-auto mt-14 max-w-[360px] text-2xl font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[28px]">
          Step 3: Let AI do the work
        </h3>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-[360px] text-[17px] leading-8 tracking-[0.01em] text-slate-700">
          Your business is now ready to capture and follow up with leads.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          REVIEWS
      ========================================================= */}
      <section
        id="reviews"
        className="scroll-mt-24 overflow-hidden border-y border-slate-200 bg-blue-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          {/* CENTERED HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-600">
              Reviews
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">
              What contractors say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>4.9/5 average rating</span>
            </div>
          </div>

          {/* INFINITE SLIDING REVIEWS */}
          <div className="relative mx-auto mt-10 w-full overflow-hidden">
            <div className="flex w-max animate-review-scroll gap-5">

              {/* FIRST SET */}
              {reviews.map((review, index) => (
                <ReviewCard key={`review-${index}`} review={review} />
              ))}

              {/* DUPLICATE SET FOR SEAMLESS LOOP */}
              {reviews.map((review, index) => (
                <ReviewCard key={`review-dup-${index}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
            <Zap className="h-3.5 w-3.5" />
            Stop Losing Leads
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Your next lead should not have to wait for you.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Build a website and follow-up system that keeps working while you
            are busy running the actual business.
          </p>

          <div className="mt-8">
            <a
              href="/bookingcall"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-slate-200 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-6 lg:px-8">
          <a href="/" aria-label="Home" className="flex items-center">
            <img
              src="/2.svg"
              alt="Logo"
              className="block h-auto w-[120px] object-contain sm:w-[135px]"
            />
          </a>
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>

      {/* =========================================================
          CHAT PANEL
      ========================================================= */}
      {chatOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-[calc(100vw-40px)] max-w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-slate-900">
                Have questions?
              </span>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setChatOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm leading-6 text-slate-500">
              Need help growing your contractor business? Book a call and let
              us talk about your current website and lead flow.
            </p>
            <a
              href="/bookingcall"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-700"
            >
              Book Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* =========================================================
          CHAT BUTTON
      ========================================================= */}
      <button
        type="button"
        aria-label={chatOpen ? "Close chat" : "Open chat"}
        aria-expanded={chatOpen}
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-105 hover:bg-blue-700"
      >
        {chatOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageSquare className="h-5 w-5" />
        )}
      </button>

      {/* =========================================================
          ANIMATIONS (plain style tag — works in Next.js AND Vite/CRA)
      ========================================================= */}
      <style>{`
        @keyframes review-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .animate-review-scroll {
          animation: review-scroll 28s linear infinite;
          will-change: transform;
        }

        .animate-review-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 1023px) {
          .animate-review-scroll {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-review-scroll {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}