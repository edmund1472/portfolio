import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <Reveal className="contact-inner">
        <span className="section-index">03</span>
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-lead">Open to new grad roles — the inbox is always open.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {/* Two stacked copies; hover rolls the second one into view. */}
          <span className="roll">
            <span data-text={profile.email}>{profile.email}</span>
          </span>
          <span className="contact-arrow" aria-hidden>
            →
          </span>
        </a>
      </Reveal>

      <div className="contact-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link-arrow">
              {l.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
        <a href="#top" className="link-arrow">
          Back to top<span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
