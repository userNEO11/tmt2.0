import React, { useState } from 'react';
import {
  Calculator,
  Building2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  FileDown,
  Printer,
  Sparkles,
  Info,
  CheckCircle2,
  RefreshCw,
  Coins,
  Scale
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BAR_DIAMETERS } from '../data/tmtData';

interface TmtCalculatorProps {
  onOpenEnquiry?: (details?: string) => void;
  onOpenDealer?: () => void;
}

export const TmtCalculator: React.FC<TmtCalculatorProps> = ({
  onOpenEnquiry,
  onOpenDealer,
}) => {
  const { language, t } = useLanguage();

  // Inputs
  const [builtUpAreaSqFt, setBuiltUpAreaSqFt] = useState<number>(1800);
  const [floors, setFloors] = useState<number>(2);
  const [buildingType, setBuildingType] = useState<'residential' | 'commercial' | 'heavy' | 'infra'>('residential');
  const [seismicZone, setSeismicZone] = useState<'zone3' | 'zone4' | 'zone5'>('zone4');
  const [estimatedRatePerKg, setEstimatedRatePerKg] = useState<number>(68);

  // Multiplier kg steel per sq ft based on structure type
  const baseFactor =
    buildingType === 'residential'
      ? 3.8
      : buildingType === 'commercial'
      ? 5.2
      : buildingType === 'heavy'
      ? 6.8
      : 8.5;

  // Seismic modifier (IS 1893:2016 ductile design factor)
  const seismicMultiplier =
    seismicZone === 'zone5' ? 1.15 : seismicZone === 'zone4' ? 1.08 : 1.0;

  const effectiveFactor = baseFactor * seismicMultiplier;
  const totalAreaSqFt = builtUpAreaSqFt * floors;
  const totalSteelKg = totalAreaSqFt * effectiveFactor;
  const totalSteelMT = Number((totalSteelKg / 1000).toFixed(2));
  const estimatedCostInr = Math.round(totalSteelKg * estimatedRatePerKg);

  // Structural Component Allocations
  const componentDistribution = [
    {
      name: language === 'hi' ? 'नींव एवं फुटिंग' : 'Foundation Footings & Raft',
      percent: 22,
      weightMT: Number((totalSteelMT * 0.22).toFixed(2)),
      preferredDia: '16mm, 20mm & 25mm',
      tag: 'Heavy Load Transfer',
    },
    {
      name: language === 'hi' ? 'खंभे एवं कॉलम' : 'Columns & Shear Walls',
      percent: 28,
      weightMT: Number((totalSteelMT * 0.28).toFixed(2)),
      preferredDia: '12mm, 16mm & 20mm',
      tag: 'Axial Compression',
    },
    {
      name: language === 'hi' ? 'बीम एवं लिंटेल' : 'Primary & Secondary Beams',
      percent: 24,
      weightMT: Number((totalSteelMT * 0.24).toFixed(2)),
      preferredDia: '12mm & 16mm',
      tag: 'Flexural Tension',
    },
    {
      name: language === 'hi' ? 'छत एवं स्लैब' : 'Roof Slabs & Cantilevers',
      percent: 18,
      weightMT: Number((totalSteelMT * 0.18).toFixed(2)),
      preferredDia: '8mm & 10mm',
      tag: 'Span Distribution',
    },
    {
      name: language === 'hi' ? 'रिंग एवं स्टिरप्स' : 'Stirrups, Ties & Rings',
      percent: 8,
      weightMT: Number((totalSteelMT * 0.08).toFixed(2)),
      preferredDia: '8mm & 10mm',
      tag: 'Shear Confinement',
    },
  ];

  // Diameter Breakdown with approximate bundle calculation
  const diameterBreakdown = [
    {
      dia: '8mm',
      role: 'Stirrups & Slab Mesh',
      pct: 16,
      mt: Number((totalSteelMT * 0.16).toFixed(2)),
      bundles: Math.ceil(((totalSteelMT * 0.16 * 1000) / (0.395 * 288)) || 1),
    },
    {
      dia: '10mm',
      role: 'Slab Top/Bottom Bars & Lintel',
      pct: 18,
      mt: Number((totalSteelMT * 0.18).toFixed(2)),
      bundles: Math.ceil(((totalSteelMT * 0.18 * 1000) / (0.617 * 192)) || 1),
    },
    {
      dia: '12mm',
      role: 'Beams & Residential Columns',
      pct: 26,
      mt: Number((totalSteelMT * 0.26).toFixed(2)),
      bundles: Math.ceil(((totalSteelMT * 0.26 * 1000) / (0.888 * 120)) || 1),
    },
    {
      dia: '16mm',
      role: 'Heavy Columns & Footing Grid',
      pct: 22,
      mt: Number((totalSteelMT * 0.22).toFixed(2)),
      bundles: Math.ceil(((totalSteelMT * 0.22 * 1000) / (1.580 * 72)) || 1),
    },
    {
      dia: '20mm & 25mm',
      role: 'Raft Slabs & High-Rise Pillars',
      pct: 18,
      mt: Number((totalSteelMT * 0.18).toFixed(2)),
      bundles: Math.ceil(((totalSteelMT * 0.18 * 1000) / (2.470 * 48)) || 1),
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleSendQuote = () => {
    const quoteSummary = `TMT Requirement Estimate: ${builtUpAreaSqFt} SqFt (${floors} Floors, Total ${totalAreaSqFt} SqFt), Building: ${buildingType.toUpperCase()}, Zone: ${seismicZone.toUpperCase()}, Total Steel: ${totalSteelMT} MT (~₹${estimatedCostInr.toLocaleString('en-IN')})`;
    if (onOpenEnquiry) {
      onOpenEnquiry(quoteSummary);
    }
  };

  return (
    <div id="tmt-calculator-container" className="w-full">
      {/* Top Header Card */}
      <div className="bg-white border-2 border-amber-300 rounded-xs p-6 sm:p-8 lg:p-10 shadow-lg mb-8 relative overflow-hidden text-left">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-200">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-xs mb-3 shadow-2xs">
              <Calculator className="w-4 h-4 text-amber-700" />
              <span className="font-mono-tech text-xs font-black text-amber-900 uppercase tracking-wider">
                {language === 'hi' ? 'भारतीय मानक IS 456 एवं SP 16 अनुरूप' : 'IS 456 & SP 16 COMPLIANT ESTIMATOR'}
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 uppercase tracking-tight">
              {language === 'hi' ? 'टीएमटी सरिया मात्रा एवं लागत अनुमानक' : 'TMT Steel Requirement & Cost Forecaster'}
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-1 font-medium max-w-2xl">
              {language === 'hi'
                ? 'अपने मकान, व्यावसायिक इमारत या प्रोजेक्ट के लिए सटीक सरिया (MT), बंडल संख्या और बजट का तुरंत हिसाब लगाएं।'
                : 'Calculate precise rebar tonnage, diameter allocation, bundle counts, and budget for your construction project.'}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono-tech text-xs font-bold px-4 py-2.5 rounded-xs border border-zinc-300 cursor-pointer shadow-2xs"
            >
              <Printer className="w-4 h-4 text-zinc-600" />
              <span>{language === 'hi' ? 'प्रिंट रिपोर्ट' : 'Print / Save Report'}</span>
            </button>
            <button
              onClick={handleSendQuote}
              className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xs border border-amber-400 cursor-pointer shadow-md"
            >
              <span>{language === 'hi' ? 'इस मात्रा पर कोटेशन लें' : 'Get Quote for this Qty'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input Parameters Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Ground Built-up Area */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                <span className="text-zinc-800 font-bold uppercase">
                  1. {language === 'hi' ? 'ग्राउंड बिल्ट-अप एरिया (वर्ग फीट)' : 'Ground Floor Built-up Area'}
                </span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="200"
                    max="50000"
                    value={builtUpAreaSqFt}
                    onChange={(e) => setBuiltUpAreaSqFt(Math.max(100, Number(e.target.value) || 0))}
                    className="w-24 bg-amber-50/80 border border-amber-300 rounded-xs px-2 py-1 text-right font-mono-tech text-xs font-black text-zinc-900 focus:outline-none focus:border-amber-600"
                  />
                  <span className="text-zinc-500 font-mono-tech text-xs">Sq. Ft.</span>
                </div>
              </div>
              <input
                type="range"
                min="400"
                max="10000"
                step="100"
                value={builtUpAreaSqFt}
                onChange={(e) => setBuiltUpAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#D9A700]"
              />
              <div className="flex justify-between text-[10px] font-mono-tech text-zinc-400 mt-1">
                <span>400 sq.ft. (Small Plot)</span>
                <span>2,000 sq.ft. (Standard Villa)</span>
                <span>10,000+ sq.ft. (Commercial)</span>
              </div>
            </div>

            {/* 2. Number of Floors (G + N) */}
            <div>
              <label className="text-xs font-mono-tech text-zinc-800 font-bold uppercase block mb-2">
                2. {language === 'hi' ? 'मंजिलों की संख्या (G + N)' : 'Total Number of Floors'}
              </label>
              <div className="grid grid-cols-6 gap-2">
                {[
                  { fl: 1, label: 'G (1)' },
                  { fl: 2, label: 'G+1 (2)' },
                  { fl: 3, label: 'G+2 (3)' },
                  { fl: 4, label: 'G+3 (4)' },
                  { fl: 5, label: 'G+4 (5)' },
                  { fl: 6, label: 'G+5 (6)' },
                ].map((item) => (
                  <button
                    key={item.fl}
                    type="button"
                    onClick={() => setFloors(item.fl)}
                    className={`py-2.5 rounded-xs font-mono-tech font-bold text-xs transition-all cursor-pointer border ${
                      floors === item.fl
                        ? 'bg-[#FFD700] text-black font-black border-amber-400 shadow-xs'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-amber-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Structure Classification & Seismic Zone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono-tech text-zinc-800 font-bold uppercase block mb-1.5">
                  3. {language === 'hi' ? 'भवन का प्रकार' : 'Structure Type'}
                </label>
                <select
                  value={buildingType}
                  onChange={(e) => setBuildingType(e.target.value as any)}
                  className="w-full bg-white border border-zinc-300 rounded-xs text-xs font-mono-tech text-zinc-900 p-2.5 focus:border-amber-500 focus:outline-none cursor-pointer shadow-2xs"
                >
                  <option value="residential">
                    {language === 'hi' ? 'आवासीय मकान / विला (3.8 kg/sq.ft)' : 'Residential Villa / House (~3.8 kg/sq.ft)'}
                  </option>
                  <option value="commercial">
                    {language === 'hi' ? 'व्यावसायिक परिसर / दुकान (5.2 kg/sq.ft)' : 'Commercial Complex / Shops (~5.2 kg/sq.ft)'}
                  </option>
                  <option value="heavy">
                    {language === 'hi' ? 'औद्योगिक शेड / वेयरहाउस (6.8 kg/sq.ft)' : 'Industrial Shed / Warehouse (~6.8 kg/sq.ft)'}
                  </option>
                  <option value="infra">
                    {language === 'hi' ? 'भारी इंफ्रास्ट्रक्चर / बेसमेंट (8.5 kg/sq.ft)' : 'Heavy Infrastructure / Raft (~8.5 kg/sq.ft)'}
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono-tech text-zinc-800 font-bold uppercase block mb-1.5">
                  4. {language === 'hi' ? 'भूकंप क्षेत्र (Seismic Zone)' : 'Seismic Zone (IS 1893)'}
                </label>
                <select
                  value={seismicZone}
                  onChange={(e) => setSeismicZone(e.target.value as any)}
                  className="w-full bg-white border border-zinc-300 rounded-xs text-xs font-mono-tech text-zinc-900 p-2.5 focus:border-amber-500 focus:outline-none cursor-pointer shadow-2xs"
                >
                  <option value="zone3">Zone III - Moderate Seismic Hazard</option>
                  <option value="zone4">Zone IV - High Seismic Hazard (UP/NCR/Delhi)</option>
                  <option value="zone5">Zone V - Very High Seismic Hazard (Himalayan Belt)</option>
                </select>
              </div>
            </div>

            {/* 5. Approximate Price per kg (Optional customization) */}
            <div className="bg-[#FFFDF0] p-4 rounded-xs border border-amber-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono-tech text-zinc-800 font-bold block">
                  {language === 'hi' ? 'अनुमानित सरिया दर (₹ प्रति किलोग्राम):' : 'Estimated Steel Rate (₹ / kg for budget):'}
                </span>
                <span className="text-[11px] text-zinc-500 font-sans">
                  {language === 'hi' ? 'परिवर्तनशील दर (बाजार भाव अनुसार बदलें)' : 'Current avg factory mill benchmark'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono-tech font-bold text-zinc-700">₹</span>
                <input
                  type="number"
                  min="40"
                  max="120"
                  value={estimatedRatePerKg}
                  onChange={(e) => setEstimatedRatePerKg(Number(e.target.value) || 0)}
                  className="w-20 bg-white border border-amber-300 rounded-xs px-2.5 py-1 text-right font-mono-tech text-sm font-black text-zinc-900 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>
          </div>

          {/* Result Highlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-xs p-6 sm:p-8 shadow-2xl border-2 border-amber-400 flex flex-col justify-between relative">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] font-mono-tech font-black px-3 py-1 uppercase rounded-bl-xs">
              ESTIMATED OUTPUT
            </div>

            <div>
              <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block mb-1">
                {language === 'hi' ? 'कुल अनुमानित सरिया आवश्यकता' : 'TOTAL ESTIMATED STEEL REQUIRED'}
              </span>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display font-black text-5xl sm:text-6xl text-[#FFD700]">
                  {totalSteelMT}
                </span>
                <span className="text-2xl text-zinc-200 font-sans font-medium">Metric Tonnes</span>
              </div>

              <div className="text-xs font-mono-tech text-zinc-400 mb-6">
                ~ {Math.round(totalSteelKg).toLocaleString('en-IN')} kg total reinforcement rebar
              </div>

              {/* Quick Summary Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-t border-white/15 border-b mb-6 text-left">
                <div>
                  <span className="text-[10px] font-mono-tech text-zinc-400 block uppercase">
                    {language === 'hi' ? 'कुल कवर्ड एरिया' : 'Total Slab Area'}
                  </span>
                  <span className="font-mono-tech font-black text-white text-base">
                    {totalAreaSqFt.toLocaleString('en-IN')} sq.ft.
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-zinc-400 block uppercase">
                    {language === 'hi' ? 'अनुमानित सरिया बजट' : 'Estimated Steel Cost'}
                  </span>
                  <span className="font-mono-tech font-black text-[#FFD700] text-base">
                    ₹ {estimatedCostInr.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Recommended Grade Badge */}
              <div className="bg-white/10 p-3 rounded-xs border border-white/10 flex items-center gap-3 text-left">
                <ShieldCheck className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <div>
                  <span className="text-[11px] font-mono-tech text-[#FFD700] font-bold block uppercase">
                    RECOMMENDED GRADE: BALWANT TMT Fe 550D
                  </span>
                  <span className="text-[11px] text-zinc-300 block">
                    16%+ Elongation Ductility for Zone IV/V Seismic Safety
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleSendQuote}
                className="w-full bg-[#FFD700] hover:bg-[#F5C700] text-black font-display font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xs border border-amber-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>{language === 'hi' ? 'फैक्ट्री डायरेक्ट कोटेशन प्राप्त करें' : 'Request Official Mill Price Quote'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Component & Diameter Breakdown Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 text-left">
        {/* Component Distribution (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-amber-200 rounded-xs p-6 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-200">
            <Layers className="w-4 h-4 text-amber-700" />
            <h3 className="font-display font-black text-xl text-zinc-900 uppercase">
              {language === 'hi' ? 'संरचनात्मक घटक अनुसार विभाजन' : 'Structural Component Allocation'}
            </h3>
          </div>

          <div className="space-y-3">
            {componentDistribution.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-amber-50/40 hover:bg-amber-50 border border-amber-100 rounded-xs transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono-tech mb-1">
                  <span className="font-bold text-zinc-900">{item.name}</span>
                  <span className="text-amber-900 font-black">{item.weightMT} MT ({item.percent}%)</span>
                </div>
                <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                  <div
                    className="bg-amber-600 h-full rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-zinc-500">
                  <span>Standard Sizes: {item.preferredDia}</span>
                  <span className="text-zinc-600 font-medium">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Diameter & Bundle Calculation (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-amber-200 rounded-xs p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-700" />
              <h3 className="font-display font-black text-xl text-zinc-900 uppercase">
                {language === 'hi' ? 'व्यास अनुसार बंडल संख्या' : 'Diameter-wise Rebar & Bundles'}
              </h3>
            </div>
            <span className="text-[10px] font-mono-tech text-amber-800 bg-amber-100 px-2 py-0.5 rounded-xs font-bold">
              12 Meter Bars
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-[10px] bg-zinc-50">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Application</th>
                  <th className="py-2.5 px-3 text-right">Estimated MT</th>
                  <th className="py-2.5 px-3 text-right">Approx Bundles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                {diameterBreakdown.map((dia, dIdx) => (
                  <tr key={dIdx} className="hover:bg-amber-50/50">
                    <td className="py-2.5 px-3 font-black text-zinc-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{dia.dia}</span>
                    </td>
                    <td className="py-2.5 px-3 text-zinc-600 text-[11px]">{dia.role}</td>
                    <td className="py-2.5 px-3 text-right font-bold text-amber-900">{dia.mt} MT</td>
                    <td className="py-2.5 px-3 text-right font-black text-zinc-900">{dia.bundles} bundles</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-zinc-50 border border-zinc-200 rounded-xs text-[11px] text-zinc-600 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              {language === 'hi'
                ? 'नोट: यह अनुमान भारतीय मानक IS 456 के अनुसार औसत निर्माण खपत पर आधारित है। वास्तविक मात्रा आपके स्ट्रक्चरल इंजीनियर के ड्राइंग अनुसार निर्धारित होगी।'
                : 'Note: Quantities are derived from empirical averages per IS 456 / SP 16. Actual steel required will depend on structural drawings approved by your licensed structural consultant.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
