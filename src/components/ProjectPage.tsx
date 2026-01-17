import { useParams, useNavigate } from 'react-router-dom';
import { X, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { getProjectBySlug, statusConfig } from '../data/projects';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="fixed inset-0 bg-black brutalist-grid overflow-y-auto z-[100]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-20">
          <div className="bg-yellow-400 text-black border-4 md:border-8 border-black p-4 md:p-12 lg:p-16 harsh-shadow-grey">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 md:mb-8"
              style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
            >
              PROJECT NOT FOUND
            </h2>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 md:gap-3 bg-black text-yellow-400 border-3 md:border-4 border-black px-4 md:px-6 py-3 md:py-4 hover:bg-yellow-400 hover:text-black transition-all font-black text-sm md:text-lg"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <ArrowLeft size={18} strokeWidth={3} className="md:w-5 md:h-5" />
              BACK TO PROJECTS
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              {project.title}
            </h1>
            <button
              onClick={() => navigate('/projects')}
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
          {/* Back link */}
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-all font-bold text-sm md:text-base"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <ArrowLeft size={16} strokeWidth={3} />
            BACK TO PROJECTS
          </button>

          {/* Project Header */}
          <div className="bg-yellow-400 text-black border-4 md:border-8 border-black p-4 md:p-12 lg:p-16 harsh-shadow-grey">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 md:mb-6">
              <h2
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
                style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
              >
                {project.title}
              </h2>
              <div
                className={`${statusConfig[project.status].bg} ${statusConfig[project.status].text} px-3 md:px-4 py-1 md:py-2 border-3 md:border-4 border-black font-black text-xs md:text-sm self-start`}
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {statusConfig[project.status].label}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Calendar size={16} strokeWidth={3} className="md:w-5 md:h-5" />
              <span
                className="text-sm md:text-lg font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.date}
              </span>
            </div>
            <p
              className="text-sm md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.summary}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-yellow-400 border-2 md:border-3 border-gray-600 px-3 md:px-4 py-2 text-sm md:text-base font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-8 lg:p-12 harsh-shadow">
            <h3
              className="text-lg md:text-2xl lg:text-3xl font-black text-yellow-400 mb-4 md:mb-6 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4"
              style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
            >
              THE STORY
            </h3>
            <div className="space-y-4 md:space-y-6">
              {project.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 bg-yellow-400 text-black border-3 md:border-4 border-black px-4 md:px-6 py-3 md:py-4 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all font-black text-sm md:text-lg"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {link.label}
                  <ArrowRight size={18} strokeWidth={3} className="md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
