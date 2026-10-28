import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  badgeColor = 'gold', // 'gold' | 'indigo' | 'aurora'
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) {
  const badgeColors = {
    gold: 'text-hru-gold border-hru-gold/30 bg-hru-gold/10 shadow-[0_0_15px_var(--hru-gold-glow)]',
    indigo: 'text-hru-indigo border-hru-indigo/30 bg-hru-indigo/10 shadow-[0_0_15px_var(--hru-indigo-glow)]',
    aurora: 'text-white border-white/20 bg-gradient-to-r from-[#5B5BF0]/20 to-[#22D3EE]/20',
  };

  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-4"
        >
          <span
            className={`
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              border font-mono text-xs tracking-widest uppercase font-semibold
              backdrop-blur-md
              ${badgeColors[badgeColor] || badgeColors.gold}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-app-text leading-[1.08]"
      >
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold underline decoration-hru-gold/40 decoration-1 underline-offset-8">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-app-muted leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;
