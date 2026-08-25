import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'certifications', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base font-bold tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm transition-transform duration-200 group-hover:scale-105">
            AM
          </div>
          <span className="font-bold text-base tracking-tight" style={{ color: 'var(--text-main)' }}>
            Apoorva Mishra
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-200/80 dark:bg-[#151e34] border border-slate-300/80 dark:border-slate-800 p-1 rounded-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm font-extrabold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#151e34] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs hover:border-slate-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
          >
            <FileText size={14} className="text-blue-600 dark:text-blue-400" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-xl bg-white dark:bg-[#151e34] text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-all hover:scale-105 shadow-sm"
          >
            {darkMode ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-white dark:bg-[#151e34] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
          >
            {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-800" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl bg-white dark:bg-[#151e34] text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-slate-800 px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#151e34] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl btn-primary font-bold text-xs shadow-sm"
                >
                  <FileText size={14} />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
