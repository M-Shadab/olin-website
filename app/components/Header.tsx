"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPartnerForm = () => {
     const partnerForm = document.getElementById('partner-form');
     if (partnerForm) {
        partnerForm.scrollIntoView({ behavior: 'smooth' });
     } else {
        // If not on homepage, navigate to homepage and then scroll (optional logic for future)
        // For now, if we are on another page, we might want to link to /#partner-form
        window.location.href = "/#partner-form";
     }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="flex items-baseline gap-1">
        <Link href="/" className="text-2xl font-playfair font-bold text-navy tracking-tight">
            OPAL.
        </Link>
        <span className="hidden md:inline-block text-xs font-mono text-gray-400 uppercase tracking-widest pl-2">
          Hospitality
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-navy/60">
          <Link href="/" className="hover:text-navy transition-colors">
            Home
          </Link>
          <a href="#" className="hover:text-navy transition-colors">
            Expertise
          </a>
          {/* <a href="#" className="hover:text-navy transition-colors">
            The Standard
          </a> */}
          <Link href="/vision" className="hover:text-navy transition-colors">
            Vision
          </Link>
          {/* <a href="#" className="hover:text-navy transition-colors">
            Stories
          </a> */}
        </nav>

        <div className="flex items-center gap-6 pl-6 border-l border-black/5">
          <a
            href="#"
            className="hidden md:block text-xs font-medium text-navy/40 hover:text-navy transition-colors"
          >
            Member Login
          </a>
          <button
            onClick={scrollToPartnerForm}
            className={`px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-white transition-all duration-500 transform ${
              showStickyButton
                ? "translate-y-0 opacity-100"
                : "translate-y-0 opacity-100" // Always show for now to maintain premium feel, or keep dynamic if preferred. Let's keep it visible for "Inquire"
            } bg-navy hover:bg-gold transition-colors shadow-sm rounded-sm cursor-pointer`}
          >
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
}
