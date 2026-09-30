
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const logo =
    "data:image/png;base64,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";

  return (
    <nav className="relative z-30 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-3">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2"
        >
          <img
            src={logo}
            alt="Book More Leads logo"
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <div className="min-w-0 leading-none">
            <div className="whitespace-nowrap text-[13px] font-extrabold tracking-tight text-white sm:text-[15px]">
              BOOK MORE{" "}
              <span className="text-blue-400">LEADS</span>
            </div>

            <div className="mt-1 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[9px] sm:tracking-[0.18em]">
              Lead → Job System
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          <Link
            href="/products"
            className="transition-colors hover:text-white"
          >
            Products
          </Link>

          <Link
            href="/price"
            className="transition-colors hover:text-white"
          >
            Price
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/growth"
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 md:inline-flex"
        >
          Book a Call
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#080616] p-3 shadow-2xl md:hidden sm:mx-6"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/products"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/price"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Price
            </Link>

            <div className="my-2 border-t border-white/10" />

            <Link
              href="/callbooking"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}