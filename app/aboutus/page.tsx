
"use client";

import React from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MessageSquareText,
  Star,
  TrendingUp,
  Zap,
  ShieldCheck,
  Target,
  Users,
  Mail,
  BriefcaseBusiness,
  FileText,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: CalendarCheck,
      title: "Professional Contractor Websites",
      description:
        "Build trust with a professional online presence designed to showcase your services and turn visitors into enquiries.",
    },
    {
      icon: MessageSquareText,
      title: "Missed Call Text Back",
      description:
        "Respond to missed calls automatically, so potential customers receive a quick reply even when you're busy on a job.",
    },
    {
      icon: Zap,
      title: "Automated Follow-Up",
      description:
        "Keep conversations moving with timely follow-ups that help turn enquiries into booked appointments.",
    },
    {
      icon: Star,
      title: "Customer Reviews",
      description:
        "Make it easier to collect customer feedback and build the online reputation your business deserves.",
    },
    {
      icon: TrendingUp,
      title: "Repeat Business and Referrals",
      description:
        "Reconnect with previous customers and encourage referrals through automated customer campaigns.",
    },
    {
      icon: CheckCircle2,
      title: "Lead Management",
      description:
        "Bring important lead communication and follow-up activities together in one organized system.",
    },
  ];

  const industries = [
    "Roofing",
    "Plumbing",
    "Electrical",
    "Painting",
    "Landscaping",
    "Pool Services",
    "General Contracting",
    "Home Improvement",
  ];

  const process = [
    {
      number: "01",
      title: "Capture",
      description:
        "Give potential customers a professional way to discover your business and contact you.",
    },
    {
      number: "02",
      title: "Respond",
      description:
        "Help ensure enquiries receive timely responses, even when you're busy working.",
    },
    {
      number: "03",
      title: "Follow Up",
      description:
        "Stay connected with potential customers through organized and automated follow-ups.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "Build stronger customer relationships, generate reviews, and encourage repeat business and referrals.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FB] text-slate-800">

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-[#0F1D30] text-white">

        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mx-auto max-w-3xl py-16 text-center sm:py-20">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
              <Users size={34} className="text-blue-400" />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              BookMoreLeads · About Us
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Helping Contractors Turn More Leads Into Jobs
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              We help contractors and home service businesses build a better
              system for capturing enquiries, following up with potential
              customers, and turning more opportunities into booked jobs.
            </p>

          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 sm:px-8">

          <div className="flex items-center justify-center gap-3">
            <Target className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Built for Contractors
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <BriefcaseBusiness className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Practical Business Systems
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <TrendingUp className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Focused on Business Growth
            </span>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

        {/* Introduction */}
        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex gap-3">
            <ShieldCheck
              size={24}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>
              <h2 className="font-bold text-slate-900">
                A better system for every opportunity.
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                BookMoreLeads brings together the tools contractors need
                to capture enquiries, respond faster, follow up consistently,
                and build stronger customer relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">

          {/* Our Story */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={22} />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                Our Story
              </h2>
            </div>

            <div className="space-y-4 text-[15px] leading-8 text-slate-600">

              <p>
                Running a contracting business is demanding. Between managing
                projects, serving customers, coordinating teams, and handling
                day-to-day operations, responding to every enquiry can be
                difficult.
              </p>

              <p>
                A missed call, a delayed response, or an enquiry that never
                receives a follow-up can mean losing a potential job.
              </p>

              <p>
                We created BookMoreLeads to help solve this problem by bringing
                together the essential tools contractors need to manage the
                journey from a new lead to a completed job.
              </p>

              <p>
                Our goal is simple: help contractors spend less time chasing
                enquiries and more time running their businesses.
              </p>

            </div>
          </section>

          {/* Our Mission */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Target size={22} />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                Our Mission
              </h2>
            </div>

            <p className="text-[15px] leading-8 text-slate-600">
              Our mission is to make powerful business systems accessible
              to contractors and home service professionals.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              We believe every enquiry deserves a response, every customer
              deserves a professional experience, and every contractor should
              have a reliable process for following up and growing their
              business.
            </p>

          </section>

          {/* What We Do */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Zap size={22} />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                What We Do
              </h2>
            </div>

            <p className="mb-8 text-[15px] leading-8 text-slate-600">
              BookMoreLeads provides an integrated Lead-to-Job System designed
              for contractors and home service businesses. It combines
              websites, communication, follow-up, and customer engagement
              tools to help businesses manage more opportunities.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-5 transition hover:border-blue-200 hover:shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={22} />
                    </div>

                    <h3 className="mb-2 font-bold text-[#0F1D30]">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </section>

          {/* Who We Serve */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness size={22} />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                Who We Serve
              </h2>
            </div>

            <p className="mb-6 text-[15px] leading-8 text-slate-600">
              We primarily work with contractors and home service businesses
              across the United States, including:
            </p>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {industry}
                </span>
              ))}
            </div>

          </section>

          {/* How Our System Works */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <TrendingUp size={22} />
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                How Our System Works
              </h2>
            </div>

            <div className="space-y-7">

              {process.map((step) => (
                <div key={step.number} className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 font-bold text-blue-700">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="mb-1 font-bold text-[#0F1D30]">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* Our Belief */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <CheckCircle2 size={25} />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold text-[#0F1D30] sm:text-2xl">
                  What We Believe
                </h2>

                <p className="text-lg font-semibold leading-relaxed text-blue-800 sm:text-xl">
                  No contractor should lose a job simply because they were
                  too busy to call back.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-slate-600">
                  We believe better systems create better customer
                  experiences. That's why we're focused on helping
                  contractors capture, respond to, and manage every
                  opportunity more effectively.
                </p>
              </div>

            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-[#0F1D30] p-8 text-center text-white sm:p-12">

            <CalendarCheck
              size={36}
              className="mx-auto mb-5 text-blue-400"
            />

            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to Build a Better Lead-to-Job System?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Let's take a look at your current process and explore how
              BookMoreLeads can help your contracting business manage
              enquiries and follow up more effectively.
            </p>

            <Link
              href="/callbooking"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Book a Strategy Call
              <ArrowRight size={18} />
            </Link>

          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <Mail size={22} className="text-blue-600" />

              <h2 className="text-xl font-bold text-[#0F1D30]">
                Get in Touch
              </h2>
            </div>

            <p className="mb-5 text-[15px] leading-8 text-slate-600">
              Have a question about BookMoreLeads or our services?
              We'd be happy to hear from you.
            </p>

            <a
              href="mailto:hello@bookmoreleads.agency"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
            >
              <Mail size={17} />
              hello@bookmoreleads.agency
            </a>

          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">

          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-[#0F1D30]"
          >
            BookMore<span className="text-blue-600">Leads</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">

            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/termsofservice"
              className="transition hover:text-blue-600"
            >
              Terms of Service
            </Link>

            <a
              href="mailto:hello@bookmoreleads.agency"
              className="transition hover:text-blue-600"
            >
              Contact
            </a>

          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} BookMoreLeads. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
