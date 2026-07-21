import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
};

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    zoom: "scale-95",
  };

  return (
  <div
    ref={ref}
    style={{ transitionDelay: `${delay}ms` }}
    className={`
      transition-all duration-700 ease-out
      ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100 pointer-events-auto"
          : `opacity-0 ${directions[direction]} pointer-events-none`
      }
      ${className}
    `}
  >
    {children}
  </div>
);
}

export default ScrollReveal;