import type { MouseEvent } from "react";
import { projects, type Project } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />;
  }
  return (
    <div className="img-placeholder">
      <span>Image placeholder</span>
      <code>public/projects/{project.placeholderFile}</code>
    </div>
  );
}

// Slight 3D tilt toward the cursor.
function tilt(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--rx", `${-y * 5}deg`);
  el.style.setProperty("--ry", `${x * 5}deg`);
}

function resetTilt(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHead index="01" title="Selected work" note={`${projects.length} projects`} />

      <div className="projects">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.title} className="project" delay={(i % 2) * 120}>
            <a
              className="project-image"
              href={p.url ?? p.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${p.title}`}
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
            >
              <ProjectImage project={p} />
              <span className="project-view">View ↗</span>
            </a>

            <div className="project-head">
              <h3>{p.title}</h3>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-foot">
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow">
                    Live<span aria-hidden>↗</span>
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link-arrow">
                    Code<span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
