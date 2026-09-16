import React, { useState } from 'react';
import { BAR_DIAMETERS } from '../data/tmtData';
import { Calculator, FileDown, ShieldCheck, Cpu, ArrowRight, Download, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TechnicalSection: React.FC = () => {
  const { t } = useLanguage();

  // Calculator state
  const [builtUpAreaSqFt, setBuiltUpAreaSqFt] = useState<number>(2000);
  const [floors, setFloors] = useState<number>(2);
  const [buildingType, setBuildingType] = useState<'residential' | 'commercial' | 'heavy'>('residential');

  // Multiplier kg steel per sq ft
  const factor = buildingType === 'residential' ? 3.8 : buildingType === 'commercial' ? 5.2 : 6.8;
  const totalArea = builtUpAreaSqFt * floors;
  const totalSteelKg = totalArea * factor;
  const totalSteelMT = (totalSteelKg / 1000).toFixed(2);

  // Bar breakdown percentages
  const breakdown = [
    { dia: '8mm & 10mm (Slabs/Stirrups)', pct: 35, mt: (Number(totalSteelMT) * 0.35).toFixed(2) },
    { dia: '12mm & 16mm (Beams/Columns)', pct: 45, mt: (Number(totalSteelMT) * 0.45).toFixed(2) },
    { dia: '20mm & 25mm (Footings/Rafts)', pct: 20, mt: (Number(totalSteelMT) * 0.20).toFixed(2) },
  ];

  return (
    <section id="technical" className="relative bg-[#070709] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#0047AB]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD700] uppercase font-bold">
                {t.technical.badge}
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              {t.technical.title1}<br />
              <span className="text-[#FFD700]">{t.technical.title2}</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            {t.technical.subtitle}
          </div>
        </div>

        {/* Top Split: Interactive TMT Steel Requirement Estimator & Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
          {/* Interactive Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-[#111116] border border-white/15 rounded-xs p-5 sm:p-8 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-[#FFD700] text-black flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                    {t.technical.estimatorTitle}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono-tech">{t.technical.estimatorSub}</p>
                </div>
              </div>
              <span className="text-xs font-mono-tech bg-[#0047AB]/20 text-[#0080CC] px-2.5 py-1 rounded-xs font-bold border border-[#0047AB]/30">
                IS 456 DESIGN CODE
              </span>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-5">
              {/* Built-up area slider & input */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                  <span className="text-zinc-300 uppercase font-bold">{t.technical.builtUpArea}</span>
                  <span className="text-[#FFD700] font-bold text-sm">{builtUpAreaSqFt.toLocaleString()} Sq. Ft.</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={builtUpAreaSqFt}
                  onChange={(e) => setBuiltUpAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
                />
              </div>

              {/* Number of Floors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-2">
                    {t.technical.floors}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((fl) => (
                      <button
                        key={fl}
                        type="button"
                        onClick={() => setFloors(fl)}
                        className={`flex-1 py-2 rounded-xs font-mono-tech font-bold text-xs transition-colors cursor-pointer ${
                          floors === fl
                            ? 'bg-[#FFD700] text-black font-extrabold'
                            : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'
                        }`}
                      >
                        {fl === 1 ? 'G' : `G+${fl - 1}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Structure Type */}
                <div>
                  <label className="text-xs font-mono-tech text-zinc-300 uppercase font-bold block mb-2">
                    {t.technical.structureType}
                  </label>
                  <select
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value as any)}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xs text-xs font-mono-tech text-white p-2.5 focus:border-[#FFD700] focus:outline-none cursor-pointer"
                  >
                    <option value="residential">{t.technical.resOption}</option>
                    <option value="commercial">{t.technical.commOption}</option>
                    <option value="heavy">{t.technical.heavyOption}</option>
                  </select>
                </div>
              </div>

              {/* Computed Output Display */}
              <div className="bg-black/70 border border-white/15 p-4 sm:p-5 rounded-xs mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono-tech text-zinc-400 uppercase tracking-widest block">
                      {t.technical.totalSteelNeeded}
                    </span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#FFD700]">
                      {totalSteelMT}{' '}
                      <span className="text-xl text-white font-normal font-sans">MT</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono-tech text-zinc-400 block">{t.technical.totalArea}</span>
                    <span className="font-mono-tech text-sm text-zinc-200 font-bold">
                      {totalArea.toLocaleString()} sq.ft.
                    </span>
                  </div>
                </div>

                {/* Diameter Breakdown */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono-tech text-zinc-400 uppercase tracking-wider block">
                    {t.technical.breakdownTitle}
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono-tech">
                    {breakdown.map((b, bIdx) => (
                      <div key={bIdx} className="bg-white/5 p-2 rounded-xs border border-white/5">
                        <div className="text-[10px] text-zinc-300 truncate">{b.dia}</div>
                        <div className="text-[#0080CC] font-bold text-xs sm:text-sm mt-0.5">{b.mt} MT</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Documentation & Downloads (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="bg-[#111116] border border-white/15 p-5 sm:p-6 rounded-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#0047AB] text-white rounded-xs flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">
                  {t.technical.vaultTitle}
                </h4>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-mono-tech mb-4">
                {t.technical.vaultDesc}
              </p>

              <div className="space-y-2">
                {[
                  { title: 'Balwant Fe 550D Technical Brochure', size: '2.4 MB PDF' },
                  { title: 'BIS License Certificate (IS 1786 : 2008)', size: '1.1 MB PDF' },
                  { title: 'Thermex QST Metallurgical Report', size: '3.8 MB PDF' },
                  { title: 'Bar Bending & Structural Lap Length Chart', size: '1.6 MB PDF' },
                ].map((doc, dIdx) => (
                  <a
                    key={dIdx}
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="flex items-center justify-between p-2.5 bg-black/60 border border-white/10 hover:border-[#FFD700] rounded-xs text-xs font-mono-tech group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileDown className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-zinc-200 group-hover:text-white">{doc.title}</span>
                    </div>
                    <span className="text-zinc-500 text-[10px]">{doc.size}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quality Seal Plate */}
            <div className="bg-[#15161C] border border-[#FFD700]/40 p-4 rounded-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono-tech text-[#FFD700] uppercase font-bold block">
                  GOVERNMENT ACCREDITATION
                </span>
                <span className="font-display font-black text-base sm:text-lg text-white uppercase">
                  CENTRAL LAB TEST APPROVED
                </span>
              </div>
              <div className="w-9 h-9 rounded-xs bg-[#FFD700] text-black font-display font-black flex items-center justify-center text-base">
                BIS
              </div>
            </div>
          </div>
        </div>

        {/* Standard Section Diameter Weight & Tolerances Table */}
        <div className="bg-[#101014] border border-white/15 rounded-xs p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                DIMENSIONAL SPECIFICATIONS &amp; SECTION WEIGHTS
              </h3>
              <p className="text-xs text-zinc-400 font-mono-tech">
                Compliant with Indian Standard IS: 1786 : 2008 (Table 1 &amp; Table 2)
              </p>
            </div>
            <span className="text-xs font-mono-tech text-[#FFD700] bg-black/80 px-3 py-1 rounded-xs border border-white/10">
              Standard Length: 12.0 Meters
            </span>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 uppercase text-[11px] bg-black/40">
                  <th className="py-2.5 px-3">Bar Diameter (mm)</th>
                  <th className="py-2.5 px-3">Weight (kg / Meter)</th>
                  <th className="py-2.5 px-3">IS 1786 Tolerance</th>
                  <th className="py-2.5 px-3">Pieces per Bundle</th>
                  <th className="py-2.5 px-3">Meters per Bundle</th>
                  <th className="py-2.5 px-3">Structural Placement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {BAR_DIAMETERS.map((bar) => (
                  <tr key={bar.diameterMm} className="hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                      <span>{bar.diameterMm} mm</span>
                    </td>
                    <td className="py-2.5 px-3 text-[#FFD700] font-bold">{bar.weightPerMeterKg.toFixed(3)} kg</td>
                    <td className="py-2.5 px-3 text-zinc-300">{bar.tolerance}</td>
                    <td className="py-2.5 px-3 text-zinc-300">{bar.piecesPerBundle} pcs</td>
                    <td className="py-2.5 px-3 text-zinc-300">{bar.metersPerBundle} m</td>
                    <td className="py-2.5 px-3 text-zinc-400">{bar.primaryUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

