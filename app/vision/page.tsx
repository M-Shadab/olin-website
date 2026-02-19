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

    const elements = document.querySelectorAll(
      ".reveal-up, .draw-vertical-line",
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <ParentLayout>
      <div className="bg-white bg-noise">
        {/* ─── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 bg-navy text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <span className="reveal-up inline-block text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-0">
              Vision & Leadership
            </span>
            <h1 className="reveal-up reveal-delay-100 text-5xl md:text-7xl lg:text-8xl font-playfair mb-10 leading-[1.1] opacity-0">
              Vision & Leadership
            </h1>
            <p className="reveal-up reveal-delay-200 text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto opacity-0">
              Building reliable hospitality operations—so owners and operators
              can focus on growth, not daily firefighting.
            </p>
          </div>
        </section>

        {/* ─── Founder Section (Sticky Parallax) ─────────────────────────── */}
        <section className="relative py-32 px-6 max-w-7xl mx-auto">
          {/* Central Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -ml-[0.5px] hidden md:block">
            <div className="draw-vertical-line h-0 w-full bg-gold/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start relative">
            {/* Sticky Image Column */}
            <div className="md:sticky md:top-32 md:h-[calc(100vh-16rem)] flex items-center justify-center order-2 md:order-1">
              <div className="reveal-up w-full relative aspect-[3/4] max-h-[80vh] bg-gray-100 overflow-hidden shadow-2xl group opacity-0">
                <div className="absolute inset-5 border border-white/20 z-10 transition-all duration-700 group-hover:inset-8"></div>
                <Image
                  src="/imgs/founder-best.jpg"
                  alt="Founder of OLIN"
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Scrolling Text Column */}
            <div className="order-1 md:order-2 md:pt-16 pb-16 md:pb-32">
              <span className="reveal-up text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 block opacity-0">
                The Founder
              </span>
              <h2 className="reveal-up reveal-delay-100 text-4xl md:text-5xl lg:text-6xl font-playfair text-navy mb-12 opacity-0 leading-tight">
                Commitment to <br />
                Operational Excellence
              </h2>
              <div className="space-y-12 text-gray-600 leading-loose text-lg font-light md:pl-8 border-l border-gray-100 md:border-none">
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
                <div className="reveal-up reveal-delay-500 pt-8 opacity-0">
                  <blockquote className="text-navy font-playfair text-2xl md:text-3xl leading-snug border-l-2 border-gold pl-6 py-2">
                    "Our mission is to give hospitality operators predictable
                    operations, controlled costs, and operational peace of
                    mind."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Risk Reduction Section ──────────────────────────────────── */}
        <section className="py-32 bg-gray-50 border-t border-gray-100 relative bg-noise">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="reveal-up text-3xl md:text-4xl lg:text-5xl font-playfair text-navy mb-6 opacity-0">
                How OLIN Reduces Operational Risk
              </h2>
              <div className="reveal-up reveal-delay-100 w-24 h-px bg-gold mx-auto opacity-0"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                  className={`reveal-up reveal-delay-${(idx + 1) * 100} group relative pl-4 opacity-0`}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-hover:bg-gold transition-colors duration-500"></div>

                  <div className="mb-6 bg-white w-14 h-14 border border-gray-100 flex items-center justify-center rounded-full shadow-sm group-hover:shadow-md group-hover:border-gold/30 transition-all duration-300">
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
        <section className="py-32 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="reveal-up text-3xl md:text-5xl lg:text-6xl font-playfair mb-8 opacity-0 leading-tight">
              Hospitality operations succeed on consistency, not one-time
              performance.
            </h2>
            <p className="reveal-up reveal-delay-100 text-lg md:text-xl text-white/70 font-light leading-relaxed mb-16 opacity-0 max-w-3xl mx-auto">
              OLIN is designed for repeatability—processes that work reliably
              during peak occupancy and low seasons alike. Our partners value
              reduced service escalations, predictable turnaround times, and
              clear ownership when issues arise.
            </p>
            <div className="reveal-up reveal-delay-200 opacity-0 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
              {/* High-end minimalist stats */}
              <div className="text-center group">
                <div className="text-4xl font-playfair text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
                  100%
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                  SLA Tracking
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-playfair text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
                  24/7
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                  Ops Support
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-playfair text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
                  Zero
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                  Hidden Costs
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-playfair text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
                  1
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                  Partner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white bg-noise">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-up inline-block border border-navy/10 px-6 py-2 rounded-full mb-8 opacity-0">
              <span className="text-xs font-bold tracking-[0.2em] text-navy uppercase">
                Low Risk • High Impact
              </span>
            </div>

            <h2 className="reveal-up reveal-delay-100 text-4xl md:text-6xl font-playfair text-navy mb-8 opacity-0">
              Start with a Pilot
            </h2>
            <p className="reveal-up reveal-delay-200 text-gray-600 text-xl font-light mb-12 opacity-0 max-w-2xl mx-auto">
              We recommend starting with a limited-scope pilot. Experience
              OLIN’s operational standards in your daily workflows before
              scaling across properties.
            </p>
            <div className="reveal-up reveal-delay-300 opacity-0">
              <a
                href="https://app.olinhospitality.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-navy text-white px-10 py-5 text-sm font-bold tracking-[0.25em] uppercase overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
                  Start 1 Month Pilot
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors duration-300" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </ParentLayout>
  );
}
