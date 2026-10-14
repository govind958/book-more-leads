
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: {
          shape?: "pill" | "rect";
          color?: string;
          layout?: "vertical" | "horizontal";
          label?: string;
        };
        createSubscription: (
          data: Record<string, unknown>,
          actions: {
            subscription: {
              create: (details: {
                plan_id: string;
              }) => Promise<string>;
            };
          }
        ) => Promise<string>;
        onApprove: (data: {
          subscriptionID: string;
        }) => void;
        onError?: (error: unknown) => void;
      }) => {
        render: (container: string | HTMLElement) => Promise<void>;
        close: () => Promise<void>;
      };
    };
  }
}

const PAYPAL_CLIENT_ID =
  "BAAZyF3aDC2-qL6ZVacDko14sz9M6YWcT7iezHayUDdWE3ZnZVcSfelnF6ZCDiTLYwn9b47ZmGtusgaZJY";

const PLANS = {
  monthly: {
    name: "Monthly",
    priceLabel: "$297",
    period: "/ month",
    planId: "P-94F37623CB736444BNLHWZJY",
  },
  quarterly: {
    name: "Quarterly",
    priceLabel: "$891",
    period: "/ 3 months",
    planId: "P-2AA98342VH4106125NLHXWPI",
  },
} as const;

type PlanKey = keyof typeof PLANS;

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] =
    useState<PlanKey>("monthly");
  const [sdkReady, setSdkReady] = useState(false);
  const [approved, setApproved] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const buttonInstanceRef = useRef<{
    close: () => Promise<void>;
  } | null>(null);

  const currentPlan = PLANS[selectedPlan];

  useEffect(() => {
    if (!sdkReady || !window.paypal || approved) {
      return;
    }

    const paypal = window.paypal;
    const containerId = `paypal-button-container-${currentPlan.planId}`;
    const container = document.getElementById(containerId);

    if (!container) {
      return;
    }

    let cancelled = false;
    let buttons:
      | ReturnType<typeof paypal.Buttons>
      | null = null;

    container.innerHTML = "";
    setPaymentError("");

    try {
      buttons = paypal.Buttons({
        style: {
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "subscribe",
        },

        createSubscription: (_data, actions) => {
          return actions.subscription.create({
            plan_id: currentPlan.planId,
          });
        },

        onApprove: (data) => {
          if (cancelled) return;

          setSubscriptionId(data.subscriptionID);
          setApproved(true);
        },

        onError: (error) => {
          console.error("PayPal checkout error:", error);

          if (!cancelled) {
            setPaymentError(
              "Unable to complete checkout. Please try again."
            );
          }
        },
      });

      buttonInstanceRef.current = buttons;

      buttons.render(container).catch((error: unknown) => {
        if (!cancelled) {
          console.error("PayPal render error:", error);
          setPaymentError(
            "Unable to load PayPal checkout. Please refresh and try again."
          );
        }
      });
    } catch (error) {
      console.error("PayPal initialization error:", error);
      setPaymentError(
        "Unable to initialize PayPal. Please refresh and try again."
      );
    }

    return () => {
      cancelled = true;

      if (buttonInstanceRef.current === buttons) {
        buttonInstanceRef.current = null;
      }

      if (buttons) {
        buttons.close().catch((error: unknown) => {
          console.warn("PayPal button cleanup:", error);
        });
      }
    };
  }, [sdkReady, selectedPlan, approved, currentPlan.planId]);

  return (
    <>
      <Script
        id="paypal-sdk"
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription&currency=USD`}
        strategy="afterInteractive"
        onReady={() => setSdkReady(true)}
        onError={() => {
          setPaymentError(
            "PayPal could not load. Please check your connection and retry."
          );
        }}
      />

      <main className="checkout-page">
        <div className="checkout-card">
          <div className="header">
            <a href="/" className="back-link">
              <span>←</span> Book More Leads
            </a>
            <span className="badge">Secure Checkout</span>
          </div>

          <div className="hero-info">
            <h1>Lead to Job System</h1>
            <p>
              Automate your contractor pipeline, capture missed calls,
              and secure 5-star reviews effortlessly.
            </p>
          </div>

          {!approved ? (
            <>
              <div className="plan-switcher">
                {(Object.keys(PLANS) as PlanKey[]).map((key) => {
                  const plan = PLANS[key];

                  return (
                    <button
                      key={key}
                      type="button"
                      className={`plan-btn ${
                        selectedPlan === key ? "active" : ""
                      }`}
                      aria-pressed={selectedPlan === key}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="plan-meta">
                        <strong>{plan.name}</strong>
                      </div>

                      <div className="plan-pricing">
                        <span className="price">
                          {plan.priceLabel}
                        </span>
                        <span className="period">
                          {plan.period}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="paypal-wrapper">
                {!sdkReady && (
                  <div className="loading-pulse">
                    Loading secure payment options...
                  </div>
                )}

                <div
                  id={`paypal-button-container-${currentPlan.planId}`}
                />

                {paymentError && (
                  <div className="payment-error" role="alert">
                    {paymentError}
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentError("");
                        setSdkReady(false);
                        window.setTimeout(() => {
                          setSdkReady(true);
                        }, 0);
                      }}
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>

              <div className="security-footer">
                <span>🔒</span>
                Encrypted &amp; processed securely via PayPal
              </div>
            </>
          ) : (
            <div className="success-box" role="status">
              <div className="success-icon">✓</div>
              <strong>Subscription Approved</strong>
              <p>Reference ID: {subscriptionId}</p>
              <p className="verification-note">
                Your payment is being verified.
              </p>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #090d16;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          color: #f8fafc;
        }

        .checkout-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: radial-gradient(
            circle at 50% 0%,
            #1e293b 0%,
            #090d16 75%
          );
        }

        .checkout-card {
          width: 100%;
          max-width: 460px;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .back-link {
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .back-link:hover {
          color: #fff;
        }

        .badge {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .hero-info {
          margin-bottom: 28px;
        }

        .hero-info h1 {
          margin: 0 0 8px;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
        }

        .hero-info p {
          margin: 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.6;
        }

        .plan-switcher {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 28px;
        }

        .plan-btn {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
          background: #111b2e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
          color: inherit;
          min-width: 0;
        }

        .plan-btn:hover {
          border-color: #3b82f6;
        }

        .plan-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 8px;
        }

        .plan-meta strong {
          font-size: 13px;
          color: #cbd5e1;
        }

        .plan-pricing {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 4px;
        }

        .plan-pricing .price {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .plan-pricing .period {
          font-size: 11px;
          color: #94a3b8;
        }

        .plan-btn.active {
          background: rgba(37, 99, 235, 0.12);
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }

        .paypal-wrapper {
          min-height: 55px;
          margin-bottom: 16px;
        }

        .loading-pulse {
          font-size: 12px;
          text-align: center;
          color: #94a3b8;
          padding: 16px;
        }

        .payment-error {
          color: #fca5a5;
          font-size: 12px;
          text-align: center;
          padding: 12px 0;
        }

        .payment-error button {
          display: block;
          margin: 10px auto 0;
          padding: 8px 16px;
          background: #1d4ed8;
          color: #fff;
          border: 0;
          border-radius: 8px;
          cursor: pointer;
        }

        .security-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #94a3b8;
          font-size: 11px;
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 16px;
          text-align: center;
        }

        .success-box {
          background: rgba(6, 78, 59, 0.2);
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 14px;
          padding: 28px 20px;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .success-icon {
          width: 40px;
          height: 40px;
          background: #059669;
          color: #fff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 700;
          margin: 0 auto 12px;
        }

        .success-box strong {
          color: #34d399;
          font-size: 15px;
          display: block;
          margin-bottom: 10px;
        }

        .success-box p {
          color: #e2e8f0;
          font-size: 12px;
          margin: 0;
          font-family: monospace;
        }

        .success-box .verification-note {
          font-family: inherit;
          margin-top: 12px;
          color: #94a3b8;
        }

        @media (max-width: 480px) {
          .checkout-page {
            padding: 16px;
          }

          .checkout-card {
            padding: 24px 18px;
          }
        }
      `}</style>
    </>
  );
}
