import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProjectBySlug, statusConfig } from '../data/projects';
import { ProjectArtwork } from './Home';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="project-page page-width">
        <h1 className="project-page-title">Couldn’t find that one.</h1>
        <p className="project-page-summary">Maybe it moved. The rest of the work is still here.</p>
        <Link to="/" className="back-link"><ArrowLeft size={15} /> Back to the projects</Link>
      </main>
    );
  }

  return (
    <main className="project-page page-width">
      <Link to="/" className="back-link"><ArrowLeft size={15} /> All projects</Link>
      {project.screenshots?.length ? (
        <div className="screenshot-gallery" role="region" tabIndex={0} aria-label={`${project.title} app screenshots`}>
          {project.screenshots.map((screenshot) => (
            <figure key={screenshot.src}>
              <div className="detail-screenshot-frame">
                <img src={screenshot.src} alt={screenshot.alt} />
              </div>
              <figcaption>{screenshot.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="project-detail-art"><ProjectArtwork project={project} /></div>
      )}
      <header className="project-detail-heading">
        <div className="project-detail-meta">
          {project.year && <span>{project.year}</span>}
          {project.year && project.status && <span className="meta-dot">·</span>}
          {project.status && <span>{statusConfig[project.status].label}</span>}
          {!project.year && !project.status && <span>Named in conversation</span>}
        </div>
        <h1 className="project-page-title">{project.title}</h1>
        <p className="project-page-summary">{project.summary}</p>
      </header>

      <div className="project-detail-content">
        <div className="project-story">
          <p className="detail-overline">The project</p>
          <div className="project-prose">
            {project.description.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          </div>
        </div>
        <aside className="project-detail-sidebar">
          {project.tags.length > 0 && (
            <div className="detail-stack">
              <p className="detail-overline">Made with</p>
              <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="detail-links">
              <p className="detail-overline">Take a look</p>
              {project.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>
      <div className="next-project-row">
        <Link to="/"><ArrowLeft size={15} /> Back to all projects</Link>
      </div>
    </main>
  );
}
