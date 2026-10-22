
"use client";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Roofing Contractor",
    text: "We used to miss calls while working on roofs. Now every missed call gets an instant text, helping us respond to more potential customers.",
    avatar: "SM",
    network: "f",
    color: "from-[#00B4F0] to-[#2563EB]",
  },
  {
    name: "James Carter",
    role: "Home Service Owner",
    text: "Following up with leads used to take so much time. The automated follow-ups help us stay connected with customers without manually chasing every message.",
    avatar: "JC",
    network: "𝕏",
    color: "from-[#00D8F0] to-[#0891B2]",
  },
  {
    name: "Amanda Brooks",
    role: "General Contractor",
    text: "The system has made our process feel much more organized. We can focus on our jobs while our follow-up process keeps working in the background. It has been a welcome change for our team.",
    avatar: "AB",
    network: "f",
    color: "from-[#60A5FA] to-[#1E40AF]",
  },
  {
    name: "Mark Wilson",
    role: "Roofing Business Owner",
    text: "We wanted a simpler way to keep up with inquiries. Having a consistent follow-up process makes it easier to stay in touch with potential customers.",
    avatar: "MW",
    network: "𝕏",
    color: "from-[#22D3EE] to-[#2563EB]",
  },
  {
    name: "Michael Reed",
    role: "Remodeling Contractor",
    text: "As a small business, every inquiry matters. Automating routine follow-ups gives us more time to concentrate on the work itself.",
    avatar: "MR",
    network: "f",
    color: "from-[#00B4F0] to-[#1E40AF]",
  },
  {
    name: "Emily Parker",
    role: "Cleaning Business Owner",
    text: "I like having a repeatable process for keeping in touch with customers after the job is done. It makes asking for reviews easier to manage.",
    avatar: "EP",
    network: "f",
    color: "from-[#00D8F0] to-[#0F766E]",
  },
  {
    name: "Daniel Foster",
    role: "Home Improvement Pro",
    text: "A missed call doesn't have to mean a missed opportunity. Having a quick response ready gives customers a way to continue the conversation even when we're busy.",
    avatar: "DF",
    network: "𝕏",
    color: "from-[#60A5FA] to-[#2563EB]",
  },
  {
    name: "Chris Bennett",
    role: "Independent Contractor",
    text: "The thing I value most is consistency. Leads, follow-ups, and review requests are easier to keep track of when the process isn't all manual.",
    avatar: "CB",
    network: "f",
    color: "from-[#22D3EE] to-[#1E40AF]",
  },
];

const stars = [
  [3, 8], [8, 16], [12, 6], [18, 22], [23, 10], [29, 17],
  [34, 5], [39, 27], [44, 11], [50, 4], [55, 19], [61, 8],
  [67, 24], [72, 13], [78, 5], [83, 20], [89, 10], [95, 17],
  [6, 42], [15, 53], [26, 45], [36, 58], [48, 48], [59, 55],
  [71, 43], [81, 58], [93, 47], [10, 76], [22, 88], [38, 80],
  [54, 91], [68, 78], [84, 87], [96, 75],
];

export default function SuccessStories() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#070B12] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Main Midnight Cyan background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#070B12] via-[#0B1329] to-[#070B12]"
      />

      {/* Brand-aligned ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[30%] -z-10 h-[360px] w-[min(90%,760px)] -translate-x-1/2 rounded-full bg-[#1E40AF]/20 blur-[120px] sm:h-[460px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[48%] -z-10 h-[280px] w-[280px] rounded-full bg-[#00B4F0]/[0.09] blur-[110px] sm:h-[360px] sm:w-[360px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[52%] -z-10 h-[260px] w-[260px] rounded-full bg-[#00D8F0]/[0.07] blur-[110px] sm:h-[340px] sm:w-[340px]"
      />

      {/* Subtle scattered stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {stars.map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-[#BFDBFE] sm:h-[3px] sm:w-[3px]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity: index % 3 === 0 ? 0.4 : 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Trusted by people in the industry
            
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            A better way to capture leads, follow up with customers, and keep
            your business moving — even when you're busy on the job.
          </p>
        </div>

        {/* Responsive masonry layout */}
        <div className="grid grid-cols-1 items-start gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {[0, 1, 2, 3].map((column) => (
            <div
              key={column}
              className={`min-w-0 flex-col gap-3 ${
                column < 2 ? "flex min-[480px]:flex" : "hidden min-[480px]:flex"
              }`}
            >
              {testimonials
                .filter(
                  (_, index) =>
                    index % 4 === column || index % 4 === column + 4,
                )
                .map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="group relative min-w-0 overflow-hidden rounded-xl border border-white/[0.12] bg-[#0B1329]/80 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/35 hover:bg-[#101D38]/95 sm:rounded-2xl sm:p-4 lg:p-[18px]"
                  >
                    {/* Fine cyan highlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent opacity-70 transition-opacity group-hover:opacity-100"
                    />

                    {/* Profile */}
                    <div className="mb-3 flex min-w-0 items-center gap-2.5 sm:mb-4">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-[11px] font-bold text-[#070B12] shadow-[0_0_18px_rgba(0,180,240,0.12)] ring-1 ring-white/20`}
                      >
                        {testimonial.avatar}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-xs font-semibold text-white sm:text-[13px]">
                          {testimonial.name}
                        </h3>
                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>

                      <div
                        aria-label={
                          testimonial.network === "f"
                            ? "Facebook"
                            : "X"
                        }
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] text-[11px] font-bold ${
                          testimonial.network === "f"
                            ? "bg-[#4267A9] text-white"
                            : "border border-white/15 bg-[#111827] text-white"
                        }`}
                      >
                        {testimonial.network}
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="break-words text-[13px] leading-[1.8] text-slate-300 sm:text-[13px]">
                      {testimonial.text}
                    </p>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
