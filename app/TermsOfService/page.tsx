
"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Mail,
  ArrowLeft,
  ChevronRight,
  FileText,
  LockKeyhole,
} from "lucide-react";

const contactEmail = "hello@bookmoreleads.agency";

const sections = [
  {
    id: "definitions",
    title: "1. Definitions",
    content: (
      <>
        <ul>
          <li><strong>Account</strong> — your registered BookMoreLeads user account.</li>
          <li><strong>Client Content</strong> — text, images, logos, business information, customer lists, leads, and any other materials you upload to or create within the Services.</li>
          <li><strong>Platform</strong> — the BookMoreLeads software-as-a-service platform, including the GoHighLevel-based environment we provide to you under white-label.</li>
          <li><strong>Services</strong> — the Platform, websites we build for you, business phone numbers, SMS/MMS messaging, voice, automations, marketing tools, CRM, review tools, and any other product or service we make available to you.</li>
          <li><strong>Subscription</strong> — your recurring payment arrangement for the Services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility and Account",
    content: (
      <p>
        You must be at least 18 years old, legally able to enter into a binding
        contract, and acting on behalf of a lawful business to use the Services.
        You agree to provide accurate information when registering and to keep
        your Account information current. You are responsible for all activity
        under your Account, including activity by your employees, contractors,
        and any other authorized users.
      </p>
    ),
  },
  {
    id: "services",
    title: "3. Services",
    content: (
      <p>
        We provide marketing technology, websites, automation, and related
        services to home service businesses. The exact features available to
        you depend on your Subscription plan. We may add, modify, or discontinue
        features from time to time. We will not materially reduce the core
        functionality of your Subscription without notice.
      </p>
    ),
  },
  {
    id: "pricing",
    title: "4. Subscription Plans and Pricing",
    content: (
      <>
        <p>We currently offer the following plans:</p>
        <ul>
          <li>
            <strong>$297/month</strong> — fully built website, access to the
            BookMoreLeads Platform (web and mobile app), a business phone
            number for texting and calling, CRM access, automations,
            remarketing, and customer review tools.
          </li>
          <li>
            <strong>$750/month</strong> — all features of the $297 plan,
            plus full management and optimization of Google Local Service Ads.
          </li>
        </ul>
        <p>
          Subscriptions are available <strong>month-to-month</strong> or as a
          <strong> prepaid 3-month commitment</strong>. The 3-month commitment
          includes a complimentary Google Business Profile (GBP) optimization
          (valued at $400), provided as a one-time service at the start of
          the term.
        </p>
        <p>
          Pricing is subject to change. We will give you at least
          <strong> 30 days' notice</strong> of any price increase, which will
          take effect at the start of your next billing cycle.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    title: "5. Billing, Auto-Renewal, and Payment",
    content: (
      <ul>
        <li>
          <strong>Advance billing.</strong> All Subscription fees are billed
          in advance of the service period.
        </li>
        <li>
          <strong>Auto-renewal.</strong> Your Subscription will automatically
          renew at the then-current rate at the end of each billing cycle
          until you cancel.
        </li>
        <li>
          <strong>Payment method.</strong> Payments are processed through
          Stripe. By providing a payment method, you authorize us to charge
          it for all amounts due, including Subscription fees, usage charges,
          and applicable taxes.
        </li>
        <li>
          <strong>Taxes.</strong> All fees are exclusive of taxes. You are
          responsible for any sales, use, value-added, or similar taxes other
          than taxes on our income.
        </li>
      </ul>
    ),
  },
  {
    id: "usage-charges",
    title: "6. Usage-Based Charges (Rebillable Costs)",
    content: (
      <>
        <p>
          In addition to your Subscription fee, you will incur usage-based
          charges for phone numbers, messaging, voice, and number intelligence
          services. Rates are:
        </p>

        <div className="my-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[#0F1D30] text-white">
              <tr>
                <th className="px-5 py-3 font-semibold">Service</th>
                <th className="px-5 py-3 font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                ["Local phone number", "$1.15/month"],
                ["Toll-free phone number", "$2.15/month"],
                ["SMS (US/Canada)", "$0.0079/segment (inbound and outbound)"],
                ["MMS (US/Canada) outbound", "$0.02 per message"],
                ["MMS (US/Canada) inbound", "$0.01–$0.02 per message"],
                ["Voice calls outbound", "$0.0180/minute"],
                ["Voice calls inbound", "$0.0085–$0.0220/minute"],
                ["Number intelligence", "$0.005–$0.01 per function"],
              ].map(([service, rate]) => (
                <tr key={service} className="bg-white">
                  <td className="px-5 py-3 font-medium text-slate-700">{service}</td>
                  <td className="px-5 py-3 text-slate-600">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500">
          Rates are subject to change with 30 days' notice.
        </p>

        <p>
          <strong>Digital wallet.</strong> You maintain a digital wallet
          balance for usage charges. When your wallet balance falls below
          the auto-top-up threshold, we will automatically charge your
          payment method to refill the wallet according to your selected
          preferences. You are responsible for monitoring your wallet and
          ensuring sufficient funds.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "7. No Refund Policy",
    content: (
      <p>
        All payments to BookMoreLeads are <strong>final and non-refundable</strong>,
        including Subscription fees, usage charges, and prepaid commitments.
        By signing up, you acknowledge that our products and Services are
        custom-built, immediately initiated upon payment, and non-reversible
        once delivery begins.
      </p>
    ),
  },
  {
    id: "chargebacks",
    title: "8. No Chargebacks",
    content: (
      <>
        <p>
          You agree <strong>not</strong> to initiate a chargeback or payment
          dispute for Services rendered. Filing a chargeback is a material
          breach of these Terms. We reserve the right to:
        </p>
        <ol>
          <li>Submit evidence of contract acceptance, Platform usage, and delivery documentation to your card issuer.</li>
          <li>Suspend or terminate your Account.</li>
          <li>Pursue recovery of the disputed amount plus all associated legal, collection, and administrative fees.</li>
        </ol>
      </>
    ),
  },
  {
    id: "trials",
    title: "9. Free Trials and Promotions",
    content: (
      <p>
        We may offer free trials, discounts, or promotional pricing from time
        to time. During a trial, limited setup may occur for information-gathering
        purposes; full Services are rendered only once paid billing begins.
        Promotional pricing applies for the period stated and reverts to
        standard pricing thereafter. Discounts do not modify any other term
        of this agreement.
      </p>
    ),
  },
  {
    id: "delivery",
    title: "10. Service Delivery",
    content: (
      <>
        <p>Services are considered delivered and rendered once:</p>
        <ol>
          <li>The Client's website has been completed and made available.</li>
          <li>Platform and automation setup is finalized.</li>
        </ol>
        <p>
          Standard build time is <strong>7–10 business days</strong> following
          receipt of your completed onboarding form. Login assistance and
          onboarding support may be provided but are not a prerequisite
          for fulfillment.
        </p>
      </>
    ),
  },
  {
    id: "payment-failures",
    title: "11. Payment Failures and Suspension",
    content: (
      <>
        <p>If a payment fails:</p>
        <ol>
          <li>We will retry payment up to <strong>4 times over 3 weeks</strong>.</li>
          <li>
            If the balance remains unpaid <strong>48 hours</strong> after
            the first failed attempt, your Account and Platform access may
            be suspended until the balance is paid.
          </li>
          <li>
            If the balance remains unpaid for <strong>30 days</strong>,
            we may terminate your Account and delete or archive Client Content
            as described in Section 17.
          </li>
        </ol>
        <p>Suspension does not relieve you of the obligation to pay outstanding fees.</p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "12. Cancellation",
    content: (
      <p>
        You may cancel your Subscription at any time through the Platform
        or by contacting support. Cancellation becomes effective at the end
        of the current billing cycle, and you will not be charged thereafter.
        Early cancellation does <strong>not</strong> entitle you to a refund
        of any prepaid amounts or unused portion of a prepaid term.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "13. Intellectual Property",
    content: (
      <div className="space-y-5">
        <div>
          <h4>13.1 Our IP</h4>
          <p>
            The Platform, our software, our website templates, our automations,
            our marketing materials, our brand, and all underlying technology
            and intellectual property are owned by BookMoreLeads or our licensors.
            We grant you a <strong>limited, non-exclusive, non-transferable,
            revocable license</strong> to use the Platform and Services solely
            for your internal business purposes during your Subscription.
            All rights not expressly granted are reserved.
          </p>
        </div>
        <div>
          <h4>13.2 Your Content</h4>
          <p>
            You retain ownership of your Client Content. You grant us a
            <strong> non-exclusive, worldwide, royalty-free license</strong>
            to host, store, copy, transmit, display, and process Client Content
            as necessary to provide the Services and as permitted by our
            Privacy Policy.
          </p>
        </div>
        <div>
          <h4>13.3 Websites and Domains</h4>
          <p>
            Websites we build for you are provided to you under the license
            described in Section 13.1 and are hosted on our infrastructure.
            Upon termination of your Subscription, <strong>your right to use
            the website ends</strong>, and we are not obligated to transfer
            the website's source code, theme, or templates to you. You retain
            ownership of any custom Client Content (text, images, logos)
            you provided. If you registered your domain through us, ownership
            of the domain registration transfers to you upon request and
            payment of any applicable transfer fees.
          </p>
        </div>
        <div>
          <h4>13.4 Feedback</h4>
          <p>
            If you provide us with suggestions, ideas, or feedback, you grant
            us an unrestricted, perpetual, royalty-free license to use it
            without obligation to you.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "acceptable-use",
    title: "14. Acceptable Use",
    content: (
      <>
        <p>You agree NOT to use the Services to:</p>
        <ol>
          <li>Send unsolicited messages, spam, or unlawful communications.</li>
          <li>Send messages without proper consent under the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, A2P 10DLC requirements, or applicable state laws.</li>
          <li>Violate the privacy of any individual or any state or federal privacy law, including CCPA/CPRA, VCDPA, CPA, CTDPA, TDPSA, OCPA, and any other applicable privacy statute.</li>
          <li>Send messages that are harassing, threatening, defamatory, fraudulent, obscene, or otherwise unlawful.</li>
          <li>Promote illegal activities or regulated industries that violate carrier policies (e.g., illegal drugs, firearms in violation of law, gambling without proper licensing).</li>
          <li>Reverse-engineer, decompile, or attempt to derive source code from the Platform.</li>
          <li>Resell, sublicense, or provide the Services to third parties as a service bureau without our written consent.</li>
          <li>Use the Services to compete with BookMoreLeads or to build a competing product.</li>
          <li>Attempt to circumvent any security measures, rate limits, or technical restrictions.</li>
          <li>Upload viruses, malware, or any code intended to damage or disrupt the Services.</li>
        </ol>
        <p>We may suspend or terminate Accounts engaged in any prohibited activity.</p>
      </>
    ),
  },
  {
    id: "client-compliance",
    title: "15. Client Compliance Obligations",
    content: (
      <div className="space-y-5">
        <div>
          <h4>15.1 You Are Responsible for Your Own Communications</h4>
          <p>
            When you use the Platform to send SMS, MMS, voice messages, or
            emails to your customers and prospects, <strong>you — not
            BookMoreLeads — are the sender</strong>. You are solely responsible
            for:
          </p>
          <ol>
            <li><strong>Obtaining valid consent</strong> from every recipient before sending any message that requires consent under the TCPA, CAN-SPAM, A2P 10DLC, or applicable state law.</li>
            <li><strong>Maintaining proof of consent</strong> (e.g., timestamped opt-in records, web form submissions, signed authorizations) and producing them on request.</li>
            <li><strong>Honoring opt-out requests</strong> (STOP, UNSUBSCRIBE, etc.) immediately and on a list-wide basis.</li>
            <li><strong>Including required disclosures</strong> (sender identity, opt-out instructions, business address) in your communications.</li>
            <li><strong>Scrubbing against the National Do Not Call Registry</strong> and any state DNC registries before making telemarketing calls or texts to non-customers.</li>
            <li><strong>Complying with carrier rules</strong>, including A2P 10DLC registration for the campaigns you run.</li>
            <li><strong>Complying with state privacy laws</strong> that apply to your processing of consumer data (homeowner data, leads, customer lists).</li>
          </ol>
        </div>
        <div>
          <h4>15.2 Privacy and Data Protection</h4>
          <p>
            If you upload personal information about consumers (such as homeowners)
            to the Platform, <strong>you act as the "controller" or "business"</strong>
            under applicable privacy laws and BookMoreLeads acts as the
            "processor" or "service provider." A separate Data Processing
            Addendum (DPA) governs that relationship and is incorporated into
            these Terms by reference. By uploading personal information to
            the Platform, you represent that you have:
          </p>
          <ol>
            <li>Provided all required notices to data subjects.</li>
            <li>Obtained all required consents.</li>
            <li>The legal right to upload and process the data through the Platform.</li>
          </ol>
        </div>
        <div>
          <h4>15.3 You Indemnify Us for Your Communications</h4>
          <p>
            You agree to indemnify and hold BookMoreLeads harmless from any
            claims, fines, penalties, or damages arising from your communications
            or your processing of consumer data, as further described in Section 20.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "call-recording",
    title: "16. Call Recording",
    content: (
      <p>
        We record sales, onboarding, and support calls between you and
        BookMoreLeads for quality assurance, training, recordkeeping, and
        dispute resolution. We provide a verbal notice at the start of each
        call. <strong>By continuing the call, you consent to being recorded.</strong>
        If you do not wish to be recorded, please tell us at the start of the
        call. See our Privacy Policy for details.
      </p>
    ),
  },
  {
    id: "termination",
    title: "17. Term and Termination",
    content: (
      <div className="space-y-4">
        <p>
          <strong>17.1 Term:</strong> These Terms begin when you accept them
          and continue until your Subscription is terminated.
        </p>
        <p>
          <strong>17.2 Termination by You:</strong> You may cancel at any time
          as described in Section 12.
        </p>
        <div>
          <strong>17.3 Termination by Us:</strong> We may suspend or terminate
          your Account and these Terms, with or without notice, if:
          <ol>
            <li>You breach these Terms.</li>
            <li>You fail to pay amounts when due.</li>
            <li>We are required to do so by law.</li>
            <li>You engage in conduct that creates legal, regulatory, or reputational risk for us.</li>
          </ol>
        </div>
        <div>
          <strong>17.4 Effect of Termination:</strong> Upon termination:
          <ol>
            <li>Your right to access and use the Services ends immediately.</li>
            <li>
              We will retain Client Content for <strong>30 days</strong> following
              termination to allow you to export it. After 30 days, we may
              delete or archive Client Content. You are responsible for
              exporting your data before termination.
            </li>
            <li>
              Any provisions intended to survive (intellectual property,
              indemnification, limitation of liability, dispute resolution,
              governing law) will continue.
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "sms",
    title: "18. SMS Terms (A2P 10DLC)",
    content: (
      <div className="space-y-4">
        <p>
          <strong>18.1 SMS Disclosure:</strong> By opting in to our SMS program,
          you agree to receive text messages from BookMoreLeads Agency related
          to appointment confirmations and reminders, onboarding and support,
          account and billing notices, and replies to messages you send us.
          We send promotional texts only if you have separately agreed to
          receive them. Message frequency varies. <strong>Message and data
          rates may apply.</strong> To opt out of SMS communications, reply
          <strong> STOP</strong> to any message you receive. For assistance,
          reply <strong>HELP</strong> or contact{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Full program
          details are on our SMS Program Terms page.
        </p>
        <p>
          <strong>18.2 Messaging Consent:</strong> You must explicitly consent
          before we text you. We collect consent verbally on a recorded phone
          call: after you book an appointment with us, our team asks whether
          we may text you and texts you only if you say yes. If you text one
          of our business numbers first, we reply to your messages. The exact
          consent script is published on our SMS Program Terms page. Consent
          to receive text messages is not a condition of any purchase.
        </p>
        <p>
          <strong>18.3 Message Types and Frequency:</strong> Messages may include
          alerts, reminders, promotional offers, updates, and other relevant
          communications. Message frequency varies based on your interactions
          with us and your preferences.
        </p>
        <p>
          <strong>18.4 Message Delivery:</strong> BookMoreLeads does not
          guarantee that messages will be delivered without delays or failures.
          Such issues can occur due to factors outside our control, such as
          network problems or device compatibility. Carriers are not liable
          for delayed or undelivered messages.
        </p>
        <p>
          <strong>18.5 Compliance:</strong> You acknowledge that the messaging
          service must be used in compliance with all relevant laws, including
          those relating to privacy, telecommunications, and commercial
          communications.
        </p>
      </div>
    ),
  },
  {
    id: "disclaimers",
    title: "19. Disclaimers",
    content: (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm uppercase leading-7 tracking-wide text-slate-700 space-y-3">
        <p>
          THE SERVICES ARE PROVIDED <strong>"AS IS"</strong> AND
          <strong> "AS AVAILABLE,"</strong> WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED. BOOKMORELEADS DISCLAIMS ALL WARRANTIES,
          INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, NON-INFRINGEMENT, ACCURACY, AND ANY WARRANTIES ARISING
          OUT OF COURSE OF DEALING OR USAGE OF TRADE.
        </p>
        <p>
          WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
          ERROR-FREE, SECURE, OR FREE OF VIRUSES OR HARMFUL COMPONENTS.
          WE DO NOT GUARANTEE ANY SPECIFIC RESULTS, INCLUDING NUMBER OF
          LEADS, SALES, REVENUE, OR SEARCH RANKINGS.
        </p>
      </div>
    ),
  },
  {
    id: "indemnification",
    title: "20. Indemnification",
    content: (
      <>
        <p>
          You agree to defend, indemnify, and hold harmless BookMoreLeads
          and its officers, directors, employees, contractors, and agents
          from and against any third-party claims, damages, liabilities,
          losses, fines, penalties, costs, and expenses (including reasonable
          attorneys' fees) arising out of or relating to:
        </p>
        <ol>
          <li>Your use of the Services.</li>
          <li>Your Client Content.</li>
          <li>Your communications sent through the Services (including TCPA, CAN-SPAM, and CIPA claims).</li>
          <li>Your processing of personal information uploaded to the Platform.</li>
          <li>Your violation of these Terms or any law.</li>
          <li>Your violation of any third party's rights.</li>
        </ol>
        <p>
          We will promptly notify you of any claim subject to indemnification,
          and you will have control over the defense and settlement, provided
          that no settlement may be entered without our consent (not
          unreasonably withheld) if it requires us to admit fault or pay
          any amount.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "21. Limitation of Liability",
    content: (
      <>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm uppercase leading-7 tracking-wide text-slate-700 space-y-3">
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          <p>
            <strong>1. NO INDIRECT DAMAGES.</strong> BOOKMORELEADS WILL NOT
            BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE,
            LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            <strong>2. CAP ON DIRECT DAMAGES.</strong> OUR TOTAL CUMULATIVE
            LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE GREATER OF
            (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE EVENT
            GIVING RISE TO THE CLAIM, OR (B) $100.
          </p>
          <p>
            <strong>3. BASIS OF THE BARGAIN.</strong> THESE LIMITATIONS APPLY
            REGARDLESS OF THE BASIS OF THE CLAIM (CONTRACT, TORT, STATUTE,
            OR OTHERWISE) AND ARE A FUNDAMENTAL PART OF THE BARGAIN BETWEEN US.
          </p>
        </div>
        <p className="text-sm text-slate-500">
          Some jurisdictions do not allow the exclusion or limitation of
          certain damages. In those jurisdictions, the above limitations
          apply to the maximum extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "disputes",
    title: "22. Dispute Resolution; Binding Arbitration; Class Action Waiver",
    content: (
      <div className="space-y-4">
        <p className="font-bold text-amber-700">
          PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.
        </p>
        <p>
          <strong>22.1 Informal Resolution:</strong> Before initiating any
          formal dispute, you and BookMoreLeads agree to first attempt to
          resolve the dispute informally by emailing{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with a written
          description of the dispute. If we cannot resolve it within
          <strong> 30 days</strong>, either party may proceed under this Section.
        </p>
        <p>
          <strong>22.2 Binding Arbitration:</strong> You and BookMoreLeads
          agree that any dispute arising out of or relating to these Terms
          or the Services will be resolved exclusively by binding individual
          arbitration administered by the American Arbitration Association
          (AAA) under its Commercial Arbitration Rules. The arbitration will
          take place in Wilmington, Delaware (or remotely, at the parties'
          agreement). Judgment on the award may be entered in any court
          of competent jurisdiction.
        </p>
        <p>
          <strong>22.3 Class Action Waiver:</strong> YOU AND BOOKMORELEADS
          AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY
          IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER
          IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE ACTION.
          The arbitrator may not consolidate more than one party's claims
          and may not preside over any form of representative or class
          proceeding.
        </p>
        <p>
          <strong>22.4 Carve-Outs:</strong> Either party may bring (a) an
          individual action in small claims court, or (b) a court action
          seeking injunctive or equitable relief for infringement or
          misappropriation of intellectual property.
        </p>
        <p>
          <strong>22.5 30-Day Right to Opt Out:</strong> You may opt out of
          this arbitration agreement by emailing{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> within
          <strong> 30 days</strong> of first accepting these Terms with the
          subject line "Arbitration Opt-Out." Your email must include your
          name, business name, and a clear statement that you want to opt
          out. Opting out will not affect any other provision of these Terms.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    title: "23. Governing Law and Venue",
    content: (
      <p>
        These Terms are governed by the laws of the State of Delaware,
        without regard to its conflict-of-law principles. Subject to
        Section 22, any action that is not subject to arbitration must
        be brought exclusively in the state or federal courts located
        in New Castle County, Delaware, and the parties consent to
        personal jurisdiction and venue there.
      </p>
    ),
  },
  {
    id: "force-majeure",
    title: "24. Force Majeure",
    content: (
      <p>
        Neither party will be liable for any failure or delay in performance
        caused by events beyond its reasonable control, including acts of God,
        natural disasters, war, terrorism, pandemics, government actions,
        internet or telecommunications failures, third-party platform outages,
        or labor disputes.
      </p>
    ),
  },
  {
    id: "assignment",
    title: "25. Assignment",
    content: (
      <p>
        You may not assign these Terms without our prior written consent.
        We may assign these Terms in connection with a merger, acquisition,
        financing, or sale of all or substantially all of our assets
        without your consent.
      </p>
    ),
  },
  {
    id: "notices",
    title: "26. Notices",
    content: (
      <p>
        We may provide notices to you by email to the address on your
        Account, by posting in the Platform, or on our website. You may
        provide notices to us at{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "27. Changes to These Terms",
    content: (
      <p>
        We may modify these Terms from time to time. If we make material
        changes, we will notify you by email or by posting a notice on
        the Sites at least <strong>30 days</strong> before the changes
        take effect. Your continued use of the Services after the
        effective date constitutes your acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "miscellaneous",
    title: "28. Miscellaneous",
    content: (
      <ul>
        <li><strong>Entire Agreement.</strong> These Terms (together with the Privacy Policy and any DPA or order form) are the entire agreement between you and BookMoreLeads and supersede any prior agreements on the same subject.</li>
        <li><strong>Severability.</strong> If any provision is found unenforceable, the remaining provisions will remain in effect.</li>
        <li><strong>Waiver.</strong> Failure to enforce any right or provision is not a waiver of that right or provision.</li>
        <li><strong>No third-party beneficiaries.</strong> These Terms do not create any third-party beneficiary rights.</li>
        <li><strong>Independent contractors.</strong> The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship.</li>
        <li><strong>Survival.</strong> Sections that by their nature should survive termination (including IP, indemnification, limitation of liability, dispute resolution, and governing law) will survive.</li>
        <li><strong>Headings.</strong> Section headings are for convenience only and do not affect interpretation.</li>
      </ul>
    ),
  },
  {
    id: "consent",
    title: "29. Consent and Agreement",
    content: (
      <>
        <p>
          By purchasing any Services from BookMoreLeads or checking the
          agreement box at checkout, you confirm that:
        </p>
        <ol>
          <li>You have read, understood, and agree to these Terms of Service.</li>
          <li>You accept our <strong>No Refund</strong> policy.</li>
          <li>You waive the right to initiate chargebacks for Services rendered.</li>
          <li>You agree to the <strong>binding arbitration agreement</strong> and <strong>class action waiver</strong> in Section 22 (subject to your right to opt out within 30 days).</li>
        </ol>
      </>
    ),
  },
  {
    id: "contact",
    title: "30. Contact",
    content: (
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
        <p className="text-lg font-bold text-[#0F1D30]">
          BookMoreLeads Agency
        </p>
        <p className="mt-2 text-sm text-slate-600">For legal and general inquiries:</p>
        <a href={`mailto:${contactEmail}`} className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900">
          <Mail size={18} />
          {contactEmail}
        </a>
        <p className="mt-3 text-sm text-slate-600">
          Phone: (808) 645-4509
        </p>
      </div>
    ),
  },
];

export default function TermsOfService() {
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
              <Scale size={34} className="text-blue-400" />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              BookMoreLeads · Legal
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Please review the terms and conditions that govern your use
              of BookMoreLeads services and platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Effective: May 7, 2026
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Last Updated: October 19, 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <Scale className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Clear service agreements
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Transparent policies
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <LockKeyhole className="text-blue-600" size={21} />
            <span className="text-sm font-semibold text-slate-700">
              Account protection
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

        {/* Terms Sections */}
        <article className="min-w-0">

          {/* Introduction Notice */}
          <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex gap-3">
              <ShieldCheck
                size={24}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <h2 className="font-bold text-slate-900">
                  Important information about your agreement.
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  These Terms govern your access to and use of BookMoreLeads.
                  They include important provisions regarding subscriptions,
                  payments, cancellations, limitations of liability, and
                  dispute resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Arbitration Notice */}
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-3">
              <Scale size={24} className="mt-0.5 shrink-0 text-amber-600" />
              <div>
                <h2 className="font-bold text-amber-900">
                  Important: Arbitration and Class Action Waiver
                </h2>
                <p className="mt-2 text-sm leading-7 text-amber-800">
                  These Terms include a binding arbitration agreement and
                  class action waiver in Section 22. Please read that section
                  carefully because it affects your legal rights.
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

                <div className="terms-content space-y-4 text-[15px] leading-8 text-slate-600">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 rounded-2xl bg-[#0F1D30] p-8 text-center text-white sm:p-10">
            <Scale
              size={34}
              className="mx-auto mb-4 text-blue-400"
            />

            <h2 className="text-2xl font-bold">
              Have questions about our Terms?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-300">
              If you have questions about these Terms of Service,
              subscriptions, or our services, please get in touch
              with our team.
            </p>

            <a
              href={`mailto:${contactEmail}`}
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

            <Link href="/privacy" className="transition hover:text-blue-600">
              Privacy Policy
            </Link>

            <a
              href={`mailto:${contactEmail}`}
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
        .terms-content p {
          margin-bottom: 14px;
        }

        .terms-content ul {
          list-style: disc;
          padding-left: 24px;
          margin: 12px 0 20px;
        }

        .terms-content ol {
          list-style: decimal;
          padding-left: 24px;
          margin: 12px 0 20px;
        }

        .terms-content li {
          padding-left: 5px;
          margin-bottom: 8px;
        }

        .terms-content strong {
          color: #1e293b;
          font-weight: 700;
        }

        .terms-content h4 {
          margin-top: 20px;
          margin-bottom: 10px;
          color: #0f1d30;
          font-size: 16px;
          font-weight: 700;
        }

        .terms-content a {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 600;
        }

        .terms-content a:hover {
          color: #1d4ed8;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 32px;
        }
      `}</style>
    </main>
  );
}
