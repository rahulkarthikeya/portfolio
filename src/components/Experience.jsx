import React from 'react';
import { Briefcase, Award, Trophy, CheckCircle, ExternalLink, Code2 } from 'lucide-react';
import { experience, achievements, personalInfo } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Work / Internship Experience */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Learning</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Experience & Internships
            </h2>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 font-semibold">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-blue-400 mb-4">
                    {item.organization}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Achievements */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Recognition & Milestones</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Achievements & Competitions
            </h2>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-800/50 text-amber-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-medium text-slate-400 mb-2">
                    {item.organization}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* LeetCode link box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">LeetCode Profile</h4>
                    <p className="text-xs text-slate-400 font-mono">Handle: Rahul0099</p>
                  </div>
                </div>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
                >
                  <span>View Stats</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
