import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Check, Copy, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, AzureIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('apoorvamishra127@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#151e34] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        >
          {/* Modal Top Controls Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#19233c]/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Apoorva_Mishra_Resume.pdf</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                title="Print Resume"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#151e34] border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Printer size={13} />
                <span>Print</span>
              </button>
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-[#151e34] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 hover:bg-red-50 hover:text-red-600 transition-colors text-slate-700 dark:text-slate-300"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
            {/* Header / Contact Info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                    Apoorva Mishra
                  </h1>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                    B.Tech Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Mail size={12} className="text-blue-600 dark:text-blue-400" />
                    <a href="mailto:apoorvamishra127@gmail.com" className="hover:underline">apoorvamishra127@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Phone size={12} className="text-blue-600 dark:text-blue-400" />
                    <span>+91 6388517258</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={12} className="text-blue-600 dark:text-blue-400" />
                    <span>Lucknow, India 226001</span>
                  </div>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs">
                <a
                  href="https://www.linkedin.com/in/apoorva-mishra-99447a369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline flex items-center gap-1.5 font-semibold"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/apoorva-mishra-99447a369</span>
                </a>
                <a
                  href="https://github.com/apoorvamishra127-ya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline flex items-center gap-1.5 font-semibold"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/apoorvamishra127-ya</span>
                </a>
                <a
                  href="https://leetcode.com/u/apoorvaa_M7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline flex items-center gap-1.5 font-semibold"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5" />
                  <span>leetcode.com/u/apoorvaa_M7</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                Professional Summary
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                B.Tech Artificial Intelligence & Machine Learning student with a strong foundation in Python, machine learning, data analysis, SQL, and web development. Experienced in building AI-driven and full-stack projects with hands-on exposure to Git, GitHub, Pandas, and modern development tools. Passionate about solving real-world problems through practical AI/ML solutions and seeking opportunities to apply technical skills in impactful projects and internships.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      AI/ML & Software Developer — Independent Projects
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">2025–Present</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                    GLA University — Student | Mathura, India
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <li>Built AI/ML and full-stack projects to apply concepts in Python, machine learning, data analysis, and web development.</li>
                    <li>Developed practical applications using modern AI tools, APIs, Git/GitHub, and development frameworks.</li>
                    <li>Enhanced problem-solving and software development skills through projects, LeetCode challenges, and hackathon preparation.</li>
                    <li>Assisted in course preparation and classroom management for diverse student groups.</li>
                    <li>Collaborated with peers on group projects, strengthening teamwork and communication skills.</li>
                    <li>Conducted research using academic databases for assignments and presentations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                Projects
              </h2>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">AIML Bootcamp 2026</strong> — GLA University ML & Data Analysis sessions in Python, Pandas, & Jupyter Notebooks.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Frontend Mini Projects (Academic)</strong> — Built a registration form with custom form validation using HTML5 and CSS3.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Personal Portfolio Website</strong> — Modern developer portfolio built with React, Tailwind CSS, Vite, and Framer Motion.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Python Practice & Problem Solving</strong> — List-based application implementing modular OOP and fundamental algorithms.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">LeetCode Problem Solving</strong> — Algorithmic problem-solving on LeetCode practicing data structures and optimal complexity.
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                Skills
              </h2>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Technical Skills</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Python, Machine Learning, Data Analysis, SQL, HTML, CSS, JavaScript, Git / GitHub, VS Code, Pandas, Bootstrap
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Web Fundamentals</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Responsive Web Design, CSS, DOM Manipulation, Accessibility Standards, Cross-Browser Testing
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Development Practices</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Version Control Workflows, Debugging, Unit Testing, API Integration, Agile Development
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid sm:grid-cols-2 gap-5 pt-1">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  Education
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">GLA University</h4>
                    <p className="text-slate-500">Mathura, India • Expected: 01/2029</p>
                    <p className="text-slate-700 dark:text-slate-300">B.Tech — CSE (Artificial Intelligence & Machine Learning)</p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">CGPA: 8.19</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Lucknow International Public School</h4>
                    <p className="text-slate-500">Lucknow</p>
                    <p className="text-slate-700 dark:text-slate-300">Class 12 • GPA: 80%</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  Certifications & Languages
                </h2>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#19233c] border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                      <AzureIcon className="w-4 h-4" />
                      <span>Azure Fundamentals (AZ-900)</span>
                    </div>
                    <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">Validity: 05/2026</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Languages</h4>
                    <p className="text-slate-600 dark:text-slate-400">English, Hindi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
