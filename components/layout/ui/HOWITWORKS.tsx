import Image from "next/image";

const steps = [
  {
    number: "1",
    image: "/call1.png",
    title: "Step 1: Kickoff Call (20 min)",
    description:
      "We’ll answer questions, show live features, and share real client results—no high-pressure tactics.",
  },
  {
    number: "2",
    image: "/build2.png",
    title: "Step 2: The Build (7–10 days)",
    description:
      "You fill out a quick form with your details, and we start building your website and marketing system.",
  },
  {
    number: "3",
    image: "/zoom-header.jpg",
    title: "Step 3: Go-Live Call (25 min)",
    description:
      "We walk you through the setup and show you how to run it (it's literally just pressing two buttons).",
  },
];

export default function SetupSteps() {
  return (
    <section className="bg-[#2563EB] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
            <span className="mr-2 inline-block">⏱️</span>
            What your setup journey looks like
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-7 lg:gap-10 xl:gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-w-0 flex-col items-center"
            >
              {/* Image */}
              <div className="relative w-full max-w-[200px]">
                {/* Number badge */}
                <div
                  className="
                    absolute
                    -left-2
                    -top-3
                    z-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2563EB]
                    text-xl
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/30
                    sm:-left-3
                    sm:-top-4
                    sm:h-12
                    sm:w-12
                    sm:text-2xl
                  "
                >
                  {step.number}
                </div>

                {/* Image container */}
                <div
                  className="
                    relative
                    aspect-[1.15/1]
                    w-full
                    overflow-hidden
                    rounded-[18px]
                    bg-[#111827]
                    shadow-[0_6px_14px_rgba(0,0,0,0.25)]
                  "
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 w-full max-w-[340px] text-center sm:mt-7">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.7rem)] font-extrabold leading-tight tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-6 text-slate-300 sm:leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}