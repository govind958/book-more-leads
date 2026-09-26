
"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const PAYPAL_CLIENT_ID =
  "BAAZyF3aDC2-qL6ZVacDko14sz9M6YWcT7iezHayUDdWE3ZnZVcSfelnF6ZCDiTLYwn9b47ZmGtusgaZJY";

const PAYPAL_PLAN_ID = "P-7TA63695A4220824KNKZISNY";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style: {
          shape: string;
          color: string;
          layout: string;
          label: string;
        };
        createSubscription: (
          data: unknown,
          actions: {
            subscription: {
              create: (config: { plan_id: string }) => Promise<string>;
            };
          }
        ) => Promise<string>;
        onApprove: (data: {
          subscriptionID?: string;
        }) => void;
        onError?: (err: unknown) => void;
      }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}

export default function SubscribePage() {
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [paypalError, setPaypalError] = useState(false);

  useEffect(() => {
    if (window.paypal) {
      setPaypalLoaded(true);
      return;
    }

    const existingScript = document.querySelector(
      'script[data-paypal-sdk="stackboard"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        setPaypalLoaded(true);
      });

      return;
    }

    const script = document.createElement("script");

    script.src =
      `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}` +
      `&vault=true&intent=subscription`;

    script.async = true;
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.setAttribute("data-paypal-sdk", "stackboard");

    script.onload = () => {
      setPaypalLoaded(true);
    };

    script.onerror = () => {
      setPaypalError(true);
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (!paypalLoaded || !window.paypal) return;

    const container = document.getElementById(
      `paypal-button-container-${PAYPAL_PLAN_ID}`
    );

    if (!container) return;

    // Prevent rendering the button more than once.
    container.innerHTML = "";

    window.paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "subscribe",
        },

        createSubscription: function (_data, actions) {
          return actions.subscription.create({
            plan_id: PAYPAL_PLAN_ID,
          });
        },

        onApprove: function (data) {
          setSubscriptionId(data.subscriptionID || null);
        },

        onError: function (error) {
          console.error("PayPal error:", error);
          setPaypalError(true);
        },
      })
      .render(`#paypal-button-container-${PAYPAL_PLAN_ID}`);
  }, [paypalLoaded]);

  return (
    <main className="min-h-screen bg-[#F5F7F4] text-[#091413]">
      {/* Header */}
      <header className="border-b border-[rgba(9,20,19,.10)] bg-[#F5F7F4]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#091413]">
              <Zap className="h-5 w-5 text-[#B0E4CC]" strokeWidth={2.5} />
            </div>

            <div>
              <div className="text-[15px] font-black tracking-[-0.03em]">
                STACKBOARD
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#408A71]">
                AI Automation
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#61706B] transition hover:text-[#091413]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to website
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
        {/* Ambient shapes */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B0E4CC]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#408A71]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#408A71]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#285A48] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              StackBoardAI
            </div>

            <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Start your
              <span className="block text-[#408A71]">
                AI automation.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#61706B] sm:text-lg">
              Subscribe to StackBoardAI and start building systems that
              automate repetitive work, capture more opportunities, and help
              your business run more efficiently.
            </p>
          </div>

          {/* Pricing + Payment */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left card */}
            <div className="rounded-[30px] bg-[#091413] p-7 text-white shadow-[0_30px_80px_rgba(9,20,19,.16)] sm:p-9">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B0E4CC]">
                <Zap className="h-6 w-6 text-[#091413]" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B0E4CC]">
                Subscription
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                AI Automation
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/60">
                A connected automation system designed around the way your
                business actually works.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">
                {[
                  "AI-powered business workflows",
                  "Lead capture and follow-up",
                  "Automated customer communication",
                  "Custom automation systems",
                  "Ongoing system improvements",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B0E4CC]">
                      <Check
                        className="h-3.5 w-3.5 text-[#091413]"
                        strokeWidth={3}
                      />
                    </div>

                    <span className="text-sm leading-5 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#B0E4CC]" />

                  <div>
                    <p className="text-sm font-bold">Secure payment</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">
                      Your subscription payment is securely processed by
                      PayPal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment card */}
            <div className="rounded-[30px] border border-[rgba(9,20,19,.10)] bg-white p-7 shadow-[0_30px_80px_rgba(9,20,19,.08)] sm:p-9">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#408A71]">
                  Complete your subscription
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                  Choose PayPal to continue
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#61706B]">
                  Use your PayPal account or an available payment method
                  supported by PayPal.
                </p>
              </div>

              {!subscriptionId && (
                <div className="rounded-2xl border border-[#091413]/10 bg-[#F5F7F4] p-5">
                  <div className="mb-5">
                    <div className="text-sm font-bold text-[#091413]">
                      Subscription payment
                    </div>

                    <div className="mt-1 text-xs text-[#61706B]">
                      Secure checkout powered by PayPal
                    </div>
                  </div>

                  {!paypalLoaded && !paypalError && (
                    <div className="flex min-h-[90px] items-center justify-center">
                      <div className="flex items-center gap-3 text-sm font-medium text-[#61706B]">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#408A71]/20 border-t-[#408A71]" />
                        Loading secure checkout...
                      </div>
                    </div>
                  )}

                  {paypalError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      We couldn't load PayPal right now. Please refresh the
                      page and try again.
                    </div>
                  )}

                  <div
                    id={`paypal-button-container-${PAYPAL_PLAN_ID}`}
                    className="min-h-[45px]"
                  />
                </div>
              )}

              {/* Success state */}
              {subscriptionId && (
                <div className="rounded-3xl border border-[#408A71]/20 bg-[#B0E4CC]/30 p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#408A71]">
                    <Check
                      className="h-8 w-8 text-white"
                      strokeWidth={3}
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">
                    Subscription successful
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#61706B]">
                    Your StackBoardAI subscription has been created
                    successfully.
                  </p>

                  <div className="mt-6 rounded-xl bg-white p-4 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#61706B]">
                      Subscription ID
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-[#091413]">
                      {subscriptionId}
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#091413] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#285A48]"
                  >
                    Continue to StackBoardAI
                  </Link>
                </div>
              )}

              {!subscriptionId && (
                <div className="mt-7 flex items-center justify-center gap-2 text-xs text-[#61706B]">
                  <ShieldCheck className="h-4 w-4 text-[#408A71]" />
                  Secure checkout powered by PayPal
                </div>
              )}
            </div>
          </div>

          {/* Bottom trust strip */}
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">
            {[
              {
                title: "Secure checkout",
                text: "Payments handled by PayPal",
              },
              {
                title: "AI-first systems",
                text: "Automation built around your business",
              },
              {
                title: "Human support",
                text: "Real people when you need them",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[rgba(9,20,19,.08)] bg-white/70 p-5"
              >
                <p className="text-sm font-bold">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#61706B]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(9,20,19,.10)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center text-xs text-[#61706B] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} StackBoardAI. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#408A71]" />
            AI Automation for modern businesses
          </div>
        </div>
      </footer>
    </main>
  );
}

