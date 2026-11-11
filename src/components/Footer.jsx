import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-mono font-bold text-base bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              &lt;PRK /&gt; Pandraju Rahul Karthikeya
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Final-year B.Tech CSE (AI & ML) • SRM University AP
            </p>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Pandraju Rahul Karthikeya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 18, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
