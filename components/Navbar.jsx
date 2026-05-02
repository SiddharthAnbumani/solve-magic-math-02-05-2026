'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
      {/* Navbar */}
      <div className="h-25 bg-white border-b-2 border-black/10 flex items-center justify-between px-4 sm:px-6 md:px-10 w-full">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <img src="/logo.png" alt="" className="h-40 sm:h-50" />
        </Link>

        {/* Desktop Menu */}
        <div className="h-full flex justify-center items-center">
        <div className="hidden md:flex items-center space-x-8 text-lg uppercase font-monument-400 text-indigo-700 ">
          <Link href="/programs" className="hover:text-indigo-900">Programs</Link>
          <Link href="/services" className="hover:text-indigo-900">Tuition</Link>
          <Link href="/pricing" className="hover:text-indigo-900">Pricing</Link>
          <Link href="/gallery" className="hover:text-indigo-900">Gallery</Link>
          <Link href="/about" className="hover:text-indigo-900">About Us</Link>
          <Link href="/contact" className="hover:text-indigo-900">Contact Us</Link>
        </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          className="md:hidden flex items-center justify-center bg-indigo-800 text-red-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          {menuOpen ? (
            <X className="text-red-800  w-6 h-6" />
          ) : (
            <Menu className="text-red-600 w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-start uppercase text-3xl font-montserrat-medium text-black space-y-8 transition-transform duration-300 z-[60] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition"
        >
          <X className="w-7 h-7 text-black" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="normal-case tracking-widest text-4xl mt-24"
        >
          Solve
        </Link>

        {/* Links */}
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/services" onClick={closeMenu}>Web Studio</Link>
        <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link href="/about" onClick={closeMenu}>About Us</Link>
        <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
      </div>
    </div>
  );
}