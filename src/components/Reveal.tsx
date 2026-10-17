import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  as?: ElementType;
  className?: string;
  delay?: number; // ms
  children: ReactNode;
};

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
