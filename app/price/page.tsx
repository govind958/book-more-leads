
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Search,
  Star,
  Users,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";

/* -------------------------------------------------------
   REVEAL ANIMATION
------------------------------------------------------- */

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
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------
   PRICING PLANS
------------------------------------------------------- */

const pricingPlans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 297,
    priceLabel: "$297",
    period: "/month",
    total: "$297 billed monthly",
    description:
      "Get started with your complete lead-to-job system.",
    features: [
      "Professional contractor website",
      "Automated lead follow-up",
      "Missed-call text back",
      "Automated review requests",
      "Past-customer re-engagement",
      "Core system setup",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    id: "quarterly",
    name: "3-Month Plan",
    price: 297,
    priceLabel: "$297",
    period: "/month",
    total: "$891 for 3 months",
    description:
      "Build momentum with three months of the system and complimentary Google Business Profile optimization.",
    features: [
      "Everything in the monthly plan",
      "Google Business Profile optimization included free",
      "Local listing review and improvement",
      "Business information check",
      "Lead follow-up and missed-call text back",
      "Past-customer re-engagement",
    ],
    button: "Choose 3-Month Plan",
    highlighted: true,
  },
  {
    id: "yearly",
    name: "Annual",
    price: 247.5,
    priceLabel: "$247.50",
    period: "/month",
    total: "$2,970 billed annually",
    description:
      "A full year of the system at the equivalent of 10 monthly payments.",
    features: [
      "Everything in the core monthly plan",
      "12 months of system access",
      "Automated lead follow-up",
      "Missed-call text back",
      "Automated review requests",
      "Past-customer re-engagement",
    ],
    button: "Choose Annual",
    highlighted: false,
  },
];

/* -------------------------------------------------------
   CORE FEATURES
------------------------------------------------------- */

const coreFeatures = [
  {
    title: "Professional Contractor Website",
    icon: Globe,
    description:
      "A professional online presence designed to make it easier for homeowners to contact your business.",
    points: [
      "Website pages for your services and service areas",
      "Mobile-friendly layouts and clear contact options",
      "Quote forms and clickable phone numbers",
      "Enquiry notifications and connected follow-up workflows",
    ],
  },
  {
    title: "Automated Lead Follow-Up",
    icon: MessageSquareText,
    description:
      "Help enquiries receive a timely response instead of being forgotten during a busy workday.",
    points: [
      "Automated confirmations for new enquiries",
      "Follow-up messages using configured workflows",
      "A more consistent experience for prospective customers",
    ],
  },
  {
    title: "Missed-Call Text Back",
    icon: PhoneCall,
    description:
      "When a call is missed, an automated text can help start a conversation with the potential customer.",
    points: [
      "Configured text-back workflow for missed calls",
      "Help customers know how to reach you",
      "Follow-up designed around your business process",
    ],
  },
  {
    title: "5-Star Magic Review Funnel",
    icon: Star,
    description:
      "Make it easier to ask customers for honest feedback after a completed job.",
    points: [
      "Automated review requests",
      "A convenient link to your review destination",
      "Follow-up reminders configured to avoid excessive messaging",
    ],
  },
  {
    title: "1-Click Marketing Campaigns",
    icon: Users,
    description:
      "Reconnect with past customers and create opportunities for repeat business and referrals.",
    points: [
      "Re-engagement campaigns for eligible contacts",
      "Seasonal or service reminders where appropriate",
      "Referral requests and follow-up messages",
    ],
  },
  {
    title: "Google Business Profile Optimization",
    icon: MapPin,
    description:
      "The three-month plan includes complimentary optimization of your existing Google Business Profile.",
    points: [
      "Review key business information and categories",
      "Check service areas, contact details, and business description",
      "Review photos, services, and available profile features",
      "Identify practical opportunities to improve listing completeness",
    ],
  },
];

/* -------------------------------------------------------
   ADDITIONAL SERVICES
------------------------------------------------------- */

const otherServices = [
  {
    title: "Advanced SEO",
    description:
      "Additional SEO services may include technical audits, local citations, content planning, and link-building strategy.",
  },
  {
    title: "Google Ads",
    description:
      "Campaign setup and management designed to connect your contracting business with people actively searching for your services.",
  },
  {
    title: "Additional Local Marketing",
    description:
      "Discuss further local visibility and marketing work during your strategy call. Additional services may be priced separately.",
  },
];

/* -------------------------------------------------------
   REUSABLE ACCORDION
------------------------------------------------------- */

function Accordion({
  title,
  children,
  open,
  onClick,
}: {
  title: string;
  children: ReactNode;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#071426] transition-colors duration-300 hover:border-blue-400/30">
      <button
        type="button"
        aria-expanded={open}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="text-sm font-semibold leading-7 text-white sm:text-base">
          {title}
        </span>

        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-blue-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 border-t border-white/10 px-5 py-5 text-sm leading-8 text-slate-400 sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function PricingPage() {
  const [openFeature, setOpenFeature] = useState<number | null>(0);
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <main
      className="relative min-h-screen overflow-x-clip bg-[#071426] font-sans text-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.16), transparent 45%)",
      }}
    >
      <Navbar />

      {/* ------------------------------------------------
          HERO
      ------------------------------------------------ */}

      <section className="relative px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <Reveal className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-xs font-semibold tracking-wider text-blue-300">
            <Zap size={14} />
            SIMPLE PRICING FOR CONTRACTORS
          </div>

          <h1 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
            Simple Pricing.
            <span className="mt-3 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              A Smarter Way to Grow.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Everything you need to capture enquiries, follow up
            automatically, build trust, and bring customers back.
            One connected lead-to-job system for your contracting business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
            {[
              "Built for Contractors",
              "Automated Follow-Up",
              "One Connected System",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                {item}
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-11 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            Explore Plans
            <ArrowRight size={17} />
          </button>
        </Reveal>
      </section>

      {/* ------------------------------------------------
          PRICING CARDS
      ------------------------------------------------ */}

      <section
        id="pricing"
        className="scroll-mt-24 border-y border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-400">
              CHOOSE YOUR PLAN
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Find the Right Plan for Your Business.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Choose the billing option that works best for you.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 lg:gap-7">
            {pricingPlans.map((plan, index) => (
              <Reveal
                key={plan.id}
                delay={index * 100}
                className="flex"
              >
                <article
                  className={`relative flex w-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 sm:p-9 ${
                    plan.highlighted
                      ? "border-blue-400/60 bg-gradient-to-b from-[#102B50] to-[#0B1B30] shadow-[0_0_45px_rgba(37,99,235,0.13)]"
                      : "border-white/10 bg-[#0B1B30]/80 hover:border-blue-400/30"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-extrabold tracking-widest text-white shadow-lg shadow-blue-600/20">
                      FEATURED PLAN
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {plan.name}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-7">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        {plan.priceLabel}
                      </span>

                      <span className="text-sm text-slate-400">
                        {plan.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-medium text-slate-300">
                      {plan.total}
                    </p>

                    {plan.id === "yearly" && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-2 text-xs font-bold text-blue-300">
                        <CheckCircle2 size={14} />
                        Save $594 annually
                      </div>
                    )}

                    {plan.id === "quarterly" && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-2 text-xs font-bold text-blue-300">
                        <MapPin size={14} />
                        Free Google Profile Optimization
                      </div>
                    )}
                  </div>

                  <ul className="my-8 flex-1 space-y-5">
                    {plan.features.map((feature) => {
                      const isBonus =
                        plan.id === "quarterly" &&
                        feature.toLowerCase().includes("free");

                      return (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                        >
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              isBonus
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-white/[0.06] text-blue-400"
                            }`}
                          >
                            <Check size={13} />
                          </span>

                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {plan.id === "quarterly" && (
                    <div className="mb-6 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] p-5">
                      <div className="flex items-center gap-2 text-sm font-bold text-blue-300">
                        <MapPin size={17} />
                        Included at No Extra Charge
                      </div>

                      <p className="mt-3 text-xs leading-7 text-slate-400">
                        Google Business Profile optimization during
                        your three-month plan. No ranking or lead
                        guarantees.
                      </p>
                    </div>
                  )}

                  <a
                    href="/growth"
                    className={`mt-auto inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-center text-sm font-bold transition duration-300 ${
                      plan.highlighted
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                        : "border border-white/15 bg-white/[0.04] text-white hover:border-blue-400/40 hover:bg-blue-500/10"
                    }`}
                  >
                    {plan.button}
                    <ArrowRight size={17} />
                  </a>

                  <p className="mt-5 text-center text-[11px] leading-6 text-slate-500">
                    Review plan terms before subscribing.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-7 text-slate-500">
            All prices are in USD. The three-month plan is $891
            total and the annual plan is $2,970 upfront. Confirm
            billing and cancellation terms at checkout. Third-party
            usage or messaging charges, if applicable, should be
            disclosed separately.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------
          INCLUDED FEATURES
      ------------------------------------------------ */}

      <section className="border-b border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-400">
              EXPLORE THE SYSTEM
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              Everything Your Business Needs.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
              Explore the tools included in your Lead-to-Job System
              and understand how each one supports your business.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Core System */}

            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-[#0B1B30] p-6 sm:p-8">
                <div className="mb-8 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#102B50] to-[#102039] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      <Zap size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Lead-to-Job System
                      </h3>

                      <p className="mt-2 text-xs text-slate-400">
                        Your connected business tools
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {coreFeatures.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <Accordion
                        key={feature.title}
                        title={feature.title}
                        open={openFeature === index}
                        onClick={() =>
                          setOpenFeature(
                            openFeature === index ? null : index
                          )
                        }
                      >
                        <div className="flex items-start gap-4">
                          <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                          <p>{feature.description}</p>
                        </div>

                        <ul className="space-y-4 pt-2">
                          {feature.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3"
                            >
                              <Check
                                size={16}
                                className="mt-1 shrink-0 text-blue-400"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {feature.title ===
                          "Google Business Profile Optimization" && (
                          <p className="rounded-lg border border-blue-400/20 bg-blue-500/[0.07] p-4 text-xs leading-7 text-blue-200">
                            Complimentary with the three-month plan.
                            Not included as a free bonus in the other
                            plans.
                          </p>
                        )}
                      </Accordion>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Additional Services */}

            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/10 bg-[#0B1B30] p-6 sm:p-8">
                <div className="mb-8 rounded-2xl border border-white/10 bg-[#102039] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <TrendingUp size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Additional Services
                      </h3>

                      <p className="mt-2 text-xs text-slate-400">
                        Extra growth opportunities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {otherServices.map((service, index) => (
                    <Accordion
                      key={service.title}
                      title={service.title}
                      open={openService === index}
                      onClick={() =>
                        setOpenService(
                          openService === index ? null : index
                        )
                      }
                    >
                      <p>{service.description}</p>
                    </Accordion>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#071426] p-6">
                  <div className="flex items-center gap-3">
                    <Search size={19} className="text-blue-400" />

                    <h4 className="text-sm font-bold text-white">
                      Not Sure What You Need?
                    </h4>
                  </div>

                  <p className="mt-4 text-sm leading-8 text-slate-400">
                    Book a call and discuss which services fit your
                    current setup and business goals.
                  </p>

                  <a
                    href="/callbooking"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
                  >
                    Discuss Your Business
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          FINAL CTA
      ------------------------------------------------ */}

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#0B1329] px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1E40AF]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#00B4F0]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#22D3EE]">
            One connected system
          </p>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            More opportunities.
            <span className="mt-3 block text-[#22D3EE]">
              Less leakage.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#CBD5E1] sm:text-lg">
            Stop letting good opportunities disappear between the
            first enquiry and the booked job.
          </p>

          <a
            href="/growth"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00B4F0] to-[#00D8F0] px-8 py-5 text-sm font-extrabold text-[#070B12] transition duration-300 hover:brightness-110 sm:w-auto sm:text-base"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-xs text-[#94A3B8]">
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#22D3EE]" />
              20-minute call
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#22D3EE]" />
              No pressure
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#22D3EE]" />
              Discuss your goals
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          FOOTER
      ------------------------------------------------ */}

      <Footer />
    </main>
  );
}
