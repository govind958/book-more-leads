"use client";

import { useState, type ReactNode } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  DollarSign,
  Mail,
  Phone,
  User,
} from "lucide-react";

type FormData = {
  workType: string;
  businessStatus: string;
  timeframe: string;
  revenue: string;
  phone: string;
  email: string;
  name: string;
  company: string;
};

const questions = [
  {
    title: "What kind of work do you do?",
    subtitle: "Pick the one that fits best.",
    field: "workType" as keyof FormData,
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    options: [
      "Residential",
      "Commercial",
      "Both",
      "Not a contractor",
    ],
  },
  {
    title: "How's business these days?",
    subtitle: "What's your situation right now?",
    field: "businessStatus" as keyof FormData,
    icon: <Building2 className="h-5 w-5" />,
    options: [
      "Need jobs",
      "Not consistent",
      "Booked solid",
      "Just starting",
    ],
  },
  {
    title: "When do you want to improve that?",
    subtitle: "What's your timeline?",
    field: "timeframe" as keyof FormData,
    icon: <CalendarDays className="h-5 w-5" />,
    options: [
      "ASAP",
      "Next 1–2 months",
      "Later this year",
      "Just exploring",
    ],
  },
  {
    title: "What's your monthly revenue?",
    subtitle: "An estimate is fine.",
    field: "revenue" as keyof FormData,
    icon: <DollarSign className="h-5 w-5" />,
    options: [
      "$0–10k",
      "$10k–25k",
      "$25k–100k",
      "$100k+",
    ],
  },
];

export default function BookingCall() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    workType: "",
    businessStatus: "",
    timeframe: "",
    revenue: "",
    phone: "",
    email: "",
    name: "",
    company: "",
  });

  const totalSteps = 8;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const selectOption = (
    field: keyof FormData,
    value: string
  ) => {
    updateField(field, value);

    setTimeout(() => {
      setStep((previous) => previous + 1);
    }, 180);
  };

  const goBack = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const continueStep = () => {
    setStep((previous) => previous + 1);
  };

  const handleSubmit = () => {
    console.log("Lead submitted:", formData);

    /*
      Connect this later to:
      - Supabase
      - GoHighLevel
      - n8n
      - Make
      - Zapier
      - Your API
    */

    setStep(9);
  };

  const currentQuestion =
    step <= 4 ? questions[step - 1] : null;

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#091413] text-slate-100">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* LOGO — static, no link */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-center px-5 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>

          <div className="leading-none">
            <div className="whitespace-nowrap text-[14px] font-extrabold tracking-tight text-white sm:text-[15px]">
              BOOK MORE{" "}
              <span className="text-blue-400">
                LEADS
              </span>
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Lead → Job System
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <section className="relative z-10 flex flex-1 items-center justify-center px-4 pb-12 pt-8 sm:px-6 sm:pb-16">
        <div className="w-full max-w-[680px]">

          {/* PROGRESS */}
          {step <= totalSteps && (
            <div className="mb-7 sm:mb-9">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Let's get started
                </span>

                <span className="text-[11px] font-medium text-slate-600">
                  {step}/{totalSteps}
                </span>
              </div>

              <div className="h-[3px] overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${(step / totalSteps) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* QUESTIONS 1–4 */}
          {currentQuestion && (
            <div className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:rounded-[30px] sm:p-9 md:p-11">

              {/* ICON */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                {currentQuestion.icon}
              </div>

              {/* QUESTION */}
              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Question {step}
                </p>

                <h1 className="mt-2.5 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  {currentQuestion.title}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* OPTIONS */}
              <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {currentQuestion.options.map(
                  (option) => {
                    const selected =
                      formData[
                        currentQuestion.field
                      ] === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          selectOption(
                            currentQuestion.field,
                            option
                          )
                        }
                        className={`group flex min-h-[58px] items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${
                          selected
                            ? "border-blue-500 bg-blue-600/10"
                            : "border-slate-800 bg-slate-950/30 hover:border-slate-700 hover:bg-slate-950/60"
                        }`}
                      >
                        <span
                          className={`text-sm font-semibold ${
                            selected
                              ? "text-white"
                              : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {option}
                        </span>

                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            selected
                              ? "border-blue-500 bg-blue-600"
                              : "border-slate-700"
                          }`}
                        >
                          {selected && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>

              {/* BACK */}
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back
                </button>
              )}
            </div>
          )}

          {/* PHONE */}
          {step === 5 && (
            <InputStep
              step={step}
              icon={<Phone className="h-5 w-5" />}
              title="Your phone"
              subtitle="Best number to reach you."
              value={formData.phone}
              placeholder="(555) 123-4567"
              type="tel"
              onChange={(value) =>
                updateField("phone", value)
              }
              onBack={goBack}
              onContinue={continueStep}
            />
          )}

          {/* EMAIL */}
          {step === 6 && (
            <InputStep
              step={step}
              icon={<Mail className="h-5 w-5" />}
              title="Your email"
              subtitle="Where should we reach you?"
              value={formData.email}
              placeholder="you@company.com"
              type="email"
              onChange={(value) =>
                updateField("email", value)
              }
              onBack={goBack}
              onContinue={continueStep}
            />
          )}

          {/* NAME */}
          {step === 7 && (
            <InputStep
              step={step}
              icon={<User className="h-5 w-5" />}
              title="Your name"
              subtitle="Who will we be speaking with?"
              value={formData.name}
              placeholder="Your name"
              type="text"
              onChange={(value) =>
                updateField("name", value)
              }
              onBack={goBack}
              onContinue={continueStep}
            />
          )}

          {/* COMPANY */}
          {step === 8 && (
            <InputStep
              step={step}
              icon={<Building2 className="h-5 w-5" />}
              title="Your company"
              subtitle="What's your business called?"
              value={formData.company}
              placeholder="Your company name"
              type="text"
              onChange={(value) =>
                updateField("company", value)
              }
              onBack={goBack}
              onContinue={handleSubmit}
              buttonText="Finish"
            />
          )}

          {/* SUCCESS */}
          {step === 9 && (
            <div className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-7 text-center shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:rounded-[30px] sm:p-11">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                <Check className="h-6 w-6 text-blue-400" />
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">
                You're all set
              </p>

              <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                Thanks, {formData.name}.
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">
                We've got your information. We'll review
                your answers and follow up with you about
                your Lead → Job System.
              </p>

              <a
                href="/"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
              >
                Back to website

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          )}

          {/* FOOTNOTE */}
          {step <= totalSteps && (
            <p className="mt-5 text-center text-[10px] text-slate-700">
              Takes less than 2 minutes.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------
   INPUT STEP
------------------------------------------------------- */

function InputStep({
  step,
  icon,
  title,
  subtitle,
  value,
  placeholder,
  type,
  onChange,
  onBack,
  onContinue,
  buttonText = "Continue",
}: {
  step: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
  buttonText?: string;
}) {
  return (
    <div className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl sm:rounded-[30px] sm:p-9 md:p-11">

      {/* ICON */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      {/* TITLE */}
      <div className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
          Question {step}
        </p>

        <h1 className="mt-2.5 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

      {/* INPUT */}
      <div className="mt-7">
        <input
          autoFocus
          type={type}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              value.trim()
            ) {
              onContinue();
            }
          }}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-4 text-base text-white outline-none transition-all placeholder:text-slate-700 focus:border-blue-500 focus:bg-slate-950"
        />
      </div>

      {/* BUTTON */}
      <button
        type="button"
        disabled={!value.trim()}
        onClick={onContinue}
        className="group mt-3.5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        {buttonText}

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* BACK */}
      <button
        type="button"
        onClick={onBack}
        className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </button>
    </div>
  );
}