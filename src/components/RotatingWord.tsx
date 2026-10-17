import { useEffect, useState } from "react";

export default function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rotator" aria-live="polite">
      {/* key change remounts the span so the enter animation replays */}
      <span key={index} className="rotator-word">
        {words[index]}
      </span>
    </span>
  );
}
