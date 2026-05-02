"use client";

import { useEffect, useState, useMemo, memo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function VideoCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () =>
    setActive((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  /* ================= VIEWPORT DETECTION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= VIDEO PLAY / PAUSE ================= */
  useEffect(() => {
    const videos = containerRef.current?.querySelectorAll("video");

    if (!videos) return;

    videos.forEach((video, index) => {
      if (index === active && isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, isVisible]);

  /* ================= MEMOIZED VIDEOS ================= */
  const renderedVideos = useMemo(() => {
    return slides.map((slide, index) => (
      <video
        key={slide.id}
        src={slide.video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-[1400ms] ease-in-out
          will-change-[opacity]
          backface-hidden
          translate-z-0
          ${index === active ? "opacity-100" : "opacity-0"}
        `}
      />
    ));
  }, [slides, active]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden rounded-xl bg-black"
    >

      {/* ================= VIDEOS ================= */}
      {renderedVideos}

      {/* ================= DARK GRADIENT OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40 z-10" />

      {/* ================= TEXT CONTENT ================= */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-5">

        <h1
          key={slides[active].title}
          className="
            text-3xl md:text-5xl lg:text-6xl
            font-montserrat-semibold uppercase
            bg-gradient-to-l from-blue-950 via-gray-200 to-blue-950
            bg-clip-text text-transparent
            animate-fadeUp
          "
        >
          {slides[active].title}
        </h1>

        <p
          key={slides[active].subtitle}
          className="
            mt-4 text-sm md:text-lg
            font-montserrat-medium text-white/90
            max-w-xl
            animate-fadeUp delay-100
          "
        >
          {slides[active].subtitle}
        </p>
      </div>

      {/* ================= CONTROLS ================= */}
      <button
        onClick={prev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-30 
          bg-black/40 hover:bg-black/60
          backdrop-blur-sm
          p-2 rounded-full transition
        "
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={next}
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-30 
          bg-black/40 hover:bg-black/60
          backdrop-blur-sm
          p-2 rounded-full transition
        "
      >
        <ChevronRight className="text-white" />
      </button>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              h-2 w-10 rounded-full transition-all duration-300
              ${i === active ? "bg-white" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(VideoCarousel);

// "use client";

// import { useEffect, useState, useMemo,memo} from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function VideoCarousel({ slides }) {
//   const [active, setActive] = useState(0);

//   /* ================= AUTO SLIDE ================= */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 10000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const next = () =>
//     setActive((prev) => (prev + 1) % slides.length);

//   const prev = () =>
//     setActive((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );

//   /* ================= MEMOIZED VIDEOS ================= */
//   const renderedVideos = useMemo(() => {
//     return slides.map((slide, index) => (
//       <video
//         key={slide.id}
//         src={slide.video}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="none"
//         className={`
//           absolute inset-0 w-full h-full object-cover
//           transition-opacity duration-[1400ms] ease-in-out
//           will-change-[opacity]
//           backface-hidden
//           translate-z-0
//           ${index === active ? "opacity-100" : "opacity-0"}
//         `}
//       />
//     ));
//   }, [slides, active]);

//   return (
//     <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden rounded-xl bg-black">

//       {/* ================= VIDEOS ================= */}
//       {renderedVideos}

//       {/* ================= DARK GRADIENT OVERLAY ================= */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40 z-10" />

//       {/* ================= TEXT CONTENT ================= */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-5">

//         <h1
//           key={slides[active].title}
//           className="
//             text-3xl md:text-5xl lg:text-6xl
//             font-montserrat-semibold uppercase
//             bg-gradient-to-l from-blue-950 via-gray-200 to-blue-950
//             bg-clip-text text-transparent
//             animate-fadeUp
//           "
//         >
//           {slides[active].title}
//         </h1>

//         <p
//           key={slides[active].subtitle}
//           className="
//             mt-4 text-sm md:text-lg
//             font-montserrat-medium text-white/90
//             max-w-xl
//             animate-fadeUp delay-100
//           "
//         >
//           {slides[active].subtitle}
//         </p>
//       </div>

//       {/* ================= CONTROLS ================= */}
//       <button
//         onClick={prev}
//         className="
//           absolute left-4 top-1/2 -translate-y-1/2 z-30 
//           bg-black/40 hover:bg-black/60
//           backdrop-blur-sm
//           p-2 rounded-full transition
//         "
//       >
//         <ChevronLeft className="text-white" />
//       </button>

//       <button
//         onClick={next}
//         className="
//           absolute right-4 top-1/2 -translate-y-1/2 z-30 
//           bg-black/40 hover:bg-black/60
//           backdrop-blur-sm
//           p-2 rounded-full transition
//         "
//       >
//         <ChevronRight className="text-white" />
//       </button>

//       {/* ================= DOTS ================= */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`
//               h-2 w-10 rounded-full transition-all duration-300
//               ${i === active ? "bg-white" : "bg-white/40"}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default memo(VideoCarousel)