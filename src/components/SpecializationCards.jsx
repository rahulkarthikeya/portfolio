import React from 'react';
import { Server, Brain, CheckCircle2, ArrowRight } from 'lucide-react';
import { specializations } from '../data/portfolioData';

export default function SpecializationCards() {
  const getIcon = (name) => {
    switch (name) {
      case 'Server':
        return <Server className="w-6 h-6 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      default:
        return <Server className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="focus" className="py-16 md:py-24 bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 font-semibold mb-2">
            Target Specializations
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bridging Systems Engineering & Machine Learning
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Equipped with both low-level systems fundamentals (C++, concurrency, distributed queues) 
            and modern AI capabilities (PyTorch, GRPO, reinforcement learning, LLM fine-tuning).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec) => (
            <div
              key={spec.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {getIcon(spec.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Track</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {spec.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {spec.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-3 mb-8">
                  {spec.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer anchor */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-500">
                  {spec.id === 'sde' ? 'C++ • FastAPI • Node.js • Redis' : 'PyTorch • TRL • GRPO • OpenCV'}
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
