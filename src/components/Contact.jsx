import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('apoorvamishra127@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+916388517258');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:apoorvamishra127@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <MessageSquare size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let's Connect
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
          Feel free to reach out directly for internships, project collaborations, or developer roles.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Card */}
          <div className="theme-card p-5 rounded-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center text-slate-800 dark:text-blue-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Email Address</p>
                <a
                  href="mailto:apoorvamishra127@gmail.com"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  apoorvamishra127@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              title="Copy Email"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#19233c] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#273553] transition-colors"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="theme-card p-5 rounded-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center text-slate-800 dark:text-blue-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Phone / WhatsApp</p>
                <a
                  href="tel:6388517258"
                  className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 6388517258
                </a>
              </div>
            </div>
            <button
              onClick={copyPhone}
              title="Copy Phone"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#19233c] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#273553] transition-colors"
            >
              {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Location Card */}
          <div className="theme-card p-5 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#19233c] flex items-center justify-center text-slate-800 dark:text-blue-400">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Location</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Lucknow, Uttar Pradesh, India (226001)
              </p>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="theme-card p-5 rounded-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">Profiles</p>
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href="https://github.com/apoorvamishra127-ya"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-[#19233c] text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://leetcode.com/u/apoorvaa_M7/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-[#19233c] text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <LeetCodeIcon className="w-4 h-4" />
                <span>LeetCode</span>
              </a>

              <a
                href="https://www.linkedin.com/in/apoorva-mishra-99447a369/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-[#19233c] text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Send Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 theme-card p-6 sm:p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            Send a Message
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
            Fill out this quick form to send an email directly to Apoorva.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Johnson"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#19233c] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#19233c] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Apoorva, I would like to connect regarding..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#19233c] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl btn-primary font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send size={14} />
              <span>Send Message</span>
            </button>

            {sentSuccess && (
              <p className="text-xs text-center text-emerald-600 dark:text-emerald-400 font-medium pt-1">
                Opening email client to dispatch message.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
