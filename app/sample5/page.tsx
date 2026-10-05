"use client";

import { useState } from "react";

import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Fan,
  Home,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Thermometer,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const COLORS = {
  navy: "#172033",
  dark: "#0B1220",
  blue: "#2563EB",
  brightBlue: "#3B82F6",
  cyan: "#06B6D4",
  paleBlue: "#EFF6FF",
  ice: "#F0FDFF",
  white: "#FFFFFF",
  text: "#1E293B",
  muted: "#64748B",
  border: "#E2E8F0",
  green: "#16A34A",
};

const images = {
  hero:
    "https://images.unsplash.com/photo-1631545806609-4b7a4c7f6c3a?auto=format&fit=crop&w=2200&q=90",

  technician:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=90",

  installation:
    "https://source.unsplash.com/1600x1000/?hvac,air-conditioner,installation",

  home:
    "https://source.unsplash.com/1400x1000/?air-conditioning,home",

  maintenance:
    "https://source.unsplash.com/1400x1000/?hvac,maintenance,technician",

  indoor:
    "https://source.unsplash.com/1400x1000/?air-conditioner,home,interior",
};

const problems = [
  {
    icon: Snowflake,
    title: "AC isn't cooling",
    description:
      "Your system is running, but the house still feels warm.",
  },
  {
    icon: Thermometer,
    title: "Uneven temperatures",
    description:
      "Some rooms are comfortable while others are too hot or cold.",
  },
  {
    icon: Fan,
    title: "Weak airflow",
    description:
      "Airflow feels weak or your vents aren't moving enough air.",
  },
  {
    icon: Zap,
    title: "System stopped working",
    description:
      "Your HVAC system has suddenly stopped or won't turn on.",
  },
];

const services = [
  {
    icon: Snowflake,
    title: "AC Repair",
    description:
      "Fast diagnosis and repair for cooling problems, unusual noises, leaks, and system failures.",
  },
  {
    icon: AirVent,
    title: "AC Installation",
    description:
      "Professional installation of new air conditioning systems sized for your home.",
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance",
    description:
      "Routine maintenance designed to keep your system running reliably throughout the season.",
  },
  {
    icon: Thermometer,
    title: "Heating Service",
    description:
      "Heating repair and service to keep your home comfortable when temperatures drop.",
  },
];

const benefits = [
  "Straightforward diagnosis",
  "Professional technicians",
  "Clear communication",
  "Respect for your home",
  "Clean, careful workmanship",
  "Reliable service",
];

const process = [
  {
    number: "01",
    title: "Tell us what's wrong",
    description:
      "Call or request service and give us a quick description of the problem.",
  },
  {
    number: "02",
    title: "We diagnose it",
    description:
      "A technician checks your system and identifies the cause of the issue.",
  },
  {
    number: "03",
    title: "Review the options",
    description:
      "We explain the recommended repair or service before moving forward.",
  },
  {
    number: "04",
    title: "Get comfortable again",
    description:
      "We complete the work and make sure your system is operating properly.",
  },
];

const reviews = [
  {
    name: "Michael T.",
    role: "Homeowner",
    text: "Our AC stopped cooling on one of the hottest days of the year. They responded quickly, explained what had failed, and got everything running again.",
  },
  {
    name: "Amanda R.",
    role: "Homeowner",
    text: "The technician was professional and actually took the time to explain the problem. No confusing sales pitch, just clear information.",
  },
  {
    name: "Robert K.",
    role: "Property Owner",
    text: "We use them for regular HVAC maintenance across our property. Communication has always been easy and the work has been reliable.",
  },
];

const faqs = [
  {
    question: "How do I know if my AC needs repair?",
    answer:
      "Common signs include warm air, weak airflow, unusual noises, water around the system, frequent cycling, or an AC that repeatedly shuts off.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "Availability varies by day and service demand. Urgent cooling or heating problems can be prioritized when scheduling allows.",
  },
  {
    question: "Should I repair or replace my AC?",
    answer:
      "That depends on the age and condition of the system, the repair required, operating costs, and the expected remaining service life. A technician can explain the available options after inspecting the system.",
  },
  {
    question: "Do you offer HVAC maintenance?",
    answer:
      "Yes. Regular maintenance can include system inspection, cleaning, airflow checks, electrical checks, and other manufacturer-recommended service items.",
  },
];

export default function HVACLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToRequest = (problem?: string) => {
    if (problem) {
      setSelectedProblem(problem);
    }

    document
      .getElementById("request")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMenuOpen(false);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLORS.navy }}
            >
              <AirVent size={21} strokeWidth={2.3} />
            </div>

            <div className="leading-none">
              <div
                className="text-[17px] font-black tracking-tight"
                style={{ color: COLORS.navy }}
              >
                NORTHSTAR
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.22em] text-slate-400">
                HEATING &amp; AIR
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#services"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#maintenance"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Maintenance
            </a>

            <a
              href="#reviews"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:8005550199"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 md:flex"
            >
              <Phone size={16} />
              (800) 555-0199
            </a>

            <button
              onClick={() => scrollToRequest()}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.blue }}
            >
              Book Service
              <ArrowRight size={15} />
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-xl p-2 text-slate-700 sm:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 sm:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Services", "#services"],
                ["How It Works", "#process"],
                ["Maintenance", "#maintenance"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}

              <button
                onClick={() => scrollToRequest()}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: COLORS.blue }}
              >
                Book Service
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          TOP SERVICE BAR
      ========================================================= */}

      <div
        className="border-b px-5 py-2.5"
        style={{
          backgroundColor: COLORS.dark,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-semibold text-white sm:text-sm">
          <Clock3 size={15} className="text-cyan-400" />
          AC or heating emergency?
          <a
            href="tel:8005550199"
            className="font-extrabold text-cyan-300 underline underline-offset-2"
          >
            Call (800) 555-0199
          </a>
        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="max-w-xl">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-black"
                style={{
                  color: COLORS.blue,
                  borderColor: "#BFDBFE",
                  backgroundColor: COLORS.paleBlue,
                }}
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                LOCAL HVAC SERVICE
              </div>

              <h1
                className="text-[43px] font-black leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-[61px]"
                style={{ color: COLORS.navy }}
              >
                Comfortable home.
                <span
                  className="block"
                  style={{ color: COLORS.blue }}
                >
                  No matter the season.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                Reliable heating and air conditioning service for homeowners
                who want straightforward answers and professional work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToRequest()}
                  className="group flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  Book a Service
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-0.5"
                  />
                </button>

                <a
                  href="tel:8005550199"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    style={{ color: COLORS.green }}
                  />
                  <span className="text-xs font-bold text-slate-600">
                    Professional technicians
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    style={{ color: COLORS.green }}
                  />
                  <span className="text-xs font-bold text-slate-600">
                    Clear service recommendations
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="#F59E0B"
                      className="text-amber-500"
                    />
                  ))}
                </div>

                <div className="h-4 w-px bg-slate-300" />

                <span className="text-xs font-bold text-slate-500">
                  4.9/5 customer rating
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] lg:min-h-[660px]">
            <img
              src={images.hero}
              alt="HVAC technician working on an air conditioning system"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent lg:from-slate-50/80 lg:via-transparent" />

            <div className="absolute bottom-7 left-5 right-5 sm:left-auto sm:right-8">
              <div className="max-w-[320px] rounded-2xl border border-white/60 bg-white p-4 shadow-2xl shadow-slate-900/15">
                <div className="flex gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: COLORS.paleBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <Thermometer size={21} />
                  </div>

                  <div>
                    <div className="text-sm font-black text-slate-900">
                      Not getting comfortable?
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Tell us what&apos;s happening and we&apos;ll help you
                      figure out the next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM SELECTOR
      ========================================================= */}

      <section
        className="border-y px-5 py-14 sm:px-6 lg:px-8"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              WHAT&apos;S HAPPENING?
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Start with your comfort problem.
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => {
              const Icon = problem.icon;
              const active = selectedProblem === problem.title;

              return (
                <button
                  key={problem.title}
                  onClick={() => scrollToRequest(problem.title)}
                  className={`group rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-900/10"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: active
                          ? COLORS.blue
                          : COLORS.paleBlue,
                        color: active ? COLORS.white : COLORS.blue,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <ArrowRight
                      size={17}
                      className="mt-2 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500"
                    />
                  </div>

                  <h3 className="mt-5 text-sm font-black text-slate-900">
                    {problem.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {problem.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUEST SECTION
      ========================================================= */}

      <section
        id="request"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              BOOK SERVICE
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Let&apos;s get your home comfortable again.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Tell us what&apos;s going on with your heating or cooling system.
              We&apos;ll collect the basics and help you with the next step.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: COLORS.paleBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <Check size={15} strokeWidth={3} />
                  </div>

                  <span className="text-sm font-bold text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  backgroundColor: COLORS.paleBlue,
                  color: COLORS.blue,
                }}
              >
                <Phone size={18} />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-500">
                  Prefer to call?
                </div>

                <a
                  href="tel:8005550199"
                  className="text-base font-black"
                  style={{ color: COLORS.navy }}
                >
                  (800) 555-0199
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-900/5 sm:p-7">
            <div className="rounded-2xl bg-white p-5 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Request HVAC service
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Give us a few details to get started.
                  </p>
                </div>

                <div
                  className="hidden h-10 w-10 items-center justify-center rounded-xl sm:flex"
                  style={{
                    backgroundColor: COLORS.paleBlue,
                    color: COLORS.blue,
                  }}
                >
                  <AirVent size={19} />
                </div>
              </div>

              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert(
                    "Thanks! Your HVAC service request has been received."
                  );
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                      Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    What&apos;s the issue?
                  </label>

                  <select
                    value={selectedProblem}
                    onChange={(event) =>
                      setSelectedProblem(event.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="">Select an issue</option>
                    <option value="AC isn't cooling">
                      AC isn&apos;t cooling
                    </option>
                    <option value="Uneven temperatures">
                      Uneven temperatures
                    </option>
                    <option value="Weak airflow">
                      Weak airflow
                    </option>
                    <option value="System stopped working">
                      System stopped working
                    </option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="Heating Service">
                      Heating Service
                    </option>
                    <option value="Maintenance">
                      Maintenance
                    </option>
                    <option value="Installation">
                      New Installation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    Tell us more
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Example: AC is running but the house isn't getting cold..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-extrabold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  Request Service
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-400">
                  We&apos;ll use the information you provide to respond to
                  your service request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-blue-500" />

              <p className="text-xs font-black tracking-[0.18em] text-blue-400">
                HVAC SERVICES
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              From quick repairs to complete system service.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We help homeowners keep heating and cooling systems working
              reliably throughout the year.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07]"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.16)",
                      color: "#60A5FA",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <button
                    onClick={() => scrollToRequest(service.title)}
                    className="mt-6 flex items-center gap-2 text-xs font-extrabold text-blue-400"
                  >
                    Request service
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICIAN SECTION
      ========================================================= */}

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[420px]">
            <img
              src={images.technician}
              alt="HVAC technician servicing a home system"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute left-5 top-5 rounded-xl bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={17}
                  style={{ color: COLORS.green }}
                />

                <span className="text-xs font-black text-slate-800">
                  Professional service
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center px-7 py-12 sm:px-10 lg:px-14">
            <div className="max-w-lg">
              <p
                className="text-xs font-black tracking-[0.18em]"
                style={{ color: COLORS.blue }}
              >
                THE NORTHSTAR APPROACH
              </p>

              <h2
                className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
                style={{ color: COLORS.navy }}
              >
                We fix the problem, not just the symptom.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                HVAC problems can have more than one cause. Our technicians
                inspect the system, explain what they find, and help you
                understand the available options.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Inspect before recommending",
                  "Explain the problem clearly",
                  "Discuss repair options",
                  "Keep your home protected",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      style={{ color: COLORS.green }}
                    />

                    <span className="text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToRequest()}
                className="mt-9 flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.blue }}
              >
                Talk to a Technician
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        id="process"
        className="scroll-mt-20 border-y border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              HOW IT WORKS
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Simple service. Clear communication.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              No complicated process. Just four straightforward steps.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-4">
            <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-slate-200 md:block" />

            {process.map((step) => (
              <div key={step.number} className="relative text-center">
                <div
                  className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-xs font-black text-white shadow-md"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  {step.number}
                </div>

                <h3 className="mt-6 text-base font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MAINTENANCE
      ========================================================= */}

      <section
        id="maintenance"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        style={{ backgroundColor: COLORS.ice }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={images.maintenance}
              alt="HVAC maintenance service"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute bottom-5 left-5 right-5">
              <div className="rounded-2xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: COLORS.paleBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <Wrench size={19} />
                  </div>

                  <div>
                    <div className="text-sm font-black text-slate-900">
                      Routine HVAC maintenance
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      Keep your system ready for the season.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              MAINTENANCE
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Don&apos;t wait for your system to fail.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Regular maintenance helps you catch potential problems before
              they turn into an uncomfortable surprise.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "System inspection",
                "Airflow and performance checks",
                "Cleaning and maintenance",
                "Basic safety and electrical checks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: COLORS.green }}
                  />

                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToRequest("Maintenance")}
              className="mt-8 flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Ask About Maintenance
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS
      ========================================================= */}

      <section
        id="reviews"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-black tracking-[0.18em]"
                style={{ color: COLORS.blue }}
              >
                CUSTOMER REVIEWS
              </p>

              <h2
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
                style={{ color: COLORS.navy }}
              >
                What homeowners are saying.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="#F59E0B"
                    className="text-amber-500"
                  />
                ))}
              </div>

              <span className="text-sm font-bold text-slate-500">
                4.9/5 customer rating
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="#F59E0B"
                      className="text-amber-500"
                    />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{review.text}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-black"
                    style={{
                      backgroundColor: COLORS.paleBlue,
                      color: COLORS.blue,
                    }}
                  >
                    {review.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div>
                    <div className="text-sm font-black text-slate-900">
                      {review.name}
                    </div>

                    <div className="text-xs text-slate-400">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section
        id="faq"
        className="scroll-mt-20 border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              FAQ
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Questions about HVAC service?
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-extrabold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="px-5 pb-5 pr-10 text-sm leading-7 text-slate-500 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-14 text-center sm:px-10 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-950/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-black text-white">
              <Sparkles size={14} />
              COMFORT STARTS HERE
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to feel comfortable again?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Whether your AC stopped cooling or your heating system needs
              attention, we&apos;re ready to help.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollToRequest()}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Book Service
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:8005550199"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                <Phone size={16} />
                (800) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: COLORS.navy }}
              >
                <AirVent size={18} />
              </div>

              <div>
                <div
                  className="text-sm font-black"
                  style={{ color: COLORS.navy }}
                >
                  NORTHSTAR
                </div>

                <div className="text-[8px] font-bold tracking-[0.2em] text-slate-400">
                  HEATING &amp; AIR
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Professional heating and air conditioning service for local
              homeowners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <a
              href="#services"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#process"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#maintenance"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              Maintenance
            </a>

            <a
              href="#reviews"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              FAQ
            </a>

            <a
              href="#request"
              className="font-semibold text-slate-600 hover:text-blue-600"
            >
              Book Service
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Northstar Heating &amp; Air. All
            rights reserved.
          </span>

          <span>1234 Main Street · Denver, CO</span>
        </div>
      </footer>
    </main>
  );
}