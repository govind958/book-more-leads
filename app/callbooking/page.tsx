"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
} from "lucide-react";

type FormData = {
  phone: string;
  email: string;
  name: string;
  company: string;
};

const CALENDLY_URL =
  "https://calendly.com/govind-anand816/30min";

export default function GrowthPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    phone: "",
    email: "",
    name: "",
    company: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  /**
   * =========================================================
   * STEP 1 → STEP 2
   *
   * TESTING MODE:
   * No Supabase.
   * No database.
   * No API call.
   * Just validate the form and move forward.
   * =========================================================
   */

  const goToStepTwo = () => {
    if (loading) return;

    setError("");

    if (
      !formData.company.trim() ||
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setError(
        "Please complete all fields before continuing."
      );
      return;
    }

    setLoading(true);

    // Small delay so the UI feels natural while testing.
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 400);
  };

  /**
   * =========================================================
   * BACK
   * =========================================================
   */

  const goBack = () => {
    if (loading) return;

    setError("");
    setStep(1);
  };

  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/55 px-3 py-4 backdrop-blur-[3px] sm:px-6 sm:py-6">
      <div className="relative flex h-auto max-h-[calc(100vh-24px)] w-full max-w-[720px] flex-col overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35),0_8px_30px_rgba(0,0,0,0.18)] sm:max-h-[calc(100vh-48px)] md:max-w-[760px] lg:max-w-[780px]">
        <div className="min-h-0 overflow-y-auto">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="px-5 pb-1 pt-7 text-center sm:px-8 sm:pt-8">
            <h1 className="mx-auto max-w-[650px] text-[27px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#171c20] sm:text-[31px] md:text-[34px]">
              Start Your 30 Day Free Trial Today!
              <br />
              &amp; Get an Onboarding Call!
            </h1>
          </div>

          {/* =====================================================
              FORM CARD
          ====================================================== */}

          <div className="mx-4 mt-5 overflow-hidden rounded-[16px] border border-[#e9e9e9] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.07)] sm:mx-7 sm:mt-5">
            {/* =================================================
                STEPPER
            ================================================== */}

            <div className="relative grid grid-cols-2">
              {/* STEP 1 */}

              <button
                type="button"
                onClick={() => {
                  if (!loading) {
                    setStep(1);
                    setError("");
                  }
                }}
                className="relative flex h-[66px] flex-col items-center justify-center text-center sm:h-[70px]"
              >
                <span
                  className={`text-[18px] font-extrabold leading-5 sm:text-[19px] ${
                    step === 1
                      ? "text-[#0872ad]"
                      : "text-[#858f96]"
                  }`}
                >
                  Step 1
                </span>

                <span className="mt-0.5 text-[13px] font-medium text-[#68757e] sm:text-[14px]">
                  Tell Us About Your Business
                </span>

                {step === 1 && (
                  <div className="absolute bottom-[-1px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#237cad]" />
                )}
              </button>

              {/* DIVIDER */}

              <div className="absolute left-1/2 top-[17px] h-[34px] w-[2px] -translate-x-1/2 bg-[#eeeeee]" />

              {/* STEP 2 */}

              <button
                type="button"
                onClick={() => {
                  if (!loading) {
                    setStep(2);
                    setError("");
                  }
                }}
                className="relative flex h-[66px] flex-col items-center justify-center text-center sm:h-[70px]"
              >
                <span
                  className={`text-[18px] font-extrabold leading-5 sm:text-[19px] ${
                    step === 2
                      ? "text-[#0872ad]"
                      : "text-[#858f96]"
                  }`}
                >
                  Step 2
                </span>

                <span className="mt-0.5 text-[13px] font-medium text-[#68757e] sm:text-[14px]">
                  Book Your Call
                </span>

                {step === 2 && (
                  <div className="absolute bottom-[-1px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#237cad]" />
                )}
              </button>
            </div>

            {/* =================================================
                PROGRESS LINE
            ================================================== */}

            <div className="h-[5px] bg-[#e4e9ed]">
              <div
                className="h-full bg-[#237cad] transition-all duration-300"
                style={{
                  width:
                    step === 1 ? "50%" : "100%",
                }}
              />
            </div>

            {/* =================================================
                STEP 1
            ================================================== */}

            {step === 1 && (
              <StepOne
                formData={formData}
                updateField={updateField}
                error={error}
                loading={loading}
                onContinue={goToStepTwo}
              />
            )}

            {/* =================================================
                STEP 2
            ================================================== */}

            {step === 2 && (
              <StepTwo
                formData={formData}
                onBack={goBack}
              />
            )}
          </div>

          {/* =====================================================
              DISCLAIMER
          ====================================================== */}

          <TrialDisclaimer />
        </div>
      </div>
    </main>
  );
}

/**
 * ===========================================================
 * STEP ONE
 * ===========================================================
 */

function StepOne({
  formData,
  updateField,
  error,
  loading,
  onContinue,
}: {
  formData: FormData;

  updateField: (
    field: keyof FormData,
    value: string
  ) => void;

  error: string;

  loading: boolean;

  onContinue: () => void;
}) {
  return (
    <div className="px-5 pb-5 pt-5 sm:px-5 sm:pb-6 sm:pt-5">
      <div className="space-y-4">
        {/* COMPANY */}

        <input
          type="text"
          value={formData.company}
          disabled={loading}
          onChange={(event) =>
            updateField(
              "company",
              event.target.value
            )
          }
          placeholder="Company Name.."
          className="h-[48px] w-full rounded-[8px] border border-[#d4d9dd] bg-white px-4 text-[16px] font-medium text-[#333] outline-none transition placeholder:text-[#85898d] focus:border-[#237cad] focus:ring-1 focus:ring-[#237cad]/20 disabled:bg-[#f7f7f7] sm:h-[49px] sm:text-[17px]"
        />

        {/* FULL NAME */}

        <input
          type="text"
          value={formData.name}
          disabled={loading}
          onChange={(event) =>
            updateField(
              "name",
              event.target.value
            )
          }
          placeholder="Full Name..."
          className="h-[48px] w-full rounded-[8px] border border-[#d4d9dd] bg-white px-4 text-[16px] font-medium text-[#333] outline-none transition placeholder:text-[#85898d] focus:border-[#237cad] focus:ring-1 focus:ring-[#237cad]/20 disabled:bg-[#f7f7f7] sm:h-[49px] sm:text-[17px]"
        />

        {/* EMAIL */}

        <input
          type="email"
          value={formData.email}
          disabled={loading}
          onChange={(event) =>
            updateField(
              "email",
              event.target.value
            )
          }
          placeholder="Email Address..."
          className="h-[48px] w-full rounded-[8px] border border-[#d4d9dd] bg-white px-4 text-[16px] font-medium text-[#333] outline-none transition placeholder:text-[#85898d] focus:border-[#237cad] focus:ring-1 focus:ring-[#237cad]/20 disabled:bg-[#f7f7f7] sm:h-[49px] sm:text-[17px]"
        />

        {/* PHONE */}

        <div className="flex h-[48px] w-full overflow-hidden rounded-[8px] border border-[#d4d9dd] bg-white transition focus-within:border-[#237cad] focus-within:ring-1 focus-within:ring-[#237cad]/20 sm:h-[49px]">
          <div className="flex shrink-0 items-center gap-2 border-r border-[#e2e5e8] px-3">
            <span className="text-[20px] leading-none">
              🇮🇳
            </span>

            <span className="text-[15px] text-[#555]">
              ▾
            </span>
          </div>

          <input
            type="tel"
            value={formData.phone}
            disabled={loading}
            onChange={(event) =>
              updateField(
                "phone",
                event.target.value
              )
            }
            placeholder="Phone Number..."
            className="min-w-0 flex-1 bg-transparent px-4 text-[16px] font-medium text-[#333] outline-none placeholder:text-[#85898d] disabled:bg-[#f7f7f7] sm:text-[17px]"
          />
        </div>

        {/* ERROR */}

        {error && (
          <div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-2.5 text-center text-xs font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* CONTINUE BUTTON */}

        <button
          type="button"
          disabled={loading}
          onClick={onContinue}
          className="flex h-[61px] w-full items-center justify-center gap-3 rounded-[8px] border border-[#d92929] bg-[#f23838] px-5 text-[24px] font-extrabold text-white shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition hover:bg-[#e52f2f] hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[64px] sm:text-[26px]"
        >
          {loading ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Loading...
            </>
          ) : (
            <>
              Go To Step #2
              <ArrowRight className="h-6 w-6" />
            </>
          )}
        </button>

        {/* PRIVACY */}

        <p className="pt-0.5 text-center text-[13px] font-medium text-[#a1a1a1]">
          We Respect Your Privacy &amp;
          Information.
        </p>
      </div>
    </div>
  );
}

/**
 * ===========================================================
 * STEP TWO — CALENDLY
 * ===========================================================
 */

function StepTwo({
  formData,
  onBack,
}: {
  formData: FormData;
  onBack: () => void;
}) {
  const calendlyUrl =
    `${CALENDLY_URL}` +
    `?hide_gdpr_banner=1` +
    `&background_color=ffffff` +
    `&text_color=171c20` +
    `&primary_color=237cad` +
    `&name=${encodeURIComponent(formData.name)}` +
    `&email=${encodeURIComponent(formData.email)}`;

  return (
    <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
      {/* HEADER */}

      <div className="mb-3 text-center">
        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#edf5fa] text-[#237cad]">
          <CalendarDays className="h-5 w-5" />
        </div>

        <h2 className="text-[22px] font-extrabold text-[#171c20]">
          Book Your Onboarding Call
        </h2>

        <p className="mt-1 text-[13px] text-[#78838a]">
          Choose a date and time that works
          best for you.
        </p>
      </div>

      {/* INFO */}

      <div className="mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-[#707b82]">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5 text-[#237cad]" />
          30 minute call
        </span>

        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#24a267]" />
          Free onboarding
        </span>

        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-[#237cad]" />
          No obligation
        </span>
      </div>

      {/* =====================================================
          CALENDLY FRAME
      ====================================================== */}

      <div className="overflow-hidden rounded-[14px] border border-[#dfe3e6] bg-white">
        <iframe
          src={calendlyUrl}
          title="Book your onboarding call"
          width="100%"
          height="600"
          frameBorder="0"
          className="block w-full"
        />
      </div>

      {/* DIRECT CALENDLY LINK */}

      <div className="mt-3 text-center">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#237cad] underline underline-offset-2 transition hover:text-[#185d84]"
        >
          Open calendar in a new tab
        </a>
      </div>

      {/* BACK BUTTON */}

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-[38px] items-center gap-2 rounded-[8px] border border-[#d3d8dc] bg-white px-5 text-xs font-bold text-[#66727a] transition hover:bg-[#f7f8f9]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
      </div>

      {/* USER */}

      <p className="mt-2 text-center text-[11px] text-[#a0a5a9]">
        Booking for {formData.name} ·{" "}
        {formData.email}
      </p>
    </div>
  );
}

/**
 * ===========================================================
 * TRIAL DISCLAIMER
 * ===========================================================
 */

function TrialDisclaimer() {
  return (
    <div className="px-6 pb-5 pt-4 text-center text-[11px] leading-[1.5] text-[#3f454a] sm:px-8 sm:pb-6 sm:pt-4 sm:text-[12px]">
      <p className="font-bold">
        No charges will be processed today.
      </p>

      <p className="mx-auto mt-0.5 max-w-[690px]">
        After 30 days, we&apos;ll process a
        charge to your card on file, unless
        you decide to cancel prior to the end
        of your 30 Day Trial. Our Payments are
        100% Safe &amp; Secure. We collect and
        use your information in accordance with
        our{" "}
        <a
          href="/privacy"
          className="text-[#1683f5] underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
      </p>

      <p className="mx-auto mt-3 max-w-[690px]">
        <strong>Please Note:</strong> As you
        become a part of our community, you may
        receive occasional updates via text
        &amp; email messages. In certain cases,
        communication surcharges may apply.
      </p>
    </div>
  );
}