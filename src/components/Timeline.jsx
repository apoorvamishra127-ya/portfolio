import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Timeline() {
  const experienceItems = [
    {
      role: "AI/ML & Software Developer",
      type: "Independent Projects & Academic Role",
      institution: "GLA University",
      location: "Mathura, India",
      period: "2025 – Present",
      bullets: [
        "Built AI/ML and full-stack projects to apply core concepts in Python, machine learning, data analysis, and web development.",
        "Developed practical applications using modern AI tools, APIs, Git/GitHub, and modern development frameworks.",
        "Enhanced problem-solving and software development skills through projects, LeetCode challenges, and hackathon preparation.",
        "Assisted in course preparation and classroom management for diverse student groups.",
        "Collaborated with peers on group projects, strengthening teamwork and technical communication skills.",
        "Conducted academic research using scholarly databases for coursework, assignments, and presentations."
      ]
    }
  ];

  const educationItems = [
    {
      institution: "GLA University",
      degree: "B.Tech — Computer Science & Engineering (AI & ML)",
      location: "Mathura, India",
      period: "Expected: 01/2029",
      score: "CGPA: 8.19",
      details: "Specializing in Artificial Intelligence, Machine Learning, Deep Learning architectures, Data Structures, and Algorithmic Complexity."
    },
    {
      institution: "Lucknow International Public School",
      degree: "Senior Secondary (Class 12) — Science Stream",
      location: "Lucknow, India",
      period: "Completed",
      score: "GPA / Percentage: 80%",
      details: "Strong academic foundation in Mathematics, Computer Science, and Physics."
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Experience & Education
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Left Track: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 theme-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center text-slate-800 dark:text-blue-400">
              <Briefcase size={18} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Project Development & Academic Involvements</p>
            </div>
          </div>

          <div className="space-y-6">
            {experienceItems.map((item, idx) => (
              <div key={idx} className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#19233c] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800">
                    <Calendar size={11} />
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin size={11} /> {item.location}</span>
                </div>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Track: Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 theme-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center text-slate-800 dark:text-blue-400">
              <GraduationCap size={18} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Academic Qualifications</p>
            </div>
          </div>

          <div className="space-y-4">
            {educationItems.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#19233c]/60 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <span className="text-[11px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/80">
                    {edu.score}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1"><MapPin size={11} /> {edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
