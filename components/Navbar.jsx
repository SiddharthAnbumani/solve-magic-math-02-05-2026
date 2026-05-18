'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-700 border-b-2 border-black/10">
        <div className="h-20 sm:h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 w-full">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img src="/image.png" alt="" className="h-13 sm:h-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="h-full flex justify-center items-center">
            <div className="hidden md:flex items-center space-x-8 text-md uppercase font-monument-400 text-white">
              <Link href="/programs" className="hover:text-red-400 transition-all duration-300 hover:scale-105">Programs</Link>
              <Link href="/programs/tuition" className="hover:text-red-400 transition-all duration-300 hover:scale-105">Tuition</Link>
              <Link href="/pricing" className="hover:text-red-400 transition-all duration-300 hover:scale-105">Pricing</Link>
              <Link href="/gallery" className="hover:text-red-400 transition-all duration-300 hover:scale-105">Gallery</Link>
              <Link href="/about" className="hover:text-red-400 transition-all duration-300 hover:scale-105">About Us</Link>
              <Link href="/contact" className="hover:text-red-400 transition-all duration-300 hover:scale-105">Contact Us</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center bg-red-700  border-2 border-red-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/30"
          >
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-5 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU — sibling of the header so it owns its own stacking context */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-100 bg-indigo-700 flex flex-col items-center justify-between px-6 py-10 transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* TOP BAR */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-end">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <X className="w-7 h-7 text-white" />
            </button>
          </div>

          <Link href="/" onClick={closeMenu} className="mt-6">
            <img
              src="/image.png"
              alt="Logo"
              className="h-30 sm:h-16 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="flex flex-col items-center gap-8 text-center">
          <Link
            href="/programs"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            Programs
          </Link>

          <Link
            href="/programs/tuition"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            Tuition
          </Link>

          <Link
            href="/pricing"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            Pricing
          </Link>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="font-monument text-2xl text-white tracking-wide hover:text-white/70 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* OPTIONAL FOOTER */}
        <div className="text-red-400 text-lg font-montserrat-600">
          © {new Date().getFullYear()} Magic Maths
        </div>
      </div>
    </>
  );
}
