import { useState } from 'react';
import { 
  Shirt, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Calculator,
  Layers,
  Sparkles
} from 'lucide-react';
import { lyonesseSpecs } from '../data/portfolioData';

export function LyonesseBrandSection() {
  const [selectedFabric, setSelectedFabric] = useState<'20s' | '16s'>('20s');

  const pillarsOfAi = [
    {
      title: 'Riset Pasar & Sintesis Tren Siluet',
      desc: 'Menganalisis pergeseran minat fashion lokal dari kaos tipis biasa menuju potongan boxy heavyweight yang awet.',
      insight: 'Ide Kritis: Menentukan proporsi potongan yang pas untuk iklim Indonesia.'
    },
    {
      title: 'Pemodelan HPP & BEP Unit Presisi',
      desc: 'Menghitung akurat seluruh komponen HPP (kain, jahit, sablon, aksesoris, kemasan) agar setiap kaos memiliki margin sehat di atas titik impas.',
      insight: 'Akuntansi Terapan: Menjamin kelayakan arus kas sebelum produksi masal.'
    },
    {
      title: 'Standardisasi Jahitan & Vendor Brief',
      desc: 'Menyusun spesifikasi teknis konveksi (jahit rantai, rib leher anti-melar) secara terstruktur melalui instruksi AI yang presisi.',
      insight: 'Kontrol Mutu: Memastikan hasil jahit sesuai standar tanpa salah paham.'
    },
    {
      title: 'Storytelling & Narasi Brand',
      desc: 'Mengembangkan identitas visual dan pesan produk yang jujur, mengedepankan kualitas fisik kain ketimbang gimmick pemasaran.',
      insight: 'Strategi Komunikasi: Membangun kepercayaan jangka panjang pelanggan.'
    }
  ];

  return (
    <section id="lyonesse" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
            Project Unggulan &amp; Fokus Utama
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
            LYONESSE: Brand Clothing Cotton Combed 20s &amp; 16s.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sebagai <strong>Founder</strong>, saya fokus merintis dan memvalidasi brand pakaian <strong>LYONESSE</strong> bersama rekan. 
            Kami memadukan pemikiran kritis, disiplin akuntansi biaya, dan AI sebagai rekan bertukar ide.
          </p>
        </div>

        {/* Ringkasan Perbedaan Bahan (Singkat & Langsung Paham) */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-10 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                Ringkasan Pilihan Bahan: Cotton Combed 20s vs. 16s
              </h3>
              <p className="text-xs text-stone-500">
                Penjelasan ringkas agar Anda langsung memahami perbedaan karakter kedua jenis kain:
              </p>
            </div>
            <a
              href="#kalkulator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:underline shrink-0"
            >
              <span>Uji Biaya HPP &amp; BEP di Kalkulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2-Card Simple Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Card 1: Cotton Combed 20s */}
            <div className={`p-5 rounded-xl border transition-all ${
              selectedFabric === '20s' ? 'bg-stone-50 border-stone-900 shadow-2xs' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-900 font-mono">
                  Cotton Combed 20s
                </span>
                <span className="text-[11px] font-semibold text-stone-600 bg-stone-200/80 px-2 py-0.5 rounded">
                  Standar Distro Premium
                </span>
              </div>
              <div className="text-sm font-bold text-stone-900 mb-1 font-display">
                Tebal Sedang, Lembut &amp; Adem di Iklim Tropis
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Bahan kaos distro berkualitas tinggi. Serat kapas menyerap keringat dengan sangat baik, tidak gerah, dan nyaman dipakai harian untuk gaya santai (regular fit).
              </p>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-700">
                <span>Rekomendasi HPP: <strong>Rp 60rb — 68rb</strong></span>
                <span>Target Jual: <strong>Rp 125rb — 140rb</strong></span>
              </div>
            </div>

            {/* Card 2: Cotton Combed 16s */}
            <div className={`p-5 rounded-xl border transition-all ${
              selectedFabric === '16s' ? 'bg-stone-50 border-stone-900 shadow-2xs' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-900 font-mono">
                  Cotton Combed 16s
                </span>
                <span className="text-[11px] font-semibold text-stone-900 bg-stone-200/80 px-2 py-0.5 rounded">
                  Ultra-Heavyweight Streetwear
                </span>
              </div>
              <div className="text-sm font-bold text-stone-900 mb-1 font-display">
                Ekstra Tebal, Kokoh &amp; Siluet Boxy Tegak
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Bahan paling tebal dan berbobot mantap. Potongan kaos jatuh tegak tidak menerawang, kerah tidak mudah melar, dan sangat awet untuk gaya potongan oversized boxy kekinian.
              </p>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-700">
                <span>Rekomendasi HPP: <strong>Rp 76rb — 86rb</strong></span>
                <span>Target Jual: <strong>Rp 155rb — 180rb</strong></span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pilar Pemikiran Kritis & AI */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-stone-800 uppercase tracking-wide">
            Cara Arum Menggunakan AI sebagai Rekan Berpikir dalam Brand LYONESSE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {pillarsOfAi.map((p, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-stone-200 hover:border-stone-300 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>0{idx + 1}</span>
                  <span className="text-stone-700 font-medium">LYONESSE</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-display">
                  {p.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
                <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-800 font-medium">
                  {p.insight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
