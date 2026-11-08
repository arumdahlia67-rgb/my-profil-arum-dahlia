import { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Volume2, 
  VolumeX, 
  Pause, 
  Play, 
  Type, 
  Eye, 
  X, 
  ArrowRight, 
  BookOpen, 
  Calculator,
  Shirt
} from 'lucide-react';
import { educationData, booksRead } from '../data/portfolioData';

interface SearchResultItem {
  title: string;
  category: string;
  snippet: string;
  targetId: string;
  tag: string;
}

export function ReadingToolsBar() {
  const [textSize, setTextSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isRulerActive, setIsRulerActive] = useState<boolean>(false);
  const [rulerY, setRulerY] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('Beranda');

  // Sync text size to <html> class
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-base', 'text-size-lg');
    root.classList.add(`text-size-${textSize}`);
  }, [textSize]);

  // Reading ruler mouse tracking
  useEffect(() => {
    if (!isRulerActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setRulerY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isRulerActive]);

  // Keyboard shortcut Ctrl+K / Cmd+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer
  useEffect(() => {
    const sections = [
      { id: 'profil', label: 'Ringkasan Profil' },
      { id: 'fokus-ai', label: 'Fokus Web Dev AI' },
      { id: 'lyonesse', label: 'Project LYONESSE' },
      { id: 'kalkulator', label: 'Lab Kalkulator' },
      { id: 'prestasi', label: 'Prestasi & Sertifikat' },
      { id: 'buku', label: 'Buku Bacaan' },
      { id: 'kontak', label: 'Kotak Masukan' }
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      let current = 'Beranda Utama';

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sec.label;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Narration
  const summaryNarration = `Halo, selamat datang di portofolio Arum Dahlia. 
Arum adalah lulusan SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga dengan predikat uji kompetensi Kompeten. 
Saat ini Arum berfokus merintis brand pakaian LYONESSE bersama rekan dengan material Cotton Combed 20s dan 16s. 
Arum memanfaatkan kecerdasan buatan sebagai rekan bertukar pikiran untuk merancang solusi web, menghitung titik impas BEP, serta menyusun laporan laba rugi dan jurnal umum akuntansi secara presisi.`;

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Peramban Anda belum mendukung fitur pembacaan suara sintetis.');
      return;
    }

    if (isSpeaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(summaryNarration);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang.startsWith('id') || v.name.toLowerCase().includes('indonesia'));
    if (idVoice) {
      utterance.voice = idVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  // Search Corpus
  const searchableData: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // Add LYONESSE
    list.push({
      title: 'Project Brand Clothing LYONESSE',
      category: 'Proyek Utama',
      snippet: 'Brand pakaian dengan bahan Cotton Combed 20s dan 16s yang dirintis bersama rekan.',
      targetId: 'lyonesse',
      tag: 'Fashion / Apparel'
    });

    list.push({
      title: 'Kalkulator BEP & Laba Rugi Real-Time',
      category: 'Finansial & Akuntansi',
      snippet: 'Simulasi interaktif Break-Even Point, status kesehatan finansial, dan Jurnal Umum akuntansi.',
      targetId: 'kalkulator',
      tag: 'Unit Economics'
    });

    // Add achievements
    educationData.forEach((phase) => {
      phase.achievements.forEach((ach) => {
        list.push({
          title: ach.title,
          category: `Prestasi (${phase.schoolName})`,
          snippet: `${ach.rank} · ${ach.description}`,
          targetId: 'riwayat',
          tag: ach.year
        });
      });
    });

    // Add books
    booksRead.forEach((book) => {
      list.push({
        title: book.title,
        category: 'Buku & Pola Pikir',
        snippet: `${book.author} · Konsep: ${book.coreConcept}`,
        targetId: 'buku',
        tag: 'Literasi'
      });
    });

    return list;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableData.filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
    );
  }, [searchQuery, searchableData]);

  const handleJumpTo = (targetId: string) => {
    setSearchOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Reading Focus Ruler */}
      {isRulerActive && (
        <div
          className="reading-ruler pointer-events-none"
          style={{ top: `${rulerY}px` }}
          aria-hidden="true"
        />
      )}

      {/* 2. Floating Bottom Minimalist Developer Tools Bar (White bg, Black text, crisp borders) */}
      <aside aria-label="Reading accessibility and navigation toolbar" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[94%] sm:w-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 bg-white/95 text-stone-900 backdrop-blur-md rounded-xl border border-stone-300 shadow-xl">
          
          {/* Currently Reading Section Indicator */}
          <div className="hidden md:flex items-center gap-2 pl-1 pr-3 border-r border-stone-200 text-xs">
            <BookOpen className="w-3.5 h-3.5 text-stone-700" />
            <span className="text-[11px] text-stone-500 font-mono">Posisi:</span>
            <span className="font-semibold text-stone-800 text-xs truncate max-w-[130px]">
              {activeSection}
            </span>
          </div>

          {/* Quick Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 text-xs font-medium transition-colors border border-stone-200 cursor-pointer"
            title="Cari Cepat di Portofolio (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-stone-700" />
            <span className="hidden sm:inline">Cari Topik</span>
            <span className="text-[10px] font-mono text-stone-500 bg-white px-1.5 py-0.5 rounded border border-stone-300">
              Ctrl+K
            </span>
          </button>

          {/* Direct Shortcut to Calculator */}
          <a
            href="#kalkulator"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium border border-stone-200 transition-colors"
            title="Langsung ke Kalkulator Finansial BEP"
          >
            <Calculator className="w-3.5 h-3.5 text-stone-700" />
            <span>Kalkulator</span>
          </a>

          {/* Font Size Toggle Buttons */}
          <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200">
            <button
              onClick={() => setTextSize('sm')}
              className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                textSize === 'sm'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Ukuran Font Ringkas (14px)"
            >
              A-
            </button>
            <button
              onClick={() => setTextSize('base')}
              className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                textSize === 'base'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Ukuran Font Standar (16px)"
            >
              A
            </button>
            <button
              onClick={() => setTextSize('lg')}
              className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                textSize === 'lg'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Ukuran Font Nyaman / Besar (18px)"
            >
              A+
            </button>
          </div>

          {/* Audio Reader */}
          <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-0.5 border border-stone-200">
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
              title={isSpeaking ? (isPaused ? 'Lanjutkan Pembacaan' : 'Jeda Pembacaan') : 'Dengarkan Ringkasan Suara Profil Arum'}
            >
              {isSpeaking ? (
                isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-stone-700" />
              )}
              <span className="hidden sm:inline">
                {isSpeaking ? (isPaused ? 'Lanjut' : 'Jeda') : 'Suara'}
              </span>
            </button>

            {isSpeaking && (
              <button
                onClick={handleStopSpeak}
                className="p-1 text-stone-500 hover:text-rose-600 rounded transition-colors cursor-pointer"
                title="Hentikan Audio"
              >
                <VolumeX className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Reading Focus Ruler Toggle */}
          <button
            onClick={() => setIsRulerActive(!isRulerActive)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              isRulerActive
                ? 'bg-stone-900 text-white'
                : 'text-stone-600 hover:text-stone-900 bg-stone-100 border border-stone-200'
            }`}
            title="Garis Penuntun Baca (Membantu Mata Fokus)"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Garis Fokus</span>
          </button>

        </div>
      </aside>

      {/* 3. Search Modal Dialog */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-xl rounded-2xl border border-stone-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Search Input Bar */}
            <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
              <Search className="w-5 h-5 text-stone-500 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik (contoh: lyonesse, combed 16s, bep, silat, benjamin graham, ukk)..."
                className="w-full bg-transparent text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-hidden"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
              <span className="text-[11px] font-medium text-stone-400">Pilihan Cepat:</span>
              {['LYONESSE', 'Cotton Combed 16s', 'Kalkulator BEP', 'O2SN Silat', 'Warren Buffett', 'UKK Akuntansi'].map(chip => (
                <button
                  key={chip}
                  onClick={() => setSearchQuery(chip)}
                  className="px-2 py-0.5 bg-white hover:bg-stone-200 text-stone-700 rounded border border-stone-200 text-[11px] transition-colors cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Search Results */}
            <div className="max-h-80 overflow-y-auto p-4 space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-xs text-stone-500 space-y-1">
                  <p className="font-semibold text-stone-800">
                    Ketik kata kunci untuk menemukan informasi dengan cepat.
                  </p>
                  <p className="text-[11px]">
                    Mencakup brand LYONESSE, kalkulator BEP &amp; laba rugi, 12 tahun prestasi, sertifikasi SMK N 2 Blora, dan buku bacaan.
                  </p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-8 text-xs text-stone-500">
                  Tidak ditemukan hasil untuk "{searchQuery}". Coba kata kunci seperti "lyonesse", "silat", atau "bep".
                </div>
              ) : (
                searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleJumpTo(result.targetId)}
                    className="p-3 rounded-xl border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                        <span className="font-semibold text-stone-900">{result.category}</span>
                        <span>·</span>
                        <span>{result.tag}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:underline transition-colors">
                        {result.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-1">
                        {result.snippet}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
              <span>Klik hasil untuk langsung melompat ke bagian terkait</span>
              <button
                onClick={() => setSearchOpen(false)}
                className="font-semibold text-stone-800 hover:underline"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
