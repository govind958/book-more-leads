
'use client';

import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Mail,
  ArrowLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how BookMoreLeads ("BookMoreLeads,"
          "we," "us," or "our") collects, uses, stores, and shares personal
          information when you visit our website, submit a form, book a
          consultation, communicate with us, or use our services.
        </p>
        <p>
          BookMoreLeads provides digital solutions and business automation
          services for contractors and home service businesses, including
          websites, lead capture, automated follow-ups, missed-call text-back,
          appointment booking, review automation, and related marketing tools.
        </p>
        <p>
          By accessing our website or using our services, you acknowledge
          that you have read this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "summary",
    title: "2. Privacy at a Glance",
    content: (
      <>
        <p>Here is a quick overview of our privacy practices:</p>
        <ul>
          <li>We collect contact, business, communication, and website usage information.</li>
          <li>We use information to provide our services, respond to inquiries, and improve our platform.</li>
          <li>Our services may process customer and lead information on behalf of contractor clients.</li>
          <li>We may use trusted service providers to operate our website and deliver our services.</li>
          <li>We do not sell personal information for monetary consideration.</li>
          <li>You may have rights to access, correct, or request deletion of your personal information.</li>
          <li>You can contact us at hello@bookmoreleads.agency with privacy-related questions.</li>
        </ul>
      </>
    ),
  },
  {
    id: "information",
    title: "3. Information We Collect",
    content: (
      <>
        <p>Depending on how you interact with us, we may collect the following categories of information:</p>

        <h4>3.1 Personal and Contact Information</h4>
        <ul>
          <li>First and last name.</li>
          <li>Email address.</li>
          <li>Phone number.</li>
          <li>Business name and business address.</li>
          <li>Information submitted through contact and booking forms.</li>
        </ul>

        <h4>3.2 Business Information</h4>
        <ul>
          <li>Type of contracting or home service business.</li>
          <li>Services offered and business requirements.</li>
          <li>Business size and relevant operational information.</li>
          <li>Information shared during consultations.</li>
        </ul>

        <h4>3.3 Payment Information</h4>
        <p>
          If you purchase a subscription or service, payment-related information
          may be collected and processed by our payment providers. We may receive
          transaction details, billing status, and subscription information.
          We do not intend to store complete payment card details on our own servers.
        </p>

        <h4>3.4 Website and Technical Information</h4>
        <ul>
          <li>IP address and approximate location.</li>
          <li>Browser type and device information.</li>
          <li>Pages visited and interactions with our website.</li>
          <li>Cookies and similar tracking technologies, where enabled.</li>
        </ul>

        <h4>3.5 Communication Information</h4>
        <p>
          We may collect information contained in emails, text messages,
          consultation requests, support conversations, and other
          communications you voluntarily share with us.
        </p>
      </>
    ),
  },
  {
    id: "sources",
    title: "4. How We Collect Information",
    content: (
      <>
        <p>We may collect information from the following sources:</p>
        <ul>
          <li><strong>Directly from you:</strong> When you complete forms, book a call, subscribe, or contact us.</li>
          <li><strong>Automatically:</strong> Through website cookies, server logs, and similar technologies.</li>
          <li><strong>Through our clients:</strong> When contractor businesses provide information necessary to deliver our services.</li>
          <li><strong>Service providers:</strong> Through payment processors, communication platforms, hosting providers, and other service partners.</li>
          <li><strong>Public sources:</strong> Where appropriate, through publicly available business information.</li>
        </ul>
      </>
    ),
  },
  {
    id: "usage",
    title: "5. How We Use Your Information",
    content: (
      <>
        <p>We may use collected information for the following purposes:</p>
        <ul>
          <li>To provide and maintain our websites and services.</li>
          <li>To respond to inquiries and schedule consultations.</li>
          <li>To create and manage customer accounts and subscriptions.</li>
          <li>To deliver contractor websites, lead management, and automation services.</li>
          <li>To facilitate appointment booking and customer communications.</li>
          <li>To provide customer support and troubleshoot technical issues.</li>
          <li>To send important service updates and billing notifications.</li>
          <li>To send promotional communications where legally permitted and, when required, with your consent.</li>
          <li>To improve our services, website experience, and business operations.</li>
          <li>To protect against fraud, misuse, and unauthorized access.</li>
          <li>To comply with applicable legal requirements.</li>
        </ul>
        <p>
          We do not use personal information for purposes that are incompatible
          with the purposes described in this Policy without providing
          appropriate notice or obtaining consent where required.
        </p>
      </>
    ),
  },
  {
    id: "contractor-data",
    title: "6. Contractor Customer and Lead Information",
    content: (
      <>
        <p>
          An important part of BookMoreLeads is helping contractors manage
          inquiries from homeowners and potential customers.
        </p>
        <p>
          When a contractor uses our services, we may process information
          relating to that contractor's leads and customers, including:
        </p>
        <ul>
          <li>Names, phone numbers, and email addresses.</li>
          <li>Service requests and inquiry details.</li>
          <li>Text message and email conversations.</li>
          <li>Appointment and booking information.</li>
          <li>Follow-up and review request information.</li>
        </ul>

        <h4>6.1 Our Role</h4>
        <p>
          We generally process this information on behalf of the contractor
          business that uses our services. The contractor business determines
          why and how its customer information is collected and used.
        </p>

        <h4>6.2 Contractor Responsibilities</h4>
        <p>
          Contractor clients are responsible for obtaining all necessary
          permissions and consents before contacting their leads through
          automated calls, text messages, emails, or marketing campaigns.
          They must also comply with applicable privacy and communication laws.
        </p>

        <h4>6.3 Requests From Homeowners</h4>
        <p>
          If you are a homeowner who has communicated with one of our contractor
          clients and want to access, correct, or delete information held by
          that business, please contact the contractor directly. We may assist
          the business in responding to your request.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "7. How We Share Information",
    content: (
      <>
        <p>
          We may share information with trusted third parties when necessary
          to operate our business and provide our services.
        </p>
        <ul>
          <li><strong>Technology providers:</strong> Website hosting, databases, CRM, and automation platforms.</li>
          <li><strong>Communication providers:</strong> Email, telephone, and SMS delivery services.</li>
          <li><strong>Payment providers:</strong> Companies that securely process subscriptions and payments.</li>
          <li><strong>Analytics and advertising providers:</strong> Where applicable, to measure website performance and advertising effectiveness.</li>
          <li><strong>Professional advisors:</strong> Lawyers, accountants, and other professional service providers.</li>
          <li><strong>Legal authorities:</strong> When disclosure is required by law or necessary to protect legal rights.</li>
          <li><strong>Business transactions:</strong> In connection with a merger, acquisition, financing, or sale of business assets.</li>
        </ul>
        <p>
          We do not authorize service providers to use personal information
          for purposes beyond the services they perform on our behalf,
          subject to applicable law and contractual obligations.
        </p>
        <p>
          We do not sell personal information for monetary consideration.
          Certain disclosures involving advertising technologies may
          nevertheless qualify as sharing or targeted advertising under
          applicable privacy laws. Where required, we provide the
          corresponding opt-out rights.
        </p>
      </>
    ),
  },
  {
    id: "sms",
    title: "8. SMS and Mobile Communications",
    content: (
      <>
        <h4>8.1 Messages From BookMoreLeads</h4>
        <p>
          If you provide your phone number and consent to receive messages,
          we may send appointment confirmations, reminders, service updates,
          support communications, and promotional messages where separately
          permitted.
        </p>

        <h4>8.2 Messages Sent on Behalf of Contractors</h4>
        <p>
          Our contractor clients may use our systems to communicate with
          their own leads and customers through business phone numbers.
          These communications are sent on behalf of the contractor business.
        </p>
        <p>
          The contractor is responsible for obtaining the necessary consent
          before sending automated or marketing communications and for
          complying with applicable messaging regulations.
        </p>

        <h4>8.3 Opting Out</h4>
        <ul>
          <li>Reply STOP to unsubscribe from supported SMS programs.</li>
          <li>Reply HELP for assistance where supported.</li>
          <li>Contact hello@bookmoreleads.agency for further assistance.</li>
        </ul>
        <p>
          Message frequency varies depending on your interactions and
          the communications you have agreed to receive. Message and
          data rates may apply. Carriers are not responsible for delayed
          or undelivered messages.
        </p>

        <h4>8.4 Mobile Information Privacy</h4>
        <p>
          Mobile information and SMS consent data will not be shared with
          third parties or affiliates for their own marketing or promotional
          purposes. Information may be shared with service providers strictly
          as necessary to deliver communications you have consented to receive.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website may use cookies, pixels, and similar technologies
          to improve functionality and understand how visitors interact
          with our website.
        </p>
        <p>These technologies may be used to:</p>
        <ul>
          <li>Remember website preferences.</li>
          <li>Understand website traffic and performance.</li>
          <li>Improve website functionality.</li>
          <li>Measure marketing and advertising performance.</li>
        </ul>
        <p>
          You can manage or disable cookies through your browser settings.
          Some website features may not function properly if certain cookies
          are disabled.
        </p>
        <p>
          Where required by law, we will provide appropriate cookie
          disclosures and consent or opt-out controls.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "10. Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary to provide our services, fulfill legitimate business
          purposes, comply with legal obligations, resolve disputes,
          and enforce agreements.
        </p>
        <p>
          Retention periods may differ depending on the type of information,
          the nature of our relationship with you, and applicable legal
          requirements.
        </p>
        <p>
          When information is no longer required, we may delete it,
          anonymize it, or securely dispose of it, subject to applicable
          retention obligations.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "11. Data Security",
    content: (
      <>
        <p>
          We take reasonable administrative, technical, and organizational
          measures designed to protect personal information against
          unauthorized access, loss, misuse, alteration, or disclosure.
        </p>
        <p>
          These measures may include access controls, secure service
          providers, encryption where supported, and appropriate
          security practices.
        </p>
        <p>
          However, no internet transmission or electronic storage method
          is completely secure. We cannot guarantee absolute security
          of your information.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "12. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on your location and applicable privacy laws, you may
          have certain rights concerning your personal information.
        </p>
        <ul>
          <li><strong>Access:</strong> Request information about the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
          <li><strong>Portability:</strong> Request a copy of your information in a portable format.</li>
          <li><strong>Opt-out:</strong> Opt out of certain targeted advertising, sale, or sharing activities where applicable.</li>
          <li><strong>Appeal:</strong> Appeal certain privacy decisions where provided by applicable law.</li>
        </ul>
        <p>
          To exercise your rights, email us at hello@bookmoreleads.agency.
          We may need to verify your identity before processing a request.
        </p>
        <p>
          We will not unlawfully discriminate against you for exercising
          your applicable privacy rights.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "13. Children's Privacy",
    content: (
      <>
        <p>
          Our website and services are intended for businesses and adults.
          They are not directed toward children under the age of 16.
        </p>
        <p>
          We do not knowingly collect personal information from children
          under 16. If you believe that a child has provided personal
          information to us, please contact us so we can take appropriate
          steps.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "14. International Data Transfers",
    content: (
      <>
        <p>
          BookMoreLeads may work with customers and service providers
          located in different countries. As a result, personal information
          may be transferred to or processed in countries other than the
          country in which it was originally collected.
        </p>
        <p>
          Where required, we take appropriate steps to ensure that
          international transfers comply with applicable data protection
          requirements.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "15. Third-Party Websites",
    content: (
      <>
        <p>
          Our website or services may contain links to third-party websites,
          tools, or platforms. These services operate under their own
          privacy policies and terms.
        </p>
        <p>
          We are not responsible for the privacy practices or content
          of third-party websites. We encourage you to review their
          privacy policies before providing personal information.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "16. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, business operations, legal requirements,
          or privacy practices.
        </p>
        <p>
          Any updates will be published on this page with a revised
          "Last Updated" date. Where required by law, we will provide
          additional notice of material changes.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "17. Contact Us",
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this
          Privacy Policy or the way we handle personal information,
          please contact us.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <p className="font-bold text-slate-900">BookMoreLeads</p>
          <p className="mt-2 text-sm text-slate-600">
            Privacy and Data Protection Inquiries
          </p>
          <a
            href="mailto:hello@bookmoreleads.agency"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
          >
            <Mail size={18} />
            hello@bookmoreleads.agency
          </a>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] text-slate-800">
      {/* Header */}
      <header className="relative overflow-hidden bg-[#0F1D30] text-white">
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mx-auto max-w-3xl py-16 text-center sm:py-20">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
              <ShieldCheck size={34} className="text-blue-400" />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              BookMoreLeads · Legal
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Your privacy matters. Learn how we collect, use, and protect
              your information when you work with BookMoreLeads.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Effective: November 23, 2026
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Last Updated: November 23, 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <LockKeyhole className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Privacy-conscious practices
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Transparent data handling
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Accessible privacy support
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-16">
        {/* Table of Contents */}
        <aside className="lg:sticky lg:top-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <FileText size={18} className="text-blue-600" />
              <h2 className="font-bold text-slate-900">
                On this page
              </h2>
            </div>

            <nav className="max-h-[65vh] space-y-1 overflow-y-auto pr-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  <span>{section.title}</span>
                  <ChevronRight
                    size={14}
                    className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Policy Sections */}
        <article className="min-w-0">
          <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex gap-3">
              <ShieldCheck
                size={24}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <h2 className="font-bold text-slate-900">
                  Your information deserves transparency.
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  This policy explains what information we collect,
                  why we need it, and how you can exercise your privacy rights.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="mb-5 border-b border-slate-100 pb-4 text-xl font-bold tracking-tight text-[#0F1D30] sm:text-2xl">
                  {section.title}
                </h2>

                <div className="policy-content space-y-4 text-[15px] leading-8 text-slate-600">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 rounded-2xl bg-[#0F1D30] p-8 text-center text-white sm:p-10">
            <ShieldCheck
              size={34}
              className="mx-auto mb-4 text-blue-400"
            />

            <h2 className="text-2xl font-bold">
              Questions about your privacy?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-300">
              We are here to help. Reach out to our team for questions
              about your personal information or this Privacy Policy.
            </p>

            <a
              href="mailto:hello@bookmoreleads.agency"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              <Mail size={18} />
              Contact BookMoreLeads
            </a>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-[#0F1D30]"
          >
            BookMore<span className="text-blue-600">Leads</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <Link href="/terms" className="transition hover:text-blue-600">
              Terms & Conditions
            </Link>

            <a
              href="mailto:hello@bookmoreleads.agency"
              className="transition hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} BookMoreLeads. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Legal Typography */}
      <style jsx global>{`
        .policy-content p {
          margin-bottom: 14px;
        }

        .policy-content ul {
          list-style: disc;
          padding-left: 24px;
          margin: 12px 0 20px;
        }

        .policy-content li {
          padding-left: 5px;
          margin-bottom: 8px;
        }

        .policy-content strong {
          color: #1e293b;
          font-weight: 700;
        }

        .policy-content h4 {
          margin-top: 24px;
          margin-bottom: 10px;
          color: #0f1d30;
          font-size: 16px;
          font-weight: 700;
        }
      `}</style>
    </main>
  );
}
