import type { ReactNode } from "react";

type AnimatedTextProps = {
  children: ReactNode;
  className?: string;
};

function AnimatedText({
  children,
  className = "",
}: AnimatedTextProps) {
  return (
    <span
      className={`
        inline-block
        animate-text-reveal
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default AnimatedText;