import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  Banknote, 
  ShieldCheck, 
  Droplets, 
  ArrowRight, 
  ExternalLink,
  Info,
  BadgePercent
} from 'lucide-react';
import LiveIcon from '../components/LiveIcon';

const schemes = [
  {
    title: "PM-Kisan Samman Nidhi",
    description: "Income support of ₹6000 per year in three installments to all land-holding farmer families.",
    category: "Financial Aid",
    icon: Banknote,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    link: "https://pmkisan.gov.in/"
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
    category: "Insurance",
    icon: ShieldCheck,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    link: "https://pmfby.gov.in/"
  },
  {
    title: "PM Krishi Sinchai Yojana",
    description: "Improving on-farm water use efficiency through 'Per Drop More Crop' initiatives.",
    category: "Irrigation",
    icon: Droplets,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    link: "https://pmksy.gov.in/"
  },
  {
    title: "Agricultural Mechanization Subsidies",
    description: "Up to 50% subsidy on modern agricultural machinery like tractors, sprayers, and tillers.",
    category: "Subsidy",
    icon: BadgePercent,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    link: "https://agrimachinery.nic.in/"
  }
];

export default function SchemesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-emerald-500/20">
                Official Updates
              </div>
              <span className="flex items-center gap-1 text-[10px] font-black text-rose-500 uppercase tracking-widest animate-pulse">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> New Schemes Added
              </span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Government Farmer Schemes</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-medium max-w-2xl leading-relaxed">
              Empowering the agricultural community with direct access to beneficial policies and financial security.
            </p>
          </motion.div>
          
          <div className="hidden md:flex flex-col items-end">
            <Landmark size={48} className="text-slate-200 dark:text-slate-800 opacity-50" />
          </div>
        </section>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {schemes.map((scheme, index) => (
            <motion.div
              key={scheme.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${scheme.bg} rounded-2xl flex items-center justify-center ${scheme.color} shadow-lg ring-1 ring-white/50 dark:ring-white/5`}>
                    <LiveIcon icon={scheme.icon} type="pulse" size={28} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase ${scheme.bg} ${scheme.color}`}>
                    {scheme.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 transition-colors">
                  {scheme.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  {scheme.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <a 
                     href={scheme.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Apply Now <ExternalLink size={16} />
                  </a>
                  <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Info size={18} />
                  </button>
                </div>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <scheme.icon size={120} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden border border-white/5 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-black mb-4">Need help with applications?</h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Our support team is available 24/7 to guide you through the digital enrollment process for all central and state-level schemes.
              </p>
            </div>
            <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-slate-100 transition-all active:scale-95 whitespace-nowrap">
              Connect with Expert <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
