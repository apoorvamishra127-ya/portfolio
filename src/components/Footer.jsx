import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0b1120]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                AM
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                Apoorva Mishra
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              B.Tech Artificial Intelligence & Machine Learning student at GLA University. Microsoft Certified in Azure Fundamentals (AZ-900). Dedicated to building practical AI/ML solutions, algorithms, and modern full-stack web software.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/apoorvamishra127-ya"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl interactive-icon-btn"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/apoorvaa_M7/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="p-2.5 rounded-xl interactive-icon-btn"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/apoorva-mishra-99447a369/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl interactive-icon-btn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:apoorvamishra127@gmail.com"
                title="Email"
                className="p-2.5 rounded-xl interactive-icon-btn"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills & Stack</a></li>
              <li><a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Azure Certification</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience & Education</a></li>
              <li><button onClick={onOpenResume} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Resume (PDF)</button></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Contact
            </p>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-1.5">
                <MapPin size={12} className="text-blue-600 dark:text-blue-400" />
                <span>Lucknow, India (226001)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={12} className="text-blue-600 dark:text-blue-400" />
                <a href="mailto:apoorvamishra127@gmail.com" className="hover:underline">apoorvamishra127@gmail.com</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={12} className="text-blue-600 dark:text-blue-400" />
                <span>+91 6388517258</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Apoorva Mishra. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#151e34] hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/80 transition-all font-medium shadow-sm hover:scale-105"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
