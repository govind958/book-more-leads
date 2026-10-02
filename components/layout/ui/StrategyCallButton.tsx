import { ArrowRight } from "lucide-react";

type StrategyCallButtonProps = {
  text?: string;
  href?: string;
};

export default function StrategyCallButton({
  text = "Book a Free Strategy Call",
  href = "/growth",
}: StrategyCallButtonProps) {
  return (
    <div className="relative mt-10 flex justify-center">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-full bg-blue-600/25 blur-2xl" />

      <a
        href={href}
        className="group relative inline-flex max-w-full items-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-950/50 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:px-8 sm:text-base"
      >
        {/* Facepile */}
        <div className="-space-x-2 flex shrink-0 items-center">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt=""
            className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
          />
          <img
            src="https://i.pravatar.cc/80?img=32"
            alt=""
            className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
          />
          <img
            src="https://i.pravatar.cc/80?img=47"
            alt=""
            className="h-7 w-7 rounded-full border-2 border-[#2563EB] object-cover"
          />
        </div>

        <span className="whitespace-nowrap">{text}</span>

        <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}