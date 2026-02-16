"use client";

import React, { FC } from "react";
import Image from "next/image";
import podcastImage from "@/images/podcastimage.png";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";

export interface SectionHeroPortfolioProps {
  className?: string;
}

const SectionHeroPortfolio: FC<SectionHeroPortfolioProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionHeroPortfolio relative ${className}`}
      data-nc-id="SectionHeroPortfolio"
    >
      <div className="flex flex-col items-center justify-center min-h-[85vh] text-center bg-neutral-900 text-neutral-100 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="flex justify-center">
             <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl transition-all hover:scale-105">
                <Image 
                   src={podcastImage} 
                   alt="Coffee Tech Insights" 
                   fill 
                   className="object-cover object-center scale-125"
                   priority
                />
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            Ingeniería de software
            </span>
            <span className="block mt-2">con Visión de Negocio</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-medium text-neutral-400  tracking-widest">
            Cerrando la brecha entre código y estrategia de negocio. <br />
            +15 años de experiencia * Magíster en Innovación
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-medium text-neutral-400 uppercase tracking-widest">
            <span>Arquitectura de Software</span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span>Estrategia Técnica</span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span>Innovación</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <ButtonPrimary href="#featured-projects" sizeClass="px-8 py-4">
              Ver Trabajo
            </ButtonPrimary>
            <ButtonSecondary href="mailto:hello@caroinsights.com" sizeClass="px-8 py-4 bg-transparent border border-neutral-600 hover:bg-neutral-800 text-neutral-200">
              Hablemos
            </ButtonSecondary>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroPortfolio;
