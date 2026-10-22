


import { useState } from "react";
import { Plus, Minus } from "lucide-react";


const faqs = [
  {
    question: "When will I start seeing results?",
    answer:
      "Results depend on your advertising, how long you've been in business, the quality of your work, and how consistently you use our system.\n\nOur system gives you a strong marketing foundation. It helps you build your online presence, collect more reviews, respond to new leads faster, follow up with potential customers, and reconnect with past customers.\n\nHowever, paying for our service alone won't solve every problem. You still need to advertise your business and provide quality work. We're here to help you make the most of every opportunity and grow your business, not promise overnight miracles.",
  },
  {
    question: "How exactly will you help me grow my business?",
    answer:
      "We help you put simple marketing and automation systems in place to attract customers, win more jobs, and save time.\n\n1. Get more 5-star Google reviews to build trust with potential customers.\n\n2. Get found online with a professional website that helps turn visitors into enquiries.\n\n3. Follow up with new leads quickly so potential customers aren't left waiting.\n\n4. Reconnect with past customers through automated follow-ups to encourage repeat business.\n\n5. Encourage referrals by staying connected with happy customers and making it easier for them to recommend your services.\n\n6. Use automation and AI to reduce repetitive tasks and give you more time to run your business.\n\nThese systems work together to help you make the most of your leads and customers. If these are the things you need to grow your business, that's exactly what Book More Leads can help you with.",
  },
  {
    question: "Why is your pricing so affordable?",
    answer:
      "Our goal is to build long-term relationships with our clients, not overcharge them. We believe affordable pricing, excellent service, and systems that genuinely help your business are the best ways to earn your trust.\n\nWe want you to see enough value in our service that staying with us makes sense for years to come.",
  },
  {
    question: "What happens if I decide to cancel my subscription?",
    answer:
      "We'll be sorry to see you go, but you can decide whether our service is right for your business.\n\nIf you cancel, your access to the features and services included in your subscription will end according to your cancellation terms. Before cancelling, we'll make sure you understand what you'll lose access to and what happens to any website, automations, or other assets we've set up for you.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "We'll build your website using SEO best practices to help Google understand your business. This includes relevant keywords, page titles, meta descriptions, image alt text, mobile-friendly design, site speed improvements, and an SSL certificate.\n\nWe can also help you publish useful blog content to improve your online presence over time.\n\nHowever, no one can guarantee a specific Google ranking. Your visibility depends on factors such as competition, your location, your website's history, and the quality of your online presence and reviews. Strong rankings take time and ongoing effort.",
  },
  {
    question: "Why do I need a website if word-of-mouth already brings me business?",
    answer:
      "Word-of-mouth is great, and you should keep making the most of it. But a professional website gives potential customers another way to find you, learn about your services, see your reviews, and contact you.\n\nIt also makes it easier for happy customers to recommend your business, supports your advertising efforts, and helps you make a professional first impression on larger clients.\n\nThink of it this way: if your website helps you win just a few additional profitable jobs, it could cover its cost. The actual return will depend on your pricing, costs, and how well your website converts visitors into customers.",
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
