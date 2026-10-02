"use client";

import { useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Home,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const COLORS = {
  navy: "#082F49",
  blue: "#0369A1",
  sky: "#0EA5E9",
  lightBlue: "#E0F2FE",
  pale: "#F0F9FF",
  white: "#FFFFFF",
  dark: "#102A43",
  muted: "#64748B",
  border: "#D8E5EE",
  green: "#15803D",
};

const images = {
  hero:
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=2200&q=90",

  plumber:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",

  emergency:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",

  bathroom:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",

  kitchen:
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1400&q=85",

  project1:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",

  project2:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",

  project3:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
};

const services = [
  {
    icon: Droplets,
    title: "Leak Repair",
    description:
      "Find and fix leaking pipes, faucets, fixtures, and hidden water leaks before they become bigger problems.",
  },
  {
    icon: Wrench,
    title: "Pipe Repair",
    description:
      "Professional pipe repairs and replacements for damaged, corroded, or leaking plumbing lines.",
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    description:
      "Fast help when a burst pipe, major leak, or plumbing failure cannot wait until tomorrow.",
  },
  {
    icon: Home,
    title: "Bathroom Plumbing",
    description:
      "Toilets, showers, sinks, tubs, faucets, drains, and complete bathroom plumbing work.",
  },
];

const needs = [
  {
    title: "I have a water leak",
    description: "Leak, dripping pipe, wet wall, or water damage.",
    icon: Droplets,
  },
  {
    title: "My drain is blocked",
    description: "Slow drain, standing water, or complete blockage.",
    icon: Wrench,
  },
  {
    title: "I need emergency help",
    description: "Burst pipe, flooding, or a serious plumbing problem.",
    icon: Zap,
  },
];

const process = [
  {
    number: "01",
    title: "Tell us the problem",
    description:
      "Call or send a request and tell us what is happening with your plumbing.",
  },
  {
    number: "02",
    title: "We inspect it",
    description:
      "A qualified plumber checks the issue and identifies what needs to be repaired.",
  },
  {
    number: "03",
    title: "Get a clear plan",
    description:
      "We explain the repair, recommended solution, and next steps before starting.",
  },
  {
    number: "04",
    title: "We fix it",
    description:
      "Our team completes the work carefully and leaves your space clean.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Homeowner",
    text: "They arrived quickly, found the leak, and explained everything before starting. The whole experience was straightforward.",
  },
  {
    name: "David R.",
    location: "Property Owner",
    text: "Our kitchen pipe started leaking late in the evening. They responded quickly and got the situation under control.",
  },
  {
    name: "Jennifer K.",
    location: "Homeowner",
    text: "Very professional from the first call to the finished repair. The plumber was clean, respectful, and explained the work clearly.",
  },
];

const faqs = [
  {
    question: "How quickly can a plumber come out?",
    answer:
      "Response times depend on availability and the type of service. Emergency plumbing issues can typically be prioritized when immediate attention is needed.",
  },
  {
    question: "Do you handle emergency plumbing?",
    answer:
      "Yes. We help with urgent plumbing problems such as burst pipes, serious leaks, overflowing fixtures, and other situations that require prompt attention.",
  },
  {
    question: "Can you repair a leaking pipe?",
    answer:
      "Yes. We can inspect leaking pipes and determine whether a repair or replacement is the appropriate solution.",
  },
  {
    question: "Do you work on bathrooms and kitchens?",
    answer:
      "Yes. Our plumbing services include sinks, toilets, showers, tubs, faucets, drains, supply lines, and other common kitchen and bathroom plumbing systems.",
  },
];

export default function PlumbingLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToRequest = (need?: string) => {
    if (need) {
      setSelectedNeed(need);
    }

    document
      .getElementById("request")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setMenuOpen(false);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="FlowFix Plumbing home"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLORS.navy }}
            >
              <Droplets size={21} strokeWidth={2.4} />
            </div>

            <div className="leading-none">
              <div
                className="text-[17px] font-black tracking-tight"
                style={{ color: COLORS.navy }}
              >
                FLOWFIX
              </div>

              <div className="mt-1 text-[9px] font-bold tracking-[0.22em] text-slate-500">
                PLUMBING
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#services"
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
            >
              How It Works
            </a>

            <a
              href="#work"
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
            >
              Our Work
            </a>

            <a
              href="#reviews"
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
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
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.blue }}
            >
              Get a Free Quote
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
                ["Our Work", "#work"],
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
                Get a Free Quote
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          EMERGENCY BAR
      ========================================================= */}

      <div
        className="border-b px-5 py-2.5"
        style={{
          backgroundColor: COLORS.navy,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-semibold text-white sm:text-sm">
          <Clock3 size={15} />
          Plumbing emergency?
          <a
            href="tel:8005550199"
            className="underline underline-offset-2"
          >
            Call (800) 555-0199
          </a>
        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="max-w-xl">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold"
                style={{
                  color: COLORS.blue,
                  borderColor: COLORS.lightBlue,
                  backgroundColor: COLORS.pale,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: COLORS.sky }}
                />
                LOCAL PLUMBING PROFESSIONALS
              </div>

              <h1
                className="text-[42px] font-black leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
                style={{ color: COLORS.navy }}
              >
                Plumbing problems?
                <span
                  className="block"
                  style={{ color: COLORS.sky }}
                >
                  Let&apos;s fix them.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                From leaking pipes to emergency plumbing problems, get
                straightforward service from a local team that treats your
                home with care.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToRequest()}
                  className="group flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  Request Service
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

              <div className="mt-9 grid max-w-lg grid-cols-3 border-y border-slate-200 py-5">
                <div className="pr-4">
                  <div
                    className="text-xl font-black"
                    style={{ color: COLORS.navy }}
                  >
                    24/7
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    Emergency Help
                  </div>
                </div>

                <div className="border-l border-slate-200 px-4">
                  <div
                    className="text-xl font-black"
                    style={{ color: COLORS.navy }}
                  >
                    4.9/5
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    Customer Rating
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-4">
                  <div
                    className="text-xl font-black"
                    style={{ color: COLORS.navy }}
                  >
                    Local
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    Plumbing Team
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[470px] lg:min-h-[650px]">
            <img
              src={images.hero}
              alt="Professional plumber working on plumbing"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent lg:from-white lg:via-transparent" />

            <div className="absolute bottom-6 left-5 right-5 sm:left-auto sm:right-8">
              <div className="max-w-[310px] rounded-2xl bg-white p-4 shadow-2xl shadow-slate-900/15">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: COLORS.lightBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      Clear, professional service
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      We explain the problem and the repair before work begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEED SELECTOR
      ========================================================= */}

      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.pale,
          borderColor: COLORS.lightBlue,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              WHAT&apos;S GOING ON?
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Tell us what you need help with.
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-3">
            {needs.map((need) => {
              const Icon = need.icon;
              const active = selectedNeed === need.title;

              return (
                <button
                  key={need.title}
                  onClick={() => scrollToRequest(need.title)}
                  className={`group rounded-2xl border bg-white p-5 text-left transition ${
                    active
                      ? "border-sky-500 shadow-lg shadow-sky-900/10"
                      : "border-slate-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: active
                          ? COLORS.blue
                          : COLORS.lightBlue,
                        color: active ? COLORS.white : COLORS.blue,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="mt-2 text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-600"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-slate-900">
                    {need.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {need.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUEST / FORM
      ========================================================= */}

      <section
        id="request"
        className="scroll-mt-20 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p
              className="text-xs font-black tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              REQUEST SERVICE
            </p>

            <h2
              className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Get your plumbing problem under control.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Tell us what&apos;s happening. We&apos;ll get the details we need
              and help you determine the next step.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clear communication from the start",
                "Professional plumbing service",
                "Respectful treatment of your home",
                "Straightforward recommendations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    style={{ color: COLORS.green }}
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  backgroundColor: COLORS.lightBlue,
                  color: COLORS.blue,
                }}
              >
                <Phone size={18} />
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-500">
                  Prefer to talk?
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
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Request a service call
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Takes less than a minute.
                </p>
              </div>

              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert(
                    "Thanks! Your service request has been received."
                  );
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                      Your Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    What do you need help with?
                  </label>

                  <select
                    value={selectedNeed}
                    onChange={(event) =>
                      setSelectedNeed(event.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                  >
                    <option value="">Select a service</option>
                    <option value="I have a water leak">
                      Water Leak
                    </option>
                    <option value="My drain is blocked">
                      Blocked Drain
                    </option>
                    <option value="I need emergency help">
                      Emergency Plumbing
                    </option>
                    <option value="Pipe Repair">Pipe Repair</option>
                    <option value="Bathroom Plumbing">
                      Bathroom Plumbing
                    </option>
                    <option value="Other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    Tell us a little more
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Describe the plumbing problem..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-extrabold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5"
                  style={{ backgroundColor: COLORS.blue }}
                >
                  Request Service
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-400">
                  By submitting this form, you&apos;re requesting contact
                  regarding your plumbing service needs.
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
        style={{ backgroundColor: COLORS.pale }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p
                className="text-xs font-black tracking-[0.18em]"
                style={{ color: COLORS.blue }}
              >
                OUR SERVICES
              </p>

              <h2
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
                style={{ color: COLORS.navy }}
              >
                Plumbing help for the problems that matter.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              From everyday repairs to urgent plumbing problems, our team
              handles the work with a practical, professional approach.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: COLORS.lightBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-2 text-xs font-extrabold"
                    style={{ color: COLORS.blue }}
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE IMAGE / TRUST
      ========================================================= */}

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">
          <div className="relative min-h-[380px]">
            <img
              src={images.plumber}
              alt="Professional plumber working"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </div>

          <div className="flex items-center px-7 py-12 sm:px-10 lg:px-14">
            <div className="max-w-lg">
              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={19}
                  style={{ color: COLORS.sky }}
                />

                <span className="text-xs font-black tracking-[0.16em] text-sky-400">
                  WHY HOMEOWNERS CALL US
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Good plumbing service should feel simple.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                You should know what&apos;s wrong, what needs to happen next,
                and who is doing the work in your home. That&apos;s how we
                approach every service call.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Clear explanation of the problem",
                  "Professional workmanship",
                  "Respect for your home",
                  "Clean work area when the job is complete",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500">
                      <Check
                        size={12}
                        strokeWidth={3}
                        className="text-white"
                      />
                    </div>

                    <span className="text-sm font-semibold text-slate-200">
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
                Request Service
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
              From plumbing problem to fixed.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              A simple process without unnecessary back-and-forth.
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
          WORK / GALLERY
      ========================================================= */}

      <section
        id="work"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-black tracking-[0.18em]"
                style={{ color: COLORS.blue }}
              >
                RECENT WORK
              </p>

              <h2
                className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
                style={{ color: COLORS.navy }}
              >
                The kind of work we handle.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Every plumbing situation is different. Our job is to understand
              the problem and recommend the right solution.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <div className="group relative min-h-[330px] overflow-hidden rounded-2xl md:col-span-7 md:row-span-2">
              <img
                src={images.bathroom}
                alt="Modern bathroom plumbing"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 pt-20">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Bathroom Plumbing
                </div>

                <div className="mt-1 text-lg font-black text-white">
                  Fixtures, pipes &amp; water lines
                </div>
              </div>
            </div>

            <div className="group relative min-h-[240px] overflow-hidden rounded-2xl md:col-span-5">
              <img
                src={images.kitchen}
                alt="Kitchen plumbing"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 pt-16">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Kitchen Plumbing
                </div>

                <div className="mt-1 font-black text-white">
                  Sinks, faucets &amp; supply lines
                </div>
              </div>
            </div>

            <div className="group relative min-h-[240px] overflow-hidden rounded-2xl md:col-span-5">
              <img
                src={images.emergency}
                alt="Emergency plumbing repair"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 pt-16">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Emergency Repair
                </div>

                <div className="mt-1 font-black text-white">
                  Fast response to urgent problems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS
      ========================================================= */}

      <section
        id="reviews"
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        style={{ backgroundColor: COLORS.pale }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill="#F59E0B"
                  strokeWidth={1.5}
                  className="text-amber-500"
                />
              ))}
            </div>

            <div
              className="mt-3 text-3xl font-black"
              style={{ color: COLORS.navy }}
            >
              4.9 / 5
            </div>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Based on customer feedback
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-slate-200 bg-white p-6"
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
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black"
                    style={{
                      backgroundColor: COLORS.lightBlue,
                      color: COLORS.blue,
                    }}
                  >
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>

                  <div>
                    <div className="text-sm font-black text-slate-900">
                      {review.name}
                    </div>

                    <div className="text-xs text-slate-400">
                      {review.location}
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
        className="scroll-mt-20 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
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
              Common questions.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
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
                    <div className="pb-5 pr-8 text-sm leading-7 text-slate-500">
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

      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-10 lg:py-20"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: COLORS.sky }}
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: COLORS.sky }}
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-sky-300">
              <Sparkles size={14} />
              READY WHEN YOU ARE
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Don&apos;t let a small plumbing problem become a big one.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Tell us what&apos;s happening and let&apos;s figure out the next
              step.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollToRequest()}
                className="flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.sky }}
              >
                Request Service
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:8005550199"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10"
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

      <footer
        className="border-t px-5 py-10 sm:px-6 lg:px-8"
        style={{
          borderColor: COLORS.border,
          backgroundColor: "#F8FAFC",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: COLORS.navy }}
              >
                <Droplets size={18} />
              </div>

              <div>
                <div
                  className="text-sm font-black"
                  style={{ color: COLORS.navy }}
                >
                  FLOWFIX
                </div>

                <div className="text-[8px] font-bold tracking-[0.2em] text-slate-400">
                  PLUMBING
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Professional plumbing service for homeowners and property
              owners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <a
              href="#services"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              Services
            </a>

            <a
              href="#process"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              How It Works
            </a>

            <a
              href="#reviews"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              FAQ
            </a>

            <a
              href="tel:8005550199"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              Call Us
            </a>

            <a
              href="#request"
              className="font-semibold text-slate-600 hover:text-sky-700"
            >
              Request Service
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} FlowFix Plumbing. All rights
            reserved.
          </span>

          <span>1234 Main Street · Denver, CO</span>
        </div>
      </footer>
    </main>
  );
}