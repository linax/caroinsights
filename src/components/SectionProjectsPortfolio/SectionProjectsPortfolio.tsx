"use client";

import React, { FC } from "react";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export interface SectionProjectsPortfolioProps {
  className?: string;
}

const projects = [
  {
    title: "API de Geo-Accesibilidad",
    description: "Una API RESTful que agrega datos de accesibilidad de múltiples fuentes para proporcionar puntuaciones de navegación en tiempo real e inclusiva en entornos urbanos.",
    stack: ["Node.js", "PostGIS", "Redis", "Docker"],
    githubUrl: "#",
    demoUrl: "#",
    color: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800"
  },
  {
    title: "Panel de Santiago",
    description: "Plataforma interactiva de visualización de datos para monitorear métricas urbanas en Santiago de Chile. Incluye gráficos en tiempo real, capas de mapas y modelos predictivos.",
    stack: ["React", "D3.js", "Mapbox", "AWS Lambda"],
    githubUrl: "#",
    demoUrl: "#",
    color: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800"
  },
  {
    title: "Experimentos Cuánticos",
    description: "Colección de notebooks de Jupyter y scripts en Python que demuestran algoritmos cuánticos básicos usando Qiskit, incluyendo Búsqueda de Grover y Algoritmo de Shor.",
    stack: ["Python", "Qiskit", "Jupyter", "Linear Algebra"],
    githubUrl: "#",
    demoUrl: "#",
    color: "bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800"
  }
];

const SectionProjectsPortfolio: FC<SectionProjectsPortfolioProps> = ({
  className = "",
}) => {
  return (
    <div
      id="featured-projects"
      className={`nc-SectionProjectsPortfolio relative py-16 lg:py-28 bg-white dark:bg-neutral-900/50 ${className}`}
      data-nc-id="SectionProjectsPortfolio"
    >
      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                   Proyectos y experimentos
                </h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
                    Te comparto algunos de mis proyectos públicos, ¿hay alguno del que te gustaría conversar? hello@caroinsights.com
                </p>
            </div>
            <ButtonSecondary href="https://github.com/linax" targetBlank className="!border-neutral-200 dark:!border-neutral-700">
                <span>Ver GitHub</span>
                <ArrowTopRightOnSquareIcon className="w-5 h-5 ms-2" />
            </ButtonSecondary>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className={`flex flex-col h-full p-8 rounded-3xl border ${project.color} transition-all hover:-translate-y-1 hover:shadow-lg`}>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">{project.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                             {project.stack.map(tech => (
                                <span key={tech} className="px-2.5 py-1 bg-white dark:bg-neutral-900 rounded-md text-xs font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                                    {tech}
                                </span>
                             ))}
                        </div>
                    </div>
                    <div className="mt-auto flex items-center gap-4 pt-6 border-t border-neutral-200/50 dark:border-neutral-700/50">
                        <a href={project.githubUrl} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-indigo-400">Código</a>
                        <span className="text-neutral-300 dark:text-neutral-600">|</span>
                        <a href={project.demoUrl} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-indigo-400">Demo en Vivo</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProjectsPortfolio;
