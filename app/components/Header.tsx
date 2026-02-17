"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock } from "lucide-react";

export default function Header() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToPartnerForm = () => {
    const partnerForm = document.getElementById("partner-form");
    if (partnerForm) {
      partnerForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#partner-form";
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-5 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm border-b border-black/5"
        }`}
      >
        <div className="flex items-baseline gap-1 relative z-[60]">
          <Link
            href="/"
            className={`text-2xl font-playfair font-bold tracking-tight transition-colors duration-500 ${
              isMobileMenuOpen ? "text-white" : "text-navy"
            }`}
          >
            OLIN.
          </Link>
          <span
            className={`hidden md:inline-block text-xs font-mono uppercase tracking-widest pl-2 ${
              isMobileMenuOpen ? "text-white/40" : "text-gray-400"
            }`}
          >
            Hospitality Services
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-navy/60">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <a href="#" className="hover:text-navy transition-colors">
              Expertise
            </a>
            <Link href="/vision" className="hover:text-navy transition-colors">
              Founder
            </Link>
          </nav>

          <div className="flex items-center gap-6 pl-6 border-l border-black/5">
            <a
              href="https://app.olinhospitality.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-navy/60 hover:text-navy transition-colors group"
            >
              <Lock className="w-3 h-3 text-gold group-hover:text-navy transition-colors" />
              Member Login
            </a>
            <button
              onClick={scrollToPartnerForm}
              className={`px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-white transition-all duration-500 transform ${
                showStickyButton
                  ? "translate-y-0 opacity-100"
                  : "translate-y-0 opacity-100"
              } bg-navy hover:bg-gold transition-colors shadow-sm rounded-sm cursor-pointer`}
            >
              Inquire
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Lock + Burger) */}
        <div className="md:hidden flex items-center gap-4 relative z-[60]">
          <a
            href="https://app.olinhospitality.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-navy hover:text-gold transition-colors p-2 -mr-2 group"
            aria-label="Member Login"
          >
            <Lock className="w-4 h-4 text-navy/40 group-hover:text-gold transition-colors" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-navy group-hover:text-gold transition-colors pt-0.5">
              Login
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-out origin-right ${
                isMobileMenuOpen
                  ? "w-6 -rotate-45 translate-y-[2px] bg-white"
                  : "w-6 bg-navy"
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0 w-0 bg-white" : "w-4 bg-navy"
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-out origin-right ${
                isMobileMenuOpen
                  ? "w-6 rotate-45 -translate-y-[2px] bg-white"
                  : "w-6 bg-navy"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay - ISOLATED LAYER */}
        <div
          className={`fixed inset-0 z-50 bg-navy/95 backdrop-blur-md h-screen w-screen flex flex-col items-center justify-center transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Menu Items Container - Stable Flex Layout */}
          <nav className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-playfair text-white/90 hover:text-gold transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
            >
              Home
            </Link>

            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-playfair text-white/90 hover:text-gold transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
            >
              Expertise
            </a>

            <Link
              href="/vision"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-playfair text-white/90 hover:text-gold transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
            >
              Founder
            </Link>

            <a
              href="https://app.olinhospitality.com/auth/login"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 text-3xl font-playfair text-white/90 hover:text-gold transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
            >
              <Lock className="w-6 h-6 text-white/50" />
              Member Login
            </a>

            {/* Static CTA Button - No dynamic insertions */}
            <div
              className={`mt-4 w-full flex justify-center transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            >
              <button
                onClick={scrollToPartnerForm}
                className="w-full max-w-[200px] py-4 text-sm font-bold tracking-[0.2em] uppercase text-navy bg-white hover:bg-gold hover:text-white transition-all duration-300 rounded-sm shadow-xl"
              >
                Inquire
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
