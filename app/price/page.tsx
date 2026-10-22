
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricePageFAQ from "@/components/layout/ui/PricePageFAQ";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------
   BRAND COLORS — MIDNIGHT CYAN
------------------------------------------------------- */
const C = {
  bg: "#070B12",
  navy: "#0B1329",
  blue: "#1E40AF",
  cyan: "#00B4F0",
  aqua: "#00D8F0",
  text: "#FFFFFF",
  muted: "#94A3B8",
  body: "#CBD5E1",
};

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
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
   PRICING
------------------------------------------------------- */
const pricingPlans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 297,
    period: "month",
    total: "$297 billed monthly",
    description: "Get started with your lead-to-job system.",
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
    period: "month",
    total: "$891 for 3 months",
    description:
      "Build momentum with three months of the system and complimentary Google Business Profile optimization.",
    features: [
      "Everything in the monthly plan",
      "Google Business Profile optimization included free",
      "Local listing review and improvement",
      "Review and business information check",
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
    period: "month",
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

const coreFeatures = [
  {
    title: "Professional Contractor Website",
    icon: Zap,
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
      "Help enquiries receive a timely response instead of being forgotten in a busy workday.",
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
    title: "Review Request Automation",
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
    title: "Past-Customer Re-Engagement",
    icon: Users,
    description:
      "Reconnect with past customers and make it easier for them to return or refer someone.",
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

const faqs = [
  {
    question: "What is included in the 3-month plan?",
    answer:
      "The three-month plan costs $891 for the full three-month period. It includes the core lead-to-job system and complimentary Google Business Profile optimization. Confirm the exact setup, billing, and service scope before purchasing.",
  },
  {
    question: "What does free Google Business Profile optimization mean?",
    answer:
      "We review your existing profile and help improve its completeness, including relevant business information, categories, services, service areas, and available photos. It does not guarantee higher rankings, more calls, or a specific number of leads. Google controls search placement.",
  },
  {
    question: "How much does the monthly plan cost?",
    answer:
      "The monthly plan is $297 per month. The annual plan is $2,970 billed annually, equivalent to $247.50 per month. The three-month plan is $891 for the full three-month period.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Cancellation terms depend on the plan and payment agreement. Please review the terms presented before you subscribe, especially for the three-month and annual options.",
  },
  {
    question: "Will this guarantee more leads or jobs?",
    answer:
      "No specific number of leads, rankings, or booked jobs is guaranteed. The system is designed to help you respond to enquiries, follow up consistently, and make better use of the opportunities your business receives.",
  },
  {
    question: "What other services do you offer?",
    answer:
      "Additional services may include advanced SEO, Google Ads management, and further local marketing support. These can be discussed during your strategy call and may have separate fees.",
  },
];

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);

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
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070B12] transition-colors hover:border-[#00B4F0]/30">
      <button
        type="button"
        aria-expanded={open}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
      >
        <span className="text-sm font-semibold leading-6 text-white sm:text-base">
          {title}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-[#00D8F0] transition-transform duration-200 ${
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
          <div className="space-y-3 border-t border-white/10 px-4 py-4 text-sm leading-7 text-[#CBD5E1] sm:px-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */
export default function PricingPage() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const [openService, setOpenService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main
      className="relative min-h-screen overflow-x-clip bg-[#070B12] font-sans text-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, rgba(30,64,175,0.16), transparent 42%)",
      }}
    >
      <Navbar />

      {/* HERO */}
      <section className="relative px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00B4F0]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-4xl text-center">
         
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Simple pricing.
            <span className="mt-2 block bg-gradient-to-r from-[#00B4F0] to-[#00D8F0] bg-clip-text text-transparent">
              More control over every lead.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#CBD5E1] sm:text-lg sm:leading-8">
            Capture enquiries, follow up automatically, and make it easier
            for customers to choose your contracting business.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-[#94A3B8]">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D8F0]" />
              No setup fee advertised
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D8F0]" />
              Clear plan pricing
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#00D8F0]" />
              Built for contractors
            </span>
          </div>
        </Reveal>
      </section>

      {/* PRICING CARDS */}
      <section
        id="pricing"
        className="scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100} className="flex">
              <article
                className={`relative flex w-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-[#00B4F0]/70 bg-gradient-to-b from-[#10213B] to-[#0B1329] shadow-[0_0_45px_rgba(0,180,240,0.10)] md:-translate-y-2"
                    : "border-white/10 bg-[#0B1329]/80"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#00B4F0] to-[#00D8F0] px-4 py-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#070B12] sm:text-xs">
                    BEST VALUE
                  </div>
                )}

                <div className="mb-5">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {plan.name}
                  </h2>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#94A3B8]">
                    {plan.description}
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      {money(plan.price)}
                    </span>
                    <span className="text-sm text-[#94A3B8]">
                      /month
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#CBD5E1]">
                    {plan.total}
                  </p>

                  {plan.id === "yearly" && (
                    <p className="mt-2 text-xs font-semibold text-[#22D3EE]">
                      Save $594 vs. 12 monthly payments
                    </p>
                  )}

                  {plan.id === "quarterly" && (
                    <p className="mt-2 text-xs font-semibold text-[#22D3EE]">
                      Includes complimentary profile optimization
                    </p>
                  )}
                </div>

                <ul className="my-6 flex-1 space-y-3.5">
                  {plan.features.map((feature) => {
                    const isBonus =
                      plan.id === "quarterly" &&
                      feature.includes("free");

                    return (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[#CBD5E1]"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            isBonus
                              ? "bg-[#00D8F0]/15 text-[#00D8F0]"
                              : "bg-white/5 text-[#22D3EE]"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                {plan.id === "quarterly" && (
                  <div className="mb-5 rounded-xl border border-[#00B4F0]/20 bg-[#00B4F0]/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#22D3EE]">
                      <MapPin className="h-4 w-4" />
                      Included at no extra charge
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#CBD5E1]">
                      Google Business Profile optimization during your
                      three-month plan. No ranking or lead guarantees.
                    </p>
                  </div>
                )}

                <a
                  href="/growth"
                  className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center text-sm font-bold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#00B4F0] to-[#00D8F0] text-[#070B12] hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-[#00B4F0]/50 hover:bg-[#00B4F0]/10"
                  }`}
                >
                  {plan.button}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#64748B]">
                  Review the plan terms before subscribing.
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[#64748B]">
          All prices are in USD. The three-month plan is $891 total and
          the annual plan is $2,970 upfront. Confirm billing and
          cancellation terms at checkout. Third-party usage or messaging
          charges, if applicable, should be disclosed separately.
        </p>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="border-y border-white/10 bg-[#0B1329]/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D8F0]">
              Why Book More Leads
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A better process from enquiry to job.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#94A3B8]">
              You already have a business to run. Your lead follow-up
              system should help you stay responsive while you focus on
              the work.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: PhoneCall,
                title: "Respond faster",
                body: "Help enquiries get a response even when you cannot answer the phone.",
              },
              {
                icon: MessageSquareText,
                title: "Follow up consistently",
                body: "Use configured workflows to reduce forgotten enquiries.",
              },
              {
                icon: Star,
                title: "Request reviews",
                body: "Make it easier to ask customers for honest feedback.",
              },
              {
                icon: Users,
                title: "Reconnect",
                body: "Create opportunities to follow up with past customers.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="h-full rounded-2xl border border-white/10 bg-[#070B12]/70 p-5 transition-colors hover:border-[#00B4F0]/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00B4F0]/20 bg-[#00B4F0]/10 text-[#22D3EE]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE BREAKDOWN */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D8F0]">
              What's included
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your system, explained.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#94A3B8]">
              Explore the core features and optional marketing services.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-[#0B1329]/70 p-4 sm:p-6">
                <div className="mb-5 rounded-xl border border-[#00B4F0]/20 bg-gradient-to-r from-[#10213B] to-[#0B1329] p-4">
                  <h3 className="text-lg font-bold text-white">
                    Contractor Lead-to-Job System
                  </h3>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Tools to help manage enquiries and follow-up.
                  </p>
                </div>

                <div className="space-y-3">
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
                        <div className="flex items-start gap-3">
                          <Icon className="mt-1 h-5 w-5 shrink-0 text-[#22D3EE]" />
                          <p>{feature.description}</p>
                        </div>

                        <ul className="space-y-2 pt-2">
                          {feature.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#22D3EE]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-[#0B1329]/70 p-4 sm:p-6">
                <div className="mb-5 rounded-xl border border-white/10 bg-[#111D35] p-4">
                  <h3 className="text-lg font-bold text-white">
                    Additional Services
                  </h3>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    Additional work available by discussion.
                  </p>
                </div>

                <div className="space-y-3">
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

                <div className="mt-5 rounded-xl border border-white/10 bg-[#070B12] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Search className="h-4 w-4 text-[#00D8F0]" />
                    Not sure what you need?
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                    Book a call and discuss which services fit your
                    current setup and goals.
                  </p>
                  <a
                    href="/growth"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#22D3EE] hover:text-white"
                  >
                    Discuss your business
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-y border-[#00B4F0]/15 bg-[#0B1329] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1E40AF]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#00B4F0]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#22D3EE]">
            One connected system
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            More opportunities.
            <span className="mt-2 block text-[#22D3EE]">
              Less leakage.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#CBD5E1] sm:text-lg">
            Stop letting good opportunities disappear between the
            first enquiry and the booked job.
          </p>

          <a
            href="/growth"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00B4F0] to-[#00D8F0] px-7 py-4 text-sm font-extrabold text-[#070B12] transition hover:brightness-110 sm:w-auto sm:text-base"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-[#94A3B8]">
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
        </Reveal>
      </section>

     {/* FAQ */}
      <PricePageFAQ />

      <Footer />
    </main>
  );
}
