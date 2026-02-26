import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import LegalFooter from "@/app/components/legal-footer";

export const metadata: Metadata = {
  title: "Terms of Service | OLIN Hospitality",
  description:
    "Read the Terms of Service governing the use of OLIN Hospitality Services, including our website, WhatsApp channels, and operational systems.",
};

const LAST_UPDATED = "February 26, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
          services provided by OLIN Hospitality Services (&ldquo;OLIN&rdquo;,
          &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
        </p>
        <p className="mt-3">
          By accessing or using our services, including our website, WhatsApp
          communication channels, and operational systems, you agree to be bound
          by these Terms.
        </p>
        <p className="mt-3 font-medium text-[#1a2b3c]">
          If you do not agree, you must not use our services.
        </p>
      </>
    ),
  },
  {
    id: "description",
    title: "2. Description of Services",
    content: (
      <>
        <p>
          OLIN provides operational support services for hospitality businesses,
          including but not limited to:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Laundry pickup scheduling</li>
          <li>Order tracking and status updates</li>
          <li>Complaint and support handling</li>
          <li>Callback coordination</li>
          <li>Communication via WhatsApp Business Platform</li>
          <li>Related hospitality operational services</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Services may evolve over time. OLIN reserves the right to modify,
          suspend, or discontinue any part of its services at its discretion.
        </p>
      </>
    ),
  },
  {
    id: "business-use",
    title: "3. Business Use Only",
    content: (
      <>
        <p>OLIN services are intended for:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Hotels</li>
          <li>Hospitality operators</li>
          <li>Business entities</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Our platform is not intended for personal consumer use. You agree that
          all information provided to OLIN is accurate and submitted on behalf
          of a legitimate business.
        </p>
      </>
    ),
  },
  {
    id: "account-responsibility",
    title: "4. Account Responsibility",
    content: (
      <>
        <p>You are responsible for:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Maintaining the accuracy of your business information</li>
          <li>Controlling access to your WhatsApp or communication channels</li>
          <li>Ensuring authorized personnel interact with OLIN</li>
        </ul>
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-sm font-medium text-slate-700 mb-2">
            OLIN is not responsible for unauthorized access resulting from:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Shared devices</li>
            <li>Compromised credentials</li>
            <li>Internal misuse within your organization</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "whatsapp",
    title: "5. Communication via WhatsApp",
    content: (
      <>
        <p>OLIN uses the WhatsApp Business Platform (Cloud API) to:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Send operational updates</li>
          <li>Receive service instructions</li>
          <li>Confirm pickups and deliveries</li>
        </ul>
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-sm font-medium text-slate-700 mb-2">
            You acknowledge:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>WhatsApp is operated by Meta Platforms, Inc.</li>
            <li>Message delivery depends on third-party infrastructure</li>
            <li>
              OLIN is not responsible for delays or outages caused by WhatsApp
              or network providers
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "availability",
    title: "6. Service Availability",
    content: (
      <>
        <p>While we strive for reliability, OLIN does not guarantee:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Uninterrupted service</li>
          <li>Error-free communication</li>
          <li>Instant message delivery</li>
          <li>Continuous platform availability</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Temporary interruptions may occur due to maintenance, infrastructure
          issues, third-party service disruptions, or force majeure events.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "7. Fees and Payments",
    content: (
      <>
        <p>If services are subject to payment:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Fees will be communicated in advance</li>
          <li>Invoices must be settled within agreed timelines</li>
          <li>OLIN reserves the right to suspend services for non-payment</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Future pricing changes may be introduced with prior notice.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, OLIN shall not be liable for:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Indirect or consequential damages</li>
          <li>Loss of profits</li>
          <li>Business interruption</li>
          <li>Data loss caused by third-party platforms</li>
          <li>
            Operational losses due to delayed pickups caused by factors outside
            our control
          </li>
        </ul>
        <p className="mt-4 text-slate-600">
          OLIN&apos;s total liability, if any, shall not exceed the amount paid
          for services in the preceding billing cycle.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "9. Data and Privacy",
    content: (
      <>
        <p>
          Use of our services is also governed by our{" "}
          <Link
            href="/privacy"
            className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-3 text-slate-600">
          We collect and process business data solely for operational purposes
          as described in that policy.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "10. Termination",
    content: (
      <>
        <p>OLIN may suspend or terminate services if:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Terms are violated</li>
          <li>Fraudulent or abusive behavior is detected</li>
          <li>Payment obligations are unmet</li>
          <li>Legal compliance requires termination</li>
        </ul>
        <p className="mt-4 text-slate-600">
          You may terminate use of services at any time by notifying us.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance with
          the laws of India, without regard to conflict of law principles.
        </p>
        <p className="mt-3 text-slate-600">
          Any disputes shall be subject to the jurisdiction of courts located in
          India.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: (
      <>
        <p>We may update these Terms periodically.</p>
        <p className="mt-3 text-slate-600">
          The revised version will be posted on this page with an updated
          &ldquo;Last Updated&rdquo; date. Continued use of services constitutes
          acceptance of revised Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Information",
    content: (
      <div className="space-y-2 text-slate-600">
        <p className="font-medium text-[#1a2b3c]">OLIN Hospitality Services</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@olinhospitality.com"
            className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
          >
            support@olinhospitality.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://olinhospitality.com"
            className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
          >
            https://olinhospitality.com
          </a>
        </p>
      </div>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#1a2b3c] text-white pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4 font-medium">
            Legal
          </p>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            OLIN Hospitality Services — Last Updated:{" "}
            <strong className="text-white">{LAST_UPDATED}</strong>
          </p>
        </div>
      </div>

      {/* Table of Contents + Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
              Contents
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-slate-500 hover:text-[#1a2b3c] transition-colors py-0.5"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-12 text-slate-700 text-[15px] leading-relaxed">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-playfair text-xl font-bold text-[#1a2b3c] mb-4 pb-2 border-b border-slate-100">
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </main>
      </div>

      <LegalFooter current="/terms-of-service" />
    </div>
  );
}
