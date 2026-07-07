"use client";

import { useEffect, useState } from "react";

export function DustParticles() {
  const [particles, setParticles] = useState<{
    id: number;
    left: string;
    top: string;
    size: string;
    duration: string;
    delay: string;
  }[]>([]);

  useEffect(() => {
    // Generate particles only on the client side so it doesn't cause hydration mismatch
    const newParticles = Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.5 + 1}px`,
      duration: `${Math.random() * 20 + 15}s`,
      delay: `-${Math.random() * 20}s`, // Negative delay so they start already scattered
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gray-400/40 animate-dust"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
