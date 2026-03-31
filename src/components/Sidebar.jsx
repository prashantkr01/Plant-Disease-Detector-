import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  History, 
  User, 
  LogOut, 
  Sprout, 
  Menu, 
  X,
  Landmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import LiveIcon from './LiveIcon';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Upload Analysis', href: '/analysis', icon: Upload },
    { name: 'History', href: '/history', icon: History },
    { name: 'Govt Schemes', href: '/schemes', icon: Landmark, isNew: true },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl text-emerald-600 dark:text-emerald-400 border border-slate-100 dark:border-slate-800 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0) }}
        className={`fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-45 flex flex-col transition-all duration-500 ${
          isOpen ? 'shadow-2xl' : ''
        } lg:translate-x-0`}
      >
        <div className="p-8 flex items-center gap-3">
          <div className="w-12 h-12 green-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-400/30">
            <LiveIcon icon={Sprout} type="float" size={26} />
          </div>
          <span className="font-black text-2xl tracking-tight text-slate-800 dark:text-white transition-colors duration-500">Plant<span className="text-emerald-600">AI</span></span>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all group ${
                  isActive 
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 shadow-sm border border-emerald-100/50 dark:border-emerald-500/20' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white border border-transparent'
                }`}
              >
                <LiveIcon 
                  icon={item.icon} 
                  type={isActive ? 'pulse' : 'none'}
                  size={20} 
                  className={isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-emerald-500 transition-colors'} 
                />
                <span className="flex-1">{item.name}</span>
                {item.isNew && (
                  <span className="px-2 py-0.5 bg-rose-500 text-[10px] text-white rounded-full animate-bounce shadow-lg shadow-rose-500/20 uppercase tracking-tighter">
                    New
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-50 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-4 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user?.displayName || 'User'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
              </div>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-2xl transition-all group font-bold border border-transparent hover:border-rose-100/50 dark:hover:border-rose-500/20"
          >
            <LiveIcon icon={LogOut} type="none" size={20} className="group-hover:text-rose-500 transition-colors" />
            Logout
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
