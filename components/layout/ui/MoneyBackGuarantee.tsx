
import Image from "next/image";

const paymentMethods = [
  {
    name: "PayPal",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/PayPal_2024.svg/3840px-PayPal_2024.svg.png",
  },
  
  {
    name: "Mastercard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "American Express",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
  },
  {
    name: "Discover",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg",
  },
  
  {
    name: "Google Pay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
  },
  {
    name: "Apple Pay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
  },
  {
    name: "JCB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg",
  },
  
  
  {
    name: "UnionPay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg",
  },
];

export default function MoneyBackGuarantee() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px] rounded-[22px] border-[3px] border-blue-100 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

        {/* Top section */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">

          {/* Guarantee badge */}
          <div className="shrink-0">
            <div className="relative h-[150px] w-[150px] sm:h-[170px] sm:w-[170px] lg:h-[190px] lg:w-[190px]">
              <Image
                src="/14day.png"
                alt="14 day money back guarantee"
                fill
                className="object-contain"
                sizes="190px"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-slate-950">
              14 days Money Back Guarantee!
            </h2>

            <p className="mt-5 max-w-5xl text-[clamp(1rem,1.5vw,1.25rem)] leading-8 text-slate-600">
              We are delighted to offer you the opportunity to try out
              Book More Leads. In the event that our system does not meet
              your needs within the next 14 days, please don&apos;t hesitate
              to contact us. We&apos;ll happily refund your money.
            </p>

            {/* Payment methods */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 lg:justify-start">
              {paymentMethods.map((payment) => (
                <div
                  key={payment.name}
                  className="relative flex h-9 w-[72px] items-center justify-center sm:h-10 sm:w-[82px]"
                >
                  <img
                    src={payment.image}
                    alt={payment.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust section */}
        <div className="mt-12 border-t border-slate-200 pt-10 lg:mt-14 lg:pt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-6">

            {/* Founder */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-blue-100">
                <Image
                  src="/images/founder.png"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  — Govind Anand
                </p>

                <p className="mt-1 text-lg font-bold text-slate-950">
                  Founder, Book More Leads
                </p>
              </div>
            </div>

            {/* Secure payment */}
            <div className="flex items-center justify-center gap-4 border-slate-200 md:border-l lg:justify-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl">
                🛡️
              </div>

              <p className="max-w-[280px] text-sm leading-6 text-slate-700">
                We do not store any credit card information on our servers.
                Payments are processed securely by payment gateways.
              </p>
            </div>

            {/* Safe payments */}
            <div className="flex items-center justify-center gap-4 border-slate-200 md:border-l lg:justify-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-2xl">
                🔒
              </div>

              <div>
                <p className="text-lg font-bold leading-tight text-slate-950">
                  100% Safe & Secure
                  <br />
                  Payments
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Secure payment processing
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div className="flex items-center justify-center gap-4 border-slate-200 md:border-l lg:justify-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl">
                🔐
              </div>

              <div>
                <p className="text-lg font-bold text-slate-950">
                  Privacy Protected
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Your information stays secure
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

