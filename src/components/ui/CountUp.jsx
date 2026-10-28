import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Exponential ease out for high-impact cinematic deceleration
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function CountUp({
  to = 100,
  from = 0,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
  threshold = 0.2,
  onComplete,
  replayTrigger,
  replayOnClick = true,
  formatEnIn = true,
}) {
  const [currentValue, setCurrentValue] = useState(from);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const formatter = useRef(
    new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    formatter.current = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [decimals]);

  const startAnimation = useCallback(() => {
    if (prefersReducedMotion) {
      setCurrentValue(to);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
      return;
    }

    isAnimatingRef.current = true;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const rawVal = from + (to - from) * easedProgress;

      if (decimals > 0) {
        setCurrentValue(Number(rawVal.toFixed(decimals)));
      } else {
        setCurrentValue(Math.round(rawVal));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isAnimatingRef.current = false;
        setCurrentValue(to);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    };

    requestAnimationFrame(step);
  }, [to, from, duration, decimals, prefersReducedMotion]);

  // Initial IntersectionObserver trigger
  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startAnimation();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [startAnimation, threshold]);

  // Replay when replayTrigger changes
  useEffect(() => {
    if (replayTrigger !== undefined && hasAnimatedRef.current) {
      setCurrentValue(from);
      startAnimation();
    }
  }, [replayTrigger, from, startAnimation]);

  const handleClick = (e) => {
    if (replayOnClick && !isAnimatingRef.current) {
      e.stopPropagation();
      setCurrentValue(from);
      startAnimation();
    }
  };

  const formattedDisplay = formatEnIn
    ? formatter.current.format(currentValue)
    : currentValue.toLocaleString();

  const finalFormatted = formatEnIn
    ? formatter.current.format(to)
    : to.toLocaleString();

  return (
    <span
      ref={elementRef}
      onClick={handleClick}
      className={`tabular-nums inline-block select-none ${replayOnClick ? 'cursor-pointer hover:opacity-90' : ''} ${className}`}
      aria-label={`${prefix}${finalFormatted}${suffix}`}
      title={replayOnClick ? 'Click to replay counter' : undefined}
    >
      {prefix}
      {formattedDisplay}
      {suffix}
    </span>
  );
}

export default CountUp;
