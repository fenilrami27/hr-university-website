import React, { useState, useEffect } from 'react';
import { DownloadCloud, FileText, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { studentService } from '../../services/studentService';

export function DownloadsSection() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    studentService.getDownloads().then((data) => {
      setDownloads(data || []);
      setLoading(false);
    });
  }, []);

  const quickLinks = [
    { title: 'Campus ERP & Cloud Identity', url: 'https://erp.hruniversity.ac.in', desc: 'SSO passkey login & profile' },
    { title: 'SLURM Supercomputing Queue', url: 'https://cluster.hruniversity.ac.in', desc: '512x H100 GPU telemetry' },
    { title: 'National Academic Depository (NAD)', url: 'https://nad.gov.in', desc: 'DigiLocker verified certificates' },
    { title: 'AICTE / UGC Regulatory Disclosures', url: 'https://ugc.ac.in', desc: 'Accreditation compliance filings' },
  ];

  return (
    <section id="downloads" className="mb-20 scroll-mt-32">
      <div className="p-6 sm:p-10 rounded-3xl bg-app-surface1 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C6FF3D]/40 bg-[#C6FF3D]/10 text-[#C6FF3D] font-mono text-xs uppercase tracking-widest mb-3">
              <DownloadCloud className="w-3.5 h-3.5" />
              Statutory Resources
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              14. IMPORTANT DOWNLOADS & QUICK LINKS
            </h2>
            <p className="text-xs sm:text-sm text-app-muted mt-1 max-w-xl">
              Official student handbook, examination ordinances, statutory anti-ragging undertakings, and external portal gateways.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Downloads Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-black text-base text-white">
              Official University Documents
            </h3>

            {loading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-14 bg-white/5 rounded-2xl w-full" />
                <div className="h-14 bg-white/5 rounded-2xl w-full" />
              </div>
            ) : downloads.length > 0 ? (
              <div className="space-y-3">
                {downloads.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0A0B1E] border border-white/10 flex items-center justify-between gap-3 group hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-hru-gold shrink-0 border border-white/10">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-sm text-white block group-hover:text-hru-gold transition-colors">
                          {doc.title}
                        </span>
                        <span className="text-[11px] font-mono text-app-muted">
                          Format: {doc.type} • {doc.size}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Downloading verified document: ${doc.title}`)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-hru-gold transition-colors shrink-0"
                      title="Download"
                    >
                      <DownloadCloud className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#0A0B1E] border border-dashed border-white/15 text-center text-xs font-mono text-app-muted">
                No statutory publications available for download at this time.
              </div>
            )}
          </div>

          {/* External Gateways & Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-black text-base text-white">
              Institutional Gateways
            </h3>

            <div className="space-y-3">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#0A0B1E] border border-white/10 hover:border-white/30 transition-all flex items-center justify-between gap-3 group block"
                >
                  <div>
                    <span className="font-heading font-bold text-sm text-white group-hover:text-hru-gold transition-colors block">
                      {link.title}
                    </span>
                    <span className="text-[11px] font-mono text-app-muted">
                      {link.desc}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-app-muted group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-hru-gold" />
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono text-app-muted flex items-center gap-2 mt-4">
              <ShieldCheck className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>All student records comply with the Indian Digital Personal Data Protection (DPDP) Act.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadsSection;
