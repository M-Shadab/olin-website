"use client";

import ParentLayout from "../components/parent-layout";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Workflow,
  ShieldCheck,
  Eye,
  Layers,
  Rocket,
} from "lucide-react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <ParentLayout>
      <div className="bg-white">
        {/* ─── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-navy text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="reveal-up inline-block text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 opacity-0">
              Vision & Leadership
            </span>
            <h1 className="reveal-up reveal-delay-100 text-5xl md:text-6xl lg:text-7xl font-playfair mb-8 leading-tight opacity-0">
              Vision & Leadership
            </h1>
            <p className="reveal-up reveal-delay-200 text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto opacity-0">
              Building reliable hospitality operations—so owners and operators
              can focus on growth, not daily firefighting.
            </p>
          </div>
        </section>

        {/* ─── Founder Section ───────────────────────────────────────────── */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            {/* Text Content */}
            <div className="md:w-1/2">
              <span className="reveal-up text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block opacity-0">
                The Founder
              </span>
              <h2 className="reveal-up reveal-delay-100 text-3xl md:text-4xl font-playfair text-navy mb-8 opacity-0">
                Commitment to <br />
                Operational Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p className="reveal-up reveal-delay-200 opacity-0">
                  OLIN was founded to solve a silent but costly problem across
                  hospitality operations: daily services fail in small ways that
                  compound—missed pickups, inconsistent linen quality,
                  stock-outs of essentials, and no visibility when things go
                  wrong.
                </p>
                <p className="reveal-up reveal-delay-300 opacity-0">
                  Our leadership brings a systems-first approach to hospitality
                  operations. OLIN is built around standard operating
                  procedures, service-level accountability, and real-time
                  coordination—so properties don’t depend on fragmented vendors
                  or manual follow-ups.
                </p>
                <p className="reveal-up reveal-delay-400 opacity-0">
                  We operate as a long-term operations partner, not a
                  transactional supplier. Every service touchpoint—linen
                  lifecycle, inventory & consumables, room-readiness
                  workflows—is tracked against defined standards. When issues
                  arise, they are visible and actionable, not hidden.
                </p>
                <div className="reveal-up reveal-delay-500 pt-4 opacity-0 border-l-2 border-gold/30 pl-6">
                  <p className="text-navy italic font-playfair text-xl">
                    "Our mission is to give hospitality operators predictable
                    operations, controlled costs, and operational peace of
                    mind—so scale does not come at the cost of daily chaos."
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div className="reveal-up reveal-delay-300 md:w-1/2 w-full opacity-0">
              <div className="relative w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden shadow-2xl group">
                {/* Decorative border frame */}
                <div className="absolute inset-4 border border-white/20 z-10 transition-all duration-700 group-hover:inset-6"></div>
                <Image
                  src="/imgs/founder-best.jpg"
                  alt="Founder of OLIN"
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Risk Reduction Section ──────────────────────────────────── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="reveal-up text-3xl md:text-4xl font-playfair text-navy mb-4 opacity-0">
                How OLIN Reduces Operational Risk
              </h2>
              <div className="reveal-up reveal-delay-100 w-24 h-px bg-gold mx-auto opacity-0"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Standardized Workflows",
                  desc: "Every service touchpoint follows defined SOPs, eliminating dependency on ad-hoc vendor behavior.",
                  icon: Workflow,
                },
                {
                  title: "Service-Level Accountability",
                  desc: "Pickups, turnaround times, and replenishment are tracked against strict SLAs.",
                  icon: ShieldCheck,
                },
                {
                  title: "Operational Visibility",
                  desc: "Real-time status on daily services, inventory levels, and exceptions—no more black boxes.",
                  icon: Eye,
                },
                {
                  title: "Consolidated Partner",
                  desc: "One ops partner for linens, consumables, and readiness—reducing fragmented vendor risk.",
                  icon: Layers,
                },
                {
                  title: "Pilot-First Onboarding",
                  desc: "We validate reliability with a limited-scope pilot before you scale across properties.",
                  icon: Rocket,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`reveal-up reveal-delay-${(idx + 1) * 100} bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-2 border-transparent hover:border-gold opacity-0 group`}
                >
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-navy stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-playfair text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Social Proof Section ────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="reveal-up text-3xl md:text-5xl font-playfair mb-8 opacity-0 leading-tight">
              Hospitality operations succeed on consistency, not one-time
              performance.
            </h2>
            <p className="reveal-up reveal-delay-100 text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 opacity-0">
              OLIN is designed for repeatability—processes that work reliably
              during peak occupancy and low seasons alike. Our partners value
              reduced service escalations, predictable turnaround times, and
              clear ownership when issues arise.
            </p>
            <div className="reveal-up reveal-delay-200 opacity-0 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              {/* Stats or trust signals could go here, for now just text layout */}
              <div className="text-center">
                <div className="text-3xl font-playfair text-gold mb-1">
                  100%
                </div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  SLA Tracking
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair text-gold mb-1">
                  24/7
                </div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  Ops Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair text-gold mb-1">
                  Zero
                </div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  Hidden Costs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair text-gold mb-1">1</div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  Partner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal-up text-3xl md:text-4xl font-playfair text-navy mb-6 opacity-0">
              Start with a Low-Risk Pilot
            </h2>
            <p className="reveal-up reveal-delay-100 text-gray-600 text-lg font-light mb-10 opacity-0">
              We recommend starting with a limited-scope pilot. Experience
              OLIN’s operational standards in your daily workflows before
              scaling across properties.
            </p>
            <div className="reveal-up reveal-delay-200 opacity-0">
              <a
                href="https://app.olinhospitality.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
              >
                Start a 7-Day Pilot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </ParentLayout>
  );
}
