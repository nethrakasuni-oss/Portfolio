import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type IntroScreenProps = {
  onEnter: () => void;
};

/**
 * Canvas-based "growing nebula" intro effect.
 * A single bright point expands outward into a wobbling, glittering
 * sphere of particles, which keeps rotating and morphing before
 * handing off to the card.
 */
function NebulaGrow({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 420; // logical px, square canvas
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const PARTICLE_COUNT = 520;
    const GROWTH_DURATION = 1400; // ms to expand from a point to full size
    const HOLD_DURATION = 1800; // ms of continued morphing after fully grown
    const TOTAL_DURATION = GROWTH_DURATION + HOLD_DURATION;

    type Particle = {
      angle: number;
      radiusOffset: number; // 0..1, position within the shell's thickness
      jitter: number;
      phase1: number;
      phase2: number;
      twinkleSpeed: number;
      twinklePhase: number;
      sizeBase: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      radiusOffset: Math.random(),
      jitter: (Math.random() - 0.5) * 14,
      phase1: Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      twinkleSpeed: 4 + Math.random() * 6,
      twinklePhase: Math.random() * Math.PI * 2,
      sizeBase: Math.random() * 1.6 + 0.4,
    }));

    let raf = 0;
    let start = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const growT = easeOutCubic(Math.min(elapsed / GROWTH_DURATION, 1));

      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;

      // Shape expands from a point up to full size, then keeps morphing
      const baseRadius = 100 * growT;
      const rotation = (elapsed / 1000) * 1.6;
      const wobbleAmp = 24 * growT;
      const shellThickness = 32 * growT;

      particles.forEach((p) => {
        const wobble =
          Math.sin(p.angle * 3 + rotation + p.phase1) * wobbleAmp * 0.6 +
          Math.sin(p.angle * 5 + rotation * 1.3 + p.phase2) * wobbleAmp * 0.4;

        const r =
          baseRadius +
          wobble +
          (p.radiusOffset - 0.5) * shellThickness +
          p.jitter * growT;

        const theta = p.angle + rotation * 0.3;
        const x = cx + Math.cos(theta) * Math.max(r, 0);
        const y = cy + Math.sin(theta) * Math.max(r, 0) * 0.92; // slight squash

        const twinkle =
          0.5 + 0.5 * Math.sin((elapsed / 1000) * p.twinkleSpeed + p.twinklePhase);
        const alpha = (0.25 + twinkle * 0.75) * growT;
        const dotSize = p.sizeBase * (0.4 + growT * 0.6 + twinkle * 0.4);

        const isBright = twinkle > 0.85;
        ctx.beginPath();
        ctx.fillStyle = isBright
          ? `rgba(255,255,255,${alpha})`
          : `rgba(150,170,255,${alpha * 0.8})`;
        ctx.arc(x, y, Math.max(dotSize, 0.3), 0, Math.PI * 2);
        ctx.fill();
      });

      // Bright core point — strong at the very start, fades as the blob fills out
      const coreAlpha = 0.9 * (1 - growT) + 0.15;
      const coreRadius = 3 - growT * 1.6;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius * 6);
      gradient.addColorStop(0, `rgba(255,255,255,${coreAlpha})`);
      gradient.addColorStop(0.4, `rgba(180,190,255,${coreAlpha * 0.5})`);
      gradient.addColorStop(1, "rgba(180,190,255,0)");
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(cx, cy, coreRadius * 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${coreAlpha})`;
      ctx.arc(cx, cy, Math.max(coreRadius, 0.5), 0, Math.PI * 2);
      ctx.fill();

      if (elapsed < TOTAL_DURATION) {
        raf = requestAnimationFrame(draw);
      } else {
        onComplete();
      }
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute z-20" />;
}

function IntroScreen({ onEnter }: IntroScreenProps) {
  const [showCard, setShowCard] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);

    setTimeout(() => {
      onEnter();
    }, 2200);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,106,212,0.25),transparent_35%),radial-gradient(circle_at_30%_25%,rgba(210,61,124,0.25),transparent_30%)]" />

      {/* Growing nebula intro — a point expands into a morphing glowing blob */}
      {!showCard && <NebulaGrow onComplete={() => setShowCard(true)} />}

      <AnimatePresence>
        {showCard && !isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2, rotate: -8, filter: "blur(25px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onClick={handleEnter}
            className="glass relative z-10 w-full max-w-md cursor-pointer rounded-[2rem] p-8 text-center transition hover:scale-105"
          >
            <h1 className="gradient-text text-6xl font-black">Portfolio </h1>

            <h2 className="gradient-text text-2xl font-black">Nethra Weerasingha </h2>


            <p className="mt-3 text-white/70">Full Stack developer aspiring in AI/ML</p>

            <p className="mt-8 text-sm text-white/50">Click here </p>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpening && (
        <div className="absolute inset-0 z-10">
          {Array.from({ length: 80 }).map((_, index) => (
            <motion.span
              key={index}
              initial={{ x: "50vw", y: "50vh", opacity: 1, scale: 0 }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0,
                scale: Math.random() * 1.5 + 0.5,
              }}
              transition={{ duration: 2, ease: "easeOut", delay: Math.random() * 0.4 }}
              className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_12px_white]"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default IntroScreen;