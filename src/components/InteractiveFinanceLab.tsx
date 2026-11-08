import { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  Layers, 
  FileSpreadsheet, 
  ArrowRight,
  Info,
  DollarSign,
  Shirt,
  Tag,
  Sliders,
  SlidersHorizontal,
  Scale,
  Sparkles,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { lyonesseSpecs } from '../data/portfolioData';

export function InteractiveFinanceLab() {
  // Mode Kalkulator: '20s' atau '16s'
  const [selectedFabric, setSelectedFabric] = useState<'20s' | '16s'>('20s');

  // Input states yang dapat digeser / diubah bebas oleh pengunjung
  const [sellingPrice, setSellingPrice] = useState<number>(135000);
  const [fabricCost, setFabricCost] = useState<number>(36000);
  const [sewingCost, setSewingCost] = useState<number>(14000);
  const [printCost, setPrintCost] = useState<number>(12000);
  
  // Komponen HPP Kaos (Kain, Jahit, Sablon, Label, Kemasan)
  const [nameTagCost, setNameTagCost] = useState<number>(2500);
  const [packagingCost, setPackagingCost] = useState<number>(2500);

  // Biaya Tetap Bulanan (Fixed Cost)
  const [rentStudioCost, setRentStudioCost] = useState<number>(1500000);
  const [aiAndUtilityCost, setAiAndUtilityCost] = useState<number>(850000);
  const [marketingBudget, setMarketingBudget] = useState<number>(1200000);

  // Target Volume Penjualan Kaos per Bulan (Pcs)
  const [salesVolume, setSalesVolume] = useState<number>(150);

  // Active view tab: 'bep' | 'pnl' | 'journal' | 'cycle'
  const [activeTab, setActiveTab] = useState<'bep' | 'pnl' | 'journal' | 'cycle'>('bep');

  const tabsList = [
    { id: 'bep', number: '1', title: 'BEP & HPP Kaos', fullTitle: '1. Kalkulator BEP & HPP Kaos' },
    { id: 'pnl', number: '2', title: 'Laba Rugi (P&L)', fullTitle: '2. Laporan Laba Rugi Real-Time (P&L)' },
    { id: 'journal', number: '3', title: 'Jurnal Umum', fullTitle: '3. Jurnal Umum Akuntansi (Double-Entry)' },
    { id: 'cycle', number: '4', title: 'Kartu HPP & Siklus', fullTitle: '4. Siklus Akuntansi & Kartu HPP Pesanan' }
  ] as const;

  const currentTabIndex = tabsList.findIndex((t) => t.id === activeTab);
  const goToPrevTab = () => {
    const prev = currentTabIndex > 0 ? currentTabIndex - 1 : tabsList.length - 1;
    setActiveTab(tabsList[prev].id);
  };
  const goToNextTab = () => {
    const next = currentTabIndex < tabsList.length - 1 ? currentTabIndex + 1 : 0;
    setActiveTab(tabsList[next].id);
  };

  // Load Preset untuk Cotton Combed 20s vs Cotton Combed 16s
  const applyFabricPreset = (fabric: '20s' | '16s') => {
    setSelectedFabric(fabric);
    if (fabric === '20s') {
      setSellingPrice(135000);
      setFabricCost(36000);
      setSewingCost(14000);
      setPrintCost(12000);
      setNameTagCost(2500);
      setPackagingCost(2500);
      setRentStudioCost(1500000);
      setAiAndUtilityCost(850000);
      setMarketingBudget(1200000);
      setSalesVolume(150);
    } else {
      // 16s Ultra-Heavyweight: bahan lebih tebal & harga jual lebih tinggi
      setSellingPrice(169000);
      setFabricCost(48000);
      setSewingCost(16000);
      setPrintCost(14000);
      setNameTagCost(4000); // Woven label damask tebal
      setPackagingCost(3500);
      setRentStudioCost(1800000);
      setAiAndUtilityCost(950000);
      setMarketingBudget(1500000);
      setSalesVolume(120);
    }
  };

  const applyPromoScenario = () => {
    setSellingPrice(selectedFabric === '20s' ? 119000 : 145000);
    setSalesVolume(230);
  };

  const applyScaleProductionScenario = () => {
    setSalesVolume(250);
    setPackagingCost(selectedFabric === '20s' ? 2000 : 2800);
  };

  // Calculations
  const variableCostPerUnit = fabricCost + sewingCost + printCost + nameTagCost + packagingCost; // Total HPP per Kaos
  const totalFixedCosts = rentStudioCost + aiAndUtilityCost + marketingBudget;
  const contributionMargin = sellingPrice - variableCostPerUnit;
  const contributionMarginRatio = sellingPrice > 0 ? (contributionMargin / sellingPrice) : 0;

  // BEP Calculations
  const bepUnits = contributionMargin > 0 ? Math.ceil(totalFixedCosts / contributionMargin) : 0;
  const bepRupiah = contributionMarginRatio > 0 ? Math.round(totalFixedCosts / contributionMarginRatio) : 0;

  // Margin of Safety
  const marginOfSafetyPercent = salesVolume > 0 && bepUnits > 0
    ? Math.round(((salesVolume - bepUnits) / salesVolume) * 100)
    : 0;

  // Income Statement (P&L) Calculations
  const revenue = salesVolume * sellingPrice;
  const totalFabricCost = salesVolume * fabricCost;
  const totalSewingCost = salesVolume * sewingCost;
  const totalPrintCost = salesVolume * printCost;
  const totalNameTagCost = salesVolume * nameTagCost;
  const totalPackagingCost = salesVolume * packagingCost;
  const totalVariableCost = salesVolume * variableCostPerUnit; // Total HPP Akumulasi

  const grossProfit = revenue - totalVariableCost;
  const grossMarginRatio = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
  const netProfit = grossProfit - totalFixedCosts;
  const netMarginRatio = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  // Currency Formatter
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Health & Feasibility Diagnosis (DIPOSISIKAN DI BAWAH SETELAH KALKULATOR BEP)
  const healthStatus = useMemo(() => {
    if (contributionMargin <= 0) {
      return {
        level: 'danger',
        label: 'TIDAK SEHAT (RUGI PRODUKSI)',
        badgeColor: 'text-rose-700 bg-rose-50 border-rose-300',
        summary: `Harga jual (${formatIDR(sellingPrice)}) lebih kecil dari total HPP variabel (${formatIDR(variableCostPerUnit)}). Setiap kaos yang terjual mengalami rugi langsung!`,
        advice: `Naikkan harga jual minimal di atas ${formatIDR(variableCostPerUnit + 25000)} atau tekan komponen HPP agar margin kontribusi bernilai positif.`
      };
    }

    if (salesVolume < bepUnits) {
      const unitShortage = bepUnits - salesVolume;
      return {
        level: 'warning',
        label: 'DEFISIT (DI BAWAH TITIK IMPAS BEP)',
        badgeColor: 'text-amber-900 bg-amber-50 border-amber-300',
        summary: `Target penjualan (${salesVolume} pcs) belum mencapai titik impas BEP (${bepUnits} pcs). Terjadi proyeksi defisit operasional ${formatIDR(Math.abs(netProfit))}.`,
        advice: `Perlu tambahan penjualan minimal ${unitShortage} pcs lagi untuk mencapai titik impas BEP, atau kurangi biaya operasional tetap.`
      };
    }

    if (netMarginRatio < 15) {
      return {
        level: 'moderate',
        label: 'CUKUP SEHAT (MARGIN TIPIS)',
        badgeColor: 'text-blue-800 bg-blue-50 border-blue-300',
        summary: `Bisnis berhasil melewati titik impas BEP dengan margin aman ${marginOfSafetyPercent}%, namun laba bersih relatif tipis (${netMarginRatio.toFixed(1)}%).`,
        advice: `Pertahankan efisiensi HPP dan pembelian bahan kain skala rol besar untuk meningkatkan laba bersih.`
      };
    }

    return {
      level: 'healthy',
      label: 'SANGAT SEHAT & PROFITABLE (SESUAI BEP)',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      summary: `Struktur keuangan sangat ideal & sehat! Margin laba bersih ${netMarginRatio.toFixed(1)}% dengan Margin of Safety ${marginOfSafetyPercent}% di atas titik impas BEP.`,
      advice: `Arus kas sangat kuat untuk membiayai batch produksi kaos Cotton Combed ${selectedFabric} berikutnya serta ekspansi varian warna baru.`
    };
  }, [contributionMargin, salesVolume, bepUnits, netProfit, netMarginRatio, marginOfSafetyPercent, sellingPrice, variableCostPerUnit, selectedFabric]);

  // Connected Journal Entries for this scenario
  const journalEntries = useMemo(() => {
    return [
      {
        id: 'JE-01',
        date: '2026-03-02',
        accountCode: '113 - Persediaan Bahan Kain',
        accountName: `Persediaan Bahan Baku (Cotton Combed ${selectedFabric})`,
        description: `Pengadaan kain combed ${selectedFabric} untuk ${salesVolume} pcs (@ ${formatIDR(fabricCost)})`,
        debit: totalFabricCost,
        credit: 0
      },
      {
        id: 'JE-02',
        date: '2026-03-02',
        accountCode: '114 - Persediaan Aksesoris & Name Tag',
        accountName: 'Persediaan Woven Name Tag & Packaging',
        description: `Pengadaan label name tag (@ ${formatIDR(nameTagCost)}) & packaging zipper (@ ${formatIDR(packagingCost)})`,
        debit: totalNameTagCost + totalPackagingCost,
        credit: 0
      },
      {
        id: 'JE-03',
        date: '2026-03-02',
        accountCode: '101 - Kas & Bank Usaha',
        accountName: 'Kas & Bank Usaha LYONESSE',
        description: `Pembayaran tunai bahan kain, label name tag, dan packaging`,
        debit: 0,
        credit: totalFabricCost + totalNameTagCost + totalPackagingCost
      },
      {
        id: 'JE-04',
        date: '2026-03-10',
        accountCode: '115 - Barang Dalam Proses (Konveksi)',
        accountName: 'Ongkos Vendor Jahit & Sablon Kaos',
        description: `Biaya jahit rantai (@ ${formatIDR(sewingCost)}) dan sablon (@ ${formatIDR(printCost)})`,
        debit: totalSewingCost + totalPrintCost,
        credit: 0
      },
      {
        id: 'JE-05',
        date: '2026-03-10',
        accountCode: '101 - Kas & Bank Usaha',
        accountName: 'Kas & Bank Usaha LYONESSE',
        description: `Pembayaran jasa jahit dan sablon vendor konveksi`,
        debit: 0,
        credit: totalSewingCost + totalPrintCost
      },
      {
        id: 'JE-06',
        date: '2026-03-15',
        accountCode: '501 - Beban Operasional & AI Subscription',
        accountName: 'Beban Tetap: Studio, Listrik, AI Tools & Iklan',
        description: `Alokasi beban sewa studio, internet, AI software, dan promosi`,
        debit: totalFixedCosts,
        credit: 0
      },
      {
        id: 'JE-07',
        date: '2026-03-15',
        accountCode: '101 - Kas & Bank Usaha',
        accountName: 'Kas & Bank Usaha LYONESSE',
        description: `Pembayaran utilitas dan beban tetap operasional bulanan`,
        debit: 0,
        credit: totalFixedCosts
      },
      {
        id: 'JE-08',
        date: '2026-03-28',
        accountCode: '101 - Kas / Piutang Penjualan',
        accountName: 'Kas dari Penjualan Kaos',
        description: `Penerimaan omzet penjualan ${salesVolume} pcs kaos LYONESSE (@ ${formatIDR(sellingPrice)})`,
        debit: revenue,
        credit: 0
      },
      {
        id: 'JE-09',
        date: '2026-03-28',
        accountCode: '401 - Pendapatan Penjualan Apparel',
        accountName: 'Pendapatan Penjualan Kaos LYONESSE',
        description: `Pengakuan pendapatan penjualan ${salesVolume} pcs kaos Cotton Combed ${selectedFabric}`,
        debit: 0,
        credit: revenue
      },
      {
        id: 'JE-10',
        date: '2026-03-28',
        accountCode: '500 - Harga Pokok Penjualan (HPP)',
        accountName: 'Harga Pokok Penjualan (COGS)',
        description: `Pengakuan HPP ${salesVolume} pcs (Kain + Jahit + Sablon + Name Tag + Packaging)`,
        debit: totalVariableCost,
        credit: 0
      },
      {
        id: 'JE-11',
        date: '2026-03-28',
        accountCode: '113 - Persediaan Barang Jadi',
        accountName: 'Persediaan Kaos LYONESSE',
        description: `Pengeluaran persediaan barang jadi yang telah terjual`,
        debit: 0,
        credit: totalVariableCost
      }
    ];
  }, [selectedFabric, salesVolume, fabricCost, nameTagCost, packagingCost, sewingCost, printCost, totalFabricCost, totalNameTagCost, totalPackagingCost, totalSewingCost, totalPrintCost, totalFixedCosts, revenue, sellingPrice, totalVariableCost]);

  const totalDebit = journalEntries.reduce((acc, curr) => acc + curr.debit, 0);
  const totalCredit = journalEntries.reduce((acc, curr) => acc + curr.credit, 0);
  const isJournalBalanced = totalDebit === totalCredit && totalDebit > 0;

  return (
    <section id="kalkulator" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-2">
          <div className="text-xs font-semibold text-stone-600 tracking-wider uppercase">
            Laboratorium Finansial &amp; Logika Akuntansi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-display text-balance">
            Kalkulator BEP, HPP Kaos, Laba Rugi, &amp; Jurnal Umum.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sebagai lulusan Akuntansi, saya membangun kalkulator unit economics interaktif untuk lini pakaian <strong>LYONESSE</strong> yang mencakup bahan <strong>Cotton Combed 20s</strong> dan <strong>Cotton Combed 16s</strong>.
          </p>
        </div>

        {/* PROMINENT INVITATION & INTERACTIVE GUIDE BANNER */}
        <div className="p-5 bg-stone-50 border-2 border-stone-900 rounded-2xl mb-8 space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm sm:text-base">
            <Sliders className="w-5 h-5 text-stone-900 shrink-0" />
            <span>Ayo Coba Simulasi Interaktif! Seluruh Nilai Bebas Anda Geser &amp; Ubah</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Kalkulator ini dirancang <strong>terbuka penuh untuk Anda coba</strong>. Silakan <strong>geser slider</strong> atau ketik nominal baru pada harga jual, komponen HPP (kain, jahit, sablon, label name tag, packaging), biaya operasional tetap, maupun target volume penjualan kaos. 
            Tersedia pilihan mode <strong>Kalkulator Kaos 20s</strong> (Standar Distro) dan <strong>Kalkulator Kaos 16s</strong> (Ultra-Heavyweight).
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-800 font-medium pt-1 border-t border-stone-200">
            <span className="font-bold text-stone-900">👉 Panduan:</span>
            <span>Geser slider di bawah ini dan perhatikan bagaimana <strong>Diagnosa Finansial (di atas), Titik Impas BEP, Laba Rugi, serta Jurnal Umum</strong> langsung berubah secara real-time!</span>
          </div>
        </div>

        {/* DUAL CALCULATOR SELECTOR: COTTON COMBED 20s VS 16s */}
        <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wide flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-stone-700" />
              <span>Pilih Mode Kalkulator Bahan Kaos:</span>
            </span>
            <span className="text-xs font-mono text-stone-600 font-semibold">
              Mode Aktif: Cotton Combed {selectedFabric}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => applyFabricPreset('20s')}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedFabric === '20s'
                  ? 'bg-white border-stone-900 shadow-xs'
                  : 'bg-stone-50/80 border-stone-200 hover:bg-white text-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-stone-900 font-mono">
                  1. Kalkulator Cotton Combed 20s
                </span>
                <span className="text-[10px] font-semibold bg-stone-200 px-1.5 py-0.5 rounded text-stone-800">
                  Standar Distro
                </span>
              </div>
              <p className="text-[11px] text-stone-600 line-clamp-1">
                Tebal sedang &amp; adem. Preset HPP: Rp 67.000 · Rekomendasi Jual: Rp 135.000
              </p>
            </button>

            <button
              onClick={() => applyFabricPreset('16s')}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedFabric === '16s'
                  ? 'bg-white border-stone-900 shadow-xs'
                  : 'bg-stone-50/80 border-stone-200 hover:bg-white text-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-stone-900 font-mono">
                  2. Kalkulator Cotton Combed 16s
                </span>
                <span className="text-[10px] font-semibold bg-stone-200 px-1.5 py-0.5 rounded text-stone-800">
                  Ultra-Heavyweight
                </span>
              </div>
              <p className="text-[11px] text-stone-600 line-clamp-1">
                Ekstra tebal &amp; siluet boxy. Preset HPP: Rp 85.500 · Rekomendasi Jual: Rp 169.000
              </p>
            </button>
          </div>

          {/* Quick Scenario Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">Uji Cepat:</span>
              <button
                onClick={applyScaleProductionScenario}
                className="px-2.5 py-1 text-xs text-stone-800 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Skala Produksi 250 Pcs
              </button>
              <button
                onClick={applyPromoScenario}
                className="px-2.5 py-1 text-xs text-stone-800 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Harga Diskon Promo
              </button>
            </div>
            <button
              onClick={() => applyFabricPreset(selectedFabric)}
              className="px-2.5 py-1 text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset ke pengaturan awal"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>

        {/* DIAGNOSA FINANSIAL: TETAP DITARUH DI ATAS SEPERTI SEMULA */}
        <div className="mb-6">
          <div className={`p-5 rounded-2xl border transition-colors shadow-2xs ${healthStatus.badgeColor}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                {healthStatus.level === 'healthy' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                )}
                <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase font-display">
                  Diagnosa Kesehatan Finansial: {healthStatus.label}
                </h3>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono font-medium">
                <span>BEP: <strong>{bepUnits} pcs</strong> ({formatIDR(bepRupiah)})</span>
                <span aria-hidden="true">·</span>
                <span>Target: <strong>{salesVolume} pcs</strong></span>
                <span aria-hidden="true">·</span>
                <span>Net Margin: <strong>{netMarginRatio.toFixed(1)}%</strong></span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              {healthStatus.summary}
            </p>
            <div className="mt-2 pt-2 border-t border-stone-200/60 text-xs opacity-95">
              <strong>Rekomendasi Akuntansi:</strong> {healthStatus.advice}
            </div>
          </div>
        </div>

        {/* KETERANGAN INTERAKTIF SIKLUS AKUNTANSI BISA DIGESER */}
        <div className="p-3.5 bg-stone-100 rounded-xl border border-stone-300 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-stone-900 font-semibold">
            <SlidersHorizontal className="w-4 h-4 text-stone-900 shrink-0" />
            <span>Alur Siklus Akuntansi:</span>
            <span className="font-medium text-stone-700">
              👉 Slide ini bisa digeser/diklik ke kanan untuk melihat siklus akuntansi di sebelahnya!
            </span>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="text-[11px] font-mono text-stone-600 font-bold bg-white px-2 py-0.5 rounded border border-stone-200">
              Slide {currentTabIndex + 1}/4
            </span>
            <button
              onClick={goToPrevTab}
              className="px-2.5 py-1 text-xs font-semibold bg-white border border-stone-300 rounded hover:bg-stone-50 text-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
              title="Geser ke slide sebelumnya"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Sebelumnya</span>
            </button>
            <button
              onClick={goToNextTab}
              className="px-2.5 py-1 text-xs font-semibold bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
              title="Geser ke slide berikutnya"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* View Selector Tabs (Horizontal Sliding Strip) */}
        <div className="flex items-center gap-1 border-b border-stone-200 mb-8 overflow-x-auto pb-1 scrollbar-thin">
          {tabsList.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <span>{tab.fullTitle}</span>
              {idx < tabsList.length - 1 && (
                <span className="text-stone-300 font-normal">➔</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: BEP & HPP Sliders, Output */}
        {activeTab === 'bep' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Sliders for all inputs */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Target Volume Slider */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="target-volume-slider" className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Target Volume Penjualan Kaos (Pcs)
                    </label>
                    <div className="text-sm font-bold font-mono text-stone-900 bg-white px-2.5 py-0.5 rounded border border-stone-300">
                      {salesVolume} Pcs
                    </div>
                  </div>
                  <input
                    id="target-volume-slider"
                    type="range"
                    min="20"
                    max="500"
                    step="5"
                    value={salesVolume}
                    onChange={(e) => setSalesVolume(Number(e.target.value))}
                    className="w-full accent-stone-900 cursor-pointer"
                    aria-label="Target Volume Penjualan Kaos"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Batch Awal: 20 pcs</span>
                    <span>BEP Saat Ini: <strong>{bepUnits} pcs</strong></span>
                    <span>Kapasitas: 500 pcs</span>
                  </div>
                </div>

                {/* Selling Price Slider */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="selling-price-slider" className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Harga Jual Kaos ke Konsumen
                    </label>
                    <div className="text-sm font-bold font-mono text-stone-900 bg-white px-2.5 py-0.5 rounded border border-stone-300">
                      {formatIDR(sellingPrice)}
                    </div>
                  </div>
                  <input
                    id="selling-price-slider"
                    type="range"
                    min="90000"
                    max="220000"
                    step="1000"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full accent-stone-900 cursor-pointer"
                    aria-label="Harga Jual Kaos ke Konsumen"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Rp 90.000 (Harga promo)</span>
                    <span>Rp 220.000 (Heavyweight premium)</span>
                  </div>
                </div>

                {/* Rincian Komponen HPP per Kaos */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Rincian Komponen HPP per Kaos (Termasuk Kain, Jahit, Sablon, Label, &amp; Kemasan)
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-900 bg-white px-2.5 py-0.5 rounded border border-stone-200">
                      HPP: {formatIDR(variableCostPerUnit)} / pcs
                    </span>
                  </div>

                  {/* 1. Fabric Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-700">
                      <label htmlFor="fabric-cost-slider">1. Bahan Baku Kain Cotton Combed {selectedFabric}:</label>
                      <span className="font-mono font-bold">{formatIDR(fabricCost)}</span>
                    </div>
                    <input
                      id="fabric-cost-slider"
                      type="range"
                      min="25000"
                      max="65000"
                      step="500"
                      value={fabricCost}
                      onChange={(e) => setFabricCost(Number(e.target.value))}
                      className="w-full accent-stone-700 cursor-pointer"
                      aria-label="Bahan Baku Kain Combed"
                    />
                  </div>

                  {/* 2. Sewing Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-700">
                      <label htmlFor="sewing-cost-slider">2. Ongkos Jahit Rantai &amp; Obras:</label>
                      <span className="font-mono font-bold">{formatIDR(sewingCost)}</span>
                    </div>
                    <input
                      id="sewing-cost-slider"
                      type="range"
                      min="8000"
                      max="25000"
                      step="500"
                      value={sewingCost}
                      onChange={(e) => setSewingCost(Number(e.target.value))}
                      className="w-full accent-stone-700 cursor-pointer"
                      aria-label="Ongkos Jahit Rantai dan Obras"
                    />
                  </div>

                  {/* 3. Print Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-700">
                      <label htmlFor="print-cost-slider">3. Sablon Plastisol / Bordir:</label>
                      <span className="font-mono font-bold">{formatIDR(printCost)}</span>
                    </div>
                    <input
                      id="print-cost-slider"
                      type="range"
                      min="5000"
                      max="30000"
                      step="500"
                      value={printCost}
                      onChange={(e) => setPrintCost(Number(e.target.value))}
                      className="w-full accent-stone-700 cursor-pointer"
                      aria-label="Biaya Sablon Plastisol atau Bordir"
                    />
                  </div>

                  {/* 4. Name Tag / Woven Label Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-700">
                      <label htmlFor="name-tag-cost-slider">4. Aksesoris &amp; Label Woven (Name Tag):</label>
                      <span className="font-mono font-bold">{formatIDR(nameTagCost)}</span>
                    </div>
                    <input
                      id="name-tag-cost-slider"
                      type="range"
                      min="500"
                      max="8000"
                      step="250"
                      value={nameTagCost}
                      onChange={(e) => setNameTagCost(Number(e.target.value))}
                      className="w-full accent-stone-700 cursor-pointer"
                      aria-label="Biaya Label Woven dan Name Tag"
                    />
                  </div>

                  {/* 5. Packaging Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-700">
                      <label htmlFor="packaging-cost-slider">5. Packaging Zipper Bag &amp; Stiker:</label>
                      <span className="font-mono font-bold">{formatIDR(packagingCost)}</span>
                    </div>
                    <input
                      id="packaging-cost-slider"
                      type="range"
                      min="1000"
                      max="8000"
                      step="250"
                      value={packagingCost}
                      onChange={(e) => setPackagingCost(Number(e.target.value))}
                      className="w-full accent-stone-700 cursor-pointer"
                      aria-label="Packaging Zipper Bag dan Stiker"
                    />
                  </div>

                  <div className="pt-2.5 border-t border-stone-200 flex justify-between items-center text-xs">
                    <span className="font-semibold text-stone-800">Total HPP per Kaos (Kain + Jahit + Sablon + Label + Kemasan):</span>
                    <span className="font-mono font-bold text-stone-900 text-sm">{formatIDR(variableCostPerUnit)}</span>
                  </div>
                </div>

                {/* Biaya Tetap Operasional Bulanan */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-stone-800 uppercase tracking-wide">
                    <label htmlFor="fixed-costs-slider">Biaya Tetap Operasional Bulanan</label>
                    <span className="font-mono text-stone-900">{formatIDR(totalFixedCosts)}</span>
                  </div>
                  <input
                    id="fixed-costs-slider"
                    type="range"
                    min="1000000"
                    max="6000000"
                    step="100000"
                    value={totalFixedCosts}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setRentStudioCost(Math.round(val * 0.45));
                      setAiAndUtilityCost(Math.round(val * 0.25));
                      setMarketingBudget(val - Math.round(val * 0.45) - Math.round(val * 0.25));
                    }}
                    className="w-full accent-stone-900 cursor-pointer"
                    aria-label="Biaya Tetap Operasional Bulanan"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Sewa studio ({formatIDR(rentStudioCost)})</span>
                    <span>AI &amp; utilitas ({formatIDR(aiAndUtilityCost)})</span>
                    <span>Iklan ({formatIDR(marketingBudget)})</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Live BEP Output & HPP Breakdown */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Primary BEP Metric Card */}
                <div className="p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                      Break-Even Point Real-Time
                    </span>
                    <span className="text-xs font-semibold text-stone-300">
                      Combed {selectedFabric}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-stone-400">Titik Impas (BEP Unit)</div>
                      <div className="text-3xl font-extrabold font-mono tabular-nums text-white mt-1">
                        {bepUnits} <span className="text-sm font-normal text-stone-400">pcs</span>
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5">
                        Jumlah kaos minimal
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-stone-400">Titik Impas (BEP Rupiah)</div>
                      <div className="text-lg font-bold font-mono tabular-nums text-stone-200 mt-1">
                        {formatIDR(bepRupiah)}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5">
                        Omzet minimal impas
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-800 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Margin Kontribusi per Kaos:</span>
                      <span className="font-mono font-semibold text-white">{formatIDR(contributionMargin)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Rasio Margin Kontribusi:</span>
                      <span className="font-mono font-semibold text-white">{(contributionMarginRatio * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Margin of Safety (Bantalan Aman):</span>
                      <span className={`font-mono font-bold ${marginOfSafetyPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {marginOfSafetyPercent}%
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-[11px] text-stone-300 leading-relaxed space-y-1">
                    <div><strong>Koneksi Langsung ke Laba Rugi:</strong></div>
                    <div>Penjualan {salesVolume} pcs menghasilkan omzet <strong>{formatIDR(revenue)}</strong> dengan proyeksi laba bersih <strong>{formatIDR(netProfit)}</strong> ({netMarginRatio.toFixed(1)}%).</div>
                  </div>
                </div>

                {/* HPP Structure Composition Box */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-3 text-stone-800">
                  <div className="flex items-center justify-between font-bold text-stone-900">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-stone-700" />
                      <span>Komposisi HPP per Kaos</span>
                    </span>
                    <span className="font-mono text-sm">{formatIDR(variableCostPerUnit)}</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-stone-600">
                    <div className="flex justify-between">
                      <span>Kain Combed {selectedFabric}:</span>
                      <span className="font-mono font-medium text-stone-800">{formatIDR(fabricCost)} ({((fabricCost / variableCostPerUnit) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jahit Rantai &amp; Obras:</span>
                      <span className="font-mono font-medium text-stone-800">{formatIDR(sewingCost)} ({((sewingCost / variableCostPerUnit) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sablon Plastisol / Bordir:</span>
                      <span className="font-mono font-medium text-stone-800">{formatIDR(printCost)} ({((printCost / variableCostPerUnit) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Aksesoris &amp; Label Name Tag:</span>
                      <span className="font-mono font-medium text-stone-800">{formatIDR(nameTagCost)} ({((nameTagCost / variableCostPerUnit) * 100).toFixed(0)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Packaging &amp; Stiker:</span>
                      <span className="font-mono font-medium text-stone-800">{formatIDR(packagingCost)} ({((packagingCost / variableCostPerUnit) * 100).toFixed(0)}%)</span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
                    Total HPP untuk target {salesVolume} pcs adalah <strong>{formatIDR(totalVariableCost)}</strong> ({((variableCostPerUnit / sellingPrice) * 100).toFixed(1)}% dari harga jual).
                  </div>
                </div>

              </div>

            </div>

            {/* Navigasi Slide Antar Siklus Akuntansi */}
            <div className="pt-2">
              <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-800">
                  <span className="font-bold text-stone-900">👉 Siklus Akuntansi Berikutnya:</span>
                  <span>Di sebelah kalkulator BEP ini terdapat alur <strong>Laporan Laba Rugi Real-Time</strong> yang otomatis terhitung.</span>
                </div>
                <button
                  onClick={() => setActiveTab('pnl')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
                >
                  <span>Geser ke Slide 2: Laporan Laba Rugi (P&amp;L)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: P&L Statement (Real-Time connected) */}
        {activeTab === 'pnl' && (
          <div className="space-y-6">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-stone-900 font-display">
                  Laporan Laba Rugi Operasional Real-Time (Income Statement)
                </h3>
                <p className="text-xs text-stone-600">
                  Otomatis terhubung dengan slider BEP: target penjualan {salesVolume} pcs kaos Cotton Combed {selectedFabric}.
                </p>
              </div>
              <div className="text-xs font-mono font-bold text-stone-800 bg-white px-3 py-1.5 rounded border border-stone-300">
                Laba Bersih: {formatIDR(netProfit)} ({netMarginRatio.toFixed(1)}%)
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-medium">
                  <tr>
                    <th className="py-3 px-4">Komponen Laba Rugi</th>
                    <th className="py-3 px-4 text-right font-mono">Per Kaos</th>
                    <th className="py-3 px-4 text-right font-mono">Total Akumulasi ({salesVolume} pcs)</th>
                    <th className="py-3 px-4 text-right font-mono">% Omzet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  <tr className="hover:bg-stone-50/60 font-semibold">
                    <td className="py-3 px-4 text-stone-900">Pendapatan Penjualan Bersih (Revenue)</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">{formatIDR(sellingPrice)}</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-900">{formatIDR(revenue)}</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">100.0%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-2.5 px-4 pl-8">· Bahan Baku Kain Combed {selectedFabric}</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(fabricCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalFabricCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalFabricCost / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-2.5 px-4 pl-8">· Ongkos Jahit Rantai &amp; Obras</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(sewingCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalSewingCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalSewingCost / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-2.5 px-4 pl-8">· Sablon Plastisol / Bordir</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(printCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalPrintCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalPrintCost / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-2.5 px-4 pl-8">· Aksesoris &amp; Label Name Tag</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(nameTagCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalNameTagCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalNameTagCost / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-2.5 px-4 pl-8">· Packaging &amp; Stiker</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(packagingCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalPackagingCost)})</td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalPackagingCost / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="bg-stone-50/80 font-bold text-stone-900 border-t border-stone-200">
                    <td className="py-3 px-4">Laba Kotor (Gross Profit)</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">{formatIDR(contributionMargin)}</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">{formatIDR(grossProfit)}</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">{grossMarginRatio.toFixed(1)}%</td>
                  </tr>

                  <tr className="hover:bg-stone-50/60 text-stone-600">
                    <td className="py-3 px-4 pl-8">Beban Tetap Operasional (Sewa, AI Tools, Promosi)</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-500">—</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-rose-600">({formatIDR(totalFixedCosts)})</td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">{revenue > 0 ? ((totalFixedCosts / revenue) * 100).toFixed(1) : 0}%</td>
                  </tr>

                  <tr className="bg-stone-100 border-t-2 border-stone-300 font-extrabold text-stone-900">
                    <td className="py-3.5 px-4 text-base">Laba Bersih Operasional (Net Profit)</td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                      {formatIDR(Math.round(netProfit / (salesVolume || 1)))}
                    </td>
                    <td className={`py-3.5 px-4 text-right font-mono tabular-nums text-base ${netProfit >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {formatIDR(netProfit)}
                    </td>
                    <td className={`py-3.5 px-4 text-right font-mono tabular-nums text-base ${netMarginRatio >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {netMarginRatio.toFixed(1)}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Navigasi Slide Antar Siklus Akuntansi */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setActiveTab('bep')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>← Kembali ke Slide 1: Kalkulator BEP</span>
              </button>
              <div className="text-[11px] text-stone-500 font-medium">
                Siklus 2 dari 4 (Laporan Laba Rugi)
              </div>
              <button
                onClick={() => setActiveTab('journal')}
                className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Geser ke Slide 3: Jurnal Umum Standar</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Connected Journal Entries (Double-Entry) */}
        {activeTab === 'journal' && (
          <div className="space-y-6">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-stone-900 font-display">
                  Jurnal Umum Standar Akuntansi (Double-Entry Verification)
                </h3>
                <p className="text-xs text-stone-600">
                  Setiap kali BEP, volume, atau komponen HPP digeser, pos debit dan kredit di jurnal ini langsung terupdate dan terverifikasi balance (Rp 0 selisih).
                </p>
              </div>
              <div className="flex items-center gap-2">
                {isJournalBalanced ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Jurnal Seimbang (Balance)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-lg font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Terjadi Selisih Pembukuan</span>
                  </span>
                )}
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-medium">
                  <tr>
                    <th className="py-3 px-4 font-mono text-xs">Tanggal / Kode</th>
                    <th className="py-3 px-4">Nama Akun &amp; Keterangan Transaksi</th>
                    <th className="py-3 px-4 text-right font-mono">Debit (Rp)</th>
                    <th className="py-3 px-4 text-right font-mono">Kredit (Rp)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {journalEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-stone-50/60 transition-colors">
                      <td className="py-3 px-4 font-mono text-xs text-stone-500 whitespace-nowrap">
                        {entry.date} <br />
                        <span className="text-[11px] text-stone-400">{entry.accountCode}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className={`font-medium ${entry.credit > 0 ? 'pl-6 text-stone-700' : 'text-stone-900'}`}>
                          {entry.accountName}
                        </div>
                        <div className="text-xs text-stone-500">{entry.description}</div>
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-900">
                        {entry.debit > 0 ? formatIDR(entry.debit) : '—'}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-900">
                        {entry.credit > 0 ? formatIDR(entry.credit) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-stone-100 border-t-2 border-stone-300 font-bold text-stone-900">
                  <tr>
                    <td colSpan={2} className="py-3 px-4">
                      <div className="flex items-center justify-between">
                        <span>Total Akumulasi Debit &amp; Kredit Jurnal</span>
                        <span className="text-xs font-normal text-stone-500">
                          (Prinsip Akuntansi Berpasangan)
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">
                      {formatIDR(totalDebit)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">
                      {formatIDR(totalCredit)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 leading-relaxed">
              <strong>Penjelasan Akuntansi oleh Arum Dahlia:</strong> Transaksi JE-02 mencatat pengadaan aksesoris label dan kemasan senilai {formatIDR(totalNameTagCost + totalPackagingCost)} sebagai persediaan lancar sebelum diakui ke beban pokok penjualan (JE-10) saat kaos berhasil terjual.
            </div>

            {/* Navigasi Slide Antar Siklus Akuntansi */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setActiveTab('pnl')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>← Kembali ke Slide 2: Laba Rugi</span>
              </button>
              <div className="text-[11px] text-stone-500 font-medium">
                Siklus 3 dari 4 (Jurnal Umum)
              </div>
              <button
                onClick={() => setActiveTab('cycle')}
                className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Geser ke Slide 4: Kartu Biaya Pesanan (Job Costing)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Other Accounting Cycle (Job Order Cost Sheet & Trial Balance) */}
        {activeTab === 'cycle' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Job Order Cost Sheet */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h4 className="text-sm font-bold text-stone-900 font-display">
                    Kartu Harga Pokok Pesanan (Job Order Cost Sheet)
                  </h4>
                  <span className="text-xs font-mono text-stone-500">Batch #{selectedFabric}-2026</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Biaya Bahan Baku Langsung (Kain Combed):</span>
                    <span className="font-mono font-semibold">{formatIDR(totalFabricCost)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200 text-amber-950 font-medium">
                    <span>Biaya Bahan Penolong (Name Tag &amp; Packaging):</span>
                    <span className="font-mono font-bold">{formatIDR(totalNameTagCost + totalPackagingCost)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Biaya Tenaga Kerja Langsung (Jahit):</span>
                    <span className="font-mono font-semibold">{formatIDR(totalSewingCost)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Biaya Overhead Pabrik (Sablon):</span>
                    <span className="font-mono font-semibold">{formatIDR(totalPrintCost)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 font-bold text-stone-900 bg-white p-2 rounded border border-stone-200">
                    <span>Total Harga Pokok Produksi (HPP):</span>
                    <span className="font-mono">{formatIDR(totalVariableCost)}</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-500 italic">
                  *Menghitung akumulasi biaya langsung per batch produksi kaos {selectedFabric}.
                </p>
              </div>

              {/* Card 2: Trial Balance Summary (Neraca Saldo) */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <h4 className="text-sm font-bold text-stone-900 font-display">
                    Ringkasan Neraca Saldo (Trial Balance)
                  </h4>
                  <span className="text-xs font-mono text-emerald-700 font-semibold">Status: Balanced</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Kas &amp; Bank Akhir:</span>
                    <span className="font-mono font-semibold">{formatIDR(revenue - totalVariableCost - totalFixedCosts + 5000000)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Persediaan Bahan &amp; Name Tag:</span>
                    <span className="font-mono font-semibold">Rp 0 (Selesai Produksi)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Beban Pokok Penjualan (HPP):</span>
                    <span className="font-mono font-semibold">{formatIDR(totalVariableCost)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-600">Beban Operasional &amp; AI:</span>
                    <span className="font-mono font-semibold">{formatIDR(totalFixedCosts)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 font-bold text-stone-900 bg-white p-2 rounded border border-stone-200">
                    <span>Pendapatan Penjualan (Kredit):</span>
                    <span className="font-mono">{formatIDR(revenue)}</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-500 italic">
                  *Mencerminkan siklus akuntansi penuh pasca transaksi penjualan selesai.
                </p>
              </div>

            </div>

            {/* Navigasi Slide Antar Siklus Akuntansi */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setActiveTab('journal')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>← Kembali ke Slide 3: Jurnal Umum</span>
              </button>
              <div className="text-[11px] text-stone-500 font-medium">
                Siklus 4 dari 4 (Kartu HPP Pesanan)
              </div>
              <button
                onClick={() => setActiveTab('bep')}
                className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-stone-900 bg-white border border-stone-400 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Kembali ke Slide 1: Kalkulator BEP &amp; HPP</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
