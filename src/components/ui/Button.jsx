import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Button({
  children,
  to,
  href,
  variant = 'gold', // 'gold' | 'indigo' | 'glass' | 'outline' | 'ghost'
  size = 'md',       // 'sm' | 'md' | 'lg'
  magnetic = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.22;
    const deltaY = (clientY - centerY) * 0.22;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  // Brand token based variants
  const variantStyles = {
    gold: 'bg-hru-gold text-hru-midnight font-bold hover:bg-hru-gold-hover hover:shadow-gold-glow active:bg-hru-gold-deep',
    indigo: 'bg-hru-indigo text-white font-semibold hover:bg-hru-indigo-hover hover:shadow-indigo-glow active:bg-hru-indigo-deep',
    glass: 'bg-white/10 dark:bg-white/5 border border-white/15 text-app-text backdrop-blur-md hover:bg-white/15 dark:hover:bg-white/10',
    outline: 'border-2 border-hru-gold text-app-text hover:bg-hru-gold hover:text-hru-midnight',
    ghost: 'text-app-text hover:bg-black/5 dark:hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-full gap-1.5 font-medium tracking-wide',
    md: 'text-sm px-6 py-3 rounded-full gap-2 font-semibold tracking-wide',
    lg: 'text-base px-8 py-4 rounded-full gap-2.5 font-bold tracking-wider',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center transition-all duration-200
    cursor-pointer select-none overflow-hidden
    active:scale-95 disabled:opacity-50 disabled:pointer-events-none
    ${variantStyles[variant] || variantStyles.gold}
    ${sizeStyles[size] || sizeStyles.md}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 280, damping: 22, mass: 0.1 },
    whileTap: { scale: 0.96 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`group ${baseClasses}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${baseClasses}`} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${baseClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
