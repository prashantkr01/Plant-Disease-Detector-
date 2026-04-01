import React, { useState, useEffect } from 'react';
import { Cloud, Thermometer, Droplets, MapPin, AlertTriangle, Loader2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function WeatherWidget() {
  const { t } = useLanguage();
  const [state, setState] = useState({
    status: 'loading', // 'loading' | 'success' | 'denied' | 'error'
    location: '',
    city: '',
    region: '',
    temp: null,
    humidity: null,
    risk: 'Low',
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(s => ({ ...s, status: 'error' }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords;
        try {
          // bigdatacloud.net is specifically designed for client-side browser geocoding (free, no key)
          const [geoRes, weatherRes] = await Promise.all([
            fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            ),
            fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m&timezone=auto`
            )
          ]);

          const geoData = await geoRes.json();
          const weatherData = await weatherRes.json();

          const city =
            geoData.city ||
            geoData.locality ||
            geoData.principalSubdivision ||
            `${latitude.toFixed(3)}, ${longitude.toFixed(3)}`;
          const region = geoData.principalSubdivision || geoData.countryName || '';

          const temp = Math.round(weatherData.current?.temperature_2m ?? 28);
          const humidity = weatherData.current?.relative_humidity_2m ?? 70;

          // Disease risk heuristic
          let risk = 'Low';
          if (humidity > 80 || temp > 32) risk = 'High';
          else if (humidity > 65 || temp > 27) risk = 'Moderate';

          setState({
            status: 'success',
            location: `${city}, ${region}`,
            city,
            region,
            temp,
            humidity,
            risk,
          });
        } catch (err) {
          console.error('Weather/Geo fetch error:', err);
          // Still show coordinates as a last-resort fallback
          setState({
            status: 'success',
            location: t('currentLocation'),
            city: t('currentLocation'),
            region: `${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`,
            temp: null,
            humidity: null,
            risk: 'Low',
          });
        }
      },
      () => {
        setState(s => ({ ...s, status: 'denied' }));
      },
      { timeout: 10000 }
    );
  }, []);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'text-rose-500 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20';
      case 'Moderate': return 'text-amber-500 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20';
      default: return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20';
    }
  };

  const getRiskMessage = (risk, humidity) => {
    if (risk === 'High') return t('highRiskMsg');
    if (risk === 'Moderate') return t('moderateRiskMsg');
    return t('lowRiskMsg');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 border border-white/50 relative overflow-hidden group"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('environment')}</h3>
          {state.status === 'success' ? (
            <p className="text-2xl font-black text-slate-900 dark:text-white mt-1 leading-tight">{state.city}</p>
          ) : state.status === 'loading' ? (
            <p className="text-slate-400 dark:text-slate-500 mt-1 font-semibold text-sm animate-pulse">{t('detectingLocation')}</p>
          ) : (
            <p className="text-slate-400 dark:text-slate-500 mt-1 font-semibold text-sm">{t('locationUnavailable')}</p>
          )}
        </div>
        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
          {state.status === 'loading' ? (
            <Loader2 size={22} className="animate-spin" />
          ) : state.status === 'success' ? (
            <MapPin size={22} />
          ) : (
            <ShieldAlert size={22} className="text-rose-400" />
          )}
        </div>
      </div>

      {state.status === 'success' && (
        <>
          {state.region && (
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium -mt-4 mb-4">{state.region}</p>
          )}
          {state.temp !== null && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                <div className="p-2 text-rose-500 bg-rose-500/10 rounded-xl shrink-0">
                  <Thermometer size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{t('temp')}</p>
                  <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate">{state.temp}°C</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                <div className="p-2 text-blue-500 bg-blue-500/10 rounded-xl shrink-0">
                  <Droplets size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{t('humidity')}</p>
                  <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate">{state.humidity}%</p>
                </div>
              </div>
            </div>
          )}

          <div className={`mt-4 p-3 rounded-2xl border flex items-center gap-3 transition-colors ${getRiskColor(state.risk)}`}>
            <AlertTriangle size={20} className="shrink-0 animate-pulse" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider opacity-80">{t('riskAssessment')}</p>
              <p className="text-sm font-bold">{getRiskMessage(state.risk, state.humidity)}</p>
            </div>
          </div>
        </>
      )}

      {(state.status === 'denied' || state.status === 'error') && (
        <div className="py-4 text-center text-slate-400 dark:text-slate-500">
          <Cloud size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm font-semibold">
            {state.status === 'denied'
              ? t('locationDenied')
              : t('fetchError')}
          </p>
          <p className="text-xs mt-1 opacity-70">{t('grantAccess')}</p>
        </div>
      )}

      {/* Decorative Blur */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
    </motion.div>
  );
}
