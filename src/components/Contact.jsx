import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Info column */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              I am actively seeking <span className="text-blue-400 font-medium">SDE / Backend Software Engineering</span> and <span className="text-cyan-400 font-medium">AI/ML Engineering</span> roles, internships, and research collaborations. Feel free to shoot me an email, give me a call, or connect on LinkedIn!
            </p>

            <div className="space-y-4 mb-8">
              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Form column */}
          <div>
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a question or opportunity? Drop your note below.
              </p>

              {sent ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Your default email client opened with your message. Thanks for reaching out!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discussing an SDE role, AI internship, or collaborative project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
