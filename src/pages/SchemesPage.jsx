import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  Banknote, 
  ShieldCheck, 
  Droplets, 
  ArrowRight, 
  ExternalLink,
  Info,
  BadgePercent,
  X,
  Languages,
  ChevronDown
} from 'lucide-react';
import LiveIcon from '../components/LiveIcon';

const schemeDetails = {
  "PM-Kisan Samman Nidhi": {
    hindi: `
पीएम किसान सम्मान निधि – पूरी जानकारी 

1. 📌 यह योजना क्या है? 
PM-Kisan Samman Nidhi भारत सरकार की एक योजना है, जो किसानों को आर्थिक सहायता देने के लिए बनाई गई है। 
• हर किसान को ₹6000 प्रति वर्ष मिलते हैं  
• यह पैसा 3 बराबर किस्तों (₹2000-₹2000) में दिया जाता है  
• पैसा सीधे बैंक खाते में ट्रांसफर होता है (DBT – Direct Benefit Transfer)  

2. 👨🌾 कौन आवेदन कर सकता है? (पात्रता) 
✔ पात्र किसान: 
• भारत के छोटे और सीमांत किसान  
• जिनके पास खेती योग्य जमीन है  
• जमीन किसान के नाम पर होनी चाहिए  

❌ अपात्र: 
• सरकारी कर्मचारी (Group A और B)  
• आयकर (Income Tax) देने वाले लोग  
• डॉक्टर, इंजीनियर, वकील जैसे पेशेवर  
• ₹10,000 से ज्यादा पेंशन पाने वाले  

3. 💰 पैसा कैसे मिलता है? 
कुल ₹6000 साल में 3 किस्तों में मिलता है: 
• अप्रैल – जुलाई → ₹2000  
• अगस्त – नवंबर → ₹2000  
• दिसंबर – मार्च → ₹2000  
✅ पैसा सीधे बैंक खाते में आता है (कोई बिचौलिया नहीं) 

4. 📝 आवेदन कैसे करें? 
⌨️ ऑनलाइन तरीका: 
• PM-Kisan की आधिकारिक वेबसाइट पर जाएं  
• “New Farmer Registration” पर क्लिक करें  
• आधार नंबर और जरूरी जानकारी भरें  

🏠 ऑफलाइन तरीका: 
• नजदीकी CSC (Common Service Center) पर जाएं  
• या पटवारी / कृषि कार्यालय से संपर्क करें  

5. 📄 जरूरी दस्तावेज 
आवेदन के लिए ये दस्तावेज चाहिए: 
• आधार कार्ड  
• बैंक खाता विवरण  
• जमीन के कागजात (खसरा / खतौनी)  
• मोबाइल नंबर  

6. 🔍 स्टेटस कैसे चेक करें? 
• आधिकारिक वेबसाइट पर जाएं  
• “Beneficiary Status” पर क्लिक करें  
• आधार या मोबाइल नंबर डालकर चेक करें  

7. ⚠️ जरूरी बातें 
• आधार लिंक होना जरूरी है  
• बैंक खाता सक्रिय होना चाहिए  
• गलत जानकारी देने पर लाभ बंद हो सकता है  
• हर किस्त से पहले वेरिफिकेशन होता है  

8. 🎯 योजना का उद्देश्य 
• किसानों को आर्थिक सहायता देना  
• खेती के खर्च में मदद करना  
• ग्रामीण अर्थव्यवस्था को मजबूत बनाना  

9. 👍 फायदे (Benefits) 
• पैसा सीधे खाते में  
• कोई बिचौलिया नहीं  
• आवेदन प्रक्रिया आसान  
• हर साल निश्चित सहायता 
    `,
    eng: `
PM-Kisan Samman Nidhi – Full Details

1. 📌 What is this scheme? 
PM-Kisan Samman Nidhi is a Government of India scheme created to provide financial support to farmers. 
• Farmers get ₹6000 per year  
• The money is given in 3 equal installments (₹2000 each)  
• It is directly transferred to the bank account (DBT – Direct Benefit Transfer)  

2. 👨🌾 Who can apply? (Eligibility) 
✔ Eligible: 
• Small and marginal farmers in India  
• Farmers who own agricultural land  
• Land must be registered in the farmer’s name  

❌ Not eligible: 
• Government employees (Group A & B)  
• Income tax payers  
• Professionals like doctors, engineers, lawyers  
• Pensioners with pension above ₹10,000 per month  

3. 💰 How is the money given? 
Total ₹6000 is given yearly in 3 installments: 
• April – July → ₹2000  
• August – November → ₹2000  
• December – March → ₹2000  
✅ Money is directly sent to the bank account (no middlemen) 

4. 📝 How to apply? 
⌨️ Online method: 
• Visit the PM-Kisan official website  
• Click on “New Farmer Registration”  
• Enter Aadhaar number and required details  

🏠 Offline method: 
• Visit CSC (Common Service Center)  
• Or contact local Patwari / agriculture office  

5. 📄 Required documents 
You need the following documents: 
• Aadhaar Card  
• Bank account details  
• Land records (Khasra / Khatauni)  
• Mobile number  

6. 🔍 How to check beneficiary status? 
• Go to the official website  
• Click on “Beneficiary Status”  
• Enter Aadhaar or mobile number to check  

7. ⚠️ Important points 
• Aadhaar linking is mandatory  
• Bank account must be active  
• Wrong information can cancel your benefits  
• Verification is done before each installment  

8. 🎯 Main objective of the scheme 
• To provide financial support to farmers  
• To help with farming expenses  
• To strengthen the rural economy  

9. 👍 Benefits summary 
• Direct money transfer  
• No middlemen involved  
• Easy application process  
• Fixed yearly financial support
    `
  }
};

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState(null);
  const [activeLang, setActiveLang] = useState('eng');
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which scheme's dropdown is open

  const openDetails = (schemeId, lang) => {
    setActiveDetails(schemeDetails[schemeId]);
    setActiveLang(lang);
    setModalOpen(true);
    setDropdownOpen(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 relative">
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
              className="glass-card group overflow-hidden border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all duration-300 relative"
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

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <a 
                       href={scheme.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all"
                    >
                      Apply Now <ExternalLink size={16} />
                    </a>
                    
                    {/* Full Details Button & Dropdown */}
                    {schemeDetails[scheme.title] && (
                      <div className="relative">
                        <button 
                          onClick={() => setDropdownOpen(dropdownOpen === scheme.title ? null : scheme.title)}
                          className="flex items-center gap-2 bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-md active:scale-95"
                        >
                          Full Details <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen === scheme.title ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {dropdownOpen === scheme.title && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute bottom-full left-0 mb-2 w-40 glass-card p-2 border-slate-100 dark:border-slate-800 shadow-2xl z-20"
                            >
                              <button 
                                onClick={() => openDetails(scheme.title, 'hindi')}
                                className="w-full flex items-center justify-between gap-2 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors"
                              >
                                <span className="flex items-center gap-2"><Languages size={14} /> Hindi</span>
                                <ArrowRight size={12} className="opacity-40" />
                              </button>
                              <button 
                                onClick={() => openDetails(scheme.title, 'eng')}
                                className="w-full flex items-center justify-between gap-2 px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors mt-1"
                              >
                                <span className="flex items-center gap-2"><Languages size={14} /> English</span>
                                <ArrowRight size={12} className="opacity-40" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                  
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

        {/* Details Modal */}
        <AnimatePresence>
          {modalOpen && (
            <>
              {/* Dimmed Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalOpen(false)}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[1001]"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 md:inset-10 lg:inset-20 glass-card z-[1002] overflow-hidden flex flex-col shadow-2xl border-white/20"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Banknote size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">PM-Kisan Scheme Details</h2>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-1">Information Portal</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen(false)}
                    className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-sm active:scale-95"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50/30 dark:bg-slate-950/30 custom-scrollbar">
                  <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap font-sans text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 tracking-tight">
                        {activeDetails[activeLang]}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
                      <button 
                        onClick={() => setActiveLang('hindi')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${activeLang === 'hindi' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                      >
                        हिन्दी
                      </button>
                      <button 
                        onClick={() => setActiveLang('eng')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${activeLang === 'eng' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                      >
                        ENGLISH
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen(false)}
                    className="w-full sm:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-xl hover:opacity-90 transition-all active:scale-95"
                  >
                    Close Portal
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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

