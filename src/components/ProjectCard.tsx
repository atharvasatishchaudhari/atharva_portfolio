"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* ---------- Data Shape ---------- */
export type Project = {
  title: string;
  duration: string;
  image: string;
  link: string;
  points: string[];
  /** Leave undefined for projects with no publication */
  publication?: string;
};

/* ---------- Card Component ---------- */
export default function ProjectCard({ project }: { project: Project }) {
  const [startIndex, setStartIndex] = useState(0);
  const canScrollDown = startIndex + 3 < project.points.length;
  const canScrollUp = startIndex > 0;

  const handleNext = () => {
    if (canScrollDown) setStartIndex((prev) => prev + 3);
  };
  const handlePrev = () => {
    if (canScrollUp) setStartIndex((prev) => prev - 3);
  };

  return (
    <div className="bg-[#1B263B] shadow-lg rounded-lg w-full overflow-hidden">
      {/* ---------- IMAGE + TEXT ---------- */}
      <div className="flex flex-col md:flex-row items-stretch gap-12 px-4 py-6">
        {/* IMAGE */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "250px" }}
          className="flex-shrink-0 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "auto" }}
            className="object-cover rounded-lg"
          />
        </a>

        {/* TEXT */}
        <div className="flex-1 space-y-6">
          {/* Title & Duration */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h4 className="text-xl md:text-2xl font-bold">{project.title}</h4>
            <span className="text-sm md:text-base color-pulse">
              {project.duration}
            </span>
          </div>

{/* Bullet Points */}
<div className="space-y-3">
  {project.points.slice(startIndex, startIndex + 3).map((point, i) => (
    <div key={i} className="flex gap-3 items-start">
      <span className="text-[#D4AF37] text-lg animate-pulse">&gt;</span>

      {/* slightly larger than before, slimmer than original text-lg */}
      <span className="text-[15px] md:text-[17px] leading-snug">
        {point}
      </span>
    </div>
  ))}
</div>


          {/* Pagination Arrows */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={!canScrollUp}
              className={`p-1 rounded-full transition ${
                canScrollUp
                  ? "text-[#D4AF37] hover:bg-white/10 animate-pulse"
                  : "text-gray-500 opacity-50"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollDown}
              className={`p-1 rounded-full transition ${
                canScrollDown
                  ? "text-[#D4AF37] hover:bg-white/10 animate-pulse"
                  : "text-gray-500 opacity-50"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- PUBLICATION ROW (renders only if provided) ---------- */}
      {project.publication && (
        <div className="px-4 pb-6 group cursor-pointer">
          <div className="flex items-start gap-2 w-full">
            {/* static golden “>” */}
            <span className="!text-[#D4AF37] text-lg font-bold">&gt;</span>

            {/* text turns gold on hover (forced with !important) */}
            <span
              className="
                text-white group-hover:!text-[#D4AF37]
                transition-colors duration-300
                text-base md:text-lg flex-1 whitespace-pre-line
              "
            >
              {project.publication}
            </span>
          </div>

          {/* white underline + sliding gold overlay */}
          <div className="mt-2 w-full h-[2px] bg-white relative overflow-hidden">
            <span
              className="
                absolute left-0 top-0 h-full w-full bg-[#D4AF37]
                transform origin-left scale-x-0
                group-hover:scale-x-100
                transition-transform duration-500
              "
            />
          </div>
        </div>
      )}
    </div>
  );
}
