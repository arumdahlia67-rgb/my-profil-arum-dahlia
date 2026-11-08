import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LyonesseBrandSection } from './components/LyonesseBrandSection';
import { InteractiveFinanceLab } from './components/InteractiveFinanceLab';
import { EducationTimeline } from './components/EducationTimeline';
import { ReadingListSection } from './components/ReadingListSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ReadingToolsBar } from './components/ReadingToolsBar';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-stone-900 selection:text-white transition-colors duration-200 relative antialiased">
      {/* Global Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections: Exact Sequence Ordered as Requested */}
      <main>
        {/* 1. Ringkasan Profil: Intro, status lulusan AKL 2025, founder LYONESSE, & direktori cepat */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Fokus sebagai Web Developer dengan Bantuan AI: Bukan IT konvensional, AI sbg partner & pemecah masalah */}
        <AboutSection />

        {/* 3. Project Brand LYONESSE: Pakaian independen, Cotton Combed 20s & 16s ringkas langsung paham */}
        <LyonesseBrandSection />

        {/* 4. Laboratorium Kalkulator: Slider BEP & HPP Kaos, terhubung real-time ke Laba Rugi & Jurnal Umum */}
        <InteractiveFinanceLab />

        {/* 5. Prestasi & Sertifikasi Resmi: 12 Tahun Sekolah & 3 Kualifikasi SMK N 2 Blora (Ringkas) */}
        <EducationTimeline />

        {/* 6. Buku Bacaan: The Intelligent Investor (Graham) & Warren Buffett Mindset */}
        <ReadingListSection />

        {/* 7. Kotak Masukan / Hubungi Langsung: Formulir kirim pesan, surel pribadi & surel bisnis brand */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reading & Developer Tools Bar */}
      <ReadingToolsBar />

      {/* Printable Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
