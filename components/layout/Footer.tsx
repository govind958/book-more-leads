
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const logo =
    "data:image/png;base64,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";

  return (
    <footer className="relative z-10 border-t border-slate-800/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Book More Leads logo"
              width={40}
              height={40}
              className="h-8 w-8 shrink-0 object-contain"
            />

            <div className="text-sm font-extrabold tracking-tight text-white">
              BOOK MORE{" "}
              <span className="text-blue-400">LEADS</span>
            </div>
          </Link>

          <p className="mt-3 text-xs text-slate-600">
            The Lead → Job System for Contractors.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
          <Link
            href="/#system"
            className="transition-colors hover:text-white"
          >
            System
          </Link>

          <Link
            href="/#how-it-works"
            className="transition-colors hover:text-white"
          >
            How It Works
          </Link>

          <Link
            href="/#faq"
            className="transition-colors hover:text-white"
          >
            FAQ
          </Link>

          <Link
            href="/callbooking"
            className="inline-flex items-center gap-1.5 text-blue-400 transition-colors hover:text-blue-300"
          >
            Book a Call
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-900 px-5 py-5 text-center text-[11px] text-slate-700 sm:px-6">
        © {new Date().getFullYear()} Book More Leads. All rights reserved.
      </div>
    </footer>
  );
}