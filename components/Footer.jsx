"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const FacebookIcon = ({ size = 20, strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <div className="w-screen bg-white border-t border-black/10">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-80">
        {/* Left Tagline Section */}
        <div className="w-full md:w-2/3 flex justify-center items-center py-10 md:py-0 px-6 text-center md:text-left">
          <Link
            href="/"
            className="flex flex-col md:flex-row md:space-x-2 justify-center items-center md:items-start"
          >
            <p className="text-4xl md:text-5xl lg:text-4xl font-montserrat-semibold font-bold uppercase bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700 bg-clip-text text-transparent">
              We Always
            </p>
            <p className="text-4xl md:text-5xl lg:text-4xl font-montserrat-semibold  uppercase bg-gradient-to-r from-gray-700 via-gray-700 to-blue-700 bg-clip-text text-transparent">
              Value every
            </p>
            <p className="text-4xl md:text-5xl lg:text-4xl font-montserrat-semibold uppercase bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 bg-clip-text text-transparent">
              Swimmer.
            </p>
          </Link>
        </div>

        {/* Right Links Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-black py-10 md:py-0">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center">
            {/* Internal Links */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-3 text-lg font-montserrat-medium mb-6 sm:mb-0">
              <Link href="/programs" className="hover:text-black/70 transition">
                Programs
              </Link>
              <Link href="/competitive" className="hover:text-black/70 transition">
                Competitive Swimming
              </Link>
              <Link href="/gallery" className="hover:text-black/70 transition">
                Gallery
              </Link>
              <Link href="/about" className="hover:text-black/70 transition">
                About Waves
              </Link>
              <Link href="/contact" className="hover:text-black/70 transition">
                Contact us
              </Link>
            </div>

            {/* Social Links */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-4 text-black text-xl font-montserrat-medium">
              <a
              href="https://wa.me/917550223044"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition flex items-center space-x-2"
            >
              <Phone size={20} />
              <span className="text-sm">
                WhatsApp
              </span>
            </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition flex items-center space-x-2"
              >
                <InstagramIcon size={20} strokeWidth={1.5} />
                <span className="text-sm ">
                  Instagram
                </span>
              </a>

              <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition flex items-center space-x-2"
            >
              <FacebookIcon size={20} strokeWidth={1.5} />
              <span className="text-sm">
                Facebook
              </span>
            </a>


              <a
                href="mailto:waveswimacademy@gmail.com"
                className="hover:text-black transition flex items-center space-x-2 text-center"
              >
                <Mail size={20} strokeWidth={1.5} />
                <span className="text-xs break-words text-center">
                  waveswimacademy@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      {/* <div className="h-20 bg-blue-950 font-montserrat text-base md:text-2xl flex justify-center items-center text-white text-center px-4">
        &copy; {new Date().getFullYear()} Waves Swim Academy, <br className="md:hidden"/> All Rights Reserved
      </div> */}
      <div className="h-24 bg-blue-950 font-montserrat text-base md:text-2xl flex flex-col justify-center items-center text-white text-center px-4">
  <div>
    &copy; {new Date().getFullYear()} Waves Swim Academy,
    <br className="md:hidden" /> All Rights Reserved
  </div>
  <div className="text-sm md:text-lg mt-2 ">
    Designed & Developed by <span className="font-montserrat-semibold">Siddharth Anbumani</span> 
  </div>
</div>
    </div>
  );
}
