import React from 'react';
import { KNOWLEDGE_ARTICLES } from '../data/tmtData';
import { ArrowUpRight, Clock } from 'lucide-react';

interface KnowledgeSectionProps {
  onReadArticle: (article: typeof KNOWLEDGE_ARTICLES[0]) => void;
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="knowledge" className="relative bg-[#0A0A0D] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden content-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-[#FFD100]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD100] uppercase font-bold">
                ENGINEERING EDITORIAL &amp; INSIGHTS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none uppercase text-white">
              KNOW<br />
              <span className="text-[#0080CC]">YOUR STEEL.</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-400 text-sm font-medium">
            Essential metallurgy knowledge for civil engineers, contractors, and individual home builders.
          </div>
        </div>

        {/* 3 Large Editorial Articles (Image-first Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {KNOWLEDGE_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="bg-[#121217] border border-white/15 rounded-xs overflow-hidden group cursor-pointer hover:border-[#FFD100] transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Large Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-[#FFD100] text-[10px] font-mono-tech px-2.5 py-1 font-bold rounded-xs uppercase border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono-tech mb-2.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase leading-tight mb-2.5 group-hover:text-[#FFD100] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read Full Article Link */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
                <span className="text-xs font-mono-tech text-[#0080CC] font-bold uppercase tracking-wider group-hover:text-[#FFD100] transition-colors">
                  READ EDITORIAL
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD100] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

