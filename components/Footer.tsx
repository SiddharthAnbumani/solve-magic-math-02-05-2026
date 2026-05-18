"use client";

import React from "react";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function PremiumFooter() {

  /* =========================================
     SINGLE SOURCE OF TRUTH
     CHANGE CONTENT + COLORS HERE
  ========================================= */

  const footerData = {
    
    /* BRAND */
    brand: {
      name: "Little Sprouts Academy",

      logo: "LS",

      tagline:
        "Creating joyful learning experiences that inspire confidence, creativity, and curiosity in every child.",

      bottomTagline:
        "Nurturing Bright Young Minds For A Better Tomorrow.",
    },

    /* LINKS */
    quickLinks: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Programs",
        href: "/programs",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],

    /* PROGRAMS */
    programs: [
      {
        label: "Play Group",
        href: "/programs/play-group",
      },
      {
        label: "Nursery",
        href: "/programs/nursery",
      },
      {
        label: "Junior KG",
        href: "/programs/junior-kg",
      },
      {
        label: "Senior KG",
        href: "/programs/senior-kg",
      },
      {
        label: "Phonics",
        href: "/programs/phonics",
      },
      {
        label: "Activity Classes",
        href: "/programs/activity",
      },
    ],

    /* CONTACT */
    contact: {
      phone: "+91 98765 43210",

      email:
        "hello@littlesproutsacademy.com",

      address: [
        "Anna Nagar",
        "Chennai - 600040",
      ],
    },

    /* DEVELOPER */
    developer: {
      name: "Solve",
      website:
        "https://solve.international",
    },

    /* =========================================
       ENTIRE THEME CONTROL
       CHANGE THESE COLORS ONLY
    ========================================= */

    theme: {

      /* PRIMARY BRAND COLOR */
      accent: "#F59E0B",

      /* MAIN FOOTER BG */
      footerBackground: "#0A0A0A",

      /* SECOND STRIP */
      secondaryBackground: "#111111",

      /* COPYRIGHT STRIP */
      copyrightBackground: "#1A1A1A",

      /* DEVELOPER STRIP */
      developerBackground: "#050505",

      /* TEXT COLORS */
      textPrimary: "#FFFFFF",

      textSecondary:
        "rgba(255,255,255,0.68)",

      /* BORDER */
      border:
        "rgba(255,255,255,0.08)",

      /* ICON BG */
      iconBackground:
        "rgba(245,158,11,0.12)",

      /* GLOW */
      glow:
        "rgba(245,158,11,0.35)",
    },
  };

  return <Footer data={footerData} />;
}

/* =========================================
   MAIN FOOTER
========================================= */

function Footer({ data }) {

  return (
    <footer
      className="
        relative overflow-hidden
        font-[Montserrat]
      "
      style={{
        background:
          data.theme.footerBackground,
      }}
    >

      {/* GLOW */}
      <div
        className="
          absolute top-0 right-0
          w-[500px] h-[500px]
          rounded-full blur-3xl
          opacity-20
        "
        style={{
          background: data.theme.glow,
        }}
      />

      {/* MAIN SECTION */}
      <div
        className="
          max-w-7xl mx-auto
          px-6 lg:px-8
          py-20
          relative z-10
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            gap-14
          "
        >

          {/* =========================================
             BRAND
          ========================================= */}

          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  text-white
                  font-black
                  text-lg
                  shadow-2xl
                "
                style={{
                  background:
                    data.theme.accent,
                }}
              >
                {data.brand.logo}
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                  "
                  style={{
                    color:
                      data.theme.textPrimary,
                  }}
                >
                  {data.brand.name}
                </h2>

                <p
                  className="text-sm mt-1"
                  style={{
                    color:
                      data.theme.textSecondary,
                  }}
                >
                  Premium Preschool
                </p>
              </div>
            </div>

            {/* TAGLINE */}
            <p
              className="
                mt-8
                text-base
                leading-relaxed
                max-w-md
                font-medium
              "
              style={{
                color:
                  data.theme.textSecondary,
              }}
            >
              {data.brand.tagline}
            </p>
          </div>

          {/* QUICK LINKS */}
          <FooterLinksSection
            title="Quick Links"
            links={data.quickLinks}
            data={data}
          />

          {/* PROGRAMS */}
          <FooterLinksSection
            title="Programs"
            links={data.programs}
            data={data}
          />

          {/* =========================================
             CONTACT
          ========================================= */}

          <div>

            <h3
              className="
                text-lg
                font-black
                tracking-tight
                mb-8
              "
              style={{
                color:
                  data.theme.textPrimary,
              }}
            >
              Contact
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <ContactItem
                icon={
                  <Phone size={18} />
                }
                label="Phone Number"
                value={data.contact.phone}
                href={`tel:${data.contact.phone}`}
                data={data}
              />

              {/* EMAIL */}
              <ContactItem
                icon={
                  <Mail size={18} />
                }
                label="Email Address"
                value={data.contact.email}
                href={`mailto:${data.contact.email}`}
                data={data}
              />

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-11 h-11
                    rounded-2xl
                    flex items-center justify-center
                    shrink-0
                  "
                  style={{
                    background:
                      data.theme.iconBackground,

                    color:
                      data.theme.accent,
                  }}
                >
                  <MapPin size={18} />
                </div>

                <div>

                  <p
                    className="
                      text-sm
                      mb-1
                    "
                    style={{
                      color:
                        data.theme.textSecondary,
                    }}
                  >
                    Campus Location
                  </p>

                  {data.contact.address.map(
                    (line, index) => (
                      <p
                        key={index}
                        className="
                          font-semibold
                        "
                        style={{
                          color:
                            data.theme.textPrimary,
                        }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
         TAGLINE STRIP
      ========================================= */}

      <div
        className="
          py-12 px-6
          text-center
        "
        style={{
          background:
            data.theme.secondaryBackground,
        }}
      >
        <h2
          className="
            text-3xl lg:text-5xl
            font-black
            tracking-tight
            max-w-5xl mx-auto
            leading-tight
          "
          style={{
            color:
              data.theme.textPrimary,
          }}
        >
          {data.brand.bottomTagline}
        </h2>
      </div>

      {/* =========================================
         COPYRIGHT
      ========================================= */}

      <div
        className="
          py-5 px-6
          text-center
        "
        style={{
          background:
            data.theme.copyrightBackground,
        }}
      >
        <p
          className="
            text-sm
            font-medium
          "
          style={{
            color:
              data.theme.textSecondary,
          }}
        >
          © {new Date().getFullYear()}{" "}
          {data.brand.name}. All rights
          reserved.
        </p>
      </div>

      {/* =========================================
         DEVELOPER
      ========================================= */}

      <div
        className="
          py-4 px-6
          text-center
        "
        style={{
          background:
            data.theme.developerBackground,
        }}
      >
        <p
          className="text-sm"
          style={{
            color:
              data.theme.textSecondary,
          }}
        >
          Developed and maintained by{" "}

          <a
            href={data.developer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-2
              font-semibold
              tracking-widest
              hover:opacity-80
              transition-all
            "
            style={{
              color:
                data.theme.textPrimary,
            }}
          >
            {data.developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

/* =========================================
   REUSABLE LINKS SECTION
========================================= */

function FooterLinksSection({
  title,
  links,
  data,
}) {

  return (
    <div>

      <h3
        className="
          text-lg
          font-black
          tracking-tight
          mb-8
        "
        style={{
          color:
            data.theme.textPrimary,
        }}
      >
        {title}
      </h3>

      <div className="space-y-5">

        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              block
              text-sm
              font-semibold
              hover:translate-x-1
              hover:text-white
              transition-all duration-300
            "
            style={{
              color:
                data.theme.textSecondary,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   CONTACT ITEM
========================================= */

function ContactItem({
  icon,
  label,
  value,
  href,
  data,
}) {

  return (
    <div className="flex items-start gap-4">

      <div
        className="
          w-11 h-11
          rounded-2xl
          flex items-center justify-center
          shrink-0
        "
        style={{
          background:
            data.theme.iconBackground,

          color:
            data.theme.accent,
        }}
      >
        {icon}
      </div>

      <div>

        <p
          className="
            text-sm
            mb-1
          "
          style={{
            color:
              data.theme.textSecondary,
          }}
        >
          {label}
        </p>

        <a
          href={href}
          className="
            font-semibold
            hover:opacity-80
            transition-all
          "
          style={{
            color:
              data.theme.textPrimary,
          }}
        >
          {value}
        </a>
      </div>
    </div>
  );
}