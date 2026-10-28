import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

export function MediaCard({
  src,
  alt = 'HR University Campus',
  title,
  subtitle,
  tag,
  aspectRatio = 'aspect-[16/10]',
  isVideo = false,
  onClick,
  className = '',
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className={`
        relative rounded-[24px] overflow-hidden group cursor-pointer
        border border-app-border bg-app-surface1
        transition-all duration-300 shadow-xl
        ${className}
      `}
    >
      {/* Visual Image Viewport */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#0A0B1E]`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] filter brightness-95 group-hover:brightness-105"
        />

        {/* Shared Indigo & Midnight Color-Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#0A0B1E]/40 to-transparent transition-opacity duration-500 group-hover:opacity-85" />
        <div className="absolute inset-0 bg-[#5B5BF0]/10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />

        {/* Desktop Glare Simulation */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          {tag && (
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#0A0B1E]/75 text-hru-gold border border-hru-gold/30 backdrop-blur-md">
              {tag}
            </span>
          )}

          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-hru-gold group-hover:text-hru-midnight transition-colors duration-300">
            {isVideo ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <Eye className="w-4 h-4" />}
          </div>
        </div>

        {/* Bottom Captions & Sliding Arrow */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <div className="flex items-end justify-between gap-2">
            <div>
              {title && (
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-hru-gold transition-colors duration-200">
                  {title}
                </h4>
              )}
              {subtitle && (
                <p className="text-xs text-[#A4A8C4] line-clamp-2 mt-1">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-hru-gold">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MediaCard;
