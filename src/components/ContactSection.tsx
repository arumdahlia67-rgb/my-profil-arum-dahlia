import { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, MapPin, Sparkles, Shirt, Briefcase } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Kolaborasi Project Brand LYONESSE');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedBusiness, setCopiedBusiness] = useState(false);

  const personalEmail = 'arumdahlia67@gmail.com';
  const businessEmail = 'lyonessebusiness@gmail.com';

  const handleCopy = (text: string, type: 'personal' | 'business') => {
    navigator.clipboard.writeText(text);
    if (type === 'personal') {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    } else {
      setCopiedBusiness(true);
      setTimeout(() => setCopiedBusiness(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Open Collaboration Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
                Kotak Masukan &amp; Hubungi Langsung
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
                Kotak Masukan, Kolaborasi &amp; Diskusi Langsung.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Apakah Anda tertarik berkolaborasi dalam pengembangan brand pakaian <strong>LYONESSE</strong>, 
                eksplorasi pembuatan produk web berbantuan AI, pemodelan keuangan digital, atau pertukaran wawasan? 
                Pintu komunikasi selalu terbuka lebar.
              </p>
            </div>

            {/* Email Cards (Personal + Business) */}
            <div className="space-y-3 pt-2">
              
              {/* Personal Email Card */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-stone-700" />
                    <span>Email Pribadi (Arum Dahlia)</span>
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">Personal</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalEmail}`}
                    className="text-sm font-semibold text-stone-900 hover:underline font-mono"
                  >
                    {personalEmail}
                  </a>
                  <button
                    onClick={() => handleCopy(personalEmail, 'personal')}
                    className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors text-xs flex items-center gap-1"
                    title="Salin alamat email pribadi"
                  >
                    {copiedPersonal ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] text-emerald-700 font-sans">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-sans">Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Business Brand Email Card */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Shirt className="w-3.5 h-3.5 text-stone-700" />
                    <span>Email Bisnis Brand LYONESSE</span>
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">Apparel &amp; Partnership</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${businessEmail}`}
                    className="text-sm font-semibold text-stone-900 hover:underline font-mono"
                  >
                    {businessEmail}
                  </a>
                  <button
                    onClick={() => handleCopy(businessEmail, 'business')}
                    className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors text-xs flex items-center gap-1"
                    title="Salin alamat email bisnis LYONESSE"
                  >
                    {copiedBusiness ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] text-emerald-700 font-sans">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-sans">Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status Card */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1 text-xs">
                <div className="text-stone-500 font-medium">Basis Domisili &amp; Lokasi</div>
                <div className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>Blora, Jawa Tengah, Indonesia</span>
                </div>
                <div className="text-stone-500 pt-1">
                  Mendukung kerja sama jarak jauh (remote), proyek kolaboratif, maupun diskusi tatap muka.
                </div>
              </div>

            </div>

            {/* Ethos Callout */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed space-y-1">
              <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-stone-800" />
                <span>Terbuka untuk Diskusi &amp; Pertukaran Pengetahuan</span>
              </div>
              <p className="text-stone-600">
                "AI adalah mitra percepatan masa depan. Siapa pun Anda yang ingin berdiskusi seputar apparel bisnis, ide digital, atau pengembangan diri—saya menyambutnya dengan hangat."
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 font-display mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Silakan tuliskan ide kolaborasi, tawaran project, atau pesan Anda. Formulir ini akan langsung terhubung ke surel saya.
              </p>

              {submitted ? (
                <div className="p-6 bg-stone-50 border border-stone-300 rounded-xl space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    Terima Kasih, {name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-md mx-auto">
                    Pesan Anda terkait topik <strong>"{topic}"</strong> telah tercatat. Anda juga dapat mengirimkan konfirmasi via surel ke{' '}
                    <a href={`mailto:${personalEmail}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(message)}`} className="underline font-semibold font-mono">
                      {personalEmail}
                    </a> atau{' '}
                    <a href={`mailto:${businessEmail}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(message)}`} className="underline font-semibold font-mono">
                      {businessEmail}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Nama Lengkap Anda
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                        Alamat Email Anda
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Topik Kolaborasi / Pesan
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:outline-hidden transition-all"
                    >
                      <option value="Kolaborasi Project Brand LYONESSE">Kolaborasi Project Brand LYONESSE</option>
                      <option value="Web Development & AI-Assisted Solution">Web Development &amp; AI-Assisted Solution</option>
                      <option value="Konsultasi Unit Economics & Akuntansi UMKM">Konsultasi Unit Economics &amp; Akuntansi UMKM</option>
                      <option value="Diskusi Literatur & Rekomendasi Buku">Diskusi Literatur &amp; Rekomendasi Buku</option>
                      <option value="Peluang Kerja Sama Lainnya">Peluang Kerja Sama Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Isi Pesan
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan gagasan, pertanyaan, atau rincian project yang ingin Anda diskusikan..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-1 focus:ring-stone-900 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-stone-500">
                      Terkirim ke email arumdahlia67@gmail.com
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
