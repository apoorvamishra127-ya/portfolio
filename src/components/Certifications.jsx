import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Calendar, Layers } from 'lucide-react';
import { AzureIcon } from './Icons';

export default function Certifications() {
  const topics = [
    { title: "Cloud Computing Concepts", desc: "High availability, scalability, elasticity, agility, fault tolerance, and disaster recovery architectures." },
    { title: "Azure Architecture & Core Services", desc: "Virtual Machines, App Services, Virtual Networks, Azure Storage, and Cloud Resource Management." },
    { title: "Security, Privacy & Compliance", desc: "Identity management, Microsoft Entra ID (Azure AD), Role-Based Access Control (RBAC), and security governance." },
    { title: "Azure Management & Governance", desc: "Cost management, Azure Resource Manager (ARM), policies, monitoring, and compliance tools." },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#151e34] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Award size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Industry Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Certifications
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
          Demonstrated competence in enterprise cloud services, infrastructure, and architectural principles.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="theme-card rounded-2xl p-6 sm:p-8">
          {/* Top row: Badge, Title, Issuer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-[#19233c] border border-slate-200 dark:border-slate-700/80 flex items-center justify-center p-2.5 flex-shrink-0">
                <AzureIcon className="w-9 h-9" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/80">
                    Microsoft Certified
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck size={12} />
                    Active & Verified
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Azure Fundamentals
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Microsoft Corporation · Exam AZ-900
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                <Calendar size={14} className="text-blue-600 dark:text-blue-400" />
                <span>Valid through: <strong className="text-blue-600 dark:text-blue-400">05/2026</strong></span>
              </div>
              <span className="text-[11px] text-slate-500">Credential ID: AZ-900</span>
            </div>
          </div>

          {/* Bottom row: Competencies grid */}
          <div className="pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
              <Layers size={14} className="text-blue-600 dark:text-blue-400" />
              Validated Core Competencies
            </h4>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {topics.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#19233c]/60 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-xs mb-1">
                    <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{t.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 pl-5.5 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
