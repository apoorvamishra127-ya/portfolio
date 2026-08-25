import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, Check, Copy, ArrowLeft } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, AzureIcon } from '../components/Icons';

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('apoorvamishra127@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-800 dark:text-slate-200 font-sans">
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-xs transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </a>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy Email'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 btn-primary rounded-xl text-xs font-semibold shadow-sm"
          >
            <Printer size={13} />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Container Sheet */}
      <div className="theme-card p-6 sm:p-10 rounded-2xl shadow-sm space-y-6">
        {/* Header Profile */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
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

        {/* Summary */}
        <Section title="Professional Summary">
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            B.Tech Artificial Intelligence & Machine Learning student with a strong foundation in Python, machine learning, data analysis, SQL, and web development. Experienced in building AI-driven and full-stack projects with hands-on exposure to Git, GitHub, Pandas, and modern development tools. Passionate about solving real-world problems through practical AI/ML solutions and seeking opportunities to apply technical skills in impactful projects and internships.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-3">
            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2">
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
        </Section>

        {/* Projects */}
        <Section title="Projects">
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
        </Section>

        {/* Skills */}
        <Section title="Skills">
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
        </Section>

        {/* Education & Certifications */}
        <div className="grid sm:grid-cols-2 gap-6 pt-1">
          <Section title="Education">
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
          </Section>

          <Section title="Certifications & Languages">
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
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
        {title}
      </h2>
      {children}
    </div>
  );
}
