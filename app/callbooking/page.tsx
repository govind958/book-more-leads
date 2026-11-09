
"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  PlayCircle,
  CalendarDays,
  ArrowUpRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

// Replace these with your actual links
const VIDEO_URL = "YOUR_LOOM_VIDEO_URL";
const BOOKING_URL = "YOUR_CAL_COM_BOOKING_URL";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#060b14] text-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">

        {/* Logo / Brand */}
        <header className="mb-14 flex justify-center">
          <Link href="/" className="text-center">
            <div className="text-xl font-extrabold tracking-tight">
              BOOK MORE <span className="text-blue-400">LEADS</span>
            </div>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              The Lead → Job System
            </p>
          </Link>
        </header>

        {/* Thank You Message */}
        <section className="mx-auto max-w-3xl text-center">

          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
              <CheckCircle2
                className="h-9 w-9 text-emerald-400"
                strokeWidth={1.7}
              />
            </div>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Submission Received
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Thanks for reaching out!
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Let's help you book more jobs.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We've received your information. Before we connect,
            take a couple of minutes to see how Book More Leads
            helps contractors capture enquiries, follow up faster,
            and turn more leads into booked jobs.
          </p>
        </section>

        {/* Video Section */}
        <section className="mx-auto mt-12 max-w-4xl">

          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-white">
                Step 1: Watch this short video
              </p>
              <p className="mt-1 text-xs text-slate-500">
                A quick introduction to how our system works.
              </p>
            </div>

            <div className="hidden items-center gap-1.5 text-xs text-slate-500 sm:flex">
              <Clock className="h-3.5 w-3.5" />
              2 minutes
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1726] shadow-2xl shadow-black/30">
            <div className="aspect-video w-full">
              <iframe
                src={VIDEO_URL}
                title="Book More Leads Introduction Video"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Please turn on your sound for the best experience.
          </p>
        </section>

        {/* What's Next */}
        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <CalendarDays className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                What's next?
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Our team will review your information and
                reach out to learn more about your business,
                your current lead process, and how we might
                be able to help.
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <p className="text-sm leading-6 text-slate-400">
                No pressure and no obligation. Just a
                conversation about growing your business.
              </p>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mx-auto mt-10 max-w-3xl text-center">

          <p className="text-sm font-semibold text-slate-300">
            Want to speak with us sooner?
          </p>

          <p className="mt-2 text-sm text-slate-500">
            You can choose a convenient time for a strategy call.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400"
          >
            Book Your Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/[0.07] pt-6 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Book More Leads.
            Built for contractors.
          </p>

          <Link
            href="/"
            className="mt-3 inline-block text-xs text-slate-500 transition hover:text-blue-400"
          >
            Back to website
          </Link>
        </footer>

      </div>
    </main>
  );
}
