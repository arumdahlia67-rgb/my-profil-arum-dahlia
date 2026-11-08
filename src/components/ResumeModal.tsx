import { X, Printer, Mail, MapPin, Award, CheckCircle2, Briefcase, GraduationCap, Shirt } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl border border-stone-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top bar controls */}
        <div className="px-6 py-3.5 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-xs text-stone-600 print:hidden">
          <span className="font-semibold text-stone-900 font-display">
            Curriculum Vitae — Arum Dahlia
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-md transition-colors"
              aria-label="Tutup jendela CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-stone-800 text-xs sm:text-sm leading-relaxed print:p-0">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
                Arum Dahlia
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-stone-700">
                AI-Assisted Web Developer · Founder Brand LYONESSE · Lulusan Akuntansi SMK N 2 Blora 2025
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>arumdahlia67@gmail.com</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Shirt className="w-3.5 h-3.5" />
                  <span>lyonessebusiness@gmail.com</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Blora, Jawa Tengah, Indonesia</span>
                </span>
              </div>
            </div>

            {/* Typographic Monogram Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-stone-900 text-white flex flex-col items-center justify-center font-display font-extrabold text-xl sm:text-2xl shrink-0 border border-stone-700">
              AD
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
              Ringkasan Profil &amp; Filosofi Pengembang
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Lulusan SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga dengan predikat Uji Kompetensi Keahlian (UKK) "Kompeten". 
              Bukan berlatar belakang IT konvensional, melainkan pengembang web modern yang memanfaatkan Artificial Intelligence (AI) sebagai rekan bertukar pikiran untuk memecahkan masalah, menyusun logika, dan membangun aplikasi digital. 
              Saat ini fokus merintis dan memvalidasi brand pakaian <strong>LYONESSE</strong> berbahan Cotton Combed 20s dan 16s, mendalami keuangan digital, serta memiliki kegemaran membaca literatur investasi klasik dan perkembangan teknologi masa depan.
            </p>
          </div>

          {/* Proyek Utama & Pengalaman */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Shirt className="w-3.5 h-3.5 text-stone-700" />
              <span>Fokus Proyek Utama &amp; Pengalaman Vokasi</span>
            </h2>
            
            <div className="space-y-3 pl-3 border-l-2 border-stone-200">
              <div>
                <div className="flex items-center justify-between font-semibold text-stone-900 text-xs sm:text-sm">
                  <span>Brand Clothing LYONESSE — Founder &amp; Financial Strategist</span>
                  <span className="font-mono text-xs text-stone-500">2025 — Sekarang</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Merintis lini pakaian streetwear dengan spesifikasi kain Cotton Combed 20s dan 16s. Bertanggung jawab atas pemodelan biaya HPP, perhitungan Break-Even Point (BEP), perancangan sistem keuangan, ide kritis, dan pemanfaatan AI untuk mendukung operasional brand.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-semibold text-stone-900 text-xs sm:text-sm">
                  <span>Stasiun Radio Mitra SMK N 2 Blora — Praktik Kerja Lapangan (PKL) Penyiar</span>
                  <span className="font-mono text-xs text-stone-500">2024</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Menjalankan tugas siaran radio langsung dengan predikat evaluasi <strong>"Sangat Bagus"</strong>, penyusunan naskah informasi publik, public speaking, dan olah suara terstruktur.
                </p>
              </div>
            </div>
          </div>

          {/* Riwayat Pendidikan 12 Tahun */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-stone-700" />
              <span>Riwayat Pendidikan 12 Tahun (SD, MTs, SMK)</span>
            </h2>

            <div className="space-y-2.5 pl-3 border-l-2 border-stone-200 text-xs">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-stone-900">SMK Negeri 2 Blora</strong> — Akuntansi dan Keuangan Lembaga (AKL)
                </div>
                <span className="font-mono text-stone-500">2022 — 2025</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-stone-900">MTs N Blora</strong> — Pendidikan Menengah Pertama
                </div>
                <span className="font-mono text-stone-500">2019 — 2022</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-stone-900">SDN Pxxxx</strong> — Pendidikan Dasar
                </div>
                <span className="font-mono text-stone-500">2013 — 2019</span>
              </div>
            </div>
          </div>

          {/* Daftar Prestasi 12 Tahun */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-stone-800" />
              <span>Daftar Prestasi &amp; Penghargaan (12 Tahun Sekolah)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              <div>• Juara 1 Pencak Silat O2SN Kecamatan (2017)</div>
              <div>• Juara 2 Pencak Silat O2SN Kecamatan (2018)</div>
              <div>• Juara 2 Pencak Silat POPDA Kecamatan (2018)</div>
              <div>• Juara 1 Tim Bola Volly Putri Kecamatan (2019)</div>
              <div>• Juara 3 Macapat Islami Lomba MAPSI (2018)</div>
              <div>• Juara Harapan 3 Lomba Tari Klasik (2016)</div>
              <div>• Medali Perunggu Olimpiade Pendidikan Agama Islam (2022)</div>
              <div>• Sertifikat UKK Akuntansi — Predikat: Kompeten (2025)</div>
              <div>• Sertifikat PKL Penyiar Radio — Predikat: Sangat Bagus (2024)</div>
              <div>• Sertifikat Viva Beauty Grooming Profesional (2024)</div>
            </div>
          </div>

          {/* Buku & Kompetensi */}
          <div className="space-y-2 pt-2 border-t border-stone-200 text-xs">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
              Buku Acuan &amp; Kompetensi Inti
            </h2>
            <p className="text-stone-600">
              <strong>Buku yang Dibaca:</strong> <em>The Intelligent Investor</em> (Benjamin Graham — konsep Margin of Safety) dan <em>Warren Buffett Mindset</em> (konsep Circle of Competence &amp; Compound Interest).
            </p>
            <div className="flex flex-wrap gap-1.5 text-stone-700 pt-1">
              <span>Perhitungan BEP &amp; HPP</span>
              <span>·</span>
              <span>Jurnal Umum &amp; Siklus Akuntansi</span>
              <span>·</span>
              <span>AI Prompt Engineering</span>
              <span>·</span>
              <span>Web Development UI/UX</span>
              <span>·</span>
              <span>Cotton Combed Fabric Sourcing</span>
              <span>·</span>
              <span>Public Speaking</span>
            </div>
          </div>

        </div>

        {/* Modal footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
}
