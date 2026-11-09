
"use client";

import { useState } from "react";

const slides = [
  {
    number: "01",
    eyebrow: "WELCOME",
    title: "Thanks for booking a call!",
    description:
      "We're excited to learn more about your business and explore how we can help.",
    background: "linear-gradient(135deg, #172554, #2563EB)",
  },
  {
    number: "02",
    eyebrow: "A QUICK INTRODUCTION",
    title: "Hey, I'm Max.",
    description:
      "I'm from Book More Leads. We help contractors capture more opportunities, follow up with potential customers, and book more jobs.",
    background: "linear-gradient(135deg, #064E3B, #059669)",
  },
  {
    number: "03",
    eyebrow: "BEFORE OUR MEETING",
    title: "Here's what we'll cover.",
    description:
      "What we do, how our system works, and what you can expect when working with us.",
    background: "linear-gradient(135deg, #581C87, #9333EA)",
  },
  {
    number: "04",
    eyebrow: "OUR MISSION",
    title: "More leads. More follow-ups. More booked jobs.",
    description:
      "A simple system designed to help contractors turn incoming leads into real customer conversations and opportunities.",
    background: "linear-gradient(135deg, #9A3412, #EA580C)",
  },
];

export default function Presentation() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      id="presentation"
      className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth"
      onScroll={(event) => {
        const el = event.currentTarget;
        setActiveSlide(
          Math.min(
            slides.length - 1,
            Math.round(el.scrollTop / el.clientHeight)
          )
        );
      }}
    >
      {/* Progress */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/20">
        <div
          className="h-full bg-white transition-all duration-500"
          style={{
            width: `${((activeSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide navigation */}
      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 sm:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.number}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "h-8 w-2 bg-white"
                : "h-2 w-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <section
          id={`slide-${index}`}
          key={slide.number}
          className="relative flex min-h-screen snap-start snap-always items-center justify-center overflow-hidden px-6 py-16 text-center text-white"
          style={{ background: slide.background }}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-32 h-[550px] w-[550px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-[15%] top-[15%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div key={slide.number} className="relative z-10 mx-auto max-w-5xl animate-slide-in">
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-xs font-bold tracking-[0.3em]">
                {slide.eyebrow}
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-7xl md:text-8xl">
              {slide.title}
            </h1>

            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-xl sm:leading-9">
              {slide.description}
            </p>

            <div className="mt-16 text-sm font-bold tracking-[0.25em] text-white/50">
              {slide.number} / 04
            </div>

            {index !== slides.length - 1 && (
              <button
                onClick={() => goToSlide(index + 1)}
                className="mt-9 flex w-full flex-col items-center gap-3 text-white/80 transition hover:text-white"
              >
                <span className="text-[10px] font-bold tracking-[0.3em]">
                  NEXT
                </span>
                <span className="animate-bounce text-3xl">↓</span>
              </button>
            )}

            {index === slides.length - 1 && (
              <button
                onClick={() => goToSlide(0)}
                className="mt-9 text-xs font-bold tracking-[0.2em] text-white/60 hover:text-white"
              >
                ↑ BACK TO START
              </button>
            )}
          </div>

          <div className="pointer-events-none absolute bottom-[-60px] right-[-10px] text-[250px] font-black text-white/[0.045] sm:text-[350px]">
            {slide.number}
          </div>
        </section>
      ))}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.8s ease-out both;
        }

        #presentation {
          scrollbar-width: none;
        }

        #presentation::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
