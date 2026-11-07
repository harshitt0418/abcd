import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Ambient floating gold dust particles.
 * Simulates atmospheric champagne gold dust motes drifting in the dark exhibit space.
 */
export default function GoldDustParticles({ count = 28 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 2.5 + 1, // 1 to 3.5px
      duration: Math.random() * 8 + 6, // 6 to 14s
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.25,
      driftX: (Math.random() - 0.5) * 40,
      driftY: -(Math.random() * 60 + 20),
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 2}px rgba(212, 175, 55, 0.8)`,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
