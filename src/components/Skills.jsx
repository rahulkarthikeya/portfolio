import React from 'react';
import { 
  Code, 
  Server, 
  Brain, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  TerminalSquare 
} from 'lucide-react';
import { skillsMatrix } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Backend & Systems':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Frontend Engineering':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Tools, DevOps & Cloud':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <TerminalSquare className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950/40 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From low-level systems programming in C++ to full-stack microservices and foundation model fine-tuning.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsMatrix.map((group, idx) => (
            <div
              key={group.category}
              className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    {getIcon(group.category)}
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-800/80 hover:bg-slate-800/70 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
