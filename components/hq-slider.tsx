"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HQSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "/images/hq/RECEPTION_PLAQUE.webp",
      alt: "Reception Plaque"
    },
    {
      src: "/images/hq/CEO_DESK.webp",
      alt: "CEO Desk"
    },
    {
      src: "/images/hq/INSIDE_THE_LAB_RESEARCHER_WORKING.webp",
      alt: "Lab Researcher Working"
    },
    {
      src: "/images/hq/OUR_HQ_WITH_LOGO_OUTSIDE.webp",
      alt: "Our HQ Building"
    },
    {
      src: "/images/hq/RECEPTION_PICTURE.webp",
      alt: "Reception Area"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative py-20">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '65%' }}>
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
          <div className="relative aspect-[16/9]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
