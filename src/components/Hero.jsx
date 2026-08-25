import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, MapPin, Award, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, AzureIcon, PythonIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-pill text-xs font-semibold mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>AI/ML • Data • Full-Stack Development</span>
        </motion.div>

        {/* Hero Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          style={{ color: 'var(--text-main)' }}
        >
          Apoorva Mishra
        </motion.h1>

        {/* Subtitle / Focus */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-normal"
          style={{ color: 'var(--text-muted)' }}
        >
          B.Tech <span className="font-bold text-blue-600 dark:text-blue-400">Artificial Intelligence & Machine Learning</span> student at <strong className="font-bold text-slate-900 dark:text-slate-100">GLA University</strong>.
          Building intelligent AI systems, data analysis pipelines, and modern full-stack web software.
        </motion.p>

        {/* Location & Quick Meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2.5 text-xs mb-8"
        >
          <span className="inline-flex items-center gap-1.5 theme-pill px-3 py-1.5 rounded-lg shadow-sm font-medium">
            <MapPin size={13} className="text-blue-600 dark:text-blue-400" />
            <span>Lucknow, India (226001)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 theme-pill px-3 py-1.5 rounded-lg shadow-sm font-medium">
            <GraduationCap size={13} className="text-blue-600 dark:text-blue-400" />
            <span>GLA University (Expected: 2029)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 theme-pill px-3 py-1.5 rounded-lg font-medium">
            <Award size={13} className="text-blue-600 dark:text-blue-400" />
            <span>Microsoft Azure Certified (AZ-900)</span>
          </span>
        </motion.div>

        {/* Action Buttons & Verified Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl btn-primary font-semibold text-xs shadow-sm flex items-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl btn-secondary font-semibold text-xs flex items-center gap-2"
          >
            <FileText size={14} className="text-blue-600 dark:text-blue-400" />
            <span>View Resume</span>
          </button>

          {/* Social Icons Row */}
          <div className="flex items-center gap-2 pl-1">
            {/* GitHub */}
            <a
              href="https://github.com/apoorvamishra127-ya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="p-3 rounded-xl interactive-icon-btn"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/apoorvaa_M7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
              className="p-3 rounded-xl interactive-icon-btn"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/apoorva-mishra-99447a369/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-3 rounded-xl interactive-icon-btn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:apoorvamishra127@gmail.com"
              aria-label="Email"
              title="Email"
              className="p-3 rounded-xl interactive-icon-btn"
            >
              <Mail size={15} />
            </a>
          </div>
        </motion.div>

        {/* Quick Highlights / Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto"
        >
          <div className="theme-card p-4 sm:p-5 rounded-xl text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--text-main)' }}>8.19</span>
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <p className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>CGPA</p>
            <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>GLA University</p>
          </div>

          <div className="theme-card p-4 sm:p-5 rounded-xl text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--text-main)' }}>AZ-900</span>
              <AzureIcon className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>Azure Certified</p>
            <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>Valid: 05/2026</p>
          </div>

          <div className="theme-card p-4 sm:p-5 rounded-xl text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--text-main)' }}>Python</span>
              <PythonIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>AI & ML Focus</p>
            <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>Pandas, SQL, Models</p>
          </div>

          <div className="theme-card p-4 sm:p-5 rounded-xl text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--text-main)' }}>LeetCode</span>
              <Code2 className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <p className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>Problem Solving</p>
            <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>Algorithms & DS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
