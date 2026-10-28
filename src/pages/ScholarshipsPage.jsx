import React, { useState } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import CountUp from '../components/ui/CountUp';
import Button from '../components/ui/Button';

export function ScholarshipsPage() {
  const [level, setLevel] = useState('ug'); // 'ug' (₹1,50,000) | 'pg' (₹1,80,000) | 'phd' (₹0)
  const [housing, setHousing] = useState('pod'); // 'pod' (₹45,000) | 'none' (₹0)
  const [meritTier, setMeritTier] = useState('75'); // '100' | '75' | '50' | '25'

  const baseTuition = {
    ug: 150000,
    pg: 180000,
    phd: 0,
  }[level];

  const housingCost = housing === 'pod' ? 45000 : 0;
  const discountPct = Number(meritTier);
  const tuitionGrant = Math.round((baseTuition * discountPct) / 100);
  const finalSemesterCost = baseTuition - tuitionGrant + housingCost;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-hru-gold/30 bg-hru-gold/10 text-hru-gold font-mono text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Transparent Merit Fellowships
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading text-app-text tracking-tight leading-none mb-6">
          LIVE TUITION & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hru-indigo via-[#8B5CF6] to-hru-gold">
            FEE CALCULATOR.
          </span>
        </h1>
        <p className="text-app-muted text-base sm:text-lg">
          Over 90% of HRU fellows receive non-dilutive merit scholarships. Calculate your estimated semester investment live.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Interactive Controls */}
        <div className="lg:col-span-7 rounded-[24px] p-6 sm:p-10 bg-app-surface1 border border-app-border shadow-2xl space-y-8">
          <div>
            <h3 className="text-lg font-bold font-heading text-app-text mb-3">
              1. Select Degree Level
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'ug', label: 'Undergraduate', sub: 'B.Sc / B.Des' },
                { id: 'pg', label: 'Postgraduate', sub: 'M.Tech / MBA' },
                { id: 'phd', label: 'PhD Fellowship', sub: '100% Funded' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLevel(item.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    level === item.id
                      ? 'border-hru-gold bg-[#1B1E3D] shadow-gold-glow'
                      : 'border-app-border bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="font-heading font-bold text-xs sm:text-sm text-app-text">{item.label}</div>
                  <div className="text-[10px] font-mono text-app-muted">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading text-app-text mb-3">
              2. Merit Fellowship Tier (Evaluated via Portfolio Signal)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { tier: '100', label: 'Founder Grant', grant: '100% Tuition Free' },
                { tier: '75', label: 'Tier-1 Signal', grant: '75% Tuition Grant' },
                { tier: '50', label: 'Tier-2 Signal', grant: '50% Tuition Grant' },
                { tier: '25', label: 'Standard', grant: '25% Tuition Grant' },
              ].map((m) => (
                <button
                  key={m.tier}
                  type="button"
                  onClick={() => setMeritTier(m.tier)}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    meritTier === m.tier
                      ? 'border-hru-gold bg-[#1B1E3D] shadow-gold-glow'
                      : 'border-app-border bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="font-heading font-bold text-xs text-app-text">{m.label}</div>
                  <div className="text-[10px] font-mono text-hru-gold mt-1">{m.grant}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading text-app-text mb-3">
              3. Residential Living & Campus Pod Suites
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'pod', label: 'Campus Smart Pod Suite', price: '+₹45,000 / sem' },
                { id: 'none', label: 'Off-Campus / Commuter', price: '₹0' },
              ].map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setHousing(h.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    housing === h.id
                      ? 'border-hru-gold bg-[#1B1E3D] shadow-gold-glow'
                      : 'border-app-border bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="font-heading font-bold text-xs text-app-text">{h.label}</div>
                  <div className="text-[10px] font-mono text-hru-gold mt-0.5">{h.price}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="lg:col-span-5 rounded-[24px] p-6 sm:p-10 bg-app-surface1 border-2 border-hru-gold shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-hru-gold font-bold">
              ESTIMATED SEMESTER INVESTMENT
            </span>
            <Calculator className="w-5 h-5 text-hru-gold" />
          </div>

          <div>
            <div className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-app-text flex items-baseline">
              <span className="text-hru-gold mr-1">₹</span>
              <CountUp
                to={finalSemesterCost}
                duration={1000}
                className="text-hru-gold"
              />
            </div>
            <p className="text-xs font-mono text-app-muted mt-2">
              Billed per semester • Hardware kit & GPU compute included free
            </p>
          </div>

          <div className="pt-6 border-t border-app-border space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-app-muted">Base Studio Tuition:</span>
              <span className="text-app-text font-bold">₹{baseTuition.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-semantic-success">
              <span>Merit Fellowship Discount ({meritTier}%):</span>
              <span className="font-bold">-₹{tuitionGrant.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-app-muted">Housing & Amenities:</span>
              <span className="text-app-text font-bold">+₹{housingCost.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-app-border space-y-3">
            <Button to="/admissions" variant="gold" size="lg" className="w-full justify-center">
              Apply for this Grant Tier
            </Button>
            <p className="text-[11px] font-mono text-center text-app-muted">
              Merit grants are locked for all 4 years upon admission verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipsPage;
