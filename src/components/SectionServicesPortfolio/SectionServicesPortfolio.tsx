"use client";

import React, { FC } from "react";
import { 
  CommandLineIcon, 
  LightBulbIcon, 
  BeakerIcon, 
  CpuChipIcon,
  CloudIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

export interface SectionServicesPortfolioProps {
  className?: string;
}

const services = [
  {
    title: "Tech Architecture",
    description: "Designing scalable systems, refactoring legacy codebases, and optimizing cloud infrastructure for high-performance applications.",
    icon: <CommandLineIcon className="w-8 h-8" />,
    tags: ["Scalability", "Refactoring", "Cloud Native"],
    bgClass: "bg-neutral-100 dark:bg-neutral-800",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Innovation Strategy",
    description: "Guiding product discovery, MVP development, and technical feasibility studies to turn complex ideas into market-ready solutions.",
    icon: <LightBulbIcon className="w-8 h-8" />,
    tags: ["MVP", "Discovery", "Strategy"],
    bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Entrepreneurship and podcast strategy",
    description: "I'm an entrepreneur with many years of experience and working in my own podcast. I can help you with my experience to show your skills to others and bright",
    icon: <CpuChipIcon className="w-8 h-8" />,
    tags: ["R&D", "Quantum", "AI/ML"],
    bgClass: "bg-orange-50 dark:bg-orange-900/20",
    colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
  }
];

const SectionServicesPortfolio: FC<SectionServicesPortfolioProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionServicesPortfolio relative py-16 lg:py-28 ${className}`}
      data-nc-id="SectionServicesPortfolio"
    >
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
            Specialized Services
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
            High-impact consulting for complex technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tech Architecture (Large) */}
          <div className={`p-8 rounded-3xl ${services[0].bgClass} ${services[0].colSpan} relative overflow-hidden group hover:shadow-xl transition-shadow`}>
             <div className="relative z-10">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   {services[0].icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{services[0].title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{services[0].description}</p>
                <div className="flex flex-wrap gap-2">
                   {services[0].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-neutral-900 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                         {tag}
                      </span>
                   ))}
                </div>
             </div>
          </div>

           {/* Card 2: Innovation Strategy */}
           <div className={`p-8 rounded-3xl ${services[1].bgClass} ${services[1].colSpan} relative overflow-hidden group hover:shadow-xl transition-shadow`}>
             <div className="relative z-10">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   {services[1].icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{services[1].description}</p>
                <div className="flex flex-wrap gap-2">
                   {services[1].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-neutral-900 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                         {tag}
                      </span>
                   ))}
                </div>
             </div>
          </div>

           {/* Card 3: Quantum (Full Width) */}
           <div className={`p-8 rounded-3xl ${services[2].bgClass} ${services[2].colSpan} relative overflow-hidden group hover:shadow-xl transition-shadow flex flex-col md:flex-row items-start md:items-center gap-6`}>
             <div className="p-3 bg-white dark:bg-neutral-900 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform shrink-0">
                {services[2].icon}
             </div>
             <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{services[2].title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{services[2].description}</p>
             </div>
             <div className="flex flex-wrap gap-2 shrink-0">
                 {services[2].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-neutral-900 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                         {tag}
                      </span>
                   ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServicesPortfolio;
