import React from 'react';
import { X, Clock, BookOpen, Share2, ArrowRight } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '../data/tmtData';

interface ArticleModalProps {
  article: typeof KNOWLEDGE_ARTICLES[0] | null;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenEnquiry,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111116] border border-white/20 rounded-xs shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-white/10 bg-[#16161C]">
          <div className="flex items-center gap-3">
            <span className="bg-[#FFD700] text-black text-[10px] font-mono-tech font-black px-2.5 py-1 rounded-xs uppercase">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono-tech">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xs bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-tight">
            {article.title}
          </h2>

          <div className="relative aspect-[16/9] rounded-xs overflow-hidden border border-white/15">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-white text-lg border-l-2 border-[#FFD700] pl-4">
              {article.summary}
            </p>

            <p>
              Reinforced cement concrete (RCC) structural elements depend entirely on the composite behavior between concrete and steel. While ordinary concrete provides phenomenal compressive resilience, its tensile capacity is practically zero. High-tensile deformed rebar takes over the entire tensile load and shear distribution.
            </p>

            <h3 className="font-display font-black text-2xl text-white uppercase pt-4">
              Key Engineering Takeaways for Site Execution
            </h3>

            <ul className="space-y-2 list-disc list-inside text-zinc-300 font-medium">
              <li>Always check for the embossed trademark &amp; BIS mark on every meter length of rebar.</li>
              <li>Verify the mandatory test certificate containing chemical composition (S+P &lt; 0.070%).</li>
              <li>Ensure bar benders never heat or quench bars on site during cold bending.</li>
              <li>Maintain appropriate concrete cover (25mm to 50mm) to shield rebar from moisture ingress.</li>
            </ul>

            <div className="p-4 bg-[#181820] border border-[#0047AB]/40 rounded-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-tech text-[#FFD700] block uppercase font-bold">
                  Balwant Engineering Support
                </span>
                <span className="text-sm font-bold text-white">
                  Need technical consultation for your project drawings?
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="bg-[#FFD700] text-black font-display font-black text-xs uppercase px-4 py-2 rounded-xs hover:bg-[#FFE04D] transition-colors"
              >
                CONSULT NOW
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0A0A0D] border-t border-white/10 text-xs text-zinc-400 flex items-center justify-between font-mono-tech">
          <span>BALWANT TECHNICAL EDITORIAL VAULT</span>
          <button onClick={onClose} className="text-[#FFD700] hover:underline uppercase font-bold">
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
