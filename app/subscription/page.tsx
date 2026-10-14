"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: {
          shape?: string;
          color?: string;
          layout?: string;
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
        render: (container: HTMLElement) => Promise<void>;
        close: () => Promise<void>;
      };
    };
  }
}

const PAYPAL_CLIENT_ID =
  "BAAZyF3aDC2-qL6ZVacDko14sz9M6YWcT7iezHayUDdWE3ZnZVcSfelnF6ZCDiTLYwn9b47ZmGtusgaZJY";

interface PlanConfig {
  name: string;
  priceLabel: string;
  period: string;
  savings?: string;
  planId: string;
}

const PLANS: Record<string, PlanConfig> = {
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
    savings: "Save $100+",
    planId: "P-2AA98342VH4106125NLHXWPI",
  },
};

type PlanKey = keyof typeof PLANS;

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("monthly");
  const [sdkReady, setSdkReady] = useState(false);
  const [approved, setApproved] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const paypalContainer = useRef<HTMLDivElement>(null);
  const paypalButtons = useRef<{ close: () => Promise<void> } | null>(null);
  const renderVersion = useRef(0);

  const currentPlan = PLANS[selectedPlan];

  const renderPayPalButton = useCallback(async () => {
    const version = ++renderVersion.current;
    const container = paypalContainer.current;

    if (!sdkReady || !window.paypal || !container || approved) return;

    setError("");
    setLoading(true);

    try {
      if (paypalButtons.current) {
        try {
          await paypalButtons.current.close();
        } catch {}
        paypalButtons.current = null;
      }

      if (version !== renderVersion.current) return;
      container.replaceChildren();

      const button = window.paypal.Buttons({
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
          setSubscriptionId(data.subscriptionID);
          setApproved(true);
        },
        onError: (err) => {
          console.error("PayPal checkout error:", err);
          setError("PayPal encountered an error. Please try again.");
        },
      });

      paypalButtons.current = button;
      await button.render(container);

      if (version !== renderVersion.current) {
        try {
          await button.close();
        } catch {}
      }
    } catch (err) {
      console.error("Unable to render PayPal:", err);
      if (version === renderVersion.current) {
        setError("Unable to load payment options. Please refresh and try again.");
      }
    } finally {
      if (version === renderVersion.current) {
        setLoading(false);
      }
    }
  }, [sdkReady, currentPlan, approved]);

  useEffect(() => {
    if (!sdkReady || approved) return;
    void renderPayPalButton();
    return () => {
      renderVersion.current += 1;
    };
  }, [sdkReady, selectedPlan, approved, renderPayPalButton]);

  useEffect(() => {
    return () => {
      const button = paypalButtons.current;
      paypalButtons.current = null;
      if (button) {
        void button.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <Script
        id="paypal-subscription-sdk"
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`}
        strategy="afterInteractive"
        onReady={() => setSdkReady(true)}
        onError={() => setError("Unable to connect to PayPal. Please refresh.")}
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
            <p>Automate your contractor pipeline, capture missed calls, and secure 5-star reviews effortlessly.</p>
          </div>

          {!approved ? (
            <>
              {/* Plan Switcher */}
              <div className="plan-switcher">
                {(Object.keys(PLANS) as PlanKey[]).map((key) => {
                  const plan = PLANS[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`plan-btn ${selectedPlan === key ? "active" : ""}`}
                      onClick={() => {
                        setSelectedPlan(key);
                        setError("");
                      }}
                    >
                      <div className="plan-meta">
                        <strong>{plan.name}</strong>
                        {plan.savings && <span className="savings-badge">{plan.savings}</span>}
                      </div>
                      <div className="plan-pricing">
                        <span className="price">{plan.priceLabel}</span>
                        <span className="period">{plan.period}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* PayPal Area */}
              <div className="paypal-wrapper">
                {!sdkReady && <div className="loading-pulse">Loading secure payment options...</div>}
                {sdkReady && loading && <div className="loading-pulse">Preparing payment gateway...</div>}
                <div
                  ref={paypalContainer}
                  id="paypal-button-container"
                  className={!sdkReady || loading ? "hidden" : "visible"}
                />
              </div>

              {error && <p className="error-text" role="alert">{error}</p>}
              
              <div className="security-footer">
                <span>🔒</span> Encrypted & processed securely via PayPal
              </div>
            </>
          ) : (
            <div className="success-box" role="status">
              <div className="success-icon">✓</div>
              <strong>Subscription Activated</strong>
              <p>Reference ID: {subscriptionId}</p>
              <span className="success-sub">We are setting up your onboarding portal now.</span>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #090d16;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #f8fafc;
          -webkit-font-smoothing: antialiased;
        }
        .checkout-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: radial-gradient(circle at 50% 0%, #1e293b 0%, #090d16 75%);
        }
        .checkout-card {
          width: 100%;
          max-width: 460px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          transition: color 0.2s;
        }
        .back-link:hover { color: #ffffff; }
        .badge {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.3px;
        }
        .hero-info { margin-bottom: 28px; }
        .hero-info h1 {
          margin: 0 0 8px;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.4px;
          color: #ffffff;
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
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .plan-btn:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .plan-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 8px;
        }
        .plan-meta strong { font-size: 13px; color: #cbd5e1; font-weight: 600; }
        .savings-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .plan-pricing { display: flex; align-items: baseline; gap: 4px; }
        .plan-pricing .price { font-size: 18px; font-weight: 700; color: #ffffff; }
        .plan-pricing .period { font-size: 11px; color: #64748b; }
        
        .plan-btn.active {
          background: rgba(37, 99, 235, 0.12);
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        .plan-btn.active .plan-meta strong { color: #ffffff; }
        
        .paypal-wrapper { 
          min-height: 55px; 
          margin-bottom: 16px; 
          position: relative;
        }
        .paypal-wrapper .hidden {
          opacity: 0;
          position: absolute;
          pointer-events: none;
        }
        .paypal-wrapper .visible {
          opacity: 1;
          transition: opacity 0.2s ease-in;
        }

        .loading-pulse {
          font-size: 12px;
          text-align: center;
          color: #64748b;
          padding: 16px;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        .error-text { font-size: 12px; color: #f87171; text-align: center; margin: 12px 0; }
        
        .security-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #64748b;
          font-size: 11px;
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 16px;
        }
        
        .success-box {
          background: rgba(6, 78, 59, 0.2);
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 14px;
          padding: 28px 20px;
          text-align: center;
        }
        .success-icon {
          width: 40px;
          height: 40px;
          background: #059669;
          color: #ffffff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 700;
          margin: 0 auto 12px;
          box-shadow: 0 0 20px rgba(5, 150, 105, 0.4);
        }
        .success-box strong { color: #34d399; font-size: 15px; display: block; margin-bottom: 6px; }
        .success-box p { color: #e2e8f0; font-size: 12px; margin: 0 0 10px; word-break: break-all; font-family: monospace; }
        .success-sub { color: #94a3b8; font-size: 11px; display: block; }
      `}</style>
    </>
  );
}