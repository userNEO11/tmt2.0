import React, { useState } from 'react';
import { X, MapPin, Phone, Search, Building, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DealerLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDealer: (dealerName: string) => void;
}

interface Dealer {
  id: string;
  name: string;
  contactPerson: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  certifiedSince: string;
}

const SAMPLE_DEALERS: Dealer[] = [
  {
    id: 'd1',
    name: 'Balwant Steel Syndicate & Co.',
    contactPerson: 'Harish Aggarwal',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    address: 'Plot 42, Transport Nagar, Kanpur Road, Lucknow',
    phone: '+91 94150 12345',
    certifiedSince: '2016',
  },
  {
    id: 'd2',
    name: 'Shree Balaji Iron & Hardware Store',
    contactPerson: 'Sunil Kumar Gupta',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    address: 'Shop 18, Industrial Estate, Chandpur, Varanasi',
    phone: '+91 98390 56789',
    certifiedSince: '2018',
  },
  {
    id: 'd3',
    name: 'Maa Durga Steel Traders',
    contactPerson: 'Alok Pandey',
    state: 'Bihar',
    city: 'Patna',
    address: 'Bypass Road, Near Anisabad Roundabout, Patna',
    phone: '+91 93341 98765',
    certifiedSince: '2017',
  },
  {
    id: 'd4',
    name: 'Apex Infrastructure & Metal Hub',
    contactPerson: 'Vikas Singhal',
    state: 'Delhi NCR',
    city: 'Noida / Ghaziabad',
    address: 'Sector 63, Block C-14, Industrial Area, Noida',
    phone: '+91 98110 44332',
    certifiedSince: '2015',
  },
  {
    id: 'd5',
    name: 'Central India Steel Depot',
    contactPerson: 'Rameshwar Jha',
    state: 'Madhya Pradesh',
    city: 'Indore / Bhopal',
    address: 'Loha Mandi, Khatiwala Tank, Indore',
    phone: '+91 94250 88776',
    certifiedSince: '2019',
  },
  {
    id: 'd6',
    name: 'Kashi Steel & Building Solutions',
    contactPerson: 'Pramod Yadav',
    state: 'Uttar Pradesh',
    city: 'Prayagraj (Allahabad)',
    address: 'Naini Industrial Area, G.T. Road, Prayagraj',
    phone: '+91 94500 33221',
    certifiedSince: '2020',
  },
];

export const DealerLocatorModal: React.FC<DealerLocatorModalProps> = ({
  isOpen,
  onClose,
  onSelectDealer,
}) => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');

  if (!isOpen) return null;

  const filteredDealers = SAMPLE_DEALERS.filter((d) => {
    const matchesSearch =
      d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'ALL' || d.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111116] border border-white/20 rounded-xs shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-white/10 bg-[#15161B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#FFD700] text-black flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech text-[#FFD700] uppercase tracking-widest font-bold block">
                AUTHORIZED SUPPLY DEPOT NETWORK
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
                {language === 'hi' ? 'बलवंत डीलर एवं डिस्ट्रीब्यूटर नेटवर्क' : 'BALWANT DEALER LOCATOR'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xs bg-white/5 hover:bg-white/10 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 border-b border-white/10 bg-black/40 grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.common.searchDistrict}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xs pl-10 pr-4 py-2.5 text-xs sm:text-sm font-mono-tech text-white focus:border-[#FFD700] focus:outline-none"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xs px-3 py-2.5 text-xs font-mono-tech text-white focus:border-[#FFD700] focus:outline-none cursor-pointer"
            >
              <option value="ALL">{language === 'hi' ? 'सभी राज्य / क्षेत्र' : 'All Regions'}</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>
          </div>
        </div>

        {/* Dealer Results List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredDealers.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-mono-tech text-sm">
              {language === 'hi'
                ? 'इस खोज के लिए कोई डीलर नहीं मिला। तत्काल आपूर्ति हेतु 1800-120-TMT पर कॉल करें।'
                : 'No direct stockist found for this search. Contact our toll-free desk at 1800-120-TMT for immediate dispatched delivery.'}
            </div>
          ) : (
            filteredDealers.map((dealer) => (
              <div
                key={dealer.id}
                className="p-5 bg-[#16161B] border border-white/10 hover:border-[#FFD700] rounded-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#0047AB] text-white text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded-xs">
                      {dealer.city}, {dealer.state}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono-tech">
                      Certified Partner since {dealer.certifiedSince}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-xl text-white uppercase">
                    {dealer.name}
                  </h4>

                  <p className="text-xs text-zinc-400 font-mono-tech mt-1">
                    {dealer.address}
                  </p>

                  <div className="text-xs text-zinc-300 mt-1">
                    Contact: <strong className="text-zinc-100">{dealer.contactPerson}</strong>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                  <a
                    href={`tel:${dealer.phone.replace(/[^0-9+]/g, '')}`}
                    className="bg-[#FFD700] hover:bg-[#FFE04D] text-black font-display font-black text-xs uppercase px-4 py-2 rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'डीलर को कॉल करें' : 'CALL DEALER'}</span>
                  </a>
                  <button
                    onClick={() => {
                      onSelectDealer(dealer.name);
                      onClose();
                    }}
                    className="text-[11px] font-mono-tech text-[#0080CC] hover:underline cursor-pointer"
                  >
                    {language === 'hi' ? 'इस स्टॉकिस्ट से मंगाएं' : 'Order from this Stockist'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0A0A0D] border-t border-white/10 text-xs text-zinc-400 flex items-center justify-between font-mono-tech">
          <span>{language === 'hi' ? 'डायरेक्ट मिल डिलीवरी (15+ मीट्रिक टन)?' : 'Need direct factory container dispatch (15+ MT)?'}</span>
          <a href="tel:+918817303963" className="text-[#FFD700] font-bold hover:underline">
            CALL: +91 8817303963
          </a>
        </div>
      </div>
    </div>
  );
};
