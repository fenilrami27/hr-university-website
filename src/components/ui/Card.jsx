import React from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = 'gold', // 'gold' | 'indigo' | 'none'
  onClick,
  ...props
}) {
  const glowClasses = {
    gold: 'hover:border-hru-gold/50 hover:shadow-gold-glow',
    indigo: 'hover:border-hru-indigo/50 hover:shadow-indigo-glow',
    none: '',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : {}}
      className={`
        relative rounded-[24px] p-6 sm:p-8
        bg-app-surface1
        backdrop-blur-xl
        border border-app-border
        transition-all duration-300
        ${glowClasses[glow] || glowClasses.gold}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
