"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClass =
    "px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-all";

  return (
    <header className="w-full bg-[#030712] border-b border-slate-800/80 sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Left: Brand Logo & Title */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="BookMoreLeads Home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
        >
          {/* Logo Image */}
          <img
            src="/bookmoreleads.png"
            alt="BookMoreLeads"
            className="h-8 w-auto sm:h-9 object-contain"
          />

          {/* Brand Typography with 'Leads' in Blue */}
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
            BookMore<span className="text-cyan-400">Leads</span>
          </span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800">
          <Link href="/products" className={navLinkClass}>
            Products
          </Link>
          <Link href="/price" className={navLinkClass}>
            Pricing
          </Link>
        </div>

        {/* Right: Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login Button */}
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] border border-slate-700/80 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Login
          </Link>

          {/* Start 14-day trial Button */}
          <Link
            href="/trial"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:brightness-110 transition-all shadow-md shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Start 14-day trial
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#0f172a] text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-slate-800 bg-[#030712] px-4 py-5 space-y-3 shadow-2xl"
        >
          <Link
            href="/products"
            onClick={closeMenu}
            className="block px-4 py-2.5 text-slate-300 hover:bg-slate-900 rounded-lg font-medium"
          >
            Products
          </Link>
          <Link
            href="/price"
            onClick={closeMenu}
            className="block px-4 py-2.5 text-slate-300 hover:bg-slate-900 rounded-lg font-medium"
          >
            Pricing
          </Link>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <Link
              href="/login"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] border border-slate-700"
            >
              Login
            </Link>

            <Link
              href="/growth"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00b4d8] to-[#0096c7]"
            >
              Start 14-day trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}