import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex p-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 flex items-center gap-2 ${
          language === 'en'
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        <Languages size={14} />
        <span>EN</span>
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 flex items-center gap-2 ${
          language === 'hi'
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        <Languages size={14} />
        <span>हि</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
