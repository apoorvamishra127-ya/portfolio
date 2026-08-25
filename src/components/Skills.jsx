import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Wrench, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Terminal className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      description: "Core programming languages, AI/ML libraries, and data analysis frameworks",
      skills: [
        { name: "Python", level: "Core", hot: true },
        { name: "Machine Learning", level: "Applied", hot: true },
        { name: "Data Analysis", level: "Applied" },
        { name: "Pandas", level: "Framework" },
        { name: "SQL", level: "Databases" },
        { name: "JavaScript (ES6+)", level: "Language" },
        { name: "HTML5 & CSS3", level: "Frontend" },
        { name: "Bootstrap", level: "UI Library" },
        { name: "React & Vite", level: "Frontend" },
        { name: "Tailwind CSS", level: "Styling" },
      ]
    },
    {
      title: "Web Fundamentals",
      icon: <Globe className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      description: "Frontend architecture, web standards, accessibility, and UI responsiveness",
      skills: [
        { name: "Responsive Web Design", level: "Essential" },
        { name: "Modern CSS Architecture", level: "Styling" },
        { name: "DOM Manipulation", level: "JavaScript" },
        { name: "Accessibility Standards (a11y)", level: "Standards" },
        { name: "Cross-Browser Testing", level: "QA" },
        { name: "Semantic HTML Layouts", level: "Structure" },
      ]
    },
    {
      title: "Development Practices & Tools",
      icon: <Wrench className="w-5 h-5 text-slate-700 dark:text-blue-400" />,
      description: "Workflows, developer tools, version control, and cloud practices",
      skills: [
        { name: "Git & GitHub Workflows", level: "Version Control", hot: true },
        { name: "VS Code & Debugging", level: "IDE" },
        { name: "API Integration", level: "Full-Stack" },
        { name: "Unit Testing & QA", level: "Testing" },
        { name: "Agile Development", level: "Methodology" },
        { name: "Microsoft Azure (AZ-900)", level: "Cloud", hot: true },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Technical Competencies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Skills & Capabilities
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
          Overview of programming languages, tools, and developer practices from my resume.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="theme-card p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center mb-4">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      skill.hot
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-semibold border border-blue-200/80 dark:border-blue-800/80'
                        : 'theme-tag'
                    }`}
                  >
                    <CheckCircle2 size={12} className={skill.hot ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"} />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400">
              <span>{cat.skills.length} competencies</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Active Practice</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
