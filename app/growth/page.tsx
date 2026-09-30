
"use client";

import { useState, type ReactNode } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  DollarSign,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

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

type Question = {
  title: string;
  subtitle: string;
  field: keyof FormData;
  icon: ReactNode;
  options: string[];
};

const questions: Question[] = [
  {
    title: "What kind of work do you do?",
    subtitle: "Choose the option that best describes your business.",
    field: "workType",
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
    subtitle: "Tell us what's happening with your business right now.",
    field: "businessStatus",
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
    subtitle: "What's your expected timeline?",
    field: "timeframe",
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
    subtitle: "An approximate number is completely fine.",
    field: "revenue",
    icon: <DollarSign className="h-5 w-5" />,
    options: [
      "$0–10k",
      "$10k–25k",
      "$25k–100k",
      "$100k+",
    ],
  },
];

export default function GrowthPage() {
  const supabase = createClient();

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 8;

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
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
    if (loading) return;

    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const continueStep = () => {
    if (loading) return;

    setStep((previous) => previous + 1);
  };

  // =====================================================
  // SUBMIT — SAVE TO SUPABASE ONLY
  // =====================================================

  const submitLead = async () => {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      // Save complete lead to Supabase
      const { error: insertError } = await supabase
        .from("leads")
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,

          // Qualification
          work_type: formData.workType,
          business_status: formData.businessStatus,
          timeframe: formData.timeframe,
          revenue: formData.revenue,

          // Metadata
          source: "qualify",
          status: "new",
        });

      if (insertError) {
        console.error(
          "❌ Supabase lead insert error:",
          insertError
        );

        setError(
          "We couldn't submit your information. Please try again."
        );

        return;
      }

      console.log("✅ Lead saved to Supabase");

      // Show success screen
      setStep(9);
    } catch (submissionError) {
      console.error(
        "❌ Unexpected submission error:",
        submissionError
      );

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion =
    step <= 4 ? questions[step - 1] : null;

  // =====================================================
  // SUCCESS SCREEN
  // =====================================================

  if (step === 9) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#070e12] px-4 py-6 text-slate-100 sm:px-6 sm:py-10">
        {/* BACKGROUND EFFECTS */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(https://grainy-gradients.vercel.app/noise.svg)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[550px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[960px]">
          <div className="overflow-hidden rounded-[24px] border border-slate-800/80 bg-[#0d1720] shadow-2xl shadow-black/20">
            {/* SUCCESS */}

            <div className="px-6 py-14 text-center sm:px-10 sm:py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                <CheckCircle2 className="h-8 w-8 text-blue-400" />
              </div>

              <div className="mx-auto mt-6 max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                  You're all set
                </p>

                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Thanks, {formData.name}.
                </h1>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  We've received your information and
                  will review your answers before getting
                  back to you about the Lead → Job System.
                </p>
              </div>

              <a
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Back to website

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <TrustSection />
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // MAIN FORM
  // =====================================================

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070e12] px-4 py-5 text-slate-100 sm:px-6 sm:py-8">
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[960px]">
        <div className="overflow-hidden rounded-[24px] border border-slate-800/80 bg-[#0d1720] shadow-2xl shadow-black/20">

          {/* HEADER / STEPPER */}

          <div className="px-5 pt-6 sm:px-8 sm:pt-8">
            <div className="mx-auto flex max-w-[820px] items-center">

              {/* STEP 1 */}

              <div className="flex shrink-0 items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
                  1
                </div>

                <span className="text-sm font-bold text-white sm:text-base">
                  Business Information
                </span>
              </div>

              {/* LINE */}

              <div className="mx-3 h-px flex-1 bg-slate-700 sm:mx-5" />

              {/* STEP 2 */}

              <div className="flex shrink-0 items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-xs font-medium text-slate-400">
                  2
                </div>

                <span className="text-sm font-bold text-slate-500 sm:text-base">
                  Get Started
                </span>
              </div>
            </div>
          </div>

          {/* PROGRESS */}

          <div className="px-5 pt-6 sm:px-8">
            <div className="mx-auto max-w-[820px]">
              <div className="h-1 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-500"
                  style={{
                    width: `${(step / totalSteps) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-2 flex justify-between text-[11px] text-slate-500">
                <span>
                  Step {step} of {totalSteps}
                </span>

                <span>
                  {Math.round(
                    (step / totalSteps) * 100
                  )}
                  %
                </span>
              </div>
            </div>
          </div>

          {/* FORM CONTENT */}

          <div className="px-5 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
            <div className="mx-auto max-w-[820px]">

              {/* QUESTION */}

              {currentQuestion && (
                <OptionStep
                  step={step}
                  question={currentQuestion}
                  value={
                    formData[currentQuestion.field]
                  }
                  onSelect={(value) =>
                    selectOption(
                      currentQuestion.field,
                      value
                    )
                  }
                  onBack={goBack}
                />
              )}

              {/* PHONE */}

              {step === 5 && (
                <InputStep
                  step={step}
                  icon={<Phone className="h-5 w-5" />}
                  title="Your phone number"
                  subtitle="What's the best number to reach you?"
                  value={formData.phone}
                  placeholder="Phone number"
                  type="tel"
                  onChange={(value) =>
                    updateField("phone", value)
                  }
                  onBack={goBack}
                  onContinue={continueStep}
                  loading={loading}
                />
              )}

              {/* EMAIL */}

              {step === 6 && (
                <InputStep
                  step={step}
                  icon={<Mail className="h-5 w-5" />}
                  title="Your email"
                  subtitle="Where should we send your information?"
                  value={formData.email}
                  placeholder="Email address"
                  type="email"
                  onChange={(value) =>
                    updateField("email", value)
                  }
                  onBack={goBack}
                  onContinue={continueStep}
                  loading={loading}
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
                  placeholder="Full name"
                  type="text"
                  onChange={(value) =>
                    updateField("name", value)
                  }
                  onBack={goBack}
                  onContinue={continueStep}
                  loading={loading}
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
                  placeholder="Company name"
                  type="text"
                  onChange={(value) =>
                    updateField("company", value)
                  }
                  onBack={goBack}
                  onContinue={submitLead}
                  buttonText={
                    loading
                      ? "Submitting..."
                      : "Submit"
                  }
                  loading={loading}
                />
              )}

              {/* ERROR */}

              {error && (
                <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-400">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* TRUST SECTION */}

          <TrustSection />
        </div>
      </div>
    </main>
  );
}

// =========================================================
// OPTION STEP
// =========================================================

function OptionStep({
  step,
  question,
  value,
  onSelect,
  onBack,
}: {
  step: number;
  question: Question;
  value: string;
  onSelect: (value: string) => void;
  onBack: () => void;
}) {
  return (
    <div>
      {/* ICON */}

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {question.icon}
      </div>

      {/* TITLE */}

      <div className="mb-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-400">
          Question {step}
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {question.title}
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          {question.subtitle}
        </p>
      </div>

      {/* OPTIONS */}

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const selected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`group relative min-h-[62px] rounded-xl border px-4 text-left transition-all ${
                selected
                  ? "border-blue-500 bg-blue-500/10 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
                  : "border-slate-700 bg-slate-900 hover:border-blue-500/40 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`text-sm font-medium sm:text-base ${
                    selected
                      ? "text-white"
                      : "text-slate-300"
                  }`}
                >
                  {option}
                </span>

                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                    selected
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-600 bg-slate-900"
                  }`}
                >
                  {selected && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* BACK */}

      {step > 1 && (
        <button
          type="button"
          onClick={onBack}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      )}
    </div>
  );
}

// =========================================================
// INPUT STEP
// =========================================================

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
  loading = false,
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
  loading?: boolean;
}) {
  return (
    <div>
      {/* ICON */}

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      {/* TITLE */}

      <div className="mb-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-400">
          Question {step}
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          {subtitle}
        </p>
      </div>

      {/* INPUT */}

      <input
        autoFocus
        type={type}
        value={value}
        disabled={loading}
        onChange={(event) =>
          onChange(event.target.value)
        }
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            value.trim() &&
            !loading
          ) {
            onContinue();
          }
        }}
        placeholder={placeholder}
        className="h-[58px] w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 disabled:bg-slate-900 disabled:opacity-70"
      />

      {/* CONTINUE */}

      <button
        type="button"
        disabled={!value.trim() || loading}
        onClick={onContinue}
        className="mt-4 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
      >
        {buttonText}

        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </button>

      {/* BACK */}

      <button
        type="button"
        onClick={onBack}
        disabled={loading}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-400 disabled:opacity-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
    </div>
  );
}

// =========================================================
// TRUST SECTION
// =========================================================

function TrustSection() {
  return (
    <div className="border-t border-slate-800/80 bg-slate-950 px-5 py-7 sm:px-8 sm:py-8">
      <div className="mx-auto grid max-w-[820px] gap-7 md:grid-cols-3 md:gap-5">

        {/* SECURITY */}

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <ShieldCheck className="h-7 w-7 text-emerald-400" />
          </div>

          <h3 className="mt-4 text-base font-bold text-white sm:text-lg">
            100% Safe & Secure
            <br />
            Information
          </h3>

          <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
            Your information is kept secure and
            is only used to help us understand
            your business.
          </p>
        </div>

        {/* PRIVACY */}

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
            <CheckCircle2 className="h-7 w-7 text-blue-400" />
          </div>

          <h3 className="mt-4 text-base font-bold text-white sm:text-lg">
            Your Information
            <br />
            Stays Private
          </h3>

          <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
            We don't sell your information or
            share it with unrelated third parties.
          </p>
        </div>

        {/* NO PRESSURE */}

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800">
            <Check className="h-7 w-7 text-slate-400" />
          </div>

          <h3 className="mt-4 text-base font-bold text-white sm:text-lg">
            No Pressure.
            <br />
            No Commitment.
          </h3>

          <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
            This quick form helps us understand
            whether our system is a fit for your
            business.
          </p>
        </div>

      </div>
    </div>
  );
}

