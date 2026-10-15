"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#070b12] text-white overflow-hidden font-sans flex items-center justify-center">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b12] via-[#0b1329] to-[#1e40af]/40 pointer-events-none" />

      {/* Hero Section Container */}
      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 text-center min-h-[100dvh]">
        
        {/* Top Pill / Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 py-1.5 px-3.5 sm:px-4 text-xs sm:text-sm font-medium text-cyan-200 shadow-inner backdrop-blur-md">
          <Zap className="h-3.5 w-3.5 shrink-0 fill-cyan-400 text-cyan-400" />
          <span className="whitespace-nowrap">Power up your business with AI</span>
        </div>

        {/* Main Headline */}
        <h1 className="w-full max-w-4xl text-[clamp(2rem,6.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white">
          The AI-powered
          <span className="block text-white">business operating system</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 w-full max-w-2xl text-[clamp(0.9rem,1.8vw,1.125rem)] font-normal leading-relaxed text-slate-300">
          All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers!
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/growth"
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-gradient-to-r from-[#00b4f0] to-[#00d8f0] px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start 14 Day Free Trial</span>
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </Link>
        </div>

      </section>
    </div>
  );
}