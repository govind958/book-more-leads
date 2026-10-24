

"use client";



import { useState, type ReactNode } from "react";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import {

  ArrowRight,

  CalendarCheck,

  Check,

  ChevronDown,

  Clock3,

  Globe,

  MessageCircle,

  ShieldCheck,

  Smartphone,

  Star,

  MapPin,

  TrendingUp,

  Zap,

  PhoneCall,

  Megaphone,

  Users,

  Repeat2,

  Send,

  PhoneMissed,

  MousePointerClick,

  Gift,

} from "lucide-react";



function Reveal({

  children,

  className = "",

}: {

  children: ReactNode;

  className?: string;

}) {

  return (

    <div className={`animate-[fadeUp_.7s_ease-out_both] ${className}`}>

      {children}

    </div>

  );

}




const websiteFeatures = [

  {

    icon: Globe,

    title: "Professional Website",

    description:

      "A clean, mobile-friendly website that helps customers trust your business and request a quote.",

  },

  {

    icon: MessageCircle,

    title: "Instant Lead Notifications",

    description:

      "Get new customer inquiries sent straight to your phone so you can respond quickly.",

  },

  {

    icon: Zap,

    title: "Automated Follow-Ups",

    description:

      "Keep conversations moving with timely follow-up messages when a potential customer goes quiet.",

  },

  {

    icon: CalendarCheck,

    title: "More Booking Opportunities",

    description:

      "Give potential customers a clear next step to request an estimate or book an appointment.",

  },

];



const reviewFeatures = [

  {

    icon: MessageCircle,

    title: "Automated Review Requests",

    description:

      "Send friendly review requests to customers after their job is completed.",

  },

  {

    icon: Clock3,

    title: "Friendly Reminders",

    description:

      "Schedule polite reminders over the following weeks when customers haven't responded.",

  },

  {

    icon: Star,

    title: "More Customer Reviews",

    description:

      "Make it easier for customers to share their honest experiences.",

  },

  {

    icon: TrendingUp,

    title: "Build Local Trust",

    description:

      "Strengthen your online reputation and help potential customers feel confident choosing you.",

  },

];



const missedCallFeatures = [

  {

    icon: PhoneMissed,

    title: "Never Leave a Caller Guessing",

    description:

      "When a call is missed, an automated text can let the customer know you've received their call.",

  },

  {

    icon: MessageCircle,

    title: "Start a Text Conversation",

    description:

      "Give callers an easy way to explain what they need while you're busy on a job.",

  },

  {

    icon: Clock3,

    title: "Respond While You're Busy",

    description:

      "A configured text-back workflow can acknowledge callers even when you can't answer immediately.",

  },

  {

    icon: ShieldCheck,

    title: "Stand Out From Competitors",

    description:

      "Make it easy for customers to hear back from your business instead of calling someone else.",

  },

];



const campaignFeatures = [

  {

    icon: Users,

    title: "Reconnect With Past Customers",

    description:

      "Reach out to previous customers when it's time for maintenance, upgrades, or another project.",

  },

  {

    icon: Gift,

    title: "Encourage Referrals",

    description:

      "Make it easy to ask satisfied customers to recommend your business to friends and family.",

  },

  {

    icon: Repeat2,

    title: "Win Repeat Business",

    description:

      "Stay in touch so customers remember your business when they need your services again.",

  },

  {

    icon: MousePointerClick,

    title: "Launch With One Click",

    description:

      "Use prepared campaigns to start an approved follow-up sequence without writing every message from scratch.",

  },

];



const faqs = [

  {

    question: "What is the Lead to Job System?",

    answer:

      "It's a collection of website and follow-up tools designed to help contractors capture customer inquiries, respond to leads, request reviews, and reconnect with past customers.",

  },

  {

    question: "How does the website send leads to my phone?",

    answer:

      "When a customer submits your website form, the connected system can send a notification or text to your phone. The exact workflow depends on your setup.",

  },

  {

    question: "What happens when I miss a call?",

    answer:

      "When configured, the missed-call text-back workflow can automatically send a text acknowledging the caller and inviting them to reply. It requires compatible phone and messaging integrations.",

  },

  {

    question: "How does the review funnel work?",

    answer:

      "After a job is completed, the system can send a review request with your review link and schedule polite reminders if the customer hasn't responded. Requests should invite honest feedback from customers.",

  },

  {

    question: "What are one-click marketing campaigns?",

    answer:

      "They're prepared campaigns designed to help you contact past customers, ask for referrals, and encourage repeat business. You can review and configure the messages before launching them.",

  },

  {

    question: "Can I use this for my type of contracting business?",

    answer:

      "The system can be tailored for many home-service businesses, including roofing, plumbing, HVAC, electrical, solar, painting, landscaping, pool services, and remodeling.",

  },

  {

    question: "Do I need to set everything up myself?",

    answer:

      "We'll discuss your business, the features you need, and the integrations required during your introductory call. Available functionality depends on your final configuration.",

  },

];




function FeatureGrid({

  features,

}: {

  features: {

    icon: typeof Globe;

    title: string;

    description: string;

  }[];

}) {

  return (

    <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">

      {features.map((feature) => {

        const Icon = feature.icon;



        return (

          <div

            key={feature.title}

            className="border-b border-white/10 py-7 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"

          >

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500 bg-blue-500/15 text-blue-200">

              <Icon className="h-7 w-7" />

            </div>



            <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">

              {feature.title}

            </h3>



            <p className="mt-2 max-w-xs text-sm leading-6 text-blue-100/85">

              {feature.description}

            </p>

          </div>

        );

      })}

    </div>

  );

}




function WebsitePhoneMockup() {

  return (

    <div className="relative mx-auto w-full max-w-[390px]">

      <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />



      <div className="relative mx-auto w-[270px] rounded-[3rem] border-[8px] border-[#111820] bg-[#111820] p-2 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:w-[300px]">

        <div className="overflow-hidden rounded-[2.35rem] bg-white text-slate-900">

          <div className="flex h-10 items-center justify-between px-5 text-[10px] font-bold">

            <span>9:41</span>

            <span>●●● ▰</span>

          </div>



          <div className="mx-auto -mt-1 h-5 w-24 rounded-full bg-black" />



          <div className="px-4 pb-5 pt-4">

            <div className="text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">

                <Smartphone className="h-5 w-5 text-blue-600" />

              </div>



              <p className="mt-2 text-sm font-bold">New Lead</p>

              <p className="text-[10px] text-slate-500">

                Website inquiry · just now

              </p>

            </div>



            <div className="mt-5 rounded-2xl rounded-tl-md bg-slate-100 p-3 text-[12px] leading-relaxed">

              Hi, I need a quote for a new roof. Can you help?

            </div>



            <p className="mt-1 text-[9px] text-slate-400">9:41 AM</p>



            <div className="ml-5 mt-4 rounded-2xl rounded-tr-md bg-blue-600 p-3 text-[12px] leading-relaxed text-white">

              Hi! Thanks for reaching out. We can help with that.



              <br />

              <br />



              What's the property address so we can get started?

            </div>



            <p className="mt-1 text-right text-[9px] text-slate-400">

              Delivered

            </p>



            <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-400">

              <span className="text-base">＋</span>

              <span className="flex-1">Text message...</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">

                <Send className="h-3.5 w-3.5" />

              </span>

            </div>

          </div>



          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-slate-900" />

        </div>

      </div>



      <div className="absolute -left-2 top-12 hidden max-w-[185px] items-center gap-3 rounded-2xl border border-white/60 bg-white p-3 text-slate-900 shadow-xl sm:flex md:-left-14">

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">

          <MessageCircle className="h-5 w-5" />

        </span>



        <span className="text-xs font-bold leading-snug">

          Customer submits a website inquiry

        </span>

      </div>



      <div className="absolute -right-1 top-44 hidden max-w-[190px] items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-slate-900 shadow-xl sm:flex md:-right-14">

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">

          <Check className="h-5 w-5" />

        </span>



        <span className="text-xs font-bold leading-snug">

          Lead notification goes straight to your phone

        </span>

      </div>

    </div>

  );

}




function ReviewPhoneMockup() {

  return (

    <div className="relative mx-auto w-full max-w-[390px]">

      <div className="absolute -inset-8 rounded-full bg-emerald-400/20 blur-3xl" />



      <div className="relative mx-auto w-[270px] rounded-[3rem] border-[8px] border-[#111820] bg-[#111820] p-2 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:w-[300px]">

        <div className="overflow-hidden rounded-[2.35rem] bg-white text-slate-900">

          <div className="flex h-9 items-center justify-between px-5 text-[10px] font-bold">

            <span>9:41</span>

            <span>●●● ▰</span>

          </div>



          <div className="mx-auto -mt-1 h-5 w-24 rounded-full bg-black" />



          <div className="border-b border-slate-100 px-3 pb-3 pt-3 text-center">

            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-500 text-lg font-bold text-white">

              B

            </div>



            <p className="mt-1 text-xs font-bold">Book More Leads</p>

            <p className="text-[10px] text-slate-500">Text message</p>

          </div>



          <div className="space-y-3 px-3 py-4 text-[11px] leading-relaxed">

            <div className="mr-5 rounded-2xl rounded-tl-sm bg-slate-100 p-3">

              Hi! It was great working with you on your roof. Would you mind

              leaving us a quick review on Google? It only takes a minute!

            </div>



            <p className="pl-1 text-[9px] text-slate-400">

              Mon, 10:24 AM

            </p>



            <div className="ml-5 rounded-2xl rounded-tr-sm bg-blue-600 p-3 text-white">

              Sure, I'll leave you a review!

            </div>



            <p className="pr-1 text-right text-[9px] text-slate-400">

              Mon, 10:32 AM

            </p>



            <div className="mr-2 rounded-2xl rounded-tl-sm bg-slate-100 p-3">

              Thanks! Just a friendly reminder — we'd really appreciate your

              feedback. Here's the link:



              <span className="mt-1 block break-all text-blue-600">

                g.page/r/your-business/review

              </span>

            </div>



            <p className="pl-1 text-[9px] text-slate-400">

              Wed, 9:12 AM

            </p>

          </div>



          <div className="mx-3 mb-4 flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-400">

            <span className="text-base">＋</span>

            <span className="flex-1">Text message...</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">

              <Send className="h-3.5 w-3.5" />

            </span>

          </div>



          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-slate-900" />

        </div>

      </div>



      <div className="absolute -right-3 top-28 hidden w-[205px] rotate-2 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-2xl sm:block md:-right-14">

        <div className="flex items-center gap-2">

          <span className="flex h-9 w-9 items-center justify-center rounded-full text-2xl font-black text-blue-600">

            G

          </span>



          <span className="text-sm font-extrabold">Google Review</span>

        </div>



        <div className="mt-3 flex gap-1 text-2xl text-amber-400" aria-label="Five stars">

          {"★★★★★".split("").map((star, index) => (

            <span key={index}>{star}</span>

          ))}

        </div>



        <p className="mt-2 text-sm font-medium leading-snug">

          Great service! Highly recommend them!

        </p>



        <div className="mt-3 flex items-center gap-2">

          <span className="h-7 w-7 rounded-full bg-slate-200" />

          <span className="h-2 w-24 rounded-full bg-slate-200" />

        </div>

      </div>



      <div className="absolute -left-1 top-20 hidden max-w-[175px] items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-slate-900 shadow-xl sm:flex md:-left-14">

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">

          <Check className="h-4 w-4" />

        </span>



        <span className="text-xs font-bold leading-snug">

          Friendly review reminders, automatically scheduled

        </span>

      </div>

    </div>

  );

}




function MissedCallPhoneMockup() {

  return (

    <div className="relative mx-auto w-full max-w-[390px]">

      <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />



      <div className="relative mx-auto w-[270px] rounded-[3rem] border-[8px] border-[#111820] bg-[#111820] p-2 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:w-[300px]">

        <div className="overflow-hidden rounded-[2.35rem] bg-white text-slate-900">

          <div className="flex h-9 items-center justify-between px-5 text-[10px] font-bold">

            <span>9:41</span>

            <span>●●● ▰</span>

          </div>



          <div className="mx-auto -mt-1 h-5 w-24 rounded-full bg-black" />



          <div className="border-b border-slate-100 px-3 py-4 text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">

              <PhoneMissed className="h-5 w-5" />

            </div>



            <p className="mt-2 text-sm font-bold">Missed Call</p>

            <p className="text-[10px] text-slate-500">

              Potential customer · just now

            </p>

          </div>



          <div className="space-y-3 px-3 py-4 text-[11px] leading-relaxed">

            <div className="ml-5 rounded-2xl rounded-tr-sm bg-blue-600 p-3 text-white">

              Hi! Sorry we missed your call. We're probably helping another

              customer. What can we help you with?

            </div>



            <p className="pr-1 text-right text-[9px] text-slate-400">

              Text sent automatically

            </p>



            <div className="mr-5 rounded-2xl rounded-tl-sm bg-slate-100 p-3">

              Hi! I'm looking for a quote to repair my roof.

            </div>



            <p className="pl-1 text-[9px] text-slate-400">

              Customer replied

            </p>



            <div className="ml-5 rounded-2xl rounded-tr-sm bg-blue-600 p-3 text-white">

              Absolutely! We can help. What's the property address?

            </div>

          </div>



          <div className="mx-3 mb-4 flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-[10px] text-slate-400">

            <span className="text-base">＋</span>

            <span className="flex-1">Text message...</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">

              <Send className="h-3.5 w-3.5" />

            </span>

          </div>



          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-slate-900" />

        </div>

      </div>



      <div className="absolute -left-3 top-16 hidden max-w-[175px] items-center gap-2 rounded-xl border border-red-100 bg-white p-3 text-slate-900 shadow-xl sm:flex md:-left-14">

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">

          <PhoneMissed className="h-4 w-4" />

        </span>



        <span className="text-xs font-bold leading-snug">

          Call missed while you're on a job

        </span>

      </div>



      <div className="absolute -right-2 top-48 hidden max-w-[180px] items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-slate-900 shadow-xl sm:flex md:-right-14">

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">

          <Check className="h-4 w-4" />

        </span>



        <span className="text-xs font-bold leading-snug">

          A text conversation starts automatically

        </span>

      </div>

    </div>

  );

}




function CampaignMockup() {

  return (

    <div className="relative mx-auto w-full max-w-[460px]">

      <div className="absolute -inset-8 rounded-full bg-emerald-400/15 blur-3xl" />



      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b203a] p-5 shadow-[0_30px_90px_rgba(0,0,0,.4)] sm:p-7">

        <div className="flex items-center justify-between border-b border-white/10 pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">

              <Megaphone className="h-6 w-6" />

            </div>



            <div>

              <p className="font-extrabold text-white">Marketing Campaigns</p>

              <p className="mt-1 text-xs text-blue-100/60">

                Your next customer could be one message away

              </p>

            </div>

          </div>



          <span className="hidden rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 sm:block">

            Ready to launch

          </span>

        </div>



        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">

              <Users className="h-5 w-5" />

            </div>



            <div className="min-w-0 flex-1">

              <p className="font-bold text-white">Past Customer Follow-Up</p>

              <p className="mt-1 text-xs leading-5 text-blue-100/65">

                Check in and see if they need another project.

              </p>

            </div>



            <Check className="h-5 w-5 shrink-0 text-emerald-400" />

          </div>



          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200">

              <Gift className="h-5 w-5" />

            </div>



            <div className="min-w-0 flex-1">

              <p className="font-bold text-white">Referral Request</p>

              <p className="mt-1 text-xs leading-5 text-blue-100/65">

                Invite happy customers to spread the word.

              </p>

            </div>



            <Check className="h-5 w-5 shrink-0 text-emerald-400" />

          </div>



          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200">

              <Repeat2 className="h-5 w-5" />

            </div>



            <div className="min-w-0 flex-1">

              <p className="font-bold text-white">Repeat Business Campaign</p>

              <p className="mt-1 text-xs leading-5 text-blue-100/65">

                Stay in touch when customers need you again.

              </p>

            </div>



            <Check className="h-5 w-5 shrink-0 text-emerald-400" />

          </div>

        </div>



        <div className="mt-6 rounded-2xl bg-blue-600 p-4 sm:p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">

              <MousePointerClick className="h-5 w-5 text-white" />

            </div>



            <div className="flex-1">

              <p className="font-extrabold text-white">

                Your campaign, one click away

              </p>

              <p className="mt-1 text-xs text-blue-100">

                Review your message and launch when you're ready.

              </p>

            </div>



            <ArrowRight className="h-5 w-5 text-white" />

          </div>

        </div>

      </div>



      <div className="absolute -right-2 -top-4 hidden items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-slate-900 shadow-xl sm:flex">

        <Check className="h-5 w-5 text-emerald-500" />

        <span className="text-xs font-extrabold">

          Ready-made campaigns

        </span>

      </div>

    </div>

  );

}




function SectionBadge({

  icon: Icon,

  children,

}: {

  icon: typeof Globe;

  children: ReactNode;

}) {

  return (

    <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-600/30 px-4 py-2 text-xs font-bold tracking-wide text-blue-100 sm:text-sm">

      <Icon className="h-4 w-4" />

      {children}

    </div>

  );

}




export default function ProductsPage() {

  const [openFaq, setOpenFaq] = useState<number | null>(0);



  return (

    <main className="min-h-screen overflow-hidden bg-[#06172b] font-sans text-white">

      <Navbar />



      



      <section

        id="website"

        className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_82%_12%,rgba(28,113,202,.38),transparent_38%),linear-gradient(115deg,#04152a_0%,#062447_58%,#0b3155_100%)]"

      >

        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />



        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-6 lg:px-10 lg:py-16">

          <Reveal className="relative z-10 max-w-3xl">

            <SectionBadge icon={Globe}>

              FUNCTIONAL WEBSITE

            </SectionBadge>



            <h1 className="mt-6 text-[clamp(2.35rem,5.2vw,4.7rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-white">

              Get a website that instantly turns leads into{" "}

              <span className="text-emerald-400">

                text conversations

              </span>{" "}

              that go <span className="whitespace-nowrap">DIRECTLY</span> to

              your phone.

            </h1>



            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              No more missed opportunities hiding in your inbox. When a

              customer reaches out, their inquiry can land right on your

              phone—so you can respond and keep the job moving.

            </p>



            <Link

              href="/callbooking"

              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(0,99,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"

            >

              Start Your Free Trial Call

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </Link>



            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-blue-100/90 sm:text-sm">

              <span className="inline-flex items-center gap-2">

                <Check className="h-5 w-5 rounded-full bg-blue-100 p-1 text-blue-900" />

                No setup fee

              </span>



              <span className="hidden h-5 w-px bg-white/25 sm:block" />



              <span className="inline-flex items-center gap-2">

                <CalendarCheck className="h-5 w-5 text-blue-200" />

                20-minute call

              </span>



              <span className="hidden h-5 w-px bg-white/25 sm:block" />



              <span className="inline-flex items-center gap-2">

                <ShieldCheck className="h-5 w-5 text-blue-200" />

                No pressure

              </span>

            </div>

          </Reveal>



          <Reveal className="relative z-10 py-4 sm:py-8">

            <WebsitePhoneMockup />

          </Reveal>

        </div>

      </section>



      <section className="bg-white py-14 text-[#0a2347] sm:py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-7 lg:px-10">

          {websiteFeatures.map((feature) => {

            const Icon = feature.icon;



            return (

              <Reveal key={feature.title} className="h-full">

                <div className="h-full border-b border-slate-200 pb-7 text-center sm:border-b-0 sm:pb-0">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-900 ring-8 ring-blue-50/70">

                    <Icon className="h-7 w-7" />

                  </div>



                  <h2 className="mt-5 text-lg font-extrabold tracking-tight sm:text-xl">

                    {feature.title}

                  </h2>



                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">

                    {feature.description}

                  </p>

                </div>

              </Reveal>

            );

          })}

        </div>



        <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-blue-50 px-5 py-5 text-center text-sm font-bold text-blue-950 sm:flex-row sm:text-base">

            <ShieldCheck className="h-6 w-6 shrink-0 text-blue-800" />

            No contractor should lose a job just because they were too busy

            to call back.

          </div>

        </div>

      </section>



      



      <section

        id="reviews"

        className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_82%_12%,rgba(28,113,202,.38),transparent_38%),linear-gradient(115deg,#04152a_0%,#062447_58%,#0b3155_100%)]"

      >

        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />



        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-6 lg:px-10 lg:py-16">

          <Reveal className="relative z-10 max-w-3xl lg:order-2">

            <SectionBadge icon={Star}>

              5-STAR MAGIC REVIEW FUNNEL

            </SectionBadge>



            <h2 className="mt-6 text-[clamp(2.2rem,4.8vw,4.35rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">

              "Sure, I'll leave you a review," but the truth is people forget.

              <span className="mt-2 block text-emerald-400">

                We'll gently remind them

              </span>

              for a few weeks.

            </h2>



            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              More chances to collect honest customer reviews. Build trust

              with future customers, strengthen your local presence, and

              stay top-of-mind after the job is done.

            </p>



            <Link

              href="/callbooking"

              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(0,99,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"

            >

              Get Started Today

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </Link>

          </Reveal>



          <Reveal className="relative z-10 py-4 sm:py-8">

            <ReviewPhoneMockup />

          </Reveal>

        </div>



      </section>



      



      <section

        id="missed-calls"

        className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_15%_25%,rgba(28,113,202,.30),transparent_38%),linear-gradient(115deg,#061a32_0%,#092746_58%,#06172b_100%)]"

      >

        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />



        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-6 lg:px-10 lg:py-16">

          <Reveal className="relative z-10 max-w-3xl">

            <SectionBadge icon={PhoneCall}>

              MISSED CALL TEXT BACK

            </SectionBadge>



            <h2 className="mt-6 text-[clamp(2.25rem,4.8vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">

              Everyone misses calls.

              <span className="mt-2 block text-emerald-400">

                Not everyone texts back.

              </span>

              Be the one who does.

            </h2>



            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              You're on a roof, under a sink, or helping another customer.

              You can't answer every call. With an automated text-back

              workflow, missed callers can get a quick response and an easy

              way to tell you what they need.

            </p>



            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-white sm:text-lg">

              Outshine your competition before they even call the next

              contractor.

            </p>



            <Link

              href="/callbooking"

              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(0,99,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"

            >

              Stop Losing Missed Opportunities

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </Link>



            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-blue-100/85">

              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Automatic text-back

              </span>



              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Start conversations

              </span>

            </div>

          </Reveal>



          <Reveal className="relative z-10 py-4 sm:py-8">

            <MissedCallPhoneMockup />

          </Reveal>

        </div>



      </section>



      



      <section

        id="campaigns"

        className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_82%_20%,rgba(28,113,202,.30),transparent_38%),linear-gradient(115deg,#04152a_0%,#082441_58%,#0b3155_100%)]"

      >

        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />



        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.95fr_1.05fr] lg:gap-14 lg:px-10 lg:py-20">

          <Reveal className="relative z-10 max-w-2xl lg:order-2">

            <SectionBadge icon={Megaphone}>

              ONE-CLICK MARKETING CAMPAIGNS

            </SectionBadge>



            <h2 className="mt-6 text-[clamp(2.2rem,4.8vw,4.2rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">

              You know it, and we know it...

              <span className="mt-2 block text-emerald-400">

                Referrals and repeat customers are the best.

              </span>

              Let's get you both!

            </h2>



            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              You've already put in the work to win customers. Stay connected

              after the job is finished. Reach out to past customers, ask

              for referrals, and remind people you're ready when they need

              your services again.

            </p>



            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/90">

              Choose a prepared campaign, review the message, and launch it

              when you're ready—without starting from a blank page.

            </p>



            <Link

              href="/callbooking"

              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(0,99,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"

            >

              Grow With Your Existing Customers

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </Link>



            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-blue-100/85">

              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Past customers

              </span>



              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Referrals

              </span>



              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Repeat business

              </span>

            </div>

          </Reveal>



          <Reveal className="relative z-10 py-4 sm:py-8 lg:order-1">

            <CampaignMockup />

          </Reveal>

        </div>



      </section>





      



      <section

        id="local-seo"

        className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(28,113,202,.32),transparent_38%),linear-gradient(115deg,#04152a_0%,#062447_58%,#0b3155_100%)]"

      >

        

        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />



        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-16">



          

          <Reveal className="relative z-10 max-w-2xl">

            <SectionBadge icon={TrendingUp}>

              LOCAL SEO

            </SectionBadge>



            <h2 className="mt-6 text-[clamp(2.25rem,4.8vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">

              Get your business{" "}

              <span className="mt-2 block text-emerald-400">

                found on Google.

              </span>

            </h2>



            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              “Rank number one on Google in a week!”

            </p>



            <p className="mt-2 max-w-xl text-base font-semibold leading-7 text-white sm:text-lg">

              Just kidding, SEO takes time...

            </p>



            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/90 sm:text-lg sm:leading-8">

              We help improve your Google Business Profile and local search

              presence so nearby customers can find your business more easily.

              Build a stronger listing with accurate business information,

              customer reviews, and a consistent online presence.

            </p>



            

            <Link

              href="/callbooking"

              className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_12px_35px_rgba(0,99,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"

            >

              Improve My Google Listing

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            </Link>



            

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-blue-100/85">

              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Google Business Profile

              </span>



              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Local visibility

              </span>



              <span className="inline-flex items-center gap-2">

                <Check className="h-4 w-4 text-emerald-400" />

                Long-term growth

              </span>

            </div>

          </Reveal>



          

          <Reveal className="relative z-10 py-4 sm:py-8">

            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />



            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-2 shadow-[0_30px_90px_rgba(0,0,0,.4)] sm:p-3">

              <img

                src="/outrank-the-competition-google-reviews-stands-plates.webp"

                alt="Google local search listing comparison showing how a stronger rating and more reviews can help a business stand out"

                className="h-auto w-full rounded-2xl object-contain"

                loading="lazy"

              />

            </div>

          </Reveal>

        </div>



        

      </section>





















      



      <section className="relative overflow-hidden bg-[#06172b] py-16 sm:py-24">

        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />



        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-emerald-300">

            Built for busy contractors

          </p>



          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">

            More than a website.

            <span className="mt-2 block text-blue-400">

              A better way to follow up.

            </span>

          </h2>



          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100/80">

            Capture new inquiries, respond to missed calls, collect customer

            reviews, and reconnect with people who already know your work.

            Let's discuss what makes sense for your business.

          </p>



          <Link

            href="/callbooking"

            className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"

          >

            Book a Free Strategy Call

            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

          </Link>



          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-blue-100/70 sm:text-sm">

            <span className="inline-flex items-center gap-2">

              <Check className="h-4 w-4 text-emerald-300" />

              20-minute call

            </span>



            <span className="inline-flex items-center gap-2">

              <Check className="h-4 w-4 text-emerald-300" />

              No pressure

            </span>



            <span className="inline-flex items-center gap-2">

              <Check className="h-4 w-4 text-emerald-300" />

              Clear next steps

            </span>

          </div>

        </div>

      </section>



      



      <section

        id="faq"

        className="scroll-mt-20 bg-white py-16 text-[#0a2347] sm:py-20"

      >

        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-700">

              FAQ

            </span>



            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">

              Questions? We've got answers.

            </h2>



            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">

              Learn how websites, automated follow-ups, reviews, and

              marketing campaigns can support your contracting business.

            </p>

          </div>



          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;



              return (

                <div key={faq.question}>

                  <button

                    type="button"

                    aria-expanded={isOpen}

                    onClick={() => setOpenFaq(isOpen ? null : index)}

                    className="flex w-full items-center justify-between gap-5 py-5 text-left"

                  >

                    <span className="font-bold sm:text-lg">

                      {faq.question}

                    </span>



                    <ChevronDown

                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${

                        isOpen ? "rotate-180 text-blue-600" : ""

                      }`}

                    />

                  </button>



                  {isOpen && (

                    <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-slate-600">

                      {faq.answer}

                    </p>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </section>



      <Footer />



      <style jsx global>{`

        @keyframes fadeUp {

          from {

            opacity: 0;

            transform: translateY(14px);

          }



          to {

            opacity: 1;

            transform: translateY(0);

          }

        }



        html {

          scroll-behavior: smooth;

        }



        section[id] {

          scroll-margin-top: 5rem;

        }



        @media (prefers-reduced-motion: reduce) {

          *,

          *::before,

          *::after {

            animation-duration: 0.01ms !important;

            scroll-behavior: auto !important;

          }

        }

      `}</style>

    </main>

  );

}
