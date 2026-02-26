import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import LegalFooter from "@/app/components/legal-footer";

export const metadata: Metadata = {
  title: "Privacy Policy | OLIN Hospitality",
  description:
    "Learn how OLIN Hospitality Services collects, uses, and protects your business data.",
};

const EFFECTIVE_DATE = "February 26, 2026";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          OLIN Hospitality Services (&ldquo;OLIN&rdquo;, &ldquo;we&rdquo;,
          &ldquo;our&rdquo;, &ldquo;us&rdquo;) provides operational and service
          support solutions for hospitality businesses, including communication,
          pickup scheduling, order tracking, and service coordination via
          WhatsApp and web platforms.
        </p>
        <p className="mt-3">
          This Privacy Policy explains what information we collect, how we use
          it, and how we protect it.
        </p>
        <p className="mt-3">
          OLIN Hospitality Services acts as the data controller for information
          collected through its services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          We collect only the minimum data required to operate our services.
        </p>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold text-[#1a2b3c] mb-2">
              A. Business Information
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Hotel name</li>
              <li>Business contact name</li>
              <li>Business email address</li>
              <li>Business phone number</li>
              <li>Property address (if provided)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2b3c] mb-2">
              B. Communication Data
            </h3>
            <p className="text-slate-600 mb-2">
              When you interact with us via WhatsApp or our web platform:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Phone number</li>
              <li>Message content</li>
              <li>Timestamps</li>
              <li>Order or pickup details</li>
              <li>Status updates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2b3c] mb-2">
              C. Operational Data
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Service requests</li>
              <li>Pickup schedules</li>
              <li>Order tracking information</li>
              <li>Complaint logs</li>
              <li>Callback requests</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-sm font-medium text-slate-700">
            We do <strong>not</strong> collect sensitive personal data such as:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Payment card details</li>
            <li>Personal identification numbers</li>
            <li>Government IDs</li>
            <li>Health records</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Information",
    content: (
      <>
        <p>We use collected information strictly for:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Scheduling laundry pickups</li>
          <li>Managing service requests</li>
          <li>Tracking order status</li>
          <li>Sending operational notifications</li>
          <li>Customer support communication</li>
          <li>Improving service reliability</li>
          <li>Internal analytics and performance monitoring</li>
        </ul>
        <p className="mt-4 font-medium text-[#1a2b3c]">
          We do not sell, rent, or trade your data.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp-communication",
    title: "4. WhatsApp Communication",
    content: (
      <>
        <p>OLIN uses the WhatsApp Business Platform (Cloud API) to:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Send service updates</li>
          <li>Receive operational instructions</li>
          <li>Confirm pickups and deliveries</li>
          <li>Provide support</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Messages are processed securely through Meta&apos;s infrastructure. We
          do not access private WhatsApp chats outside conversations initiated
          with OLIN.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: (
      <>
        <p>
          We retain operational and communication data only as long as necessary
          to:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Fulfill service obligations</li>
          <li>Maintain business records</li>
          <li>Resolve disputes</li>
          <li>Comply with legal requirements</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Inactive business accounts may have data archived or deleted after a
          reasonable period.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: (
      <>
        <p>We implement:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Secure server infrastructure</li>
          <li>Encrypted communication channels (HTTPS)</li>
          <li>Access controls</li>
          <li>Role-based permissions</li>
          <li>Authentication mechanisms</li>
        </ul>
        <p className="mt-4 text-slate-500 text-sm italic">
          However, no digital platform can guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "7. Data Sharing",
    content: (
      <>
        <p>We may share data only with:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Authorized service providers</li>
          <li>
            Logistics or operational partners (if required for service delivery)
          </li>
          <li>Legal authorities if required by law</li>
        </ul>
        <p className="mt-4 font-medium text-[#1a2b3c]">
          We do not share data for advertising or marketing resale purposes.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: (
      <>
        <p>Hospitality partners may:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600">
          <li>Request access to stored data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of account data</li>
          <li>Withdraw consent for communication</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Requests can be made via{" "}
          <a
            href="mailto:support@olinhospitality.com"
            className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
          >
            email
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-deletion",
    title: "9. Data Deletion Requests",
    content: (
      <>
        <p>To request deletion of your data, please contact:</p>
        <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1 text-sm">
          <p>
            <span className="font-medium text-slate-700">Email:</span>{" "}
            <a
              href="mailto:support@olinhospitality.com"
              className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
            >
              support@olinhospitality.com
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-700">Subject:</span> Data
            Deletion Request
          </p>
        </div>
        <p className="mt-4 text-slate-600">
          We will process valid requests within a reasonable timeframe. You can
          also visit our{" "}
          <Link
            href="/data-deletion"
            className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
          >
            Data Deletion page
          </Link>{" "}
          for detailed instructions.
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Updates will be posted
        on this page with a revised effective date. We encourage you to review
        this policy from time to time.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Information",
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

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            OLIN Hospitality Services — Last Updated:{" "}
            <strong className="text-white">{EFFECTIVE_DATE}</strong>
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

      {/* Data Deletion Callout — Meta requires this to be visible inside the Privacy Policy */}
      <div className="border-t border-slate-100 bg-amber-50">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 shrink-0">
            Data Deletion
          </span>
          <p className="text-sm text-slate-700 leading-relaxed">
            For data deletion requests, please visit:{" "}
            <a
              href="https://olinhospitality.com/data-deletion"
              className="font-medium text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors break-all"
            >
              https://olinhospitality.com/data-deletion
            </a>
          </p>
        </div>
      </div>

      <LegalFooter current="/privacy" />
    </div>
  );
}
