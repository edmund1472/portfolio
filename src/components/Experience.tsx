import { experience } from "../data";
import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// Turns "**text**" into <strong>text</strong>.
function withBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export default function Experience() {
  const lineRef = useReveal<HTMLOListElement>(0.05);

  return (
    <section id="experience" className="section">
      <SectionHead index="02" title="Experience" />

      <ol className="jobs" ref={lineRef}>
        {experience.map((job, i) => (
          <Reveal as="li" key={i} className="job" delay={i * 80}>
            <span className="job-dot" aria-hidden />
            <div className="job-top">
              <h3>{job.role}</h3>
              <span className="job-dates">
                {job.start} – {job.end}
              </span>
            </div>
            <div className="job-company">
              {job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              <span className="sep">·</span>
              <span>{job.location}</span>
            </div>
            <ul>
              {job.points.map((pt, j) => (
                <li key={j}>{withBold(pt)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
