"use client";

const testimonials = [
  {
    quote:
      "really groundbreaking product particularly for marketing agency owners...",
    name: "Gustavo Muñuz Castro",
    image: "/images/testimonials/gustavo.png",
    accent: "#F4C400",
  },
  {
    quote:
      "it's a great product and i look forward to work with you for a long time...",
    name: "Matt Plapp",
    image: "/images/testimonials/matt.png",
    accent: "#42A5F5",
  },
  {
    quote:
      "when you join high level we get joining a really amazing community...",
    name: "Ian Almasi",
    image: "/images/testimonials/ian.png",
    accent: "#22D95C",
  },
  {
    quote:
      "I've been able to provide my clients with automated follow-up and lead nurturing...",
    name: "Christine Seale",
    image: "/images/testimonials/christine.png",
    accent: "#A855F7",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-[#020F1C] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1800px]">

        <h2 className="text-center text-[38px] font-bold text-white/90 sm:text-[48px] lg:text-[58px]">
          Discover More Success Stories!
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#304050] bg-gradient-to-b from-[#071724] via-[#101820] to-[#020304] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:p-8"
            >
              <div className="text-[76px] font-serif font-bold leading-[0.6] text-white">
                “
              </div>

              <p className="mt-8 text-[19px] leading-[1.5] text-white/90 sm:text-[20px]">
                {testimonial.quote}
              </p>

              <div className="absolute bottom-8 left-7 right-7 flex items-center gap-5 sm:left-8 sm:right-8">
                <div
                  className="h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full border-[3px]"
                  style={{ borderColor: testimonial.accent }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>

                <p className="text-[18px] font-semibold leading-[1.35] text-white">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}