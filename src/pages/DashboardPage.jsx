import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Sprout, 
  History, 
  ArrowRight, 
  TrendingUp, 
  PlusCircle, 
  ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import LiveIcon from '../components/LiveIcon';
import WeatherWidget from '../components/WeatherWidget';

const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    healthy: 0,
    diseased: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      try {
        const q = query(collection(db, "analyses"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data());
        
        const healthy = data.filter(a => a.disease.toLowerCase().includes('healthy')).length;
        setStats({
          total: data.length,
          healthy,
          diseased: data.length - healthy
        });
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };
    fetchStats();
  }, [user]);

  const cards = [
    { title: 'Total Analyses', value: stats.total, icon: History, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20', type: 'spin' },
    { title: 'Healthy Plants', value: stats.healthy, icon: ShieldCheck, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20', type: 'pulse' },
    { title: 'Issues Detected', value: stats.diseased, icon: TrendingUp, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20', type: 'bounce' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 perspective-1000">
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Hello, {user?.displayName?.split(' ')[0] || 'User'}! 👋</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Your personalized AI crop insights are ready.</p>
          </motion.div>
          <Link 
            to="/analysis"
            className="flex items-center justify-center gap-2 green-gradient text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <LiveIcon icon={PlusCircle} type="spin" size={22} />
            Start AI Scan
          </Link>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <TiltCard key={card.title} className="perspective-1000">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 h-full relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-16 h-16 ${card.bg} border ${card.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <LiveIcon icon={card.icon} type={card.type} size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{card.title}</p>
                    <p className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <WeatherWidget />
          </div>
          
          <TiltCard className="lg:col-span-1 h-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-10 h-full relative overflow-hidden group border-emerald-500/10 dark:border-emerald-500/20"
            >
              <div className="relative z-10">
                <div className="w-fit px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 border border-emerald-500/20">
                  Advanced Detection
                </div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">AI Crop Analysis</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-sm text-lg font-medium leading-relaxed">
                  Leverage our neural network to diagnose crop health with 99.2% accuracy in real-time.
                </p>
                <Link 
                  to="/analysis"
                  className="inline-flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-black text-xl group-hover:gap-5 transition-all"
                >
                  Initiate Scan <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="absolute top-1/2 right-[-40px] translate-y-[-50%] opacity-[0.05] dark:opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-1000 ease-out">
                <LiveIcon icon={Sprout} type="float" size={280} />
              </div>
            </motion.div>
          </TiltCard>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-fit px-3 py-1 bg-white/10 text-emerald-400 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-white/10 backdrop-blur-md">
                  Optimization Guide
                </div>
                <h2 className="text-3xl font-black mb-4 text-white">Precision Scanning</h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed font-medium">
                  Position the leaf within the holographic guides for optimal disease trajectory mapping.
                </p>
              </div>
              <div className="flex items-center gap-4 text-emerald-400 font-black bg-white/5 w-fit px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/5 shadow-2xl">
                <LiveIcon icon={ShieldCheck} type="pulse" size={24} />
                Neural Precision 2.0
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
