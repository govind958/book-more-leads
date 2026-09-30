"use client";

import { useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StrategyCallButton from "@/components/layout/ui/StrategyCallButton";

import {
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  Globe,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
  Zap,
  Repeat,
  DollarSign,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      tag: "SEO Website",
      title: "Custom Contractor SEO Website",
      description:
        "High-performance website engineered for local home services to convert search traffic into quote requests and direct phone calls.",
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-blue-400" />,
      tag: "Lead Recovery",
      title: "Instant Missed-Call Auto-Text",
      description:
        "Never lose a job because you're busy or on a ladder. Automatically text callers back instantly to engage leads before competitors.",
    },
    {
      icon: <Star className="h-6 w-6 text-blue-400" />,
      tag: "Reputation",
      title: "Automated 5-Star Google Reviews",
      description:
        "Automatically request Google reviews from happy clients post-job to rank higher in local map pack search results.",
    },
    {
      icon: <Repeat className="h-6 w-6 text-blue-400" />,
      tag: "Re-engagement",
      title: "Repeat & Referral Campaigns",
      description:
        "Re-engage past clients with seasonal maintenance outreach and referral requests to turn one-time jobs into recurring income.",
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-blue-400" />,
      tag: "Scheduling",
      title: "Automated Estimate Booking",
      description:
        "Eliminate phone tag by letting qualified leads schedule estimate requests directly onto your calendar.",
    },
    {
      icon: <Search className="h-6 w-6 text-blue-400" />,
      tag: "Local SEO",
      title: "Google Map Pack Optimization",
      description:
        "Optimize your online presence to rank in local map results when customers search for contractors in your service area.",
    },
  ];

  const comparisons = [
    {
      feature: "Upfront Setup Fees",
      us: "$0 Setup Fee",
      others: "$2,500 – $5,000+",
    },
    {
      feature: "Contract Commitment",
      us: "Month-to-Month (Cancel Anytime)",
      others: "12 to 24 Month Lock-In",
    },
    {
      feature: "Monthly Retainer",
      us: "Flat $297/month",
      others: "$1,500 – $3,000+/month",
    },
    {
      feature: "SEO Website Included",
      us: "Yes (Custom Built)",
      others: "Extra Charge / Template",
    },
    {
      feature: "Missed-Call Auto Text",
      us: "Included & Configured",
      others: "3rd-Party Software Fees",
    },
    {
      feature: "Automated Review Engine",
      us: "Included",
      others: "Extra Subscription",
    },
  ];

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

  const industries = [
    "Roofing",
    "HVAC",
    "Plumbing",
    "Electrical",
    "Solar",
    "Landscaping",
    "Remodeling",
    "Painting",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070e12] text-slate-100">
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28 lg:pb-28 lg:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Zap className="h-3.5 w-3.5" /> Full Growth Stack For Contractors
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
          We Build The Marketing System. <br className="hidden sm:inline" />
          <span className="text-blue-400">You Scale The Contracting Jobs.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-base font-light leading-7 text-slate-400 sm:text-lg sm:leading-8">
          Get a complete done-for-you growth system: Custom SEO Website, 5-Star Google Review Automation, Missed-Call Auto-Text Backs, and Repeat Client Campaigns — all for <strong className="font-semibold text-white">$297/month</strong> with <strong className="font-semibold text-white">zero setup fees</strong>.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StrategyCallButton />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-blue-400" /> $297/mo Flat Rate
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-blue-400" /> $0 Setup Fee
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-blue-400" /> No Long Contracts
          </span>
        </div>
      </section>

      {/* SERVICES / STACK */}
      <section id="services" className="relative z-10 border-t border-slate-800/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              What You Get
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Everything included for <span className="text-blue-400">$297/month</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              One flat price replaces expensive single-function tools and traditional agency fees.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center rounded-3xl border border-slate-800 bg-slate-900/30 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/60"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  {item.icon}
                </div>
                <span className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500 border border-slate-800 rounded-full px-3 py-1">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY COMPARISON TABLE */}
      <section className="relative z-10 border-t border-slate-800/60 bg-[#050b0f] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              The Comparison
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How we compare to traditional agencies.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/40 p-2 backdrop-blur-sm">
            <table className="w-full text-center text-sm text-slate-300">
              <thead className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-4 text-center">Feature</th>
                  <th className="px-6 py-4 text-center text-blue-400 font-bold bg-blue-500/5 rounded-t-xl">Our Model</th>
                  <th className="px-6 py-4 text-center text-slate-500">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20">
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 font-bold text-blue-400 bg-blue-500/5 inline-flex items-center justify-center gap-2 w-full">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                      {row.us}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="relative z-10 border-t border-slate-800/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready in 3 steps.
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            <ProcessCard
              number="01"
              icon={<PhoneCall className="h-6 w-6" />}
              title="1. Onboarding Call"
              description="A quick 20-minute strategy call to collect your business details and service area preferences."
            />
            <ProcessCard
              number="02"
              icon={<Zap className="h-6 w-6" />}
              title="2. We Build It"
              description="Our team builds your SEO website, configures missed-call text backs, and links review engine."
            />
            <ProcessCard
              number="03"
              icon={<BarChart3 className="h-6 w-6" />}
              title="3. Launch"
              description="Your engine goes live with no setup fees or contract lock-ins."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-10 border-t border-slate-800/60 bg-[#050b0f] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Built For Contractors
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Done-for-you service. <br />
              <span className="text-slate-500">Zero tech headaches.</span>
            </h2>
            <p className="mt-6 text-slate-400 leading-7">
              Contractors should be on the job site, not managing software setups or chasing agency retainers. We handle domain, site updates, missed-call auto-texting, and Google review automation for $297/month.
            </p>
            <div className="mt-8 flex justify-center">
              <StrategyCallButton />
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reason
              icon={<DollarSign className="h-5 w-5" />}
              title="$0 Setup Fee"
              description="No expensive initial setup fees."
            />
            <Reason
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Cancel Anytime"
              description="Flat month-to-month plan with no long contracts."
            />
            <Reason
              icon={<Clock className="h-5 w-5" />}
              title="Full Support"
              description="We handle system updates and ongoing management."
            />
            <Reason
              icon={<Zap className="h-5 w-5" />}
              title="Fast Launch"
              description="Go live in days with zero technical setup on your end."
            />
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES */}
      <section className="relative z-10 border-t border-slate-800/60 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Built for local home service professionals
          </h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2 text-sm font-medium text-slate-300"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 overflow-hidden border-t border-slate-800/60 bg-[#050b0f] py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get Started Today
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Ready to upgrade your contractor marketing?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400 text-lg">
            Schedule a 20-minute strategy call to start your $297/mo growth engine with $0 setup fee.
          </p>
          <div className="mt-8 flex justify-center">
            <StrategyCallButton />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="relative z-10 border-t border-slate-800/60 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-800 border-y border-slate-800 text-center">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-center"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg w-full text-center">
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
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-400 text-center">
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
      <Footer />
    </main>
  );
}

/* Helper Components */

function ProcessCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/30 p-8 text-center transition hover:border-blue-500/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>
      <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
        Step {number}
      </div>
      <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}

function Reason({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>
      <h3 className="mt-4 font-bold text-white">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}