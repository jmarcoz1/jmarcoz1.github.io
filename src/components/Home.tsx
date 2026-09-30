import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { projects, statusConfig, type Project } from '../data/projects';

const facts = [
  { label: 'Education', value: 'MSc in Cloud Computing · BSc in Telecommunications' },
  { label: 'Languages', value: 'Spanish (native) · English (C2) · German (B1)' },
];

export function ProjectArtwork({ project }: { project: Project }) {
  switch (project.slug) {
    case 'starker':
      return (
        <div className="artwork artwork-starker" aria-hidden="true">
          <div className="starker-orbit orbit-one" />
          <div className="starker-orbit orbit-two" />
          <div className="starker-center"><span>ST</span></div>
          <div className="art-note note-top">TRAINING, ON YOUR TERMS</div>
          <div className="art-note note-bottom">a little stronger each time ↗</div>
          <div className="starker-spark">✳</div>
        </div>
      );
    case 'bank-tracker':
      return (
        <div className="artwork artwork-bank" aria-hidden="true">
          <div className="receipt-card">
            <span className="receipt-label">THE SMALL STUFF ADDS UP</span>
            <span className="receipt-line line-long" />
            <span className="receipt-line line-short" />
            <span className="receipt-line line-mid" />
            <span className="receipt-rule" />
            <span className="receipt-total">tap <b>→</b> tracked</span>
          </div>
          <span className="bank-stamp">NO BANK<br />LOGIN</span>
        </div>
      );
    case 'rise':
      return (
        <div className="artwork artwork-rise" aria-hidden="true">
          <div className="rise-sun" />
          <div className="rise-horizon" />
          <div className="rise-copy"><span>ALARM</span><b>OFF</b></div>
          <svg className="rise-line" viewBox="0 0 260 90" fill="none">
            <path d="M7 69c22 0 21-36 43-36s20 28 42 28 22-48 44-48 19 49 41 49 20-18 39-18 24 25 37 25" />
          </svg>
          <span className="rise-caption">15 seconds. Then you're up.</span>
        </div>
      );
    case 'frontier':
      return (
        <div className="artwork artwork-frontier" aria-hidden="true">
          <div className="frontier-query"><span>LOOKING INTO</span><b>your next market</b><i>⌕</i></div>
          <svg className="frontier-lines" viewBox="0 0 400 230" fill="none">
            <path d="M196 209c-51-11-88-42-94-86-5-39 19-70 56-81 42-12 91 9 105 46 15 40-13 88-51 89-28 1-47-20-44-45 2-20 22-33 39-26 15 6 18 25 8 35" />
            <path d="M218 214c75-16 117-64 112-122-5-57-61-91-122-82-74 11-124 64-115 126" />
            <path d="M180 215c-39-24-56-55-49-91 7-36 37-57 69-49 35 8 53 44 40 72-10 21-36 28-53 15-11-9-12-26-3-34" />
          </svg>
          <span className="frontier-note">show me the source</span>
        </div>
      );
    case 'pokeweb':
      return (
        <div className="artwork artwork-pokeweb" aria-hidden="true">
          <div className="pixel-window">
            <div className="pixel-toolbar"><i /><i /><i /><span>PLATINUM / WILD AREAS</span></div>
            <div className="pixel-body">
              <div className="pixel-creature">
                <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="pixel-list"><b /> <b /> <b /> <b /></div>
            </div>
          </div>
          <span className="pokeweb-caption">A save editor, minus the hex.</span>
        </div>
      );
    case 'yeppers':
      return (
        <div className="artwork artwork-yeppers" aria-hidden="true">
          <div className="yeppers-dialogue">
            <span>THE QUESTION</span>
            <p>Did we finish that endpoint?</p>
          </div>
          <svg className="yeppers-arrow" viewBox="0 0 90 45" fill="none">
            <path d="M4 7c22 8 41 14 73 29M57 34l21 3-3-21" />
          </svg>
          <div className="yeppers-reply"><span>THE ANSWER</span><b>Yeppers.</b></div>
          <span className="yeppers-margin">and the name stuck</span>
        </div>
      );
    default:
      return (
        <div className="artwork artwork-inkpair" aria-hidden="true">
          <span className="inkpair-label">a note for you</span>
          <svg className="inkpair-doodle" viewBox="0 0 380 190" fill="none">
            <path d="M16 117c40-40 47 51 81 2 28-41 38-47 44-11 4 27 15 33 31 0 18-37 35-40 39-6 3 25 15 37 31 6 21-40 42-40 45-4 2 24 14 34 28 9 18-32 36-35 47-5" />
            <path d="M29 153c31-13 64 5 96-6 25-8 47-16 72-9 34 10 63 12 92-2 26-12 46-8 69 0" />
            <path d="M275 41c10-16 32-11 32 3 0 12-21 19-31 35-7-13-27-25-19-38 5-9 15-8 18 0Z" />
          </svg>
          <span className="inkpair-caption">made by hand, sent with care</span>
        </div>
      );
  }
}

function ProjectVisual({ project }: { project: Project }) {
  if (!project.screenshots?.length) return <ProjectArtwork project={project} />;

  const screenshots = project.screenshots.slice(0, 2);

  return (
    <div className={`artwork screenshot-artwork screenshot-artwork-${project.slug}`} aria-label={`${project.title} app screenshots`}>
      {screenshots.map((screenshot, index) => (
        <figure className={`screenshot-device screenshot-device-${index + 1}`} key={screenshot.src}>
          <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = index === 0;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card group ${featured ? 'project-card-featured' : ''}`}
    >
      <ProjectVisual project={project} />
      <div className="project-card-copy">
        <div className="project-meta-row">
          <span>
            {[project.year, project.status ? statusConfig[project.status].label : undefined].filter(Boolean).join(' · ') || 'The name story'}
          </span>
          <ArrowUpRight size={17} strokeWidth={1.8} className="project-arrow" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-tags">
          {project.tags.length > 0
            ? project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)
            : <span>Named in conversation</span>}
        </div>
      </div>
    </Link>
  );
}

export function Home() {
  return (
    <main>
      <section className="hero-wrap page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Software engineer <span className="eyebrow-divider">/</span> Spain</p>
          <h1>I build software from the API to the App Store.</h1>
          <p className="hero-intro">
            I’m Jorge. I started in telecom, moved into Python backends and cloud
            infrastructure, and lately I’ve been building native iOS apps. I like
            owning the work all the way through.
          </p>
          <button className="text-link hero-work-link" type="button" onClick={() => {
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.getElementById('work')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
          }}>
            Take a look at the work <ArrowDown size={15} strokeWidth={1.8} />
          </button>
        </div>
        <aside className="hero-aside" aria-label="A note about Jorge">
          <div className="hero-aside-top"><span>OFF THE CLOCK</span><span>26.2 MI</span></div>
          <p className="race-time">3:41</p>
          <p className="race-caption">MARATHON <span>·</span> PERSONAL BEST</p>
          <div className="aside-rule" />
          <p className="aside-small">A lot of early starts, one very good day.</p>
          <span className="aside-scribble" aria-hidden="true">J.</span>
        </aside>
      </section>

      <section className="production-wrap page-width" aria-labelledby="production-title">
        <div className="section-kicker-row">
          <h2 id="production-title" className="section-kicker">In production</h2>
          <span className="section-kicker-note">A few things I’ve shipped at work</span>
        </div>
        <div className="production-grid">
          <article className="production-feature production-latest">
            <div className="production-feature-main">
              <span className="work-place">CORINEX <span>·</span> FIELD ENGINEERING <em className="latest-tag">Latest</em></span>
              <p className="impact-number">70%</p>
              <p className="impact-label">less QA workload</p>
            </div>
            <div className="production-feature-copy">
              <h3>Four Jira screens and Jenkins, in one place.</h3>
              <p>Even though my job is field engineering, I built and shipped a tool for the QA team. It bridges four different Jira screens, each slow to open, and Jenkins. That is where most of the 70% comes from.</p>
              <p className="work-stack">Python · FastAPI · Redis · Celery · Jinja · Jira · Jenkins</p>
            </div>
          </article>
          <article className="production-feature">
            <div className="production-feature-main">
              <span className="work-place">MERCADONA <span>·</span> CLOUD PLATFORM</span>
              <p className="impact-number">€250k<span>/year</span></p>
              <p className="impact-label">less cloud spend</p>
            </div>
            <div className="production-feature-copy">
              <h3>Self-service cloud resource management.</h3>
              <p>Built a FastAPI service that let product teams manage cloud resources themselves—reducing spend and removing a bottleneck for the infrastructure team.</p>
              <p className="work-stack">Python · FastAPI · Kubernetes · PostgreSQL · GCP</p>
            </div>
          </article>
          <article className="production-secondary">
            <span className="work-place">MAXLINEAR <span>·</span> ASIC ENGINEERING</span>
            <h3>CI/CD for ASIC design flows.</h3>
            <p>Built tooling for an ASIC engineering team, from Jenkins and Docker pipelines to the Python services and React interface around them.</p>
            <p className="work-stack">Python · Jenkins · Docker · React</p>
          </article>
        </div>
      </section>

      <section id="work" className="work-wrap page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark" /> Selected work</p>
            <h2>Things I’ve been making.</h2>
          </div>
          <p className="section-heading-note">Personal projects—some shipped, some still on the bench.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </section>

      <section id="about" className="about-wrap page-width">
        <div className="about-topline">
          <p className="eyebrow"><span className="eyebrow-mark" /> A little about me</p>
          <span className="about-doodle" aria-hidden="true">still curious ↘</span>
        </div>
        <div className="about-grid">
          <div>
            <h2>Engineer by training.<br /><em>Builder by habit.</em></h2>
            <p className="about-copy">Telecom taught me to think in systems; cloud and backend work made that useful. These days I spend plenty of free time learning Swift and turning small annoyances into apps. I still enjoy the infrastructure underneath them.</p>
          </div>
          <dl className="facts-list">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
