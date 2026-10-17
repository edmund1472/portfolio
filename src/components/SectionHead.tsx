import Reveal from "./Reveal";

export default function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      {note && <span className="section-note">{note}</span>}
      <span className="section-line" aria-hidden />
    </Reveal>
  );
}
