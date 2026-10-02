"use client";

type PageBuilder = {
  name: string;
  logo: string;
  alt: string;
};

const PAGE_BUILDERS: PageBuilder[] = [
  {
    name: "Elementor",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_2026_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Elementor",
  },
  {
    name: "Oxygen",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Oxygen",
  },
  {
    name: "Beaver Builder",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Beaver Builder",
  },
  {
    name: "Divi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Divi",
  },
  {
    name: "Breakdance",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Clio_Software_Company_Logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Breakdance",
  },
  {
    name: "Bricks",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Bricks",
  },
  {
    name: "Kadence WP",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/WooCommerce2025_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Kadence WP",
  },
  {
    name: "Brizy",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Brizy",
  },
  {
    name: "Visual Composer",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/PF-Linear-Full-color-black-RGB.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    alt: "Visual Composer",
  },
];

type PageBuilderCompatibilityProps = {
  title?: string;
  description?: string;
};

export default function PageBuilderCompatibility({
  title = "Integrates With Your Favorite Tools.",
  description = "BOOK MORE LEADS fits seamlessly into your business, connecting with the tools you already use.",
}: PageBuilderCompatibilityProps) {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#172943]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[1050px] text-[clamp(0.95rem,1.4vw,1.25rem)] font-medium leading-7 text-[#53627D] sm:mt-6">
            {description}
          </p>
        </div>

        {/* Builder Grid */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-5 lg:mt-16 lg:gap-7">
          {PAGE_BUILDERS.map((builder) => (
            <div
              key={builder.name}
              className="
                flex
                h-[105px]
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#EEF1F5]
                bg-white
                px-3
                shadow-[0_8px_24px_rgba(23,41,67,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_32px_rgba(23,41,67,0.10)]
                sm:h-[115px]
                sm:rounded-[16px]
                sm:px-5
                lg:h-[125px]
                lg:rounded-[18px]
                lg:px-6
              "
            >
              <img
                src={builder.logo}
                alt={builder.alt}
                className="
                  max-h-[48px]
                  max-w-[120px]
                  object-contain
                  sm:max-h-[54px]
                  sm:max-w-[150px]
                  lg:max-h-[60px]
                  lg:max-w-[180px]
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}