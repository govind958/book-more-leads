
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  LoaderCircle,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Building2,
  AlertCircle,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

const inputClass =
  "block w-full min-w-0 rounded-xl border border-white/10 bg-[#08111d] px-4 py-3.5 text-base text-white outline-none transition duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60";

function getPhoneDigits(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, 10);
}

function formatUSPhone(value: string) {
  const digits = getPhoneDigits(value);

  if (digits.length <= 3) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validateUSPhone(value: string): string | null {
  const digits = getPhoneDigits(value);

  if (!digits) {
    return "Please enter your phone number.";
  }

  if (digits.length !== 10) {
    return "Please enter a 10-digit US phone number.";
  }

  const validFormat = /^[2-9]\d{2}[2-9]\d{6}$/.test(digits);
  const areaCode = digits.slice(0, 3);

  if (!validFormat || /^[2-9]11$/.test(areaCode)) {
    return "Please enter a valid 10-digit US phone number.";
  }

  return null;
}

function getLeadSource(): string {
  const params = new URLSearchParams(window.location.search);

  const source = (params.get("source") || "website")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");

  const allowedSources = [
    "facebook",
    "facebook_messenger",
    "instagram",
    "instagram_dm",
    "linkedin",
    "website",
    "referral",
    "cold_email",
    "cold_call",
    "other",
  ];

  return allowedSources.includes(source) ? source : "other";
}

function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/[0.12] blur-[120px]" />
      <div className="absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_55%)]" />
    </div>
  );
}

function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07]">
        <Check className="h-4 w-4 text-emerald-400" />
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-100">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-200">
        <span className="text-slate-500">{icon}</span>
        {label}
      </label>

      {children}
    </div>
  );
}

export default function GrowthPage() {
  const supabase = createClient();

  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setError("");
  }

  function handlePhoneChange(value: string) {
    setForm((previous) => ({
      ...previous,
      phone: getPhoneDigits(value),
    }));

    setPhoneError("");
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setError("");
    setPhoneError("");

    const validationError = validateUSPhone(form.phone);

    if (validationError) {
      setPhoneError(validationError);
      return;
    }

    setLoading(true);

    try {
      const digits = getPhoneDigits(form.phone);
      const normalizedPhone = `+1${digits}`;

      const { error: insertError } = await supabase
        .from("leads")
        .insert({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: normalizedPhone,
          company: form.company.trim(),
          source: getLeadSource(),
          status: "new",
          work_type: "",
          business_status: "",
          timeframe: "",
          revenue: "",
        });

      if (insertError) {
        console.error("Supabase lead insert error:", insertError);
        setError(
          "We couldn't submit your details right now. Please try again."
        );
        return;
      }

      setSubmittedName(form.name.trim());
    } catch (err) {
      console.error("Lead submission failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // THANK YOU SCREEN
  if (submittedName) {
    return (
      <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#060b14] px-4 py-5 text-white sm:px-6">
        <Background />

        <section className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0d1726]/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/10 [animation-duration:2.5s]" />

              <div className="absolute inset-2 rounded-full border border-emerald-400/20 bg-emerald-400/10" />

              <div className="relative flex h-12 w-12 animate-[successPop_500ms_ease-out_both] items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" strokeWidth={1.8} />
              </div>
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              Submission received
            </p>

            <h1 className="mt-2 break-words text-2xl font-extrabold tracking-tight sm:text-3xl">
              Thanks, {submittedName}!
            </h1>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
              You’re all set. Our team will be in touch soon.
            </p>

            <div className="mx-auto mt-6 flex max-w-xs items-center gap-3 rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] px-4 py-3 text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                <Phone className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  What’s next?
                </p>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">
                  We’ll contact you to talk about your business.
                </p>
              </div>
            </div>

            <a
              href="/"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              Back to website
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-xs text-slate-500">
              <LockKeyhole className="mr-1 inline h-3 w-3" />
              Your information is secure
            </p>
          </div>
        </section>

        <style jsx global>{`
          @keyframes successPop {
            0% {
              opacity: 0;
              transform: scale(0.55);
            }
            70% {
              opacity: 1;
              transform: scale(1.12);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-ping {
              animation: none !important;
            }
          }
        `}</style>
      </main>
    );
  }

  // LEAD CAPTURE PAGE
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#060b14] px-4 py-5 text-white sm:px-6 sm:py-8 lg:flex lg:items-center lg:justify-center lg:py-12">
      <Background />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b1422]/90 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]">

          {/* FORM SECTION
              Mobile/tablet: FIRST
              Desktop: RIGHT
          */}
          <section className="order-1 flex min-w-0 flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:order-2 lg:px-10 lg:py-12 xl:px-12">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Let&apos;s connect
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Tell us a little about yourself.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Just the basics. We&apos;ll learn the rest when we talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field
                label="Your name"
                icon={<UserRound className="h-4 w-4" />}
              >
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  className={inputClass}
                  disabled={loading}
                />
              </Field>

              <Field
                label="Business email"
                icon={<Mail className="h-4 w-4" />}
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="john@yourbusiness.com"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  className={inputClass}
                  disabled={loading}
                />
              </Field>

              <Field
                label="US phone number"
                icon={<Phone className="h-4 w-4" />}
              >
                <div
                  className={`flex min-w-0 items-center overflow-hidden rounded-xl border bg-[#08111d] transition focus-within:ring-4 focus-within:ring-blue-500/10 ${
                    phoneError
                      ? "border-red-400/60 focus-within:border-red-400"
                      : "border-white/10 focus-within:border-blue-400"
                  }`}
                >
                  <span className="flex shrink-0 items-center gap-2 border-r border-white/10 px-3.5 py-3.5 text-sm font-semibold text-slate-300">
                    <span aria-hidden="true">🇺🇸</span>
                    +1
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    required
                    placeholder="(555) 123-4567"
                    value={formatUSPhone(form.phone)}
                    onChange={(event) =>
                      handlePhoneChange(event.target.value)
                    }
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={
                      phoneError ? "phone-error" : "phone-hint"
                    }
                    className="w-full min-w-0 bg-transparent px-3 py-3.5 text-base text-white outline-none placeholder:text-slate-600"
                    disabled={loading}
                  />
                </div>

                {phoneError ? (
                  <p
                    id="phone-error"
                    className="mt-2 flex items-start gap-1.5 text-xs text-red-400"
                  >
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {phoneError}
                  </p>
                ) : (
                  <p id="phone-hint" className="mt-2 text-xs text-slate-500">
                    Enter your 10-digit US phone number.
                  </p>
                )}
              </Field>

              <Field
                label="Business name (optional)"
                icon={<Building2 className="h-4 w-4" />}
              >
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  maxLength={150}
                  placeholder="Your contracting business"
                  value={form.company}
                  onChange={(event) =>
                    updateField("company", event.target.value)
                  }
                  className={inputClass}
                  disabled={loading}
                />
              </Field>

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-xl border border-red-400/20 bg-red-400/[0.06] p-3.5 text-sm leading-6 text-red-300"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Sending your details...
                  </>
                ) : (
                  <>
                    Let&apos;s Talk
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting, you agree that our team may contact you
                about your enquiry.
              </p>
            </form>
          </section>

          {/* INFORMATION SECTION
              Mobile/tablet: BELOW FORM
              Desktop: LEFT
          */}
          <section className="relative order-2 flex flex-col justify-center overflow-hidden border-t border-white/10 px-5 py-8 sm:px-8 sm:py-10 lg:order-1 lg:border-r lg:border-t-0 lg:px-10 lg:py-12 xl:px-12">
            <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-blue-600/10 blur-[90px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-1.5 text-xs font-semibold text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Built for contractors
              </div>

              <h1 className="mt-5 max-w-lg text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl xl:text-5xl">
                Turn more leads into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  booked jobs.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                You&apos;re busy running your business. Your website and
                follow-up system should help you capture opportunities
                instead of letting them slip away.
              </p>

              <div className="mt-7 space-y-4">
                <Benefit
                  title="A website that works for you"
                  description="Give potential customers a clear way to contact you."
                />

                <Benefit
                  title="Follow up faster"
                  description="Help missed calls and new enquiries turn into conversations."
                />

                <Benefit
                  title="Build trust and repeat business"
                  description="Make it easier to request reviews and reconnect with past customers."
                />
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                <p className="text-xs leading-5 text-slate-400">
                  No pressure. Share your details and let&apos;s start
                  with a conversation about your business.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-4 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Book More Leads. Built for contractors.
        </div>
      </div>
    </main>
  );
}
