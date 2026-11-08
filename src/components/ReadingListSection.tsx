import { useState } from 'react';
import { booksRead, BookReview } from '../data/portfolioData';
import { BookOpen, Quote, Sparkles, Check, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

export function ReadingListSection() {
  const [selectedBook, setSelectedBook] = useState<BookReview>(booksRead[0]);

  return (
    <section id="buku" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
            Literasi, Hobi Membaca, &amp; Pola Pikir
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
            Buku yang Membentuk Cara Pandang: Benjamin Graham &amp; Warren Buffett.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Hobi membaca adalah fondasi utama saya dalam menelaah hal-hal baru. 
            Dari buku investasi legendaris <em>The Intelligent Investor</em> karya Benjamin Graham hingga prinsip <em>Warren Buffett Mindset</em>, 
            inilah kata-kata kunci dan refleksi yang saya terapkan dalam membangun brand LYONESSE dan kolaborasi teknologi AI.
          </p>
        </div>

        {/* Dual Book Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {booksRead.map((book) => {
            const isSelected = selectedBook.id === book.id;
            return (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'bg-stone-50 border-stone-900 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Category & Author */}
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-mono text-stone-600 font-semibold">{book.category}</span>
                    <span>{book.author}</span>
                  </div>

                  {/* Book Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                    {book.title}
                  </h3>

                  {/* Core Concept Banner */}
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 font-medium">
                    🎯 <strong>Konsep Kunci:</strong> {book.coreConcept}
                  </div>

                  {/* Quote Section with Direct Words */}
                  <div className="p-4 bg-stone-900 text-stone-100 rounded-xl space-y-2 text-xs leading-relaxed">
                    <div className="flex items-center gap-2 text-stone-400 text-[11px] font-mono">
                      <Quote className="w-3.5 h-3.5 text-stone-300" />
                      <span>Kutipan Penting dari Buku:</span>
                    </div>
                    <p className="italic text-stone-200 font-serif text-sm">
                      {book.directQuote}
                    </p>
                  </div>

                  {/* Reflection by Arum */}
                  <div className="space-y-2 text-xs leading-relaxed text-stone-700">
                    <div className="font-bold text-stone-900 uppercase tracking-wide text-[11px]">
                      Refleksi &amp; Pemikiran oleh Arum Dahlia:
                    </div>
                    <p>
                      "{book.reflectionByArum}"
                    </p>
                  </div>
                </div>

                {/* Practical Business Application & Takeaways */}
                <div className="pt-4 border-t border-stone-200 space-y-3">
                  <div className="text-[11px] font-semibold text-stone-500 uppercase">
                    Penerapan Nyata di Brand LYONESSE &amp; Coding:
                  </div>
                  <div className="text-xs font-medium text-stone-800 bg-white p-3 rounded-lg border border-stone-200">
                    {book.practicalApplication}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-600 pt-1">
                    {book.keyTakeaways.map((point, pIdx) => (
                      <span key={pIdx} className="inline-flex items-center">
                        <span>{point}</span>
                        {pIdx < book.keyTakeaways.length - 1 && (
                          <span className="text-stone-300 mx-2" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning Ethos Banner */}
        <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl space-y-1">
            <h4 className="text-base font-bold text-stone-900 font-display">
              "Buku adalah kompas terbaik saat menjelajah ranah baru."
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Kombinasi antara wawasan bisnis klasik, literatur keuangan, dan kemampuan berdialog dengan AI memberi saya rasa percaya diri untuk terus belajar, beradaptasi, dan merintis inovasi di usia muda.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Diskusikan Ide &amp; Rekomendasi Buku</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
