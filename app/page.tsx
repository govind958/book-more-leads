"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import SetupSteps from "@/components/layout/ui/HOWITWORKS";
import PricingCard from "@/components/layout/ui/PricingCard";
import SuccessStoriess from "@/components/layout/ui/SuccessStories";
import TargetIndustries from "@/components/layout/ui/TargetIndustries";
import Navbar from "@/components/layout/Navbar";
import HeroSectionw from "@/components/layout/ui/HEROSECTION";
import FAQ from "@/components/layout/ui/HomePageFAQ";
import HomePageFAQ from  "@/components/layout/ui/HomePageFAQ"
import PlatformCompatibility from "@/components/layout/ui/PlatformCompatibility";
import MoneyBackGuarantee from "@/components/layout/ui/MoneyBackGuarantee";

import {
  CalendarCheck,
  Check,
  ChevronDown,
  Globe,
  PhoneCall,
  Search,
  Star,
  Repeat,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";


/* ------------------------------------------------------------------ */
/*  Reveal — fades + slides content in the first time it scrolls      */
/*  into view. Pure IntersectionObserver, no animation library.       */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

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

const NAVBAR_TO_CONTENT_GAP = "mt-16 sm:mt-20 md:mt-24 lg:mt-28";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-[#070e12] text-white font-sans overflow-x-hidden">
      {/* HERO GLOW / BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[350px] w-[90vw] sm:h-[500px] sm:w-[600px] md:h-[600px] md:w-[800px] -translate-x-1/2 rounded-full bg-[#0d1d2b] blur-[100px] sm:blur-[140px] opacity-60" />

      {/* NAVBAR */}
     <Navbar/>

      {/* HERO SECTION */}
      <HeroSectionw/>

      {/* PLATFORM COMPATIBILITY */}
      <PlatformCompatibility />

      {/* SETUP STEPS */}
      <SetupSteps />

      {/* SUCCESS STORIES */}
      <SuccessStoriess />

      {/* PRICING CARD */}
      <PricingCard />

      {/* TARGET INDUSTRIES */}
      <TargetIndustries />

      {/* MONEY BACK GUARANTEE / CTA */}
      <MoneyBackGuarantee />

      {/* FAQ SECTION */}
     
      <HomePageFAQ />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}