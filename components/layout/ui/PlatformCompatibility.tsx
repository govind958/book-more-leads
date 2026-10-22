
"use client";

import React, { useState } from "react";

type PageBuilder = {
  name: string;
  logo: string;
  alt: string;
};

const PAGE_BUILDERS: PageBuilder[] = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_2026_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Elementor logo",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Oxygen Builder logo",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Beaver Builder logo",
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Elegant Themes Divi logo",
  },
  {
    name: "Clio",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Clio_Software_Company_Logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Breakdance Builder logo",
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Bricks Builder logo",
  },
  {
    name: "WooCommerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/WooCommerce2025_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Kadence WP logo",
  },
  {
    name: "Twilio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Brizy logo",
  },
  {
    name: "Printful",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/PF-Linear-Full-color-black-RGB.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Visual Composer logo",
  },
];

type PageBuilderCompatibilityProps = {
  title?: string;
  description?: string;
};

function BuilderItem({ builder }: { builder: PageBuilder }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="group flex min-w-max shrink-0 items-center gap-2.5 px-4 py-2 sm:gap-3 sm:px-5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-8 sm:w-8">
        {!imageFailed ? (
          <img
            src={builder.logo}
            alt={builder.alt}
            title={builder.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="
              max-h-7 max-w-7 object-contain
              opacity-65 grayscale
              transition duration-200
              group-hover:opacity-100 group-hover:grayscale-0
              sm:max-h-8 sm:max-w-8
            "
          />
        ) : (
          <span className="text-sm font-bold text-[#22D3EE]">
            {builder.name.charAt(0)}
          </span>
        )}
      </div>

      <span
        className="
          whitespace-nowrap text-sm font-semibold
          tracking-tight text-slate-300
          transition-colors duration-200
          group-hover:text-white
        "
      >
        {builder.name}
      </span>
    </div>
  );
}

export default function PageBuilderCompatibility({
  title = "Integrates With Your Favorite Tools.",
  description = "BOOK MORE LEADS fits seamlessly into your business, connecting with the tools you already use.",
}: PageBuilderCompatibilityProps) {
  return (
    <section
      aria-labelledby="builder-compatibility-title"
      className="relative isolate w-full overflow-hidden bg-[#070B12] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Midnight navy background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070B12] via-[#0B1329] to-[#070B12]"
      />

      {/* Subtle brand-colored ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[240px] w-[min(90%,800px)] -translate-x-1/2 rounded-full bg-[#1E40AF]/15 blur-[110px]"
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="builder-compatibility-title"
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-0.035em] text-white"
          >
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>

        {/* Single horizontal logo strip */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <div
            className="
              relative overflow-hidden rounded-lg
              border border-white/[0.14]
              bg-[#080A18]/95
              shadow-[0_12px_40px_rgba(0,0,0,0.28)]
            "
          >
            {/* Fine top highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent"
            />

            <div
              className="
                flex items-center gap-1
                overflow-x-auto px-2 py-4
                sm:gap-2 sm:px-3 sm:py-5
                lg:justify-between lg:gap-0
              "
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#263B50 transparent",
              }}
            >
              {PAGE_BUILDERS.map((builder, index) => (
                <React.Fragment key={builder.name}>
                  <BuilderItem builder={builder} />

                  {index < PAGE_BUILDERS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="h-5 w-px shrink-0 bg-white/[0.10]"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile scroll hint */}
          <p className="mt-3 text-center text-xs text-slate-500 sm:hidden">
            Swipe to see all integrations
          </p>
        </div>
      </div>
    </section>
  );
}
