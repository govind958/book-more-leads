
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function MemberLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError || !data.user) {
        setError("Invalid email or password. Please try again.");
        return;
      }

      // Membership must be checked separately.
      const { data: membership, error: membershipError } =
        await supabase
          .from("memberships")
          .select("status")
          .eq("user_id", data.user.id)
          .maybeSingle();

      if (
        membershipError ||
        !membership ||
        membership.status !== "active"
      ) {
        await supabase.auth.signOut();
        setError(
          "Your account does not have active member access. Please contact support."
        );
        return;
      }

      router.replace("/members/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070B12] px-4 py-12 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-700/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
       

        {/* Login card */}
        <section className="rounded-3xl border border-slate-800 bg-[#0B1329]/95 p-6 shadow-2xl shadow-black/30 sm:p-9">
          <div className="mb-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <LockKeyhole className="h-6 w-6 text-cyan-400" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400">
              Private member portal
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Sign in to access your Book More Leads member account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourbusiness.com"
                className="w-full rounded-xl border border-slate-700 bg-[#070B12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <Link
                  href="/members/forgot-password"
                  className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-700 bg-[#070B12] px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm leading-5 text-red-300"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing you in..." : "Sign in to your account"}
              {!loading && (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-xs text-slate-500">SECURE ACCESS</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#070B12]/70 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            <p className="text-xs leading-5 text-slate-400">
              This portal is reserved for approved members. Having a login
              account alone does not grant access.
            </p>
          </div>
        </section>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Need help accessing your account?{" "}
          <Link
            href="/callbooking"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Contact us
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Book More Leads
        </p>
      </div>
    </main>
  );
}
