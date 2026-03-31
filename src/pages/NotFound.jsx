import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-500">
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-200/50"
        >
          <Sprout size={48} />
        </motion.div>
        <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4 transition-colors duration-500">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 transition-colors duration-500">Page Lost in the Woods</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-sm mx-auto transition-colors duration-500">
          The page you are looking for doesn't exist or has been moved to another garden.
        </p>
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-2 green-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:shadow-xl hover:translate-y-[-2px] transition-all"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
