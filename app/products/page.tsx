
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Clock3,
  Check,
  Star,
  PhoneCall,
  Megaphone,
  CalendarCheck,
  Zap,
  ShieldCheck,
  MessageSquareText,
  TrendingUp,
  Play,
  Menu,
} from "lucide-react";

const features = [
  {
    number: "01",
    eyebrow: "YOUR ONLINE PRESENCE",
    title: "A Website That Works as Hard as You Do.",
    description:
      "Your website should do more than just look professional. Give potential customers a reason to trust your business, explore your services, and contact you.",
    benefits: [
      "Professional, mobile-friendly contractor website",
      "Dedicated pages for your services",
      "Built-in lead capture forms",
      "Instant lead notifications directly to your phone",
    ],
    youtubeId: "dQw4w9WgXcQ",
    icon: Globe,
    label: "Professional Contractor Website",
    reverse: false,
  },
  {
    number: "02",
    eyebrow: "BUILD YOUR REPUTATION",
    title: "Turn Happy Customers Into 5-Star Reviews.",
    description:
      "Your reputation matters. Automatically follow up with customers and make it easier for them to share their experience on Google.",
    benefits: [
      "Automated review request messages",
      "Simple customer feedback process",
      "More opportunities to collect Google reviews",
      "Build trust with potential customers",
    ],
    youtubeId: "dQw4w9WgXcQ",
    icon: Star,
    label: "5-Star Magic Review Funnel",
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "NEVER MISS AN OPPORTUNITY",
    title: "Missed a Call? Your System Responds.",
    description:
      "You're busy running your business, working on a job site, or talking to customers. When you miss a call, an automatic text message helps keep the conversation going.",
    benefits: [
      "Automatic text-back for missed calls",
      "Instant response to potential customers",
      "Start conversations without picking up",
      "Help prevent leads from going to competitors",
    ],
    youtubeId: "dQw4w9WgXcQ",
    icon: PhoneCall,
    label: "Missed Call Text-Back System",
    reverse: false,
  },
  {
    number: "04",
    eyebrow: "GROW YOUR EXISTING CUSTOMER BASE",
    title: "Bring Past Customers Back to Your Business.",
    description:
      "Your previous customers are valuable. Stay connected with them through simple marketing campaigns designed to encourage repeat business and referrals.",
    benefits: [
      "Ready-to-use marketing campaigns",
      "Reconnect with past customers",
      "Encourage customer referrals",
      "Promote repeat services and offers",
    ],
    youtubeId: "dQw4w9WgXcQ",
    icon: Megaphone,
    label: "1-Click Marketing Campaigns",
    reverse: true,
  },
  {
    number: "05",
    eyebrow: "THE COMPLETE SOLUTION",
    title: "Everything Works Together. One Complete System.",
    description:
      "No more disconnected tools or complicated workflows. Bring your website, lead notifications, missed-call responses, reviews, and customer campaigns together.",
    benefits: [
      "One connected lead-to-job system",
      "Website and lead capture",
      "Automated customer communication",
      "Reputation and repeat-business tools",
    ],
    youtubeId: "dQw4w9WgXcQ",
    icon: Zap,
    label: "The Lead to Job System",
    reverse: false,
  },
];

const workflow = [
  {
    number: "01",
    title: "Capture",
    description: "Customers discover your business and submit an inquiry.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Respond",
    description: "Get instant notifications and automated missed-call responses.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Build Trust",
    description: "Collect reviews and stay connected with your customers.",
    icon: Star,
  },
  {
    number: "04",
    title: "Grow",
    description: "Book more opportunities and bring customers back.",
    icon: TrendingUp,
  },
];

const systemBenefits = [
  "Professional contractor website",
  "Instant lead notifications",
  "Missed-call text-back automation",
  "Automated Google review requests",
  "Past-customer follow-up campaigns",
  "Referral and repeat-business campaigns",
];

export default function Presentation() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#071426] text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pt-32">
          {/* Background effects */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-300">
                <Zap size={14} />
                THE LEAD → JOB SYSTEM FOR CONTRACTORS
              </div>

              <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Turn More Leads Into{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Paying Jobs.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Everything your contracting business needs to capture leads,
                respond faster, build trust, and bring customers back.
                All working together in one simple system.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => goToSection("get-started")}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold shadow-lg shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
                >
                  See How It Works
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => goToSection("features")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-white/[0.08] sm:w-auto"
                >
                  Explore Features
                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-400" />
                  Built for Contractors
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-400" />
                  Automated Follow-Up
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-400" />
                  One Connected System
                </span>
              </div>
            </div>

            {/* Hero Product Preview */}
           





          </div>
        </section>

        {/* INTRODUCTION */}
      <section className="border-y border-white/[0.06] bg-[#0B1B30] px-5 py-0 sm:px-8 sm:py-0">

</section>
        {/* FEATURES */}
        <section id="features" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-20 max-w-3xl text-center sm:mb-24">
              <p className="text-xs font-bold tracking-[0.2em] text-blue-400">
                EVERYTHING WORKS TOGETHER
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                Meet Your Lead-to-Job System.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Five powerful tools. One connected system. Designed to help
                contractors manage leads and build stronger customer
                relationships.
              </p>
            </div>

            <div className="space-y-24 sm:space-y-32">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.number}
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                      feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Feature Text */}
                    <div>
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                          <Icon size={21} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.18em] text-blue-400 sm:text-xs">
                            {feature.eyebrow}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            FEATURE {feature.number}
                          </p>
                        </div>
                      </div>

                      <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                        {feature.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                        {feature.description}
                      </p>

                      <div className="mt-8 space-y-4">
                        {feature.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-blue-400"
                            />
                            <span className="text-sm text-slate-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => goToSection("get-started")}
                        className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
                      >
                        See how it works
                        <ArrowRight
                          size={17}
                          className="transition group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    {/* Video */}
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-3xl bg-blue-500/[0.07] blur-2xl" />

                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#102039] p-2 shadow-2xl sm:rounded-3xl sm:p-3">
                        <div className="mb-2 flex items-center justify-between px-2 py-2 sm:px-3">
                          <span className="text-xs font-semibold text-slate-300">
                            {feature.label}
                          </span>
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold text-blue-300">
                            DEMO
                          </span>
                        </div>

                        <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                          {activeVideo === feature.number ? (
                            <iframe
                              className="absolute inset-0 h-full w-full"
                              src={`https://www.youtube.com/embed/${feature.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                              title={feature.label}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          ) : (
                            <button
                              onClick={() => setActiveVideo(feature.number)}
                              aria-label={`Play ${feature.label} video`}
                              className="group absolute inset-0 flex w-full items-center justify-center bg-gradient-to-br from-[#102B50] via-[#102039] to-[#071426]"
                            >
                              <div className="absolute inset-0 bg-blue-500/[0.05]" />
                              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-blue-600 shadow-xl shadow-blue-600/30 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 sm:h-20 sm:w-20">
                                <Play
                                  size={29}
                                  fill="white"
                                  className="ml-1 text-white"
                                />
                              </div>
                              <span className="absolute bottom-5 text-xs font-semibold tracking-wider text-white/60">
                                WATCH PRODUCT DEMO
                              </span>
                            </button>
                          )}
                        </div>

                        <div className="flex items-center justify-between px-2 py-3 sm:px-3">
                          <span className="text-[11px] text-slate-500">
                            BOOK MORE LEADS
                          </span>
                          <span className="text-[11px] font-bold text-blue-400">
                            {feature.number} / 05
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        

        {/* COMPLETE SYSTEM */}
       

        {/* CTA */}
        <section className="relative overflow-hidden border-y border-[#00B4F0]/15 bg-[#0B1329] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1E40AF]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#00B4F0]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
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
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
