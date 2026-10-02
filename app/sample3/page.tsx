"use client";

import { useState } from "react";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Glasses,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const COLORS = {
  white: "#FFFFFF",
  light: "#FFF9F5",
  soft: "#FFF1E6",
  red: "#972828",
  coral: "#E45742",
  orange: "#EB7F31",
  yellow: "#FCAD38",
  dark: "#241717",
  muted: "#756666",
  border: "rgba(151, 40, 40, 0.12)",
};

const images = {
  // Real windshield repair / technician
  hero:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2200&q=90",

  // Glass / window installation
  repair:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",

  // Technician working
  team1:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=85",

  // Construction / glass work
  team2:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=85",

  // Professional installation
  team3:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85",

  // Glass / building repair
  project1:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",

  // Technician / tools
  project2:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",

  // Window / glass
  project3:
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",

  // Modern windows
  project4:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",

  // Finished glass installation
  project5:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",

  // Finished property
  project6:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
};

const needs = [
  {
    title: "I need a glass repair",
    description:
      "Cracked, chipped or damaged glass? We can inspect the damage and recommend the right repair.",
    icon: Sparkles,
  },
  {
    title: "I need glass replaced",
    description:
      "Broken or badly damaged glass can be replaced with a clean, properly fitted new panel.",
    icon: Glasses,
  },
  {
    title: "I need an emergency repair",
    description:
      "Broken glass can create a safety and security problem. Get help securing and repairing the opening.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Glass Repair",
    description:
      "Professional repair for cracks, chips and other glass damage when replacement isn't necessary.",
    icon: Sparkles,
  },
  {
    title: "Glass Replacement",
    description:
      "Remove damaged glass and install a properly measured replacement for a clean finished result.",
    icon: Glasses,
  },
  {
    title: "Window Glass Repair",
    description:
      "Repair and replacement for damaged residential window glass, frames and related components.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Glass Service",
    description:
      "Fast help for broken windows and other urgent glass damage that needs immediate attention.",
    icon: Clock3,
  },
];

const process = [
  [
    "01",
    "Tell us what happened",
    "Send us a few details about the damaged glass and where the problem is.",
  ],
  [
    "02",
    "We inspect the damage",
    "We'll look at the glass and determine whether repair or replacement makes sense.",
  ],
  [
    "03",
    "Get a clear plan",
    "You'll know what needs to be done, what it involves and what to expect.",
  ],
  [
    "04",
    "We repair the glass",
    "Our technician completes the work carefully and leaves the area clean.",
  ],
];

const reviews = [
  {
    name: "Sarah M.",
    role: "Local Homeowner",
    text:
      "A window in our home cracked unexpectedly. They explained the options clearly and replaced it without making the process complicated.",
  },
  {
    name: "Mike R.",
    role: "Local Property Owner",
    text:
      "The technician arrived when promised, worked carefully and cleaned everything up afterward. The new glass looks excellent.",
  },
  {
    name: "Jennifer K.",
    role: "Local Homeowner",
    text:
      "We had a badly damaged window that needed attention quickly. The whole process was straightforward from inspection to installation.",
  },
];

const faqs = [
  {
    question: "Can cracked glass be repaired?",
    answer:
      "It depends on the type, size and location of the damage. We'll inspect the glass and let you know whether repair or replacement is appropriate.",
  },
  {
    question: "How do I know if I need replacement?",
    answer:
      "Severe cracks, shattered glass or damage that compromises the glass can require replacement. We'll explain your options after inspecting it.",
  },
  {
    question: "Do you handle emergency broken glass?",
    answer:
      "Yes. If broken glass is creating a safety or security concern, contact us and we'll help determine the quickest way to secure the area and address the damage.",
  },
  {
    question: "Do you clean up the broken glass?",
    answer:
      "Our goal is to leave the work area clean and safe after the repair or replacement is completed.",
  },
];

function GoogleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.35 12.27c0-.78-.07-1.53-.22-2.25H12v4.26h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.4Z"
        fill="#4285F4"
      />
      <path
        d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.99Z"
        fill="#34A853"
      />
      <path
        d="M6.53 14.07A5.86 5.86 0 0 1 6.22 12c0-.72.12-1.42.31-2.07V7.4H3.28A9.99 9.99 0 0 0 2 12c0 1.61.39 3.13 1.28 4.6l3.25-2.53Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.9c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.84 2.96 14.63 2 12 2a9.74 9.74 0 0 0-8.72 5.4l3.25 2.53C7.3 7.62 9.46 5.9 12 5.9Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function GlassRepairLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToRequest = (need?: string) => {
    if (need) {
      setSelectedNeed(need);
    }

    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById("request")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: COLORS.light,
        color: COLORS.dark,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          borderColor: COLORS.border,
        }}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLORS.red }}
            >
              <Glasses size={21} strokeWidth={2.1} />
            </div>

            <div className="leading-none">
              <div
                className="text-[15px] font-black tracking-[0.14em]"
                style={{ color: COLORS.dark }}
              >
                CLEARVIEW
              </div>

              <div
                className="mt-1 text-[9px] font-bold tracking-[0.28em]"
                style={{ color: COLORS.coral }}
              >
                GLASS REPAIR
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#services"
              className="text-sm font-semibold transition hover:opacity-70"
              style={{ color: COLORS.muted }}
            >
              Services
            </a>

            <a
              href="#process"
              className="text-sm font-semibold transition hover:opacity-70"
              style={{ color: COLORS.muted }}
            >
              How It Works
            </a>

            <a
              href="#work"
              className="text-sm font-semibold transition hover:opacity-70"
              style={{ color: COLORS.muted }}
            >
              Our Work
            </a>

            <a
              href="#reviews"
              className="text-sm font-semibold transition hover:opacity-70"
              style={{ color: COLORS.muted }}
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold transition hover:opacity-70"
              style={{ color: COLORS.muted }}
            >
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:18005550199"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
              style={{ color: COLORS.red }}
            >
              <Phone size={16} />
              (800) 555-0199
            </a>

            <button
              onClick={() => scrollToRequest()}
              className="group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              style={{
                backgroundColor: COLORS.red,
                boxShadow: "0 10px 25px rgba(151,40,40,0.20)",
              }}
            >
              Get a Free Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:18005550199"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.soft,
                color: COLORS.red,
              }}
            >
              <Phone size={17} />
            </a>

            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.dark,
                color: COLORS.white,
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="border-t px-5 py-5 lg:hidden"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["Services", "#services"],
                ["How It Works", "#process"],
                ["Our Work", "#work"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold"
                  style={{ color: COLORS.dark }}
                >
                  {label}
                </a>
              ))}

              <button
                onClick={() => scrollToRequest()}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: COLORS.red }}
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden">
        <img
          src={images.hero}
          alt="Professional glass repair technician working"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,249,245,0.98) 0%, rgba(255,249,245,0.96) 34%, rgba(255,249,245,0.78) 54%, rgba(36,23,23,0.20) 76%, rgba(36,23,23,0.48) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 45%, rgba(36,23,23,0.16))",
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                backgroundColor: "rgba(255,255,255,0.90)",
                borderColor: COLORS.border,
                color: COLORS.red,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS.orange }}
              />
              Local • Professional • Reliable
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Broken glass?
              <br />
              <span style={{ color: COLORS.red }}>
                We&apos;ll make it clear.
              </span>
            </h1>

            <p
              className="mt-7 max-w-xl text-base leading-7 sm:text-lg"
              style={{ color: COLORS.muted }}
            >
              Professional glass repair and replacement for homes and
              properties. Get the damage inspected, understand your options
              and get your glass fixed properly.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToRequest()}
                className="group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.red,
                  boxShadow: "0 16px 35px rgba(151,40,40,0.22)",
                }}
              >
                Get a Free Quote
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="tel:18005550199"
                className="inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-bold transition hover:bg-white"
                style={{
                  backgroundColor: "rgba(255,255,255,0.76)",
                  borderColor: "rgba(151,40,40,0.16)",
                  color: COLORS.dark,
                }}
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {[
                "Free Estimates",
                "Professional Technicians",
                "Quality Glass",
                "Clear Pricing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.red }}
                  />

                  <span
                    className="text-xs font-semibold leading-4"
                    style={{ color: COLORS.dark }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NEEDS */}
      <section
        className="relative py-20"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: COLORS.yellow }}
            >
              Start Here
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              What does your glass need?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Choose what sounds closest and we&apos;ll help you figure out
              what to do next.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {needs.map((need) => {
              const Icon = need.icon;
              const active = selectedNeed === need.title;

              return (
                <button
                  key={need.title}
                  onClick={() => scrollToRequest(need.title)}
                  className="group rounded-3xl border p-6 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: active ? COLORS.soft : COLORS.white,
                    borderColor: active
                      ? COLORS.orange
                      : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: active
                        ? COLORS.red
                        : COLORS.soft,
                      color: active ? COLORS.yellow : COLORS.red,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="mt-6 text-lg font-black"
                    style={{ color: COLORS.dark }}
                  >
                    {need.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: COLORS.muted }}
                  >
                    {need.description}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-2 text-sm font-bold"
                    style={{ color: COLORS.red }}
                  >
                    Get started
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* REQUEST */}
      <section
        id="request"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                borderColor: "rgba(252,173,56,0.24)",
                backgroundColor: "rgba(252,173,56,0.08)",
                color: COLORS.yellow,
              }}
            >
              <Sparkles size={14} />
              Start Your Repair
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s get your glass{" "}
              <span style={{ color: COLORS.coral }}>fixed properly.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              Tell us what happened. We&apos;ll help you understand whether
              the glass can be repaired or needs to be replaced.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Professional glass inspection",
                "Repair and replacement options",
                "Quality installation",
                "Clear, upfront communication",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: COLORS.orange,
                      color: COLORS.dark,
                    }}
                  >
                    <Check size={16} strokeWidth={3} />
                  </div>

                  <span className="text-sm font-semibold text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-10 flex max-w-md items-center gap-4 rounded-2xl border p-4"
              style={{
                borderColor: "rgba(255,255,255,0.09)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(228,87,66,0.13)",
                  color: COLORS.coral,
                }}
              >
                <Clock3 size={20} />
              </div>

              <div>
                <div className="text-sm font-bold text-white">
                  Quick response
                </div>

                <div className="mt-1 text-xs text-white/50">
                  We&apos;ll get back to you as soon as possible.
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[28px] p-6 shadow-2xl sm:p-8"
            style={{
              backgroundColor: COLORS.white,
              boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div
                  className="text-xs font-black uppercase tracking-[0.18em]"
                  style={{ color: COLORS.red }}
                >
                  Free consultation
                </div>

                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Tell us about the damage.
                </h3>
              </div>

              <div
                className="rounded-full px-3 py-2 text-xs font-bold"
                style={{
                  backgroundColor: COLORS.soft,
                  color: COLORS.red,
                }}
              >
                Step 1
              </div>
            </div>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thanks! We’ll be in touch shortly.");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-[#E45742] focus:ring-2 focus:ring-[#E45742]/10"
                    style={{
                      borderColor: COLORS.border,
                      backgroundColor: COLORS.light,
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-[#E45742] focus:ring-2 focus:ring-[#E45742]/10"
                    style={{
                      borderColor: COLORS.border,
                      backgroundColor: COLORS.light,
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold"
                >
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  value={selectedNeed}
                  onChange={(event) => setSelectedNeed(event.target.value)}
                  className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-[#E45742] focus:ring-2 focus:ring-[#E45742]/10"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.light,
                  }}
                >
                  <option value="">Choose a service</option>

                  {needs.map((need) => (
                    <option key={need.title} value={need.title}>
                      {need.title}
                    </option>
                  ))}

                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Tell us a little more
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what happened, where the glass is damaged, or anything else we should know..."
                  className="w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-[#E45742] focus:ring-2 focus:ring-[#E45742]/10"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.light,
                  }}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.red,
                  boxShadow: "0 12px 25px rgba(151,40,40,0.18)",
                }}
              >
                Request My Quote
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                No pressure. Just a quick conversation about your glass repair
                needs.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div
                className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: COLORS.red }}
              >
                Our Services
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                The right glass service for the problem.
              </h2>
            </div>

            <p
              className="max-w-md text-sm leading-6"
              style={{ color: COLORS.muted }}
            >
              From a small crack to a completely broken window, we focus on
              getting the problem handled properly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 1;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 sm:p-8"
                  style={{
                    backgroundColor: featured ? COLORS.soft : COLORS.white,
                    borderColor: featured
                      ? "rgba(228,87,66,0.20)"
                      : COLORS.border,
                    boxShadow: "0 10px 35px rgba(36,23,23,0.04)",
                  }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: featured
                          ? COLORS.red
                          : COLORS.soft,
                        color: featured ? COLORS.yellow : COLORS.red,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      className="text-xs font-black"
                      style={{ color: COLORS.muted }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {service.title}
                  </h3>

                  <p
                    className="mt-3 max-w-lg text-sm leading-6"
                    style={{ color: COLORS.muted }}
                  >
                    {service.description}
                  </p>

                  <div
                    className="mt-7 flex items-center gap-2 text-sm font-black"
                    style={{ color: COLORS.red }}
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: COLORS.yellow }}
            >
              Simple Process
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Getting your glass fixed shouldn&apos;t be complicated.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/55">
              We keep the process straightforward from the first call to the
              completed repair.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl border p-6"
                style={{
                  backgroundColor: COLORS.white,
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black"
                  style={{
                    backgroundColor: COLORS.soft,
                    color: COLORS.red,
                  }}
                >
                  {number}
                </div>

                <h3 className="mt-7 text-lg font-black">{title}</h3>

                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: COLORS.muted }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / GLASS GALLERY */}
      <section
        id="work"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div
                className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: COLORS.red }}
              >
                Glass Repair & Installation
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Damaged glass. Clean finish.
              </h2>
            </div>

            <p
              className="max-w-md text-sm leading-6"
              style={{ color: COLORS.muted }}
            >
              Professional repair and installation focused on safety, proper
              fit and a clean finished result.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl md:col-span-7 md:h-[430px]">
              <img
                src={images.project1}
                alt="Professional glass installation"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Glass Installation
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl md:col-span-5 md:h-[430px]">
              <img
                src={images.project2}
                alt="Professional technician working"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Professional Work
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl md:col-span-4 md:h-[300px]">
              <img
                src={images.project3}
                alt="Residential window glass"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Window Glass
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl md:col-span-8 md:h-[300px]">
              <img
                src={images.project4}
                alt="Finished residential window installation"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Finished Installation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{ backgroundColor: COLORS.dark }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: COLORS.yellow }}
            >
              Professional Work
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Careful work from inspection to installation.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/55">
              Glass repair requires precision. We focus on the details that
              matter for a clean and secure finished result.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [images.team1, "Glass Repair", "Inspect • Repair • Finish"],
              [images.team2, "Professional Installation", "Measure • Fit • Secure"],
              [images.team3, "Property Glass Work", "Careful • Clean • Reliable"],
            ].map(([image, title, specialty]) => (
              <div
                key={title}
                className="overflow-hidden rounded-3xl border"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                <div className="h-[330px] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="text-lg font-black text-white">{title}</div>

                  <div
                    className="mt-1 text-sm font-semibold"
                    style={{ color: COLORS.yellow }}
                  >
                    {specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div
                className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: COLORS.red }}
              >
                Customer Reviews
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Clear communication. Clean work.
              </h2>
            </div>

            <div
              className="rounded-2xl border bg-white p-5"
              style={{ borderColor: COLORS.border }}
            >
              <div className="flex items-center gap-3">
                <GoogleIcon />

                <div>
                  <div className="text-sm font-black">Google Reviews</div>

                  <div className="mt-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="#FBBF24"
                        color="#FBBF24"
                      />
                    ))}

                    <span className="ml-1 text-xs font-bold text-slate-500">
                      4.9 / 5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl p-7"
                style={{
                  backgroundColor: COLORS.dark,
                  boxShadow: "0 16px 40px rgba(36,23,23,0.08)",
                }}
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="#FBBF24"
                      color="#FBBF24"
                    />
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-white/70">
                  “{review.text}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <div className="text-sm font-black text-white">
                    {review.name}
                  </div>

                  <div className="mt-1 text-xs text-white/40">
                    {review.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl p-7 md:flex-row"
            style={{ backgroundColor: COLORS.soft }}
          >
            <div>
              <div className="text-xl font-black">
                Have damaged glass?
              </div>

              <div className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                Tell us what happened and we&apos;ll help you figure out the
                next step.
              </div>
            </div>

            <button
              onClick={() => scrollToRequest()}
              className="group flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-black text-white"
              style={{ backgroundColor: COLORS.red }}
            >
              Get a Free Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 py-24"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="text-center">
            <div
              className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: COLORS.yellow }}
            >
              FAQ
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Questions before you call?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/55">
              Here are answers to some of the questions we hear most often.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border"
                  style={{
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.border,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-black sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      style={{ color: COLORS.red }}
                    />
                  </button>

                  {open && (
                    <div
                      className="px-6 pb-6 text-sm leading-7"
                      style={{ color: COLORS.muted }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden py-28"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(228,87,66,0.14)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: COLORS.soft,
              color: COLORS.red,
            }}
          >
            <Glasses size={22} />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Broken glass doesn&apos;t have to{" "}
            <span style={{ color: COLORS.coral }}>stay broken.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55">
            Get your glass inspected and find out what it will take to get the
            problem fixed.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={() => scrollToRequest()}
              className="group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-black text-white shadow-xl"
              style={{
                backgroundColor: COLORS.red,
                boxShadow: "0 15px 35px rgba(151,40,40,0.22)",
              }}
            >
              Get a Free Quote
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="tel:18005550199"
              className="inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-black text-white"
              style={{
                borderColor: "rgba(255,255,255,0.14)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <Phone size={17} />
              (800) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t"
        style={{
          backgroundColor: COLORS.light,
          borderColor: COLORS.border,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: COLORS.red }}
                >
                  <Glasses size={20} />
                </div>

                <div>
                  <div className="text-sm font-black tracking-[0.16em]">
                    CLEARVIEW
                  </div>

                  <div
                    className="mt-1 text-[9px] font-bold tracking-[0.24em]"
                    style={{ color: COLORS.coral }}
                  >
                    GLASS REPAIR
                  </div>
                </div>
              </div>

              <p
                className="mt-5 max-w-sm text-sm leading-6"
                style={{ color: COLORS.muted }}
              >
                Professional glass repair and replacement for homeowners and
                property owners who want the job handled properly.
              </p>

              <div className="mt-6 flex gap-2">
                {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-black"
                    style={{
                      backgroundColor: COLORS.dark,
                      color: COLORS.white,
                    }}
                    aria-label={social}
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-black">Services</div>

              <div className="mt-5 space-y-3">
                {services.map((service) => (
                  <a
                    key={service.title}
                    href="#services"
                    className="block text-sm transition hover:opacity-70"
                    style={{ color: COLORS.muted }}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-black">Company</div>

              <div className="mt-5 space-y-3">
                <a
                  href="#process"
                  className="block text-sm"
                  style={{ color: COLORS.muted }}
                >
                  How It Works
                </a>

                <a
                  href="#work"
                  className="block text-sm"
                  style={{ color: COLORS.muted }}
                >
                  Our Work
                </a>

                <a
                  href="#reviews"
                  className="block text-sm"
                  style={{ color: COLORS.muted }}
                >
                  Reviews
                </a>

                <a
                  href="#faq"
                  className="block text-sm"
                  style={{ color: COLORS.muted }}
                >
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-black">Get In Touch</div>

              <div className="mt-5 space-y-4">
                <a
                  href="tel:18005550199"
                  className="flex items-center gap-3 text-sm font-semibold"
                  style={{ color: COLORS.muted }}
                >
                  <Phone size={16} style={{ color: COLORS.red }} />
                  (800) 555-0199
                </a>

                <a
                  href="mailto:hello@clearviewglass.com"
                  className="block text-sm font-semibold"
                  style={{ color: COLORS.muted }}
                >
                  hello@clearviewglass.com
                </a>

                <div
                  className="text-sm leading-6"
                  style={{ color: COLORS.muted }}
                >
                  1234 Main Street
                  <br />
                  Denver, CO 80202
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 border-t pt-7"
            style={{ borderColor: COLORS.border }}
          >
            <div className="flex flex-col justify-between gap-3 text-xs sm:flex-row">
              <span style={{ color: COLORS.muted }}>
                © 2026 Clearview Glass Repair. All rights reserved.
              </span>

              <div className="flex gap-5">
                <a href="#" style={{ color: COLORS.muted }}>
                  Privacy
                </a>

                <a href="#" style={{ color: COLORS.muted }}>
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}