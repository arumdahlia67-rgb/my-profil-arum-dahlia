import { useState } from 'react';
import { Menu, X, FileText, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Fokus Web Dev AI', href: '#fokus-ai' },
    { label: 'Project LYONESSE', href: '#lyonesse' },
    { label: 'Lab Kalkulator', href: '#kalkulator' },
    { label: 'Prestasi', href: '#prestasi' },
    { label: 'Buku Bacaan', href: '#buku' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element, no pill clusters) */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-stone-900 font-display hover:text-stone-700 transition-colors whitespace-nowrap shrink-0"
        >
          Arum Dahlia
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-600">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick CV Link */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Lihat CV
          </button>
          
          <a
            href="#kontak"
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Hubungi / Kolaborasi
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-2 pb-5 space-y-3 shadow-md">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Lihat Ringkasan CV</span>
            </button>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
