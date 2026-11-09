
import Link from "next/link";
import {
  CalendarCheck,
  ArrowUpRight,
  LinkIcon,
  VideoIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <CalendarCheck size={23} strokeWidth={2} />
              </div>

              <span className="text-base font-extrabold tracking-tight text-slate-900">
                BOOK MORE{" "}
                <span className="text-blue-600">LEADS</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              The Lead → Job System for Contractors.
              Capture leads, follow up automatically,
              and book more jobs.
            </p>

            <Link
              href="/growth"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Product */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900">
              Product
            </h4>

            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link href="/#system" className="transition-colors hover:text-blue-600">
                  Our System
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="transition-colors hover:text-blue-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="transition-colors hover:text-blue-600">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900">
              Resources
            </h4>

            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link href="/#faq" className="transition-colors hover:text-blue-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-blue-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900">
              Company
            </h4>

            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Book More Leads. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-slate-400 transition-colors hover:text-blue-600"
            >
              <span className="text-sm font-bold">𝕏</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-blue-600"
            >
              <LinkIcon size={17} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-400 transition-colors hover:text-blue-600"
            >
              <VideoIcon size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
