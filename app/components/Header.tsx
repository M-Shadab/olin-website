"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        window.location.href = "/#partner-form";
     }
     setIsMobileMenuOpen(false); // Close menu if open
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 ${isMobileMenuOpen ? 'bg-navy border-none' : 'bg-white/95 backdrop-blur-sm border-b border-black/5'}`}>
        <div className="flex items-baseline gap-1 relative z-50">
          <Link href="/" className={`text-2xl font-playfair font-bold tracking-tight transition-colors ${isMobileMenuOpen ? 'text-white' : 'text-navy'}`}>
              OPAL.
          </Link>
          <span className={`hidden md:inline-block text-xs font-mono uppercase tracking-widest pl-2 ${isMobileMenuOpen ? 'text-white/40' : 'text-gray-400'}`}>
            Hospitality
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
              Vision
            </Link>
          </nav>

          <div className="flex items-center gap-6 pl-6 border-l border-black/5">
            <a
              href="#"
              className="text-xs font-medium text-navy/40 hover:text-navy transition-colors"
            >
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

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden relative z-50 text-navy hover:text-gold transition-colors focus:outline-none"
        >
          <span className="sr-only">Toggle Menu</span>
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
           <nav className="flex flex-col items-center gap-8 text-white/80">
              <Link href="/" onClick={toggleMenu} className="text-2xl font-playfair hover:text-gold transition-colors">
                Home
              </Link>
              <a href="#" onClick={toggleMenu} className="text-2xl font-playfair hover:text-gold transition-colors">
                Expertise
              </a>
              <Link href="/vision" onClick={toggleMenu} className="text-2xl font-playfair hover:text-gold transition-colors">
                Vision
              </Link>
              <a href="#" onClick={toggleMenu} className="text-2xl font-playfair hover:text-gold transition-colors">
                Member Login
              </a>
              <button
                onClick={scrollToPartnerForm}
                className="mt-8 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-navy bg-white hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
              >
                Inquire
              </button>
           </nav>
        </div>
      </header>
    </>
  );
}
