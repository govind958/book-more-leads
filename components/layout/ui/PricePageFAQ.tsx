import { useState } from "react";
import { Plus, Minus } from "lucide-react";



const faqs = [
  {
    question: "When will I start seeing results?",
    answer:
      "Results depend on your current marketing, local demand, and how consistently you use our system. We help you respond to leads faster, follow up with potential customers, collect reviews, and reconnect with past customers. Our goal is to help you make the most of every opportunity, but we can't guarantee a specific number of leads or jobs. Consistent marketing and quality work still matter.",
  },
  {
    question: "What exactly is included in my subscription?",
    answer:
      "Your subscription includes a professional contractor website, automated lead follow-up, missed-call text-back, automated review requests, and past-customer re-engagement. The three-month plan also includes complimentary Google Business Profile optimization. Your exact features depend on the plan you choose.",
  },
  {
    question: "Do I need to run ads for this system to work?",
    answer:
      "No, you don't necessarily need paid ads. You can get enquiries through referrals, Google searches, social media, and other marketing channels. Our system helps you manage and follow up with those opportunities. Consistent marketing can help you reach more potential customers, but results vary by business.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "Cancellation terms depend on the plan you choose. Please review the applicable terms before subscribing. If you cancel, access to subscription-based features may end. We'll clarify what happens to your website, automations, domain, and other assets so you know exactly what to expect.",
  },
  {
    question: "Why choose Book More Leads instead of separate tools?",
    answer:
      "Book More Leads brings your website, lead follow-up, missed-call text-back, review requests, and past-customer re-engagement together in one system. Instead of managing several separate tools yourself, you get a connected setup designed to help you manage enquiries, stay in touch with customers, and make the most of more opportunities.",
  },
];





export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#070B12] px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#00B4F0]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00D8F0]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#94A3B8]">
            Have questions about growing your contracting business?
            Here are some straightforward answers.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="group flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-base font-semibold leading-7 text-white transition-colors group-hover:text-[#22D3EE] sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0B1329] text-[#22D3EE] transition-all group-hover:border-[#00B4F0]/40 group-hover:bg-[#1E40AF]/20">
                    {isOpen ? (
                      <Minus size={18} aria-hidden="true" />
                    ) : (
                      <Plus size={18} aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="mt-4 space-y-4 pr-2 text-sm leading-7 text-[#CBD5E1] sm:text-base"
                  >
                    {faq.answer.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
