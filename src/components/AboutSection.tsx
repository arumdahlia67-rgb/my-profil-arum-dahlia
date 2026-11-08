import { useState } from 'react';
import { 
  Calculator, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  Check, 
  TrendingUp, 
  ArrowRight,
  Shirt,
  MessageSquare,
  ShieldCheck,
  Compass
} from 'lucide-react';

export function AboutSection() {
  const principles = [
    {
      icon: Cpu,
      title: 'AI sebagai Partner Bertukar Pikiran',
      desc: 'Bukan sekadar alat otomatisasi pasif, melainkan partner dialog intelektual untuk menguji hipotesis, mendiskusikan arsitektur web, dan memecahkan tantangan logika.'
    },
    {
      icon: TrendingUp,
      title: 'Fokus Belajar Keuangan Digital',
      desc: 'Mendalami pergeseran dari pembukuan konvensional ke fintech modern, cloud accounting, dan otomatisasi arus kas untuk mendukung keputusan bisnis yang sehat.'
    },
    {
      icon: Calculator,
      title: 'Validasi Akuntansi & Ketelitian Angka',
      desc: 'Prinsip akuntansi berpasangan (double-entry) dan perhitungan BEP menjadi instrumen validasi ketat agar setiap baris sistem web benar-benar presisi secara finansial.'
    },
    {
      icon: BookOpen,
      title: 'Semangat Belajar Hal Baru & Masa Depan',
      desc: 'Terus antusias mengeksplorasi perkembangan teknologi AI global, tekun membaca literatur terpercaya, dan aktif membuka diri untuk bertukar wawasan.'
    }
  ];

  return (
    <section id="fokus-ai" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
            Fokus &amp; Filosofi Pengembang
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
            Fokus sebagai Web Developer dengan Bantuan AI.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Saya <strong>bukan orang IT konvensional</strong> dan tidak mendalami teknik coding manual dari nol. 
            Namun, saya memiliki minat yang sangat kuat di bidang <strong>web development</strong> dengan memanfaatkan <strong>Artificial Intelligence (AI)</strong> sebagai partner berpikir, pemecah masalah, dan katalisator inovasi masa depan.
          </p>
        </div>

        {/* Narrative & Practical Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              Sebagai lulusan <strong>SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga (AKL)</strong>, latar belakang saya berakar pada disiplin pencatatan, ketelitian angka, dan analisis logika neraca.
            </p>
            <p>
              Di era revolusi kecerdasan buatan, saya melihat kesempatan besar: menjadi developer tidak lagi harus diartikan sebagai orang yang menghafal seluruh sintaks kode secara mandiri. Bagi saya, keahlian masa depan adalah <strong>kemampuan merumuskan masalah secara kritis, memformulasikan instruksi (prompt) yang presisi, dan memvalidasi kebenaran logika sistem</strong>.
            </p>
            <p>
              Saat ini saya sedang <strong>fokus belajar di bidang keuangan digital</strong> serta memanfaatkan teknologi AI untuk mempermudah pemecahan masalah di dunia nyata. Saya sangat bersemangat mempelajari perkembangan teknologi AI untuk masa depan dunia, dan menjadikan AI sebagai partner bertukar pikiran serta informasi.
            </p>
            <p>
              Dengan kombinasi ketelitian akuntansi dan daya bantu AI, saya bertekad menjadi developer modern yang mampu menjembatani ide bisnis riil—seperti brand clothing <strong>LYONESSE</strong> yang sedang saya rintis—menjadi antarmuka web yang akurat, interaktif, dan berdampak nyata.
            </p>
          </div>

          {/* Right Workflow Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 space-y-4 shadow-2xs">
            <div className="border-b border-stone-100 pb-3">
              <span className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider">
                Alur Kerja Pengembang
              </span>
              <h3 className="text-base font-bold text-stone-900 font-display mt-0.5">
                Bagaimana Arum Memecahkan Masalah bersama AI
              </h3>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                <div className="font-bold text-stone-900">1. Identifikasi Logika &amp; Kebutuhan Nyata</div>
                <p className="text-stone-600">
                  Merumuskan masalah bisnis secara terukur: "Bagaimana menghubungkan seluruh komponen HPP kaos langsung ke titik impas BEP dan jurnal umum?"
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                <div className="font-bold text-stone-900">2. Diskusi &amp; Formulasi Solusi Bersama AI</div>
                <p className="text-stone-600">
                  Mengajak AI bertukar pikiran untuk merancang struktur data reaktif, komponen interaktif slider, dan perhitungan matematika yang tepat.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
                <div className="font-bold text-stone-900">3. Validasi Akuntansi &amp; Uji Lapangan</div>
                <p className="text-stone-600">
                  Arum memvalidasi hasil secara ketat: memastikan neraca debit/kredit selalu seimbang, margin sehat, dan tampilan nyaman dibaca.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Etos: Belajar Hal Baru Setiap Hari</span>
              <span className="font-mono text-stone-900 font-semibold">AI + Human Logic</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Competence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-white rounded-xl border border-stone-200 hover:border-stone-300 transition-colors space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
