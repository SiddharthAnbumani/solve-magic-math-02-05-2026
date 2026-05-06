"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

type BranchCardProps = {
  name: string;
  image: string;
  address: string;
  phone: string;
  mapLink: string;
  email?: string;
};

export default function BranchCard({
  name,
  image,
  address,
  phone,
  mapLink,
  email,
}: BranchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-md overflow-hidden border hover:shadow-xl transition"
    >
      {/* Image */}
<div className="relative h-97 w-full overflow-hidden">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover"
  />

  {/* Blur Overlay */}
  <div className="absolute inset-0 " />

  {/* Optional Gradient (premium look) */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}

  {/* Optional Branch Name on Image */}
  {/* <div className="absolute bottom-3 left-4 text-white">
    <h3 className="text-lg font-semibold">{name}</h3>
  </div> */}
</div>
      {/* Content */}
      <div className="p-5 bg-indigo-700">
        <h3 className="text-xl font-monument-700 tracking-wider text-white text-center">{name}</h3>

        <p className="text-sm font-monserrat-700 mt-2 leading-tight text-white/90 text-center">
          {address}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-xl font-monument-400 font-medium hover:bg-indigo-700 transition"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-red-800 text-white py-2 rounded-xl text-sm font-monument-400 hover:bg-gray-100 transition"
          >
            <MapPin size={16} />
            Location
          </a>
        </div>

        {email && (
          <a
            href={`mailto:${email}`}
            className="block mt-3 text-xs text-indigo-600 hover:underline text-center"
          >
            {email}
          </a>
        )}
      </div>
    </motion.div>
  );
}