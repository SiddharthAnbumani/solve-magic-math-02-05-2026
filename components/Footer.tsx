"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* =========================================
                LEFT SIDE — LOGO
            ========================================= */}

            <div className="w-full lg:w-4/12 flex items-center justify-center">
              <img
                src="/logo_white.png"
                alt="Magic Maths"
                className="h-72 object-contain"
              />
            </div>

            {/* =========================================
                RIGHT SIDE — CONTENT
            ========================================= */}

            <div className="w-full lg:w-8/12">
              <div className="flex flex-col sm:flex-row flex-wrap gap-14 justify-between">
                {/* QUICK LINKS */}

                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-lg font-monument tracking-tight mb-8">
                    Quick Links
                  </h3>

                  <div className="space-y-5">
                    <Link
                      href="/"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Home
                    </Link>

                    <Link
                      href="/programs"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Programs
                    </Link>

                    <Link
                      href="/locations"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Locations
                    </Link>

                    <Link
                      href="/contact"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* PROGRAMS */}

                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-lg font-monument tracking-tight mb-8">
                    Programs
                  </h3>

                  <div className="space-y-5">
                    <Link
                      href="/programs/abacus"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Abacus
                    </Link>

                    <Link
                      href="/programs/vedic"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Vedic Maths
                    </Link>

                    <Link
                      href="/programs/rubiks"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Rubik&apos;s Cube
                    </Link>

                    <Link
                      href="/programs/phonics"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Phonics
                    </Link>

                    <Link
                      href="/programs/tamil-reading"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Tamil Reading
                    </Link>

                    <Link
                      href="/programs/handwriting"
                      className="block text-sm text-center font-montserrat-500 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      Handwriting
                    </Link>
                  </div>
                </div>

                {/* CONTACT */}

                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-lg font-monument tracking-tight mb-8">
                    Contact
                  </h3>

                  <div className="space-y-6">
                    {/* PHONE */}

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>

                      <div>
                        <p className="text-sm text-white/60 mb-1 font-montserrat-500">
                          Phone Number
                        </p>

                        <a
                          href="tel:+917200757754"
                          className="font-montserrat-500 text-white hover:opacity-80 transition-all"
                        >
                          +91 72007 57754
                        </a>
                      </div>
                    </div>

                    {/* EMAIL */}

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>

                      <div>
                        <p className="text-sm text-white/60 mb-1 font-montserrat-500">
                          Email Address
                        </p>

                        <a
                          href="mailto:magicmathslearning@gmail.com"
                          className="font-montserrat-500 text-white hover:opacity-80 transition-all"
                        >
                          magicmathslearning@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* ADDRESS */}

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>

                      <div>
                        <p className="text-sm text-white/60 mb-1 font-montserrat-500">
                          Our Centres
                        </p>

                        <p className="font-montserrat-500 text-white">
                          Tambaram & Pallavaram
                        </p>

                        <p className="font-montserrat-500 text-white">
                          Chennai, Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              BIG TAGLINE
          ========================================= */}
        </div>
      </div>

      {/* =========================================
          TAGLINE STRIP
      ========================================= */}

      <div className="border-t border-white/10 py-10 bg-red-800 border-b">
        <h2 className="text-center text-2xl lg:text-4xl font-monument tracking-tight leading-tight text-white max-w-5xl mx-auto px-6">
          Unlock Your Child&apos;s Full Mental Potential.
        </h2>
      </div>

      {/* =========================================
          COPYRIGHT
      ========================================= */}

      <div className="bg-red-900 py-5 px-6 text-center">
        <p className="text-sm text-white/70 font-montserrat-500">
          © {new Date().getFullYear()} Magic Maths. All rights reserved.
        </p>
      </div>

      {/* =========================================
          SOLVE
      ========================================= */}

      <div className="bg-black py-4 px-6 text-center">
        <p className="text-sm text-white/60 font-montserrat-400">
          Developed and maintained by
          <a
            href="https://solve.international"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-white hover:opacity-80 transition-all tracking-[0.25em] font-montserrat-500 tracking-widest"
          >
            Solve
          </a>
        </p>
      </div>
    </footer>
  );
}

// "use client";

// import Link from "next/link";
// import { Mail, MapPin, Phone } from "lucide-react";

// export default function PremiumFooter() {
//   return (
//     <footer className="relative overflow-hidden font-[Montserrat]">
//       {/* =========================================
//           MAIN FOOTER
//       ========================================= */}

//       <div className="bg-indigo-700">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-12 gap-14">
//             {/* =========================================
//                 LEFT SIDE — LOGO
//             ========================================= */}

//             <div className="lg:col-span-4">
//              <img src="/logo_white.png" alt="" className="h-75" />
//             </div>

//             {/* =========================================
//                 RIGHT SIDE — CONTENT
//             ========================================= */}

//             <div className="lg:col-span-8">
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
//                 {/* QUICK LINKS */}

//                 <div>
//                   <h3 className="text-white text-lg font-black tracking-tight mb-8">
//                     Quick Links
//                   </h3>

//                   <div className="space-y-5">
//                     <Link
//                       href="/"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Home
//                     </Link>

//                     <Link
//                       href="/programs"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Programs
//                     </Link>

//                     <Link
//                       href="/locations"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Locations
//                     </Link>

//                     <Link
//                       href="/contact"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Contact
//                     </Link>
//                   </div>
//                 </div>

//                 {/* PROGRAMS */}

//                 <div>
//                   <h3 className="text-white text-lg font-black tracking-tight mb-8">
//                     Programs
//                   </h3>

//                   <div className="space-y-5">
//                     <Link
//                       href="/programs/abacus"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Abacus
//                     </Link>

//                     <Link
//                       href="/programs/vedic"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Vedic Maths
//                     </Link>

//                     <Link
//                       href="/programs/rubiks"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Rubik&apos;s Cube
//                     </Link>

//                     <Link
//                       href="/programs/phonics"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Phonics
//                     </Link>

//                     <Link
//                       href="/programs/tamil-reading"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Tamil Reading
//                     </Link>

//                     <Link
//                       href="/programs/handwriting"
//                       className="block text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       Handwriting
//                     </Link>
//                   </div>
//                 </div>

//                 {/* CONTACT */}

//                 <div>
//                   <h3 className="text-white text-lg font-black tracking-tight mb-8">
//                     Contact
//                   </h3>

//                   <div className="space-y-6">
//                     {/* PHONE */}

//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
//                         <Phone size={18} />
//                       </div>

//                       <div>
//                         <p className="text-sm text-white/60 mb-1">
//                           Phone Number
//                         </p>

//                         <a
//                           href="tel:+917200757754"
//                           className="font-semibold text-white hover:opacity-80 transition-all"
//                         >
//                           +91 72007 57754
//                         </a>
//                       </div>
//                     </div>

//                     {/* EMAIL */}

//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
//                         <Mail size={18} />
//                       </div>

//                       <div>
//                         <p className="text-sm text-white/60 mb-1">
//                           Email Address
//                         </p>

//                         <a
//                           href="mailto:magicmathslearning@gmail.com"
//                           className="font-semibold text-white hover:opacity-80 transition-all"
//                         >
//                           magicmathslearning@gmail.com
//                         </a>
//                       </div>
//                     </div>

//                     {/* ADDRESS */}

//                     <div className="flex items-start gap-4">
//                       <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
//                         <MapPin size={18} />
//                       </div>

//                       <div>
//                         <p className="text-sm text-white/60 mb-1">
//                           Our Centres
//                         </p>

//                         <p className="font-semibold text-white">
//                           Tambaram & Pallavaram
//                         </p>

//                         <p className="font-semibold text-white">
//                           Chennai, Tamil Nadu
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =========================================
//               BIG TAGLINE
//           ========================================= */}

       
//         </div>
//       </div>
//    <div className=" border-t border-white/10 py-10 bg-red-800">
//             <h2 className="text-center text-4xl lg:text-4xl font-monument tracking-tight leading-tight text-white max-w-5xl mx-auto">
//               Unlock Your Child&apos;s Full Mental Potential.
//             </h2>
//           </div>
//       {/* =========================================
//           COPYRIGHT
//       ========================================= */}

//       <div className="bg-red-800 py-5 px-6 text-center">
//         <p className="text-sm font-medium text-white/70">
//           © {new Date().getFullYear()} Magic Maths. All rights reserved.
//         </p>
//       </div>

//       {/* =========================================
//           SOLVE
//       ========================================= */}

//       <div className="bg-black py-4 px-6 text-center">
//         <p className="text-sm text-white/60">
//           Developed and maintained by
//           <a
//             href="https://solve.international"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="ml-2 font-semibold tracking-widest text-white hover:opacity-80 transition-all"
//           >
//             Solve
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import React from "react";
// import Link from "next/link";

// import {
//   Mail,
//   MapPin,
//   Phone,
// } from "lucide-react";

// type FooterData = {
//   brand: { name: string; logo: string; tagline: string; bottomTagline: string };
//   quickLinks: { label: string; href: string }[];
//   programs: { label: string; href: string }[];
//   contact: { phone: string; email: string; address: string[] };
//   developer: { name: string; website: string };
//   theme: {
//     accent: string;
//     footerBackground: string;
//     secondaryBackground: string;
//     copyrightBackground: string;
//     developerBackground: string;
//     textPrimary: string;
//     textSecondary: string;
//     border: string;
//     iconBackground: string;
//     glow: string;
//   };
// };

// export default function PremiumFooter() {

//   /* =========================================
//      SINGLE SOURCE OF TRUTH
//      CHANGE CONTENT + COLORS HERE
//   ========================================= */

//   const footerData = {

//     /* BRAND */
//     brand: {
//       name: "Magic Maths",

//       logo: "MM",

//       tagline:
//         "Empowering children with Abacus, Vedic Maths, Rubik\'s Cube, and more — building sharper minds for life.",

//       bottomTagline:
//         "Unlock Your Child\'s Full Mental Potential.",
//     },

//     /* LINKS */
//     quickLinks: [
//       {
//         label: "Home",
//         href: "/",
//       },
//       {
//         label: "Programs",
//         href: "/programs",
//       },
//       {
//         label: "Locations",
//         href: "/locations",
//       },
//       {
//         label: "Contact",
//         href: "/contact",
//       },
//     ],

//     /* PROGRAMS */
//     programs: [
//       {
//         label: "Abacus",
//         href: "/programs/abacus",
//       },
//       {
//         label: "Vedic Maths",
//         href: "/programs/vedic",
//       },
//       {
//         label: "Rubik\'s Cube",
//         href: "/programs/rubiks",
//       },
//       {
//         label: "Phonics",
//         href: "/programs/phonics",
//       },
//       {
//         label: "Tamil Reading",
//         href: "/programs/tamil-reading",
//       },
//       {
//         label: "Handwriting",
//         href: "/programs/handwriting",
//       },
//     ],

//     /* CONTACT */
//     contact: {
//       phone: "+91 72007 57754",

//       email: "magicmathslearning@gmail.com",

//       address: [
//         "Tambaram & Pallavaram",
//         "Chennai, Tamil Nadu",
//       ],
//     },

//     /* DEVELOPER */
//     developer: {
//       name: "Solve",
//       website: "https://solve.international",
//     },

//     /* =========================================
//        ENTIRE THEME CONTROL
//        CHANGE THESE COLORS ONLY
//     ========================================= */

//     theme: {

//       /* PRIMARY BRAND COLOR */
//       accent: "#4338CA",

//       /* MAIN FOOTER BG */
//       footerBackground: "#991B1B",

//       /* SECOND STRIP */
//       secondaryBackground: "#7F1D1D",

//       /* COPYRIGHT STRIP */
//       copyrightBackground: "#450A0A",

//       /* DEVELOPER STRIP */
//       developerBackground: "#3B0808",

//       /* TEXT COLORS */
//       textPrimary: "#FFFFFF",

//       textSecondary: "rgba(255,255,255,0.68)",

//       /* BORDER */
//       border: "rgba(255,255,255,0.08)",

//       /* ICON BG */
//       iconBackground: "rgba(67,56,202,0.12)",

//       /* GLOW */
//       glow: "rgba(67,56,202,0.35)",
//     },
//   };

//   return <Footer data={footerData} />;
// }

// /* =========================================
//    MAIN FOOTER
// ========================================= */

// function Footer({ data }: { data: FooterData }) {

//   return (
//     <footer
//       className="
//         relative overflow-hidden
//         font-[Montserrat]
//       "
//       style={{
//         background: data.theme.footerBackground,
//       }}
//     >

//       {/* GLOW */}
//       <div
//         className="
//           absolute top-0 right-0
//           w-[500px] h-[500px]
//           rounded-full blur-3xl
//           opacity-20
//         "
//         style={{
//           background: data.theme.glow,
//         }}
//       />

//       {/* MAIN SECTION */}
//       <div
//         className="
//           max-w-7xl mx-auto
//           px-6 lg:px-8
//           py-20
//           relative z-10
//         "
//       >

//         <div
//           className="
//             grid
//             lg:grid-cols-[1.5fr_1fr_1fr_1fr]
//             gap-14
//           "
//         >

//           {/* =========================================
//              BRAND
//           ========================================= */}

//           <div>

//             {/* LOGO */}
//             <div className="flex items-center gap-4">

//               <div
//                 className="
//                   w-14 h-14
//                   rounded-2xl
//                   flex items-center justify-center
//                   text-white
//                   font-black
//                   text-lg
//                   shadow-2xl
//                 "
//                 style={{
//                   background: data.theme.accent,
//                 }}
//               >
//                 {data.brand.logo}
//               </div>

//               <div>
//                 <h2
//                   className="
//                     text-2xl
//                     font-black
//                     tracking-tight
//                   "
//                   style={{
//                     color: data.theme.textPrimary,
//                   }}
//                 >
//                   {data.brand.name}
//                 </h2>

//                 <p
//                   className="text-sm mt-1"
//                   style={{
//                     color: data.theme.textSecondary,
//                   }}
//                 >
//                   Brain Development Centre
//                 </p>
//               </div>
//             </div>

//             {/* TAGLINE */}
//             <p
//               className="
//                 mt-8
//                 text-base
//                 leading-relaxed
//                 max-w-md
//                 font-medium
//               "
//               style={{
//                 color: data.theme.textSecondary,
//               }}
//             >
//               {data.brand.tagline}
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <FooterLinksSection
//             title="Quick Links"
//             links={data.quickLinks}
//             data={data}
//           />

//           {/* PROGRAMS */}
//           <FooterLinksSection
//             title="Programs"
//             links={data.programs}
//             data={data}
//           />

//           {/* =========================================
//              CONTACT
//           ========================================= */}

//           <div>

//             <h3
//               className="
//                 text-lg
//                 font-black
//                 tracking-tight
//                 mb-8
//               "
//               style={{
//                 color: data.theme.textPrimary,
//               }}
//             >
//               Contact
//             </h3>

//             <div className="space-y-6">

//               {/* PHONE */}
//               <ContactItem
//                 icon={<Phone size={18} />}
//                 label="Phone Number"
//                 value={data.contact.phone}
//                 href={`tel:${data.contact.phone}`}
//                 data={data}
//               />

//               {/* EMAIL */}
//               <ContactItem
//                 icon={<Mail size={18} />}
//                 label="Email Address"
//                 value={data.contact.email}
//                 href={`mailto:${data.contact.email}`}
//                 data={data}
//               />

//               {/* ADDRESS */}
//               <div className="flex items-start gap-4">

//                 <div
//                   className="
//                     w-11 h-11
//                     rounded-2xl
//                     flex items-center justify-center
//                     shrink-0
//                   "
//                   style={{
//                     background: data.theme.iconBackground,
//                     color: data.theme.accent,
//                   }}
//                 >
//                   <MapPin size={18} />
//                 </div>

//                 <div>

//                   <p
//                     className="text-sm mb-1"
//                     style={{
//                       color: data.theme.textSecondary,
//                     }}
//                   >
//                     Our Centres
//                   </p>

//                   {data.contact.address.map((line, index) => (
//                     <p
//                       key={index}
//                       className="font-semibold"
//                       style={{
//                         color: data.theme.textPrimary,
//                       }}
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//          TAGLINE STRIP
//       ========================================= */}

//       <div
//         className="
//           py-12 px-6
//           text-center
//         "
//         style={{
//           background: data.theme.secondaryBackground,
//         }}
//       >
//         <h2
//           className="
//             text-3xl lg:text-5xl
//             font-black
//             tracking-tight
//             max-w-5xl mx-auto
//             leading-tight
//           "
//           style={{
//             color: data.theme.textPrimary,
//           }}
//         >
//           {data.brand.bottomTagline}
//         </h2>
//       </div>

//       {/* =========================================
//          COPYRIGHT
//       ========================================= */}

//       <div
//         className="
//           py-5 px-6
//           text-center
//         "
//         style={{
//           background: data.theme.copyrightBackground,
//         }}
//       >
//         <p
//           className="text-sm font-medium"
//           style={{
//             color: data.theme.textSecondary,
//           }}
//         >
//           © {new Date().getFullYear()}{" "}
//           {data.brand.name}. All rights reserved.
//         </p>
//       </div>

//       {/* =========================================
//          DEVELOPER
//       ========================================= */}

//       <div
//         className="
//           py-4 px-6
//           text-center
//         "
//         style={{
//           background: data.theme.developerBackground,
//         }}
//       >
//         <p
//           className="text-sm"
//           style={{
//             color: data.theme.textSecondary,
//           }}
//         >
//           Developed and maintained by{" "}

//           <a
//             href={data.developer.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               ml-2
//               font-semibold
//               tracking-widest
//               hover:opacity-80
//               transition-all
//             "
//             style={{
//               color: data.theme.textPrimary,
//             }}
//           >
//             {data.developer.name}
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// /* =========================================
//    REUSABLE LINKS SECTION
// ========================================= */

// function FooterLinksSection({
//   title,
//   links,
//   data,
// }: {
//   title: string;
//   links: { label: string; href: string }[];
//   data: FooterData;
// }) {

//   return (
//     <div>

//       <h3
//         className="
//           text-lg
//           font-black
//           tracking-tight
//           mb-8
//         "
//         style={{
//           color: data.theme.textPrimary,
//         }}
//       >
//         {title}
//       </h3>

//       <div className="space-y-5">

//         {links.map((link) => (
//           <Link
//             key={link.label}
//             href={link.href}
//             className="
//               block
//               text-sm
//               font-semibold
//               hover:translate-x-1
//               hover:text-white
//               transition-all duration-300
//             "
//             style={{
//               color: data.theme.textSecondary,
//             }}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================
//    CONTACT ITEM
// ========================================= */

// function ContactItem({
//   icon,
//   label,
//   value,
//   href,
//   data,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   href: string;
//   data: FooterData;
// }) {

//   return (
//     <div className="flex items-start gap-4">

//       <div
//         className="
//           w-11 h-11
//           rounded-2xl
//           flex items-center justify-center
//           shrink-0
//         "
//         style={{
//           background: data.theme.iconBackground,
//           color: data.theme.accent,
//         }}
//       >
//         {icon}
//       </div>

//       <div>

//         <p
//           className="text-sm mb-1"
//           style={{
//             color: data.theme.textSecondary,
//           }}
//         >
//           {label}
//         </p>

//         <a
//           href={href}
//           className="
//             font-semibold
//             hover:opacity-80
//             transition-all
//           "
//           style={{
//             color: data.theme.textPrimary,
//           }}
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// }
