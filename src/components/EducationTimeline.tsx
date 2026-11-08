import { Trophy, Award, Medal, Radio, Sparkles, GraduationCap, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export function EducationTimeline() {
  return (
    <section id="prestasi" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Ringkas & Elegan */}
        <div className="max-w-3xl mb-8 space-y-2">
          <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
            Rekam Jejak 12 Tahun Sekolah &amp; Kualifikasi Resmi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
            Prestasi &amp; Sertifikat Resmi.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Ringkasan perjalanan 12 tahun pendidikan formal dari SDN Pxxxx, MTs N Blora, hingga lulusan SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga.
          </p>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Card 1: SDN Pxxxx (2013 — 2019) */}
          <div className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-stone-500 font-semibold">2013 — 2019</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-700">
                  Sekolah Dasar
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 font-display">
                  SDN Pxxxx
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Bela Diri, Seni Tradisional, &amp; Olahraga Beregu
                </p>
              </div>

              <div className="space-y-2 text-xs pt-1 border-t border-stone-100">
                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara 1 Pencak Silat O2SN</div>
                    <div className="text-[11px] text-stone-500">Tahun 2017 · Tingkat Kecamatan</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Medal className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara 2 Pencak Silat O2SN</div>
                    <div className="text-[11px] text-stone-500">Tahun 2018 · Tingkat Kecamatan</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Medal className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara 2 Pencak Silat POPDA</div>
                    <div className="text-[11px] text-stone-500">Tahun 2018 · Tingkat Kecamatan</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara 1 Tim Bola Voli Putri</div>
                    <div className="text-[11px] text-stone-500">Tahun 2019 · Tingkat Kecamatan</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara 3 Macapat Islami MAPSI</div>
                    <div className="text-[11px] text-stone-500">Tahun 2018 · Tingkat Kecamatan</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/70 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Juara Harapan 3 Tari Klasik</div>
                    <div className="text-[11px] text-stone-500">Tahun 2016 · Tingkat Kecamatan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              Total 6 Prestasi Sekolah Dasar
            </div>
          </div>

          {/* Card 2: MTs N Blora (2019 — 2022) */}
          <div className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-stone-500 font-semibold">2019 — 2022</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-700">
                  Madrasah Tsanawiyah
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 font-display">
                  MTs N Blora
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Penguatan Akademik, Etika, &amp; Karakter Mandiri
                </p>
              </div>

              <div className="space-y-3 text-xs pt-1 border-t border-stone-100">
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900 text-sm">
                      Medali Perunggu Olimpiade PAI
                    </div>
                    <div className="text-xs text-amber-900 font-semibold mt-0.5">
                      Pendidikan Agama Islam (Tahun 2022)
                    </div>
                    <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                      Pencapaian kompetisi akademik atas pemahaman literatur keislaman, etika moral, dan nalar kritis.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 leading-relaxed">
                  <strong>Fondasi Pola Pikir:</strong> Masa pendidikan di MTs N Blora menanamkan ketekunan belajar hal baru dan kecintaan membaca yang kini menjadi dasar cara pandang Arum.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              Olimpiade Akademik 2022
            </div>
          </div>

          {/* Card 3: SMK N 2 Blora (2022 — 2025) & 3 Sertifikat Resmi */}
          <div className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-stone-500 font-semibold">2022 — 2025</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-900 text-white">
                  Lulusan 2025
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 font-display">
                  SMK Negeri 2 Blora
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Jurusan Akuntansi dan Keuangan Lembaga (AKL)
                </p>
              </div>

              <div className="space-y-2.5 text-xs pt-1 border-t border-stone-100">
                {/* Sertifikat UKK Akuntansi */}
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-stone-800" />
                      <span>Sertifikat UKK Akuntansi</span>
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      KOMPETEN
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Siklus akuntansi penuh: jurnal umum &amp; khusus, buku besar, neraca lajur, laba rugi, dan spreadsheet akuntansi.
                  </p>
                </div>

                {/* Sertifikat PKL Radio */}
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Radio className="w-4 h-4 text-stone-800" />
                      <span>Sertifikat PKL Penyiar Radio</span>
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-stone-200 text-stone-900">
                      SANGAT BAGUS
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Praktik kerja industri: public speaking, perancangan naskah siaran, dan modulasi vokal on-air terstruktur.
                  </p>
                </div>

                {/* Sertifikat Viva Beauty */}
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-stone-800" />
                      <span>Sertifikat Viva Beauty</span>
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-stone-200 text-stone-900">
                      TERSERTIFIKASI
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Pelatihan grooming profesional, etika kerja, dan representasi diri dalam pelayanan prima bisnis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              3 Kualifikasi &amp; Sertifikasi Resmi
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
