import { profile } from "../data";
import RotatingWord from "./RotatingWord";

export default function Hero() {
  let letterIndex = 0;

  return (
    <section id="top" className="hero">
      <p className="hero-status fade-in" style={{ animationDelay: "100ms" }}>
        <i aria-hidden /> {profile.status}
      </p>

      <h1 className="hero-name" aria-label={profile.name}>
        {profile.name.split(" ").map((word) => (
          <span key={word} className="hero-word" aria-hidden>
            {[...word].map((ch) => (
              <span
                key={letterIndex}
                className="hero-letter"
                style={{ animationDelay: `${200 + letterIndex++ * 45}ms` }}
              >
                {ch}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className="hero-sub fade-in" style={{ animationDelay: "800ms" }}>
        {profile.role} <span className="sep">/</span> <span className="nowrap">{profile.location}</span>
      </p>

      <p className="hero-tagline fade-in" style={{ animationDelay: "950ms" }}>
        I design and build <RotatingWord words={profile.building} />
      </p>

      <div className="hero-grid fade-in" style={{ animationDelay: "1100ms" }}>
        <div className="hero-about">
          <p>{profile.intro}</p>
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="hero-side">
          <h4>Toolkit</h4>
          <ul className="skills">
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h4>Elsewhere</h4>
          <div className="links">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link-arrow">
                {l.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a href="#work" className="scroll-cue fade-in" style={{ animationDelay: "1400ms" }}>
        <span>Scroll</span>
        <i aria-hidden />
      </a>
    </section>
  );
}
