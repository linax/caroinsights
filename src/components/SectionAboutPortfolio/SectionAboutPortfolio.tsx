"use client";

import React, { FC } from "react";
import Image from "next/image";
import rightImg from "@/images/banner-dev.jpeg"; // Using existing image for now, can be replaced

export interface SectionAboutPortfolioProps {
  className?: string;
}

const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "NestJS", icon: "🦁" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Qiskit", icon: "⚛️" },
];

const SectionAboutPortfolio: FC<SectionAboutPortfolioProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionAboutPortfolio relative py-16 lg:py-28 bg-white dark:bg-neutral-900/50 ${className}`}
      data-nc-id="SectionAboutPortfolio"
    >
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-2xl">
              <Image
                src={rightImg}
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider mb-1">Con base en</p>
                <p className="text-xl font-bold">Santiago, Chile 🇨🇱</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-neutral-200 dark:border-neutral-700 rounded-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
              Ingeniería Híbrida para <span className="text-indigo-600 dark:text-indigo-400">Negocios del Futuro</span>
            </h2>
            <div className="text-neutral-600 dark:text-neutral-400 text-lg space-y-4">
              <p>
                Con más de 12 años de experiencia en ingeniería de software, me especializo en unir los desafíos técnicos complejos con los objetivos estratégicos del negocio.
              </p>
              <p>
                Mi enfoque combina patrones arquitectónicos rigurosos con innovación de vanguardia, asegurando que las soluciones no solo sean funcionales, sino revolucionarias y accesibles para todos.
              </p>
            </div>

            {/* Tech Stack Marquee */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
               <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6">Stack Tecnológico</p>
               
               <div className="relative flex overflow-hidden group">
                  <div className="animate-marquee whitespace-nowrap flex space-x-12">
                     {/* Doubled for seamless loop */}
                     {[...techStack, ...techStack].map((tech, index) => (
                        <span key={index} className="flex items-center space-x-2 text-xl font-bold text-neutral-800 dark:text-neutral-200 opacity-70 hover:opacity-100 transition-opacity">
                           <span>{tech.icon}</span>
                           <span>{tech.name}</span>
                        </span>
                     ))}
                  </div>
                   <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-12">
                     {[...techStack, ...techStack].map((tech, index) => (
                        <span key={index + 'duplicate'} className="flex items-center space-x-2 text-xl font-bold text-neutral-800 dark:text-neutral-200 opacity-70 hover:opacity-100 transition-opacity">
                           <span>{tech.icon}</span>
                           <span>{tech.name}</span>
                        </span>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutPortfolio;
