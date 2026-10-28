import React, { useState } from 'react';
import { Shield, Fingerprint, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export function PortalPage() {
  const [tab, setTab] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Shield className="w-3.5 h-3.5" />
          Encrypted SSO Gateway
        </div>
        <h1 className="text-3xl sm:text-5xl font-black font-heading text-app-text tracking-tight mb-3">
          CAMPUS & ALUMNI PORTAL
        </h1>
        <p className="text-app-muted text-sm sm:text-base">
          Direct shell access, GPU cluster queue management, and seed funding portfolio reporting.
        </p>
      </div>

      <div className="max-w-md mx-auto rounded-[24px] p-6 sm:p-10 bg-app-surface1 border border-app-border shadow-2xl">
        {/* Portal Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-app-border mb-8">
          <button
            type="button"
            onClick={() => {
              setTab('student');
              setIsLoggedIn(false);
            }}
            className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              tab === 'student' ? 'bg-hru-gold text-hru-midnight shadow-gold-glow' : 'text-app-muted hover:text-white'
            }`}
          >
            Enrolled Student
          </button>
          <button
            type="button"
            onClick={() => {
              setTab('alumni');
              setIsLoggedIn(false);
            }}
            className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              tab === 'alumni' ? 'bg-hru-gold text-hru-midnight shadow-gold-glow' : 'text-app-muted hover:text-white'
            }`}
          >
            Alumni & Fellows
          </button>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                HRU Campus ID / Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tab === 'student' ? 'fellow@hru.edu' : 'founder@alumni.hru.edu'}
                className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-app-muted mb-2">
                Security Keyphrase / Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white/5 border border-app-border rounded-xl px-4 py-3 text-sm text-app-text focus:outline-none focus:border-hru-gold"
              />
            </div>

            <Button type="submit" variant="gold" size="md" className="w-full justify-center">
              Authenticate via Campus SSO
            </Button>

            <div className="pt-4 border-t border-app-border flex items-center justify-between text-xs font-mono text-app-muted">
              <span className="flex items-center gap-1 hover:text-hru-gold cursor-pointer">
                <Fingerprint className="w-3.5 h-3.5 text-hru-gold" /> Passkey login
              </span>
              <a href="#reset" className="hover:underline">Forgot ID?</a>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-hru-gold/20 text-hru-gold border border-hru-gold flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-app-text">
              AUTHENTICATION NOMINAL
            </h3>
            <p className="text-xs text-app-muted">
              Redirecting to {tab === 'student' ? 'Student Workspace & GPU Shell' : 'Alumni Venture Syndicate'}...
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLoggedIn(false)}
            >
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortalPage;
