import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LeetCodeIcon } from './Icons';
import axios from 'axios';

// Factual Projects based on GitHub profile (apoorvamishra127-ya) and Resume
const BASE_PROJECTS = [
  {
    id: 'aimlbootcamp-2026',
    title: 'AIML Bootcamp 2026',
    category: 'python',
    categoryLabel: 'Machine Learning',
    description: 'Machine learning and data science repository from GLA University covering Python data analysis, Pandas, Matplotlib visualizations, and predictive ML session notebooks.',
    technologies: ['Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib', 'Machine Learning'],
    githubUrl: 'https://github.com/apoorvamishra127-ya/aimlbootcamp-2026',
    liveUrl: null,
    source: 'GitHub Repository',
    highlights: ['GLA ML Sessions', 'Data Visualizations', 'Pandas Preprocessing']
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Modern, responsive personal developer portfolio website showcasing projects, skills, education, and Microsoft Azure certification with light/dark themes and fluid interactions.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/apoorvamishra127-ya',
    liveUrl: '#',
    source: 'GitHub & Resume',
    highlights: ['Responsive UI/UX', 'Dark/Light Theme Engine', 'Clean Component Architecture']
  },
  {
    id: 'frontend-mini-projects',
    title: 'Frontend Mini Projects (Academic)',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Academic frontend project featuring an interactive registration form with custom form validation, responsive CSS layout, accessibility standards, and semantic HTML5.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM'],
    githubUrl: 'https://github.com/apoorvamishra127-ya',
    liveUrl: null,
    source: 'Academic Project',
    highlights: ['Form Validation', 'Accessible Semantic HTML', 'Cross-browser Testing']
  },
  {
    id: 'python-practice-problem-solving',
    title: 'Python Practice & Problem Solving',
    category: 'python',
    categoryLabel: 'Python & AI/ML',
    description: 'List-based Python application practicing programming fundamentals, modular object-oriented programming (OOP), data structures, and algorithm design.',
    technologies: ['Python', 'Data Structures', 'OOP', 'Algorithms'],
    githubUrl: 'https://github.com/apoorvamishra127-ya',
    liveUrl: null,
    source: 'Python Repository',
    highlights: ['Dynamic List Operations', 'Modular OOP Design', 'Algorithmic Optimization']
  },
  {
    id: 'leetcode-problem-solving',
    title: 'LeetCode Problem Solving & Algorithms',
    category: 'algorithms',
    categoryLabel: 'Algorithms',
    description: 'Algorithmic problem-solving repository and LeetCode solutions practicing data structures, arrays, trees, dynamic programming, and time/space complexity analysis.',
    technologies: ['Python', 'Data Structures', 'Algorithms', 'LeetCode'],
    githubUrl: 'https://github.com/apoorvamishra127-ya',
    liveUrl: 'https://leetcode.com/u/apoorvaa_M7/',
    source: 'LeetCode Practice',
    highlights: ['Algorithmic Thinking', 'Optimal Time Complexity', 'Tested Solutions']
  },
  {
    id: 'ai-ml-data-analysis',
    title: 'AI/ML & Data Analysis Models',
    category: 'python',
    categoryLabel: 'Python & AI/ML',
    description: 'Practical data analysis and machine learning workflows utilizing Pandas and SQL for structured dataset exploration, preprocessing, and predictive modeling.',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Data Analysis', 'SQL'],
    githubUrl: 'https://github.com/apoorvamishra127-ya',
    liveUrl: null,
    source: 'Academic & Projects',
    highlights: ['Exploratory Data Analysis', 'Pandas Preprocessing', 'Predictive Modeling']
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [gitHubProjects, setGitHubProjects] = useState([]);

  useEffect(() => {
    // Dynamic GitHub API integration for apoorvamishra127-ya
    axios.get('https://api.github.com/users/apoorvamishra127-ya/repos?sort=updated&per_page=20')
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const apiRepos = res.data
            .filter(r => !r.fork)
            .map(repo => {
              const lang = repo.language || 'Python';
              let cat = 'python';
              if (['JavaScript', 'HTML', 'CSS', 'TypeScript'].includes(lang)) cat = 'web';
              if (repo.name.toLowerCase().includes('leetcode') || repo.name.toLowerCase().includes('algo')) cat = 'algorithms';

              return {
                id: repo.name,
                title: repo.name.replace(/[-_]/g, ' '),
                category: cat,
                categoryLabel: cat === 'web' ? 'Web Development' : (cat === 'algorithms' ? 'Algorithms' : 'Machine Learning'),
                description: repo.description || 'Public GitHub repository exploring algorithms, software development, and AI concepts.',
                technologies: [lang, ...(repo.topics || [])].slice(0, 4),
                githubUrl: repo.html_url,
                liveUrl: repo.homepage || null,
                source: 'GitHub Repository',
                highlights: [`Language: ${lang}`, `Updated: ${new Date(repo.updated_at).toLocaleDateString()}`]
              };
            });

          // Merge fetched repos with BASE_PROJECTS seamlessly
          const merged = [...apiRepos];
          BASE_PROJECTS.forEach(bp => {
            if (!merged.some(m => m.id.toLowerCase() === bp.id.toLowerCase() || m.title.toLowerCase() === bp.title.toLowerCase())) {
              merged.push(bp);
            }
          });

          setGitHubProjects(merged);
        }
      })
      .catch(() => {
        // Fallback safely to BASE_PROJECTS
      });
  }, []);

  const projectsToDisplay = gitHubProjects.length > 0 ? gitHubProjects : BASE_PROJECTS;

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'python', label: 'AI/ML & Python' },
    { id: 'web', label: 'Web Development' },
    { id: 'algorithms', label: 'Algorithms & LeetCode' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsToDisplay
    : projectsToDisplay.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FolderGit2 size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Work & Repositories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
          Public repositories, AI/ML models, and academic software engineering projects.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeFilter === tab.id
                ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#151e34] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="theme-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#19233c] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-[#19233c] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#273553] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={project.category === 'algorithms' ? "View LeetCode Profile" : "Live Demo"}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-[#19233c] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#273553] transition-colors"
                      >
                        {project.category === 'algorithms' ? <LeetCodeIcon className="w-4 h-4" /> : <ExternalLink size={15} />}
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 capitalize">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-1 mb-5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies / Tags Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="theme-tag text-[11px] font-medium px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* GitHub Callout Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl theme-card text-center max-w-xl mx-auto">
        <div className="flex justify-center mb-3 text-slate-900 dark:text-white">
          <GithubIcon className="w-7 h-7" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
          Explore All Repositories on GitHub
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
          View all public repositories, latest commits, and assignments on my GitHub profile.
        </p>
        <a
          href="https://github.com/apoorvamishra127-ya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary font-semibold text-xs shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span>github.com/apoorvamishra127-ya</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
