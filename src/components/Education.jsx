import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-950/40 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Education
          </h2>
          <p className="text-slate-400 text-sm">
            Solid foundations in computer systems, algorithms, and artificial intelligence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 font-semibold mb-2">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {education.institution}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-slate-300">
                  {education.degree}
                </h4>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 font-semibold text-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-mono">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{education.location}</span>
            </div>

            <div className="border-t border-slate-800/80 pt-5">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Core Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
