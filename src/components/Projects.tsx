import { Link, useNavigate } from 'react-router-dom';
import { X, Calendar, ArrowRight, Rocket } from 'lucide-react';
import { projects, statusConfig } from '../data/projects';

interface ProjectsProps {
  onClose: () => void;
}

export function Projects({ onClose }: ProjectsProps) {
  const navigate = useNavigate();

  const handleProjectClick = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="fixed inset-0 bg-black brutalist-grid overflow-y-auto z-[100]">
      {/* Header */}
      <div className="border-b-4 md:border-b-8 border-yellow-400 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex justify-between items-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-black text-yellow-400"
              style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
            >
              PROJECTS
            </h1>
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black border-3 md:border-4 border-black p-2 md:p-3 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
              aria-label="Close"
            >
              <X size={20} strokeWidth={3} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-20">
        <div className="space-y-6 md:space-y-12">
          {/* Intro */}
          <div className="bg-yellow-400 text-black border-4 md:border-8 border-black p-4 md:p-12 lg:p-16 harsh-shadow-grey">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 md:mb-8"
              style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
            >
              BUILDING IN PUBLIC
            </h2>
            <p
              className="text-sm md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A collection of personal projects I'm working on. Each entry documents the development journey, challenges faced, and lessons learned along the way.
            </p>
          </div>

          {/* Blog Entries */}
          <div className="space-y-6 md:space-y-8">
            {projects.map((entry) => (
              <article
                key={entry.id}
                className="bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-8 lg:p-12 harsh-shadow group cursor-pointer hover:border-white transition-all"
                onClick={() => handleProjectClick(entry.slug)}
              >
                {/* Entry Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 md:mb-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-yellow-400 text-black p-3 md:p-4 border-3 md:border-4 border-black">
                      <Rocket size={28} strokeWidth={3} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl md:text-4xl lg:text-5xl font-black text-yellow-400 group-hover:text-white transition-all"
                        style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
                      >
                        {entry.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 md:mt-2">
                        <Calendar size={14} strokeWidth={3} className="text-gray-500 md:w-4 md:h-4" />
                        <span
                          className="text-xs md:text-sm text-gray-500"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {entry.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`${statusConfig[entry.status].bg} ${statusConfig[entry.status].text} px-3 md:px-4 py-1 md:py-2 border-3 md:border-4 border-black font-black text-xs md:text-sm self-start`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {statusConfig[entry.status].label}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-900 border-3 md:border-4 border-gray-700 p-4 md:p-6 mb-4 md:mb-6">
                  <p
                    className="text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {entry.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-yellow-400 border-2 md:border-3 border-gray-600 px-2 md:px-3 py-1 text-xs md:text-sm font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-yellow-400 group-hover:text-white transition-all font-black text-sm md:text-lg"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  READ MORE
                  <ArrowRight size={18} strokeWidth={3} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="bg-gray-900 border-4 md:border-8 border-gray-700 p-4 md:p-8 harsh-shadow-grey">
            <h4
              className="text-lg md:text-2xl font-black text-yellow-400 mb-3 md:mb-4 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4"
              style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
            >
              MORE COMING SOON
            </h4>
            <div className="bg-black border-3 md:border-4 border-gray-700 p-3 md:p-4">
              <p
                className="text-sm md:text-lg text-gray-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                New projects and development logs will be added as I continue building and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
