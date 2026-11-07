import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated number counter with smooth easing.
 * When in view, counts from startValue to endValue.
 */
export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId = null;

    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      
      const current = Math.floor(from + (to - from) * easedProgress);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
