"use client";

import { useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import SetupSteps from "@/components/layout/ui/HOWITWORKS";
import PricingCard from "@/components/layout/ui/PricingCard";
import SuccessStoriess from "@/components/layout/ui/SuccessStories";
import TargetIndustries from "@/components/layout/ui/TargetIndustries";


import Navbar from "@/components/layout/Navbar";
import StrategyCallButton from "@/components/layout/ui/StrategyCallButton";
import PlatformCompatibility from "@/components/layout/ui/PlatformCompatibility";
import MoneyBackGuarantee from "@/components/layout/ui/MoneyBackGuarantee";



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
  ArrowUpRight,
  ArrowRight,
  Phone,
  MessageSquare,
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

{/* ================= HERO SECTION ================= */}
{/*
  HEADLINE A/B TEST OPTIONS:
  A (current): "While You Run the Crew, We Book the Jobs" — outcome-first, best for cold traffic
  B: "Every Missed Call Is a Job Going to Your Competitor" — pain-first, best for ads
  C: "A Full Marketing Department for $297/Month. Zero Setup Fees." — offer-first, best for price shoppers
*/}

<section className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-r from-[#0d1d2b] via-[#0f172a] to-[#1c1813] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">

  {/* Ambient Background Glow Effects */}
  <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:left-10 sm:h-96 sm:w-96 sm:translate-x-0 sm:translate-y-0" />
  <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl sm:h-96 sm:w-96" />

  <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

    {/* Top Pill / Badge — anchors the offer, kills the #1 objection (setup fees) */}
    <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-700/80 bg-slate-900/80 py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md sm:mb-8">
      <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-blue-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
        <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
        New
      </span>
      <span className="truncate">
        $0 setup fee — everything live in 14 days
      </span>
    </div>

    {/* Main Headline — outcome first, second line = what they actually buy */}
    <h1 className="w-full max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      While You Run the Crew,
      <span className="mt-2 block font-serif text-4xl font-normal italic tracking-normal text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text sm:mt-3 sm:text-5xl md:text-6xl lg:text-7xl">
        We Book the Jobs
      </span>
    </h1>

    {/* Subtitle — the full offer stack, framed as recovered revenue */}
    <p className="mt-6 w-full max-w-2xl text-sm font-light leading-relaxed text-slate-300 sm:mt-8 sm:text-base md:text-lg">
      Your complete done-for-you growth engine: 15–20 page SEO website,
      automated 5-star review capture, missed-call text-back with AI follow-up,
      and seasonal rebooking campaigns —{" "}
      <strong className="font-semibold text-white">$297/month</strong>,{" "}
      <strong className="font-semibold text-white">$0 setup</strong>,{" "}
      no contracts.
    </p>

    

    {/* CTA + Risk Reversal */}
    <div className="mt-8 flex w-full flex-col items-center sm:mt-10">

      {/* Main Strategy Call Button */}
     {/* Main Pill CTA Button */}
          <button
  onClick={() => (window.location.href = "/growth")}
  className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-900/40 transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-800/50"
>
  <span>BOOK A CALL</span>
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <ArrowUpRight className="h-4 w-4" />
  </span>
</button>
      {/* Trust Line — kills every remaining objection in one glance */}
      <p className="mt-4 text-xs font-medium tracking-wide text-slate-400">
        No setup fees · Cancel anytime · Paid ads only if you want them later
      </p>

      {/* Social Proof */}
      <div className="mt-6 flex w-full items-center justify-center gap-3.5 sm:mt-7">

        {/* Avatar Stack */}
        <div className="flex shrink-0 -space-x-2.5">
          {[
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Client avatar ${i + 1}`}
              className="h-9 w-9 rounded-full border-2 border-slate-900 object-cover ring-2 ring-slate-700/50 sm:h-10 sm:w-10"
            />
          ))}
        </div>

        {/* Rating Stars & Text */}
        <div className="flex min-w-0 flex-col items-start gap-0.5 text-left">
          <div className="flex items-center gap-1.5">
            <div className="flex shrink-0 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">4.9/5</span>
          </div>
          <span className="whitespace-nowrap text-xs text-slate-400">
            Trusted by <span className="font-semibold text-slate-300">20k+ contractors</span>
          </span>
        </div>

      </div>
    </div>

  </div>

</section>

{/* ================= SERVICES SECTION ================= */}

 <PlatformCompatibility />




      {/* SERVICES / STACK */}
     

      {/* AGENCY COMPARISON TABLE */}
     
        <SetupSteps/>
       
     <SuccessStoriess/>

<PricingCard/>


      {/* WHY CHOOSE US */}
      

      {/* TARGET INDUSTRIES */}
      <TargetIndustries/>

      {/* FINAL CTA */}
     
        <MoneyBackGuarantee />
      

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