import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe2, Sparkles, Database } from 'lucide-react';
import { AzureIcon } from './Icons';

export default function About() {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      title: "AI & Machine Learning",
      description: "Hands-on experience developing practical AI/ML solutions, predictive modeling, data preprocessing with Pandas, and algorithmic problem solving."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      title: "Modern Web Development",
      description: "Crafting responsive, accessible web applications using modern JavaScript, HTML5, CSS3, React, Tailwind CSS, and DOM manipulation."
    },
    {
      icon: <AzureIcon className="w-5 h-5" />,
      title: "Cloud & Infrastructure",
      description: "Certified in Microsoft Azure Fundamentals (AZ-900). Understanding of cloud architecture, core services, governance, and deployment."
    },
    {
      icon: <Database className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      title: "Data Analysis & SQL",
      description: "Relational database querying, schema structuring, structured data manipulation, and extracting insights from raw datasets."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 theme-card p-6 sm:p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
            <span className="w-2.5 h-6 bg-slate-900 dark:bg-blue-500 rounded-sm inline-block"></span>
            Professional Summary
          </h3>
          <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">B.Tech Artificial Intelligence & Machine Learning student at GLA University</strong> with a solid foundation in Python, machine learning, data analysis, SQL, and modern web development.
            </p>
            <p>
              I enjoy building real-world AI-driven systems, predictive models, and responsive web applications with hands-on exposure to Pandas, Git/GitHub, and modern full-stack tools.
            </p>
            <p>
              Passionate about solving complex challenges with clean algorithms, I am actively seeking impactful internships and software engineering opportunities to apply and expand my technical expertise.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Education</p>
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-0.5">B.Tech — CSE (AIML)</p>
              <p className="text-xs text-slate-600 dark:text-blue-400 font-medium">GLA University · CGPA: 8.19</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Languages</p>
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-0.5">English, Hindi</p>
              <p className="text-xs text-slate-500">Professional & Native</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="theme-card p-5 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
