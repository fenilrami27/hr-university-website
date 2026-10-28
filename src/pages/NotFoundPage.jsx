import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import Button from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-hru-gold/15 border border-hru-gold/30 text-hru-gold flex items-center justify-center mb-6 shadow-gold-glow animate-bounce">
        <Compass className="w-8 h-8" />
      </div>

      <span className="font-mono text-xs uppercase tracking-widest text-hru-gold px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 mb-4">
        ERROR 404 // COORDINATES UNMAPPED
      </span>

      <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight mb-4">
        YOU HAVE VENTURED BEYOND THE CAMPUS.
      </h1>

      <p className="text-app-muted text-sm sm:text-base leading-relaxed mb-8">
        Even on our 512-H100 cluster, this quantum node doesn't exist. Let's redirect you back to the main studio campus.
      </p>

      <div className="flex items-center gap-4">
        <Button to="/" variant="gold" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
          Return to Quad
        </Button>
        <Button to="/programs" variant="glass" size="md">
          Browse Studios
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
