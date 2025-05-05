// components/InfoSection.js
import Image from "next/image";

export default function WhatIs({ content }) {
  const {
    title,
    description,
    heading,
    paragraphs,
    imageSrc,
    imageAlt,
  } = content;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <div className="space-y-8 mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 font-inter items-center">
        <div className="relative h-[300px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            {paragraphs.map((text, index) => (
              <p key={index} className="text-[#5a6065]">
                {text}
              </p>
            ))}

          </div>

       
        </div>
      </div>
    </section>
  );
}
