"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videoTestimonials = [
    {
      name: "John Doe",
      role: "Software Developer",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
    },
    {
      name: "Mike Johnson",
      role: "Startup Founder",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col w-full">
            <div className="mb-6 w-full flex justify-center items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[#E6F3FF] px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-primary text-sm font-medium">
                  Testimonials
                </span>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/testimonials/Group-1362.png"
                alt="Testimonial cards stack"
                width={900}
                height={1100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#202020] text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-tight mb-6">
              What Founders Are Saying About LaunchPad Labs
            </h2>

            <div className="mb-4">
              <Image
                src="/testimonials/frame-667.png"
                alt="Testimonial video"
                width={640}
                height={640}
                className="w-full max-w-[520px] lg:max-w-[520px] h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveVideoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeVideoIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
