
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Roofing Contractor",
    text: "We used to miss calls while working on roofs. Now every missed call gets an instant text, helping us respond to more potential customers.",
    avatar: "SM",
    network: "f",
    color: "from-violet-400 to-pink-400",
    size: "short",
  },
  {
    name: "James Carter",
    role: "Home Service Owner",
    text: "Following up with leads used to take so much time. The automated follow-ups help us stay connected with customers without manually chasing every message.",
    avatar: "JC",
    network: "𝕏",
    color: "from-orange-300 to-rose-400",
    size: "tall",
  },
  {
    name: "Amanda Brooks",
    role: "General Contractor",
    text: "The system has made our process feel much more organized. We can focus on our jobs while our follow-up process keeps working in the background. It has been a welcome change for our team.",
    avatar: "AB",
    network: "f",
    color: "from-purple-400 to-blue-400",
    size: "tall",
  },
  {
    name: "Mark Wilson",
    role: "Roofing Business Owner",
    text: "We wanted a simpler way to keep up with inquiries. Having a consistent follow-up process makes it easier to stay in touch with potential customers.",
    avatar: "MW",
    network: "𝕏",
    color: "from-amber-300 to-orange-400",
    size: "short",
  },
  {
    name: "Michael Reed",
    role: "Remodeling Contractor",
    text: "As a small business, every inquiry matters. Automating routine follow-ups gives us more time to concentrate on the work itself.",
    avatar: "MR",
    network: "f",
    color: "from-cyan-300 to-blue-500",
    size: "medium",
  },
  {
    name: "Emily Parker",
    role: "Cleaning Business Owner",
    text: "I like having a repeatable process for keeping in touch with customers after the job is done. It makes asking for reviews easier to manage.",
    avatar: "EP",
    network: "f",
    color: "from-emerald-300 to-teal-500",
    size: "short",
  },
  {
    name: "Daniel Foster",
    role: "Home Improvement Pro",
    text: "A missed call doesn't have to mean a missed opportunity. Having a quick response ready gives customers a way to continue the conversation even when we're busy.",
    avatar: "DF",
    network: "𝕏",
    color: "from-pink-300 to-purple-500",
    size: "medium",
  },
  {
    name: "Chris Bennett",
    role: "Independent Contractor",
    text: "The thing I value most is consistency. Leads, follow-ups, and review requests are easier to keep track of when the process isn't all manual.",
    avatar: "CB",
    network: "f",
    color: "from-sky-300 to-indigo-500",
    size: "short",
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
    <section className="relative isolate overflow-hidden bg-[#08091A] px-5 py-24 sm:px-8 sm:py-28">
      {/* Midnight background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#08091A] via-[#0B0A20] to-[#08091A]" />

      {/* Soft purple and rose ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[150px]" />
      <div className="pointer-events-none absolute left-[28%] top-[48%] -z-10 h-[320px] w-[420px] rounded-full bg-indigo-500/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute right-[20%] top-[52%] -z-10 h-[300px] w-[360px] rounded-full bg-rose-500/[0.10] blur-[130px]" />

      {/* Scattered star field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {stars.map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-[3px] w-[3px] rounded-full bg-indigo-100/25"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity: index % 3 === 0 ? 0.8 : 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-rose-300/90">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Trusted by people in the industry
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300/80 sm:text-lg">
            A better way to capture leads, follow up with customers, and keep
            your business moving — even when you're busy on the job.
          </p>
        </div>

        {/* Masonry testimonial layout */}
        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((column) => (
            <div key={column} className="flex flex-col gap-3">
              {testimonials
                .filter((_, index) => index % 4 === column || index % 4 === column + 4)
                .map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.065]"
                  >
                    {/* Subtle glass highlight */}
                    <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Profile row */}
                    <div className="mb-4 flex items-center gap-2.5">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-[11px] font-bold text-white shadow-lg ring-1 ring-white/20`}
                      >
                        {testimonial.avatar}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-[13px] font-semibold text-white/95">
                          {testimonial.name}
                        </h3>
                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>

                      <div
                        aria-label={
                          testimonial.network === "f"
                            ? "Social profile"
                            : "Social profile"
                        }
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] text-[11px] font-bold ${
                          testimonial.network === "f"
                            ? "bg-[#4267A9] text-white"
                            : "bg-black text-white ring-1 ring-white/10"
                        }`}
                      >
                        {testimonial.network}
                      </div>
                    </div>

                    {/* Testimonial copy */}
                    <p className="text-[13px] leading-[1.85] text-slate-300/85">
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
