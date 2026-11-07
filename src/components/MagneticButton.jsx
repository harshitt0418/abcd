import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic button wrapper that gently attracts toward the cursor on hover.
 * Adds that distinct high-end luxury feel found on award-winning studio sites.
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.2 }}
      className="inline-block"
    >
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.94 }}
        className={className}
        {...props}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
