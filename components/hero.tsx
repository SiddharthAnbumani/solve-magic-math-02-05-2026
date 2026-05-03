"use client";

import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import MagicMathsSpline from "@/components/MagicMathsSpline";

const PHONE = "YOUR_PHONE_NUMBER";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-monument-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-slate-900 leading-[1.05]">
              Smart Minds <br className="hidden sm:block" />
              Start Right{" "}
              <span className="text-indigo-700">Here</span>.
            </h1>

            <p className="mt-6 font-montserrat-400 text-lg text-slate-600 max-w-xl leading-relaxed">
              Abacus, Rubik&apos;s Cube, Vedic Maths and Tuition — taught by experienced trainers in small batches, so every child gets the attention they deserve.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-700 text-white font-monument text-sm hover:bg-slate-800 transition"
              >
                Book Free Demo <ArrowRight size={16} />
              </Link>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-800 text-white font-monument text-sm hover:bg-red-700 transition"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* SOCIAL PROOF */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-indigo-700 text-indigo-700" />
                ))}
                <span className="ml-1 font-montserrat-600">4.9</span>
              </div>

              <span className="font-montserrat-500">200+ happy parents</span>

              <span className="font-montserrat-500 hidden sm:inline">
                8 years in the neighbourhood
              </span>
            </div>
          </div>

          {/* RIGHT SPLINE */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent blur-3xl" />

            {/* Spline Container */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-black/10 bg-white/40 backdrop-blur-xl shadow-2xl">
              <MagicMathsSpline />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}