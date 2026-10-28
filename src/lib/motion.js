// HR University Motion System Tokens & Framer Motion Presets

export const MOTION_EASE = [0.22, 1, 0.36, 1]; // Main smooth spring curve
export const MOTION_EXPO = [0.16, 1, 0.3, 1];  // Fast impact deceleration
export const DURATION_NORMAL = 0.6;
export const DURATION_FAST = 0.3;
export const DURATION_SLOW = 0.85;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_NORMAL, ease: MOTION_EASE },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_NORMAL, ease: MOTION_EASE },
  },
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION_NORMAL, ease: MOTION_EASE },
  },
};

export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalPanel = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: MOTION_EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.25 },
  },
};
