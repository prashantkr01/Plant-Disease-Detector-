import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-500">User Profile</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-500">Manage your account and preferences.</p>
        </section>

        <div className="glass-card overflow-hidden text-center md:text-left">
          {/* Cover banner */}
          <div className="h-32 green-gradient w-full relative"></div>

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="relative -mt-12 mb-6 flex justify-center md:justify-start">
              <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 p-2 shadow-xl shadow-emerald-200/50 dark:shadow-slate-900/50 transition-colors duration-500">
                <div className="w-full h-full rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 text-3xl font-bold transition-colors duration-500">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700 transition-colors duration-500">
                  <User className="text-slate-400 dark:text-slate-500 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Full Name</p>
                    <p className="font-bold text-slate-900 dark:text-white transition-colors duration-500">{user?.displayName || 'User'}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700 transition-colors duration-500">
                  <Mail className="text-slate-400 dark:text-slate-500 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Address</p>
                    <p className="font-bold text-slate-900 dark:text-white transition-colors duration-500 truncate">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-transparent dark:border-rose-500/20 rounded-2xl font-bold hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all group"
                >
                  <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                  Sign Out of Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
