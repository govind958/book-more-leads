"use client";

import Script from "next/script";

export default function CallBookingPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Header */}
      <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Free Strategy Call
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Talk About Your Business
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Pick a time that works for you. We&apos;ll look at your current
            lead process and show you how the Lead → Job System can help you
            capture, follow up with, and book more leads.
          </p>
        </div>
      </section>

      {/* Calendly */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/govind-anand816/30min"
            style={{
              minWidth: "320px",
              height: "760px",
              width: "100%",
            }}
          />
        </div>
      </section>

      {/* Bottom reassurance */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-slate-400">
            30-minute call · No pressure · No obligation
          </p>
        </div>
      </section>
    </main>
  );
}