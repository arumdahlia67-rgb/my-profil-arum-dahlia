import { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  Code2, 
  FileText, 
  TrendingUp, 
  Calculator,
  CheckCircle2,
  Cpu,
  Shirt,
  Award,
  BookOpen,
  Mail,
  ChevronRight,
  Compass
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<'architecture' | 'aiPrompt' | 'economics'>('architecture');

  const quickJumpLinks = [
    {
      id: 'profil',
      title: 'Ringkasan Profil',
      subtitle: 'Arum Dahlia & Latar Belakang',
      icon: Compass,
      target: '#profil'
    },
    {
      id: 'fokus-ai',
      title: 'Fokus Web Developer AI',
      subtitle: 'Bukan IT · AI sbg Partner',
      icon: Cpu,
      target: '#fokus-ai'
    },
    {
      id: 'lyonesse',
      title: 'Project Brand LYONESSE',
      subtitle: 'Cotton Combed 20s & 16s',
      icon: Shirt,
      target: '#lyonesse'
    },
    {
      id: 'kalkulator',
      title: 'Laboratorium Kalkulator',
      subtitle: 'Slider BEP, HPP & Jurnal',
      icon: Calculator,
      target: '#kalkulator'
    },
    {
      id: 'prestasi',
      title: 'Prestasi & Sertifikasi',
      subtitle: '12 Tahun Sekolah & UKK',
      icon: Award,
      target: '#prestasi'
    },
    {
      id: 'buku',
      title: 'Buku Bacaan',
      subtitle: 'Graham & Warren Buffett',
      icon: BookOpen,
      target: '#buku'
    },
    {
      id: 'kontak',
      title: 'Kotak Masukan / Hubungi',
      subtitle: 'Surel Pribadi & Bisnis',
      icon: Mail,
      target: '#kontak'
    }
  ];

  return (
    <section id="profil" className="relative pt-10 pb-16 md:pt-16 md:pb-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 space-y-5 text-stone-900">
            
            {/* Clean Unboxed Metadata Kicker (Anti-Slop Zero-Pill) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 tracking-wide">
              <span className="text-stone-900 font-semibold">Arum Dahlia</span>
              <span aria-hidden="true">·</span>
              <span>AI-Assisted Web Developer</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-800 font-medium">Founder LYONESSE</span>
              <span aria-hidden="true">·</span>
              <span>Blora, Indonesia</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.12] font-display text-balance">
              Membangun Web &amp; Ekosistem Bisnis Nyata dengan AI sebagai Partner.
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
              Bukan berlatar belakang pendidikan IT formal, melainkan lulusan Akuntansi SMK Negeri 2 Blora tahun 2025 yang memanfaatkan 
              kecerdasan buatan sebagai rekan bertukar ide, pemecah masalah, dan partner membangun produk digital. 
              Saat ini fokus sebagai <strong>Founder</strong> brand clothing <strong>LYONESSE</strong> berbahan <em>Cotton Combed 20s &amp; 16s</em>, 
              serta mendalami keuangan digital dan web development modern.
            </p>

            {/* Primary Action Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#kalkulator"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <Calculator className="w-4 h-4" />
                <span>Buka Kalkulator BEP &amp; HPP</span>
              </a>

              <a
                href="#lyonesse"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <Shirt className="w-4 h-4 text-stone-700" />
                <span>Brand LYONESSE</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Ringkasan CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Pro Developer Code & Business Architecture Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-stone-300 bg-stone-900 text-stone-100 shadow-lg overflow-hidden font-mono text-xs">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                  <span className="w-3 h-3 rounded-full bg-stone-700" />
                  <span className="text-stone-400 text-[11px] ml-2">arum-dahlia-workspace</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('architecture')}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeCodeTab === 'architecture' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    lyonesse.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('economics')}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeCodeTab === 'economics' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    bep.calc.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('aiPrompt')}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                      activeCodeTab === 'aiPrompt' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    ai-partner.md
                  </button>
                </div>
              </div>

              {/* Code Content Body */}
              <div className="p-5 text-[12px] leading-relaxed overflow-x-auto min-h-[250px]">
                {activeCodeTab === 'architecture' && (
                  <div className="space-y-1">
                    <p className="text-stone-500">// Project Konfigurasi Brand LYONESSE</p>
                    <p><span className="text-amber-400">export const</span> <span className="text-stone-200">brandProfile</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-emerald-400">'LYONESSE'</span>,</p>
                    <p className="pl-4">role: <span className="text-emerald-400">'Founder &amp; Financial Strategist'</span>,</p>
                    <p className="pl-4">fabricYarn: [<span className="text-emerald-400">'Cotton Combed 20s'</span>, <span className="text-emerald-400">'Cotton Combed 16s'</span>],</p>
                    <p className="pl-4">accountingStandard: <span className="text-emerald-400">'Double-Entry GAAP/SAK'</span>,</p>
                    <p className="pl-4">engineeringApproach: <span className="text-emerald-400">'AI-Augmented Full-Stack'</span>,</p>
                    <p className="pl-4">status: <span className="text-emerald-400">'Active Production &amp; Model Testing'</span></p>
                    <p>{'};'}</p>
                    <p className="text-stone-500 pt-2">// Verifikasi neraca otomatis real-time</p>
                    <p><span className="text-amber-400">const</span> verifyLedger = (debit, credit) =&gt; debit === credit;</p>
                  </div>
                )}

                {activeCodeTab === 'economics' && (
                  <div className="space-y-1">
                    <p className="text-stone-500">// Logika Perhitungan BEP Unit &amp; Rupiah</p>
                    <p><span className="text-amber-400">function</span> <span className="text-blue-400">calculateBEP</span>(fc: number, price: number, vc: number) {'{'}</p>
                    <p className="pl-4">const unitMargin = price - vc; <span className="text-stone-500">// Margin Kontribusi</span></p>
                    <p className="pl-4">if (unitMargin &lt;= 0) throw new Error(<span className="text-rose-400">'Harga &lt; HPP!'</span>);</p>
                    <p className="pl-4">const bepUnits = Math.ceil(fc / unitMargin);</p>
                    <p className="pl-4">const bepRupiah = bepUnits * price;</p>
                    <p className="pl-4">return {'{'} bepUnits, bepRupiah, unitMargin {'}'};</p>
                    <p>{'}'}</p>
                    <p className="text-stone-500 pt-2">// Menghitung HPP komprehensif (kain, jahit, sablon, aksesoris, &amp; packaging)</p>
                  </div>
                )}

                {activeCodeTab === 'aiPrompt' && (
                  <div className="space-y-1">
                    <p className="text-stone-500"># Protokol Kolaborasi Arum bersama AI</p>
                    <p><span className="text-amber-400">1. Problem Definition:</span> Identifikasi kebutuhan akuntansi / web</p>
                    <p><span className="text-amber-400">2. Prompting Strategy:</span> Berikan konteks SAK, HPP, &amp; arsitektur</p>
                    <p><span className="text-amber-400">3. Human Review:</span> Arum memverifikasi akurasi rumus neraca</p>
                    <p><span className="text-amber-400">4. Execution:</span> Deploy antarmuka responsif tanpa error</p>
                    <p className="text-emerald-400 pt-2">&gt; "AI mempercepat eksekusi, ketelitian akuntansi menjamin kebenaran."</p>
                  </div>
                )}
              </div>

              {/* Console Status Bar */}
              <div className="px-4 py-2 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Interactive Engine: Active</span>
                </div>
                <span>Cotton 20s/16s Module Loaded</span>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Direct Navigation Grid (So users don't need to scroll endlessly) */}
        <div className="pt-6 border-t border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-stone-700" />
              <h2 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Direktori Cepat Portofolio (Klik Langsung ke Bagian yang Ingin Dibaca)
              </h2>
            </div>
            <span className="text-[11px] text-stone-500 hidden sm:inline">
              Tanpa perlu scroll panjang · Sekali klik menuju konten
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {quickJumpLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.target}
                  className="group p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 hover:border-stone-400 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-800 group-hover:scale-105 transition-transform">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">0{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 group-hover:underline leading-snug line-clamp-1">
                      {link.title}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-tight line-clamp-1 mt-0.5">
                      {link.subtitle}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
