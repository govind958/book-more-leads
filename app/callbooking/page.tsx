"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  PhoneCall,
  CalendarCheck,
  Rocket,
  CheckCircle2,
  Volume2,
} from "lucide-react";

function CallBookingContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#050914] px-4 py-8 text-white sm:px-6">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }
          50% {
            opacity: .65;
            transform: scale(1.12);
          }
        }

        .fade-1 {
          animation: fadeUp .7s ease-out both;
        }

        .fade-2 {
          animation: fadeUp .7s ease-out .15s both;
        }

        .fade-3 {
          animation: fadeUp .7s ease-out .3s both;
        }

        .fade-4 {
          animation: fadeUp .7s ease-out .45s both;
        }

        .ambient-glow {
          animation: glow 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-1, .fade-2, .fade-3, .fade-4,
          .ambient-glow {
            animation: none;
          }
        }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">

        {/* Logo */}
        <div className="fade-1 mb-7">
          <Image
            src="/bookmoreleads.png"
            alt="Book More Leads"
            width={220}
            height={70}
            priority
            className="h-8 w-auto object-contain sm:h-10"
          />
        </div>

        {/* Thank You */}
        <div className="fade-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
            <CheckCircle2 size={15} />
            Request Received
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Thank You{name ? <>, <span className="text-emerald-400">{name}</span></> : null}!
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            Your request has been received. Our team will
            call you shortly to confirm your strategy session.
          </p>
        </div>

        {/* Video */}
        <div className="fade-2 mt-7 w-full">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-1.5 shadow-2xl shadow-blue-950/30">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                src="https://fast.wistia.net/embed/iframe/yctjzwycm7"
                title="Book More Leads - Welcome Video"
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Volume2 size={14} />
            Turn on your audio for a quick introduction
          </p>
        </div>

        {/* What Happens Next */}
        <div className="fade-3 mt-8 w-full">
          <h2 className="mb-5 text-sm font-semibold text-slate-200">
            What Happens Next?
          </h2>

          <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-3">

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 sm:flex-col sm:p-4">
              <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-blue-400 sm:mb-1" />
              <div>
                <h3 className="text-sm font-semibold">
                  1. Expect Our Call
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  We'll reach out shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 sm:flex-col sm:p-4">
              <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400 sm:mb-1" />
              <div>
                <h3 className="text-sm font-semibold">
                  2. Confirm Your Time
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  We'll schedule your session.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 sm:flex-col sm:p-4">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400 sm:mb-1" />
              <div>
                <h3 className="text-sm font-semibold">
                  3. Plan Your Growth
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Explore how to book more jobs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="fade-4 mt-8 text-[10px] tracking-widest text-slate-600 sm:text-xs">
          BOOK MORE LEADS · THE LEAD → JOB SYSTEM
        </footer>

      </div>
    </main>
  );
}

export default function CallBookingPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-dvh w-full items-center justify-center bg-[#050914] text-white">
        Loading...
      </div>
    }>
      <CallBookingContent />
    </Suspense>
  );
}