"use client";

import { useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StrategyCallButton from "@/components/layout/ui/StrategyCallButton";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  Globe,
  MessageSquare,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const systems = [
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "High-Converting Website",
      description:
        "A clean contractor website built to turn visitors into calls, messages, and quote requests.",
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-blue-400" />,
      title: "Missed-Call Textback",
      description:
        "When you miss a call, the system automatically follows up so the lead doesn't disappear.",
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-400" />,
      title: "Lead Follow-Up",
      description:
        "New leads get timely messages and follow-ups instead of sitting unanswered in your inbox.",
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-blue-400" />,
      title: "Appointment Booking",
      description:
        "Give qualified prospects an easy way to book the next step without endless back-and-forth.",
    },
    {
      icon: <Star className="h-6 w-6 text-blue-400" />,
      title: "Review Automation",
      description:
        "Make it easier to consistently ask happy customers for Google reviews after the job.",
    },
    {
      icon: <Search className="h-6 w-6 text-blue-400" />,
      title: "Local Visibility",
      description:
        "Build the online presence contractors need to be found when local customers are ready to hire.",
    },
  ];

  const faqs = [
    {
      question: "What exactly do you build?",
      answer:
        "We build a connected lead-to-job system around your business. Depending on what you need, that can include your website, missed-call textback, lead follow-up, appointment booking, review automation, and local visibility.",
    },
    {
      question: "Do I need to learn complicated software?",
      answer:
        "No. The goal is to build and manage the system for you so you can stay focused on running your contracting business.",
    },
    {
      question: "How long does setup take?",
      answer:
        "The exact timeline depends on the system and integrations involved. After the initial call, we'll map out what needs to be built and give you a clear launch timeline.",
    },
    {
      question: "Is this only for roofing companies?",
      answer:
        "No. The system can be used across many home-service businesses including roofing, HVAC, plumbing, electrical, landscaping, remodeling, solar, painting, and more.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing depends on the system your business actually needs. Book a strategy call and we'll walk through the setup and monthly service options.",
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
     <Navbar />

      {/* HERO */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28 lg:pb-32 lg:pt-32">
       
       {/* Headline */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
          Stop losing good jobs because{" "}
          <span className="text-blue-400">leads slip through the cracks.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 max-w-2xl text-base font-light leading-7 text-slate-400 sm:text-lg sm:leading-8">
          We build the system that helps contractors turn more inquiries into
          conversations, appointments, and booked jobs — without adding more
          work to your day.
        </p>




        {/* CTA */}
       <StrategyCallButton />

        {/* CTA reassurance */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
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
            See where leads are being lost
          </span>
        </div>

        {/* Bottom proof strip */}
         {/* Tech Stack Logos - Placeholder */}
        <div className="mt-24 w-full max-w-4xl border-t border-slate-800 pt-12">
           <p className="text-sm text-slate-600 mb-6 uppercase tracking-wider">Integrates seamlessly with your favorite tools</p>
           <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
             {['Stripe', 'Zapier', 'Slack', 'Hubspot', 'Notion'].map(tech => (
                <span key={tech} className="text-xl font-bold text-white tracking-tight">{tech}</span>
             ))}
           </div>
        </div>



      </section>

      {/* PROBLEM */}
      <section className="relative z-10 border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              The real problem
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              You may not need more leads.
              <span className="block text-slate-500">
                You may need to handle the ones you already get.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A lead that doesn't get a response quickly can become someone
              else's customer. We build the systems that close those gaps.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ProblemCard
              number="01"
              icon={<PhoneCall className="h-5 w-5" />}
              title="You miss the call"
              description="You're on a roof, driving, with a customer, or simply too busy to answer."
            />

            <ProblemCard
              number="02"
              icon={<Clock className="h-5 w-5" />}
              title="Follow-up happens too late"
              description="The prospect moves on while the lead sits in your inbox or voicemail."
            />

            <ProblemCard
              number="03"
              icon={<TrendingUp className="h-5 w-5" />}
              title="Good opportunities disappear"
              description="You paid to generate the lead, but never got the chance to turn it into a job."
            />
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section
        id="system"
        className="relative z-10 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              The Lead → Job System
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Everything your contractor business needs to{" "}
              <span className="text-blue-400">capture and convert</span>{" "}
              more opportunities.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Instead of stitching together a bunch of disconnected tools, we
              connect the important pieces into one simple system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 transition-colors group-hover:bg-blue-500/15">
                  {system.icon}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white">
                  {system.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {system.description}
                </p>

                <div className="mt-7 h-px w-full bg-slate-800" />

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Part of your system
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="relative z-10 border-t border-slate-800/60 bg-[#07100f]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              What happens when a lead comes in?
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              From{" "}
              <span className="text-slate-500">“someone contacted us”</span>{" "}
              to{" "}
              <span className="text-blue-400">“we booked the job.”</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            <FlowStep
              number="01"
              title="Lead arrives"
              description="A prospect calls, fills out your form, or starts a conversation."
              icon={<Target className="h-5 w-5" />}
            />

            <FlowStep
              number="02"
              title="Instant response"
              description="Your system responds quickly so the opportunity doesn't sit unanswered."
              icon={<MessageSquare className="h-5 w-5" />}
            />

            <FlowStep
              number="03"
              title="Follow-up"
              description="The conversation keeps moving until the prospect takes the next step."
              icon={<Workflow className="h-5 w-5" />}
            />

            <FlowStep
              number="04"
              title="Appointment"
              description="The right prospects are guided toward a call, estimate, or appointment."
              icon={<CalendarCheck className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative z-10 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              How it works
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Simple from day one.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              You run the business. We handle the system.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            <ProcessCard
              number="01"
              icon={<PhoneCall className="h-6 w-6" />}
              title="Book a Call"
              description="We'll look at how you're currently getting and handling leads."
            />

            <ProcessCard
              number="02"
              icon={<Zap className="h-6 w-6" />}
              title="We Build"
              description="We put the right website, follow-up, booking, and automation pieces together."
            />

            <ProcessCard
              number="03"
              icon={<BarChart3 className="h-6 w-6" />}
              title="Go Live"
              description="Your system starts working in the background while you focus on your jobs."
            />
          </div>
        </div>
      </section>

      {/* DARK STATEMENT */}
      <section className="relative z-10 border-y border-slate-800/60 bg-[#050b0a]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            One system
          </p>

          <h2 className="mt-6 text-5xl font-extrabold leading-none tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
            LEAD.
            <br />
            <span className="text-blue-400">FOLLOW UP.</span>
            <br />
            BOOK.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Your marketing shouldn't stop when someone fills out a form or
            calls your business.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative z-10 border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Why Book More Leads
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                No complicated marketing lecture.
                <span className="block text-slate-500">
                  Just a system built around your business.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Contractors don't need another dashboard to babysit. They need
                a simple system that helps turn opportunities into actual
                conversations and jobs.
              </p>

              <a
                href="/bookingcall"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition-colors hover:text-blue-300"
              >
                See what your system could look like
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reason
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Done for you"
                description="We handle the setup instead of handing you another software project."
              />

              <Reason
                icon={<Workflow className="h-5 w-5" />}
                title="One connected system"
                description="Your website, follow-up, booking, and reviews work together."
              />

              <Reason
                icon={<Clock className="h-5 w-5" />}
                title="Built for busy owners"
                description="The system works in the background while you handle the actual jobs."
              />

              <Reason
                icon={<TrendingUp className="h-5 w-5" />}
                title="Focused on conversion"
                description="Every part is designed around moving prospects toward the next step."
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="relative z-10 border-b border-slate-800/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            Built for home services
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            If you run the jobs,{" "}
            <span className="text-blue-400">we can build the system.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Built around the way local contractors actually get customers.
          </p>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/30 hover:text-white"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Ready to fix the leaks?
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
            Stop letting good leads
            <span className="block text-blue-400">go cold.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Let's look at how you're currently handling leads and find the
            opportunities you're missing.
          </p>


 {/* CTA */}
         <StrategyCallButton />
          






        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Questions? We've got answers.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-slate-800 border-y border-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
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
      {/* FOOTER COMPONENT */}
           <Footer />


    </main>
  );
}

/* -------------------------------------------------------
   COMPONENTS
------------------------------------------------------- */

function ProblemCard({
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
    <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-slate-700">
          {number}
        </span>
      </div>

      <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function FlowStep({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/30 p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-slate-700">
          {number}
        </span>
      </div>

      <h3 className="mt-7 font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

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
    <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8 text-center transition hover:border-blue-500/30">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
        Step {number}
      </div>

      <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
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
    <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <h3 className="mt-6 font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}