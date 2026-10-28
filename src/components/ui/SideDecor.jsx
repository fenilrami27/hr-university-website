import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import decorData from '../../data/decor';

// Global video manager to ensure at most 2 decor videos play simultaneously
class VideoManager {
  constructor() {
    this.activeVideos = new Set();
    this.maxPlaying = 2;
  }

  requestPlay(videoEl) {
    if (this.activeVideos.size >= this.maxPlaying) {
      return false;
    }
    this.activeVideos.add(videoEl);
    videoEl.play().catch(() => {});
    return true;
  }

  release(videoEl) {
    if (this.activeVideos.has(videoEl)) {
      this.activeVideos.delete(videoEl);
      try {
        videoEl.pause();
      } catch {}
    }
  }
}

const globalVideoManager = new VideoManager();

// Small Decor Video Tile Component
function DecorVideoTile({ item }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          globalVideoManager.requestPlay(el);
        } else {
          globalVideoManager.release(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      globalVideoManager.release(el);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-36 2xl:w-44 rounded-2xl overflow-hidden p-1 bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105"
      style={{
        boxShadow: `0 12px 30px -8px ${item.glow || 'rgba(91,91,240,0.3)'}`,
        transform: `rotate(${item.rotation || 0}deg)`,
      }}
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-xs">
          {item.tag || 'LAB LOOP'}
        </span>
      </div>
    </div>
  );
}

// Side Item Renderer
function RenderDecorItem({ item, side }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });

  const speed = item?.speed || 0.08;
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [speed * -120, speed * 120]
  );

  if (!item) return null;

  switch (item.type) {
    case 'rail': {
      return (
        <motion.div
          ref={itemRef}
          style={{ y: parallaxY }}
          className="flex flex-col items-center gap-4 text-app-muted select-none"
        >
          {/* Index & Section Label */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs font-black tracking-widest text-hru-gold bg-hru-gold/10 border border-hru-gold/30 px-2 py-0.5 rounded-full">
              {item.index}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-app-muted">
              {item.sectionName}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="flex flex-col gap-1.5 py-1">
            {Array.from({ length: item.dots || 6 }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === item.activeDot ? 'bg-hru-gold scale-125' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Vertical Rotated Text Rail */}
          <div className="h-44 flex items-center justify-center overflow-hidden">
            <span
              className="font-mono text-[10px] uppercase font-bold tracking-[0.22em] text-white/50 whitespace-nowrap [writing-mode:vertical-rl] rotate-180"
            >
              {item.text}
            </span>
          </div>
        </motion.div>
      );
    }

    case 'photo': {
      let maskClass = 'rounded-2xl';
      if (item.mask === 'arch') {
        maskClass = 'rounded-t-full rounded-b-2xl';
      } else if (item.mask === 'polaroid') {
        maskClass = 'rounded-xl p-2 pb-5 bg-white text-black shadow-2xl';
      } else if (item.mask === 'blob') {
        maskClass = 'rounded-[32px_12px_32px_12px]';
      }

      return (
        <motion.div
          ref={itemRef}
          style={{ y: parallaxY }}
          className="relative select-none"
        >
          {/* Ambient Glow Blob */}
          {item.blobColor && (
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10"
              style={{ backgroundColor: item.blobColor }}
            />
          )}

          <div
            className={`w-36 2xl:w-44 overflow-hidden shadow-2xl border border-white/20 transition-transform duration-500 hover:scale-105 ${maskClass}`}
            style={{
              transform: `rotate(${item.rotation || 0}deg)`,
              boxShadow: `0 14px 34px -8px ${item.glow || 'rgba(0,0,0,0.4)'}`,
            }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={item.photo}
                alt={item.caption || 'Campus Life'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {item.caption && (
              <div className="pt-1.5 px-1 text-center">
                <span
                  className={`block text-[10px] font-mono tracking-wider uppercase font-semibold ${
                    item.mask === 'polaroid' ? 'text-black' : 'text-white/80'
                  }`}
                >
                  {item.caption}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    case 'video': {
      return (
        <motion.div ref={itemRef} style={{ y: parallaxY }} className="select-none">
          <DecorVideoTile item={item} />
        </motion.div>
      );
    }

    case 'giant-word': {
      return (
        <motion.div
          ref={itemRef}
          style={{ y: parallaxY }}
          className={`select-none pointer-events-none opacity-20 hover:opacity-30 transition-opacity ${
            side === 'left' ? '-translate-x-12' : 'translate-x-12'
          }`}
        >
          <span
            className="text-7xl 2xl:text-8xl font-black font-heading tracking-tighter text-transparent block [writing-mode:vertical-rl] rotate-180"
            style={{
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.45)',
            }}
          >
            {item.word}
          </span>
        </motion.div>
      );
    }

    case 'sticker': {
      return (
        <motion.div
          ref={itemRef}
          style={{ y: parallaxY }}
          className="flex flex-col items-center gap-3 select-none"
        >
          <div
            className="px-3 py-1.5 rounded-full border text-xs font-mono font-black tracking-wider uppercase backdrop-blur-md shadow-lg"
            style={{
              borderColor: `${item.color}50`,
              backgroundColor: `${item.color}15`,
              color: item.color,
              transform: 'rotate(-8deg)',
            }}
          >
            {item.stickerText}
          </div>

          {/* Doodles (Star or Spiral SVG) */}
          {item.doodle === 'star' && (
            <svg
              className="w-8 h-8 animate-spin"
              style={{ animationDuration: '15s', color: item.color }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          )}

          {item.doodle === 'spiral' && (
            <svg
              className="w-10 h-10 text-hru-gold opacity-60"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 20 A4 4 0 0 1 24 24 A8 8 0 0 1 16 32 A12 12 0 0 1 8 20 A16 16 0 0 1 24 4" />
            </svg>
          )}
        </motion.div>
      );
    }

    case 'calm': {
      return (
        <div className="flex flex-col items-center gap-2 opacity-35 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-hru-gold" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-app-muted [writing-mode:vertical-rl] rotate-180">
            {item.text}
          </span>
        </div>
      );
    }

    default:
      return null;
  }
}

// Main Reusable SideDecor Component
export function SideDecor({ section = 'hero' }) {
  const config = decorData[section];
  if (!config) return null;

  return (
    <div
      aria-hidden="true"
      className="hidden xl:block pointer-events-none absolute inset-y-0 inset-x-0 w-full overflow-visible z-20"
    >
      {/* Left Decor Gutter */}
      {config.left && (
        <div className="absolute left-2 2xl:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <RenderDecorItem item={config.left} side="left" />
        </div>
      )}

      {/* Right Decor Gutter */}
      {config.right && (
        <div className="absolute right-2 2xl:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <RenderDecorItem item={config.right} side="right" />
        </div>
      )}
    </div>
  );
}

export default SideDecor;
