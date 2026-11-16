
"use client";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#060b14] text-white flex items-center justify-center px-4 py-10 sm:px-6">

      <div className="w-full max-w-4xl">

        {/* Thank You Message */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Thank You for Booking!
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            We're excited to connect with you.
            Watch this quick video to see what you can expect
            from your upcoming strategy call.
          </p>

        </div>

        {/* Responsive Wistia Video */}
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">

          <div className="relative aspect-video w-full">

            <iframe
              src="https://fast.wistia.net/embed/iframe/yctjzwycm7"
              title="Book More Leads - Welcome Video"
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

        {/* Small Note */}
        <p className="mt-5 text-center text-xs text-slate-500">
          Please turn on your sound for the best experience.
        </p>

      </div>

    </main>
  );
}
