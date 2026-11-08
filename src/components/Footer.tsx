import { ArrowUp, Mail, Shirt } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="space-y-1">
            <div className="text-base font-bold text-stone-100 font-display">
              Arum Dahlia
            </div>
            <p className="text-stone-400 text-xs max-w-md">
              AI-Assisted Web Developer · Founder Brand Clothing LYONESSE (Cotton Combed 20s &amp; 16s) · Lulusan Akuntansi SMK Negeri 2 Blora 2025.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-stone-400">
            <a href="#profil" className="hover:text-stone-100 transition-colors">Profil</a>
            <a href="#fokus-ai" className="hover:text-stone-100 transition-colors">Fokus Web Dev AI</a>
            <a href="#lyonesse" className="hover:text-stone-100 transition-colors">Project LYONESSE</a>
            <a href="#kalkulator" className="hover:text-stone-100 transition-colors">Lab Kalkulator</a>
            <a href="#prestasi" className="hover:text-stone-100 transition-colors">Prestasi</a>
            <a href="#buku" className="hover:text-stone-100 transition-colors">Buku Bacaan</a>
            <a href="#kontak" className="hover:text-stone-100 transition-colors">Kotak Masukan</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Arum Dahlia. Hak Cipta Dilindungi · Dibangun dengan Logika &amp; Kolaborasi AI.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:arumdahlia67@gmail.com"
              className="hover:text-stone-300 transition-colors flex items-center gap-1 font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>arumdahlia67@gmail.com</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:lyonessebusiness@gmail.com"
              className="hover:text-stone-300 transition-colors flex items-center gap-1 font-mono"
            >
              <Shirt className="w-3.5 h-3.5" />
              <span>lyonessebusiness@gmail.com</span>
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
