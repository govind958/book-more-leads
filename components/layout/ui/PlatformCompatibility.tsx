
"use client";

import React, { useState } from "react";

type PageBuilder = {
  name: string;
  logo: string;
  alt: string;
};

const PAGE_BUILDERS: PageBuilder[] = [
  {
    name: "Elementor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_2026_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Elementor logo",
  },
  {
    name: "Oxygen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Oxygen Builder logo",
  },
  {
    name: "Beaver Builder",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Beaver Builder logo",
  },
  {
    name: "Divi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Elegant Themes Divi logo",
  },
  {
    name: "Breakdance",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Clio_Software_Company_Logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Breakdance Builder logo",
  },
  {
    name: "Bricks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Bricks Builder logo",
  },
  {
    name: "Kadence WP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/WooCommerce2025_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Kadence WP logo",
  },
  {
    name: "Brizy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Brizy logo",
  },
  {
    name: "Visual Composer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/PF-Linear-Full-color-black-RGB.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Visual Composer logo",
  },
];

type PageBuilderCompatibilityProps = {
  title?: string;
  description?: string;
};

function BuilderCard({ builder }: { builder: PageBuilder }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className="
        group relative flex min-h-[104px] min-w-0
        items-center justify-center overflow-hidden
        rounded-2xl border border-slate-200/80 bg-white
        px-3 py-5
        shadow-[0_6px_24px_rgba(0,0,0,0.12)]
        transition-[transform,border-color,box-shadow]
        duration-300 ease-out
        hover:-translate-y-1
        hover:border-cyan-400
        hover:shadow-[0_12px_32px_rgba(0,180,240,0.16)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:min-h-[120px] sm:rounded-[18px] sm:px-5
        lg:min-h-[136px] lg:rounded-[20px] lg:px-6
      "
      aria-label={builder.name}
    >
      {/* Subtle hover accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-6 top-0
          h-px bg-gradient-to-r from-transparent
          via-cyan-400 to-transparent opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="flex h-[48px] w-full min-w-0 items-center justify-center sm:h-[56px] lg:h-[64px]">
        {!imageFailed ? (
          <img
            src={builder.logo}
            alt={builder.alt}
            title={builder.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="
              block max-h-full max-w-full
              h-auto w-auto object-contain
              transition-transform duration-300
              group-hover:scale-[1.04]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
            style={{
              maxWidth: "100%",
            }}
          />
        ) : (
          <span className="text-center text-sm font-semibold text-slate-700">
            {builder.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PageBuilderCompatibility({
  title = "Integrates With Your Favorite Tools.",
  description =
    "BOOK MORE LEADS fits seamlessly into your business, connecting with the tools you already use.",
}: PageBuilderCompatibilityProps) {
  return (
    <section
      aria-labelledby="builder-compatibility-title"
      className="
        relative isolate w-full overflow-hidden
        bg-[#070B12] px-4 py-16 text-white
        sm:px-6 sm:py-20 lg:px-8 lg:py-24
      "
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-b from-[#070B12]
          via-[#0B1329] to-[#101D38]
        "
      />

      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0 -z-10
          h-[260px] w-[min(90%,800px)]
          -translate-x-1/2 rounded-full
          bg-cyan-500/[0.07] blur-[100px]
        "
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mx-auto max-w-[1000px] text-center">
          <h2
            id="builder-compatibility-title"
            className="
              text-[clamp(1.8rem,4vw,3.8rem)]
              font-extrabold leading-[1.1]
              tracking-[-0.035em] text-white
            "
          >
            {title}
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-[760px]
              text-[clamp(0.95rem,1.5vw,1.2rem)]
              font-normal leading-7 text-slate-300
              sm:mt-6 sm:leading-8
            "
          >
            {description}
          </p>
        </div>

        {/* Responsive logo grid */}
        <div
          className="
            mt-10 grid grid-cols-2 gap-3
            sm:mt-14 sm:grid-cols-3 sm:gap-5
            lg:mt-16 lg:gap-6 xl:gap-7
          "
        >
          {PAGE_BUILDERS.map((builder) => (
            <BuilderCard key={builder.name} builder={builder} />
          ))}
        </div>

        {/* Supporting text */}
        <p
          className="
            mx-auto mt-8 max-w-2xl text-center
            text-xs leading-6 text-slate-400
            sm:mt-10 sm:text-sm
          "
        >
          Designed to fit into your existing workflow.
        </p>
      </div>
    </section>
  );
}
