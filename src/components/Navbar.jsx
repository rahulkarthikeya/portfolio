import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Focus', href: '#focus' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all">
              &lt;PRK /&gt;
            </span>
            <span className="hidden sm:inline font-semibold text-slate-200 tracking-tight text-sm">
              Rahul Karthikeya
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-blue-400 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20"
            >
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
