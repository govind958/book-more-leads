
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Scope = "residential" | "commercial" | "hybrid" | "other";

export default function CyberpunkLeadTerminal() {
  const supabase = createClient();

  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [scope, setScope] = useState<Scope | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const options: {
    id: Scope;
    label: string;
    description: string;
  }[] = [
    {
      id: "residential",
      label: "Residential",
      description: "Homes, homeowners & residential projects",
    },
    {
      id: "commercial",
      label: "Commercial",
      description: "Businesses, properties & commercial projects",
    },
    {
      id: "hybrid",
      label: "Both",
      description: "Residential and commercial customers",
    },
    {
      id: "other",
      label: "Other",
      description: "Tell us about your business",
    },
  ];

  const handleSelect = (selectedScope: Scope) => {
    setScope(selectedScope);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      source: `Lead Form: ${scope}`,
      status: "new",
    });

    if (!error) {
      setCompleted(true);
    }

    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          ×
        </button>

        {!completed ? (
          <div>

            {/* Header */}
            <div className="bg-slate-950 px-6 py-8 text-white sm:px-8">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Book More Leads
                </span>
              </div>

              <h2 className="max-w-sm text-2xl font-bold tracking-tight sm:text-3xl">
                Let's build your lead-to-job system.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                Tell us a little about your business and we'll show you how the
                system can fit your operation.
              </p>
            </div>

            <div className="px-6 py-7 sm:px-8">

              {/* Progress */}
              <div className="mb-7 flex items-center gap-3">
                <div className="flex flex-1 items-center gap-2">
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      step >= 1 ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                  <div
                    className={`h-1.5 flex-1 rounded-full ${
                      step >= 2 ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  {step}/2
                </span>
              </div>

              {step === 1 && (
                <>
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-slate-900">
                      What type of customers do you serve?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Choose the option that best describes your business.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelect(option.id)}
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">
                            {option.label}
                          </div>

                          <div className="mt-1 text-sm text-slate-500">
                            {option.description}
                          </div>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition group-hover:bg-blue-600 group-hover:text-white">
                          →
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit}>

                  <div className="mb-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="mb-4 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      ← Change selection
                    </button>

                    <h3 className="text-lg font-semibold text-slate-900">
                      Tell us about your business
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      We'll use this information to contact you.
                    </p>
                  </div>

                  <div className="space-y-4">

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Your name
                      </label>

                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Company
                      </label>

                      <input
                        required
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="ABC Roofing"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          Email
                        </label>

                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                          Phone
                        </label>

                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="(555) 123-4567"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting
                        ? "Sending..."
                        : "Get Started →"}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      No credit card required. No obligation.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="px-6 py-16 text-center sm:px-8">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
              ✓
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              You're all set.
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Thanks for reaching out. We'll review your information and get
              back to you shortly.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-7 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

