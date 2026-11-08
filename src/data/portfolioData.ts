export interface Achievement {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: 'silat' | 'sports' | 'culture' | 'academic' | 'vocational';
  categoryLabel: string;
  level: string;
  rank: string;
  description: string;
  takeaway: string;
}

export interface EducationPhase {
  id: string;
  schoolName: string;
  period: string;
  level: string;
  major?: string;
  highlight: string;
  summary: string;
  achievements: Achievement[];
}

export const educationData: EducationPhase[] = [
  {
    id: 'sd',
    schoolName: 'SDN Pxxxx',
    period: '2013 — 2019',
    level: 'Pendidikan Dasar',
    highlight: 'Fondasi Disiplin, Bela Diri, Olahraga, & Seni Tradisi',
    summary: 'Masa pembentukan karakter dan daya juang melalui cabang olahraga pencak silat, bola voli beregu, seni tari klasik, dan macapat islami.',
    achievements: [
      {
        id: 'silat-o2sn-2017',
        title: 'Juara 1 Pencak Silat O2SN',
        institution: 'SDN Pxxxx',
        year: '2017',
        category: 'silat',
        categoryLabel: 'Bela Diri & Sportivitas',
        level: 'Tingkat Kecamatan',
        rank: 'Juara 1',
        description: 'Meraih medali emas pada Olimpiade Olahraga Siswa Nasional (O2SN) cabang pencak silat tingkat kecamatan.',
        takeaway: 'Menanamkan disiplin latihan tinggi, ketahanan mental di bawah tekanan, dan penghormatan sportivitas.'
      },
      {
        id: 'silat-o2sn-2018',
        title: 'Juara 2 Pencak Silat O2SN',
        institution: 'SDN Pxxxx',
        year: '2018',
        category: 'silat',
        categoryLabel: 'Bela Diri & Sportivitas',
        level: 'Tingkat Kecamatan',
        rank: 'Juara 2',
        description: 'Mempertahankan performa kompetitif dengan meraih peringkat kedua pada ajang O2SN tahun berikutnya.',
        takeaway: 'Belajar tentang konsistensi pembuktian hasil dan pentingnya evaluasi strategi bertanding.'
      },
      {
        id: 'silat-popda-2018',
        title: 'Juara 2 Pencak Silat POPDA',
        institution: 'SDN Pxxxx',
        year: '2018',
        category: 'silat',
        categoryLabel: 'Bela Diri & Sportivitas',
        level: 'Tingkat Kecamatan',
        rank: 'Juara 2',
        description: 'Meraih posisi runner-up pada Pekan Olahraga Pelajar Daerah (POPDA) cabang pencak silat tingkat kecamatan.',
        takeaway: 'Melatih konsentrasi gerak refleks dan kekuatan fisik yang terarah.'
      },
      {
        id: 'volly-2019',
        title: 'Juara 1 Tim Bola Volly Putri',
        institution: 'SDN Pxxxx',
        year: '2019',
        category: 'sports',
        categoryLabel: 'Olahraga Beregu',
        level: 'Tingkat Kecamatan',
        rank: 'Juara 1',
        description: 'Menjadi bagian dari tim bola voli putri sekolah hingga merebut podium pertama tingkat kecamatan.',
        takeaway: 'Mengasah kerja sama tim, komunikasi lapangan yang cepat, dan kepercayaan antar rekan.'
      },
      {
        id: 'macapat-2018',
        title: 'Juara 3 Macapat Islami Lomba MAPSI',
        institution: 'SDN Pxxxx',
        year: '2018',
        category: 'culture',
        categoryLabel: 'Seni & Budaya',
        level: 'Tingkat Kecamatan',
        rank: 'Juara 3',
        description: 'Melantunkan tembang macapat bernuansa islami pada ajang Mata Pelajaran dan Seni Islami (MAPSI).',
        takeaway: 'Melatih olah vokal, ketenangan tampil di hadapan juri, dan kepekaan rasa bahasa sastra.'
      },
      {
        id: 'tari-2016',
        title: 'Juara Harapan 3 Lomba Tari Klasik',
        institution: 'SDN Pxxxx',
        year: '2016',
        category: 'culture',
        categoryLabel: 'Seni & Budaya',
        level: 'Tingkat Kecamatan',
        rank: 'Juara Harapan 3',
        description: 'Penampilan tari klasik dengan keharmonisan gerak (wiraga), ketukan irama (wirama), dan ekspresi penjiwaan (wirasa).',
        takeaway: 'Membentuk koordinasi motorik, kesabaran latihan, dan apresiasi seni tradisi.'
      }
    ]
  },
  {
    id: 'mts',
    schoolName: 'MTs N Blora',
    period: '2019 — 2022',
    level: 'Pendidikan Menengah Pertama',
    highlight: 'Penalaran Akademik, Nilai Keagamaan, & Literasi',
    summary: 'Masa penempaan daya nalar kritis, kedisiplinan membaca teks, dan pendalaman etika nilai keislaman dalam studi akademik.',
    achievements: [
      {
        id: 'olimpiade-pai-2022',
        title: 'Medali Perunggu Olimpiade Pendidikan Agama Islam',
        institution: 'MTs N Blora',
        year: '2022',
        category: 'academic',
        categoryLabel: 'Kompetisi Akademik',
        level: 'Tingkat Kompetisi',
        rank: 'Medali Perunggu',
        description: 'Kompetisi akademik menguji pemahaman kontekstual seputar fiqih, akidah, sejarah peradaban, dan nilai-nilai moralitas.',
        takeaway: 'Fondasi penalaran analitis, integritas kejujuran, dan ketelitian menelaah literatur.'
      }
    ]
  },
  {
    id: 'smk',
    schoolName: 'SMK Negeri 2 Blora',
    period: '2022 — 2025',
    level: 'Pendidikan Menengah Kejuruan',
    major: 'Akuntansi dan Keuangan Lembaga (AKL)',
    highlight: 'Keahlian Akuntansi, Public Speaking Penyiaran, & Literasi Bisnis',
    summary: 'Fokus intensif pada sistem informasi akuntansi, perhitungan jurnal, neraca laba-rugi, serta pengalaman vokasi nyata dalam penyiaran radio dan komunikasi publik.',
    achievements: [
      {
        id: 'ukk-akl-2025',
        title: 'Sertifikat Uji Kompetensi Keahlian (UKK) Akuntansi',
        institution: 'SMK Negeri 2 Blora & LSP / BNSP',
        year: '2025',
        category: 'vocational',
        categoryLabel: 'Sertifikasi Keahlian',
        level: 'Standar Nasional Vokasi',
        rank: 'Predikat: Kompeten',
        description: 'Ujian komprehensif siklus akuntansi: pencatatan jurnal umum, buku besar, neraca lajur, laporan laba rugi, penyesuaian, dan analisis rasio.',
        takeaway: 'Kecakapan valid dalam membaca arus keuangan, presisi angka, dan kepatuhan standar pembukuan.'
      },
      {
        id: 'pkl-radio-2024',
        title: 'Sertifikat PKL Penyiar Radio',
        institution: 'Stasiun Radio Mitra Vokasi Blora',
        year: '2024',
        category: 'vocational',
        categoryLabel: 'Vokasi Komunikasi',
        level: 'Industri Penyiaran',
        rank: 'Predikat: Sangat Bagus',
        description: 'Praktik kerja lapangan sebagai penyiar radio: live broadcasting, penyusunan naskah informasi publik, modulasi intonasi suara, dan public speaking.',
        takeaway: 'Artikulasi komunikasi yang lugas, percaya diri di depan mikrofon, dan kemampuan mengolah informasi secara terstruktur.'
      },
      {
        id: 'viva-beauty-2024',
        title: 'Sertifikat Viva Beauty',
        institution: 'Viva Cosmetics & SMK N 2 Blora',
        year: '2024',
        category: 'vocational',
        categoryLabel: 'Pengembangan Diri',
        level: 'Pelatihan Profesional',
        rank: 'Tersertifikasi',
        description: 'Pelatihan personal branding, etika penampilan kerja, tata rias standar industri, dan komunikasi representasi diri profesional.',
        takeaway: 'Kerapian, kesiapan representasi profesional, dan etika berinteraksi di lingkungan industri.'
      }
    ]
  }
];

export interface BookReview {
  id: string;
  title: string;
  author: string;
  category: string;
  coreConcept: string;
  directQuote: string;
  reflectionByArum: string;
  practicalApplication: string;
  keyTakeaways: string[];
}

export const booksRead: BookReview[] = [
  {
    id: 'intelligent-investor',
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    category: 'Analisis Keuangan & Value Investing',
    coreConcept: 'Margin of Safety (Marjin Keamanan) & Manajemen Risiko Rasional',
    directQuote: '"The margin of safety is always dependent on the price paid. It will be large at one price, small at some higher price, nonexistent at some still higher price."',
    reflectionByArum: 'Sebagai lulusan Akuntansi yang merintis brand apparel LYONESSE, buku ini membuka mata saya bahwa bisnis bukan soal spekulasi optimis, melainkan tentang seberapa aman batas toleransi risiko yang kita miliki. Konsep Margin of Safety langsung saya jadikan rumus dalam menghitung BEP produksi: memastikan harga jual dan proyeksi kuantiti memiliki bantalan aman jika biaya kain naik atau permintaan pasar melambat.',
    practicalApplication: 'Diterapkan dalam kalkulator BEP LYONESSE: menghitung persentase bantalan aman (Margin of Safety) terhadap titik impas produksi kaos Cotton Combed 20s & 16s.',
    keyTakeaways: [
      'Margin of Safety sebagai pelindung modal utama',
      'Memisahkan emosi pasar dari nilai intrinsik bisnis',
      'Disiplin pencatatan angka dan konservatisme neraca'
    ]
  },
  {
    id: 'warren-buffett-mindset',
    title: 'Warren Buffett Mindset: The Snowball Principles',
    author: 'Alice Schroeder & Warren Buffett Writings',
    category: 'Pola Pikir Bisnis & Bunga Majemuk',
    coreConcept: 'Circle of Competence & Pertumbuhan Majemuk Jangka Panjang',
    directQuote: '"Risk comes from not knowing what you are doing. You don\'t need to be an expert on every company, or even many. You only have to be able to evaluate companies within your circle of competence."',
    reflectionByArum: 'Warren Buffett mengajarkan kita untuk jujur pada apa yang kita kuasai dan tekun memperlebar lingkaran itu. Saya bukan lulusan IT, tapi saya punya fondasi kuat di akuntansi dan logika bisnis. Dengan menjadikan AI sebagai partner kolaboratif, saya bisa memperlebar kompetensi ke ranah web development secara presisi tanpa kehilangan pijakan pada nilai riil.',
    practicalApplication: 'Mengadopsi pola pikir jangka panjang dalam pembangunan brand LYONESSE: fokus pada kualitas fisik kain (Combed 16s/20s) dan transparansi struktur biaya daripada sekadar perang harga sesaat.',
    keyTakeaways: [
      'Kekuatan waktu dan compound interest (efek bola salju)',
      'Fokus pada lingkaran kompetensi dan perluasan terukur',
      'Integritas dan kepuasan pelanggan sebagai aset tak berwujud'
    ]
  }
];

export interface BrandSpec {
  fabric: '20s' | '16s';
  name: string;
  tagline: string;
  summary: string;
  targetPriceRange: string;
  recommendedHpp: string;
  silhouette: string;
}

export const lyonesseSpecs: Record<'20s' | '16s', BrandSpec> = {
  '20s': {
    fabric: '20s',
    name: 'Cotton Combed 20s (Standar Distro)',
    tagline: 'Tebal Sedang & Adem di Iklim Tropis',
    summary: 'Ketebalan standar clothing distro premium. Lembut, menyerap keringat dengan baik, dan nyaman untuk pemakaian harian santai.',
    targetPriceRange: 'Rp 125.000 — Rp 140.000',
    recommendedHpp: 'Rp 62.000 — Rp 68.000',
    silhouette: 'Regular Casual Fit'
  },
  '16s': {
    fabric: '16s',
    name: 'Cotton Combed 16s (Ultra-Heavyweight)',
    tagline: 'Ekstra Tebal, Kokoh & Siluet Boxy',
    summary: 'Bahan paling tebal dan berbobot. Jatuh kain tegak dan tegas, tidak tembus pandang, serta sangat awet untuk gaya oversized streetwear.',
    targetPriceRange: 'Rp 155.000 — Rp 180.000',
    recommendedHpp: 'Rp 78.000 — Rp 86.000',
    silhouette: 'Oversized Boxy Cut'
  }
};

