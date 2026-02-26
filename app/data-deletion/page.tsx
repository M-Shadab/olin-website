import type { Metadata } from "next";
import Link from "next/link";
import { Mail, CheckCircle, Shield, Clock } from "lucide-react";
import Header from "@/app/components/Header";
import LegalFooter from "@/app/components/legal-footer";

export const metadata: Metadata = {
  title: "Data Deletion | OLIN Hospitality",
  description:
    "Request the deletion of your business data from OLIN Hospitality Services. Simple, straightforward, and honoured promptly.",
};

const steps = [
  {
    icon: Mail,
    title: "Send a Deletion Request Email",
    description: (
      <>
        Send an email to{" "}
        <a
          href="mailto:support@olinhospitality.com?subject=Data%20Deletion%20Request"
          className="font-medium text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
        >
          support@olinhospitality.com
        </a>{" "}
        with the subject line{" "}
        <span className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded">
          Data Deletion Request
        </span>
        .
      </>
    ),
  },
  {
    icon: CheckCircle,
    title: "Include Verification Details",
    description:
      "Include your business name, registered phone number, and contact email so we can verify your identity and locate your data accurately.",
  },
  {
    icon: Shield,
    title: "We Verify Your Request",
    description:
      "Our team will review and authenticate your request to protect against unauthorized deletions. We may reach out if we need additional confirmation.",
  },
  {
    icon: Clock,
    title: "Data is Deleted",
    description:
      "Upon verification, we will delete your business data from our active systems within a reasonable timeframe and confirm completion.",
  },
];

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#1a2b3c] text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4 font-medium">
            Your Rights
          </p>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-4">
            Data Deletion
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
            We respect your right to control your data. If you would like your
            business information removed from OLIN Hospitality systems, follow
            the process below.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* What gets deleted */}
        <section className="mb-14">
          <h2 className="font-playfair text-2xl font-bold text-[#1a2b3c] mb-2">
            What We Can Delete
          </h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mb-6" />
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            Upon a verified deletion request, we will remove the following data
            associated with your business account:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Business contact information",
              "Communication history (WhatsApp & web)",
              "Service request logs",
              "Pickup & order records",
              "Complaint and callback history",
              "Account profile and preferences",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Data required for legal compliance or active dispute resolution may
            be retained as permitted by applicable law.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-14">
          <h2 className="font-playfair text-2xl font-bold text-[#1a2b3c] mb-2">
            How to Request Deletion
          </h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mb-8" />
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1a2b3c] flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest">
                        Step {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#1a2b3c] text-base mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Email Block */}
        <section className="mb-14">
          <div className="bg-[#1a2b3c] rounded-2xl p-8 md:p-10 text-white">
            <h2 className="font-playfair text-2xl font-bold mb-2">
              Ready to Submit a Request?
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Compose an email with your business name, registered phone number,
              and contact email. We will handle the rest.
            </p>
            <a
              href="mailto:support@olinhospitality.com?subject=Data%20Deletion%20Request"
              className="inline-flex items-center gap-2.5 bg-[#d4af37] text-[#1a2b3c] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#c9a52e] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us: support@olinhospitality.com
            </a>
          </div>
        </section>

        {/* Note on timing */}
        <section>
          <h2 className="font-playfair text-xl font-bold text-[#1a2b3c] mb-4">
            Processing Timeframe
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            We aim to process all verified data deletion requests promptly. If
            the deletion timeline is affected by legal hold obligations, we will
            notify you of the expected completion date.
          </p>
          <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
            For more information about our data practices, please review our{" "}
            <Link
              href="/privacy"
              className="text-[#1a2b3c] underline underline-offset-2 hover:text-[#d4af37] transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </main>

      <LegalFooter current="/data-deletion" />
    </div>
  );
}
