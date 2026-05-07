"use client";

import { memo, useRef, useEffect, useState } from "react";

function VideoPlusText({
  overlayClass = "",
  img,
  imgClass = "",
  text,
  videoHeight = "h-full",
}) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const videoEl = videoRef.current;
    if (videoEl) observer.observe(videoEl);

    return () => {
      if (videoEl) observer.unobserve(videoEl);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div
      className="
        relative 
        w-full 
        h-[70vh] sm:h-[75vh] md:h-[550px] lg:h-[750px]
        overflow-hidden
      "
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        poster="/vidplustext_fallback.svg"
        src={img}
        className={`w-full ${videoHeight} object-cover ${imgClass}`}
        muted
        loop
        playsInline
        preload="none"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 
          bg-black/40 
          flex items-center justify-center 
          text-center px-4 ${overlayClass}
        `}
      >
        <div className="w-full">
          {text}
        </div>
      </div>
    </div>
  );
}

export default memo(VideoPlusText);

// import {memo} from 'react'
//  function VideoPlusText({
//   img,
//   imgClass = "",
//   text,
//   videoHeight = "h-full",
// }) {
//   return (
//     <div
//       className="
//         relative 
//         w-full 
//         h-[600px] md:h-[550px] lg:h-[750px]
//         overflow-hidden
//       "
//     >
//       {/* Background Video */}
//       <video
//         src={img}
//         className={`w-full ${videoHeight} object-cover ${imgClass}`}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* Overlay with Text */}
//       <div
//         className="
//           absolute inset-0 
//           bg-black/30 
//           flex items-center justify-center 
//           font-Raleway text-center px-4
//         "
//       >
//         <h2
//           className="
//             text-white 
//             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
//             font-bold 
//             drop-shadow-[8px_8px_16px_rgba(0,0,0,0.9)]
//           "
//         >
//           {text}
//         </h2>
//       </div>
//     </div>
//   );
// }


// export default memo(VideoPlusText)