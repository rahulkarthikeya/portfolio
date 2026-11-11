import React from 'react';
import { 
  FileText, 
  Github, 
  Linkedin, 
  Terminal, 
  ExternalLink, 
  ArrowRight, 
  Award, 
  Code2, 
  Sparkles,
  MapPin,
  Cpu
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Final-Year B.Tech @ SRM University AP • Seeking SDE & AI/ML Roles</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Building High-Throughput <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Systems & Intelligent AI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium mb-3">
            Pandraju Rahul Karthikeya
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Final-year Computer Science undergraduate specializing in AI & Machine Learning. 
            Passionate about architecting distributed backends with <span className="text-blue-400 font-medium">FastAPI, Node.js, C++</span>, 
            and advancing LLM reasoning models with <span className="text-cyan-400 font-medium">PyTorch, TRL, & GRPO</span>. 
            Hackathon 1st place winner with strong foundational problem solving.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Quick Metrics & Highlights bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
              <div className="flex items-center justify-center text-amber-400 mb-1">
                <Award className="w-5 h-5 mr-1" />
                <span className="text-xl sm:text-2xl font-bold">1st Place</span>
              </div>
              <p className="text-xs text-slate-400">Code for Change Hackathon</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
              <div className="flex items-center justify-center text-blue-400 mb-1">
                <Terminal className="w-5 h-5 mr-1" />
                <span className="text-xl sm:text-2xl font-bold">5+</span>
              </div>
              <p className="text-xs text-slate-400">Core Systems & AI Projects</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
              <div className="flex items-center justify-center text-emerald-400 mb-1">
                <Cpu className="w-5 h-5 mr-1" />
                <span className="text-xl sm:text-2xl font-bold">7.56 / 10</span>
              </div>
              <p className="text-xs text-slate-400">CGPA @ SRM University AP</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
              <div className="flex items-center justify-center text-cyan-400 mb-1">
                <Sparkles className="w-5 h-5 mr-1" />
                <span className="text-xl sm:text-2xl font-bold">Top 30</span>
              </div>
              <p className="text-xs text-slate-400">of 1,500+ in National Hackathon</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
