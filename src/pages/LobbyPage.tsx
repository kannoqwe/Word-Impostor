import React from 'react';
import { Play, Lock, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../types/game.types';

interface LobbyPageProps {
   language: Language
   onLanguageChange: (lang: Language) => void
   onStartOffline: () => void
}

export const LobbyPage = React.memo<LobbyPageProps>(({
   language,
   onLanguageChange,
   onStartOffline
}) => {
   const { t } = useTranslation(language);

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
         </div>

         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-500/30 rounded-2xl rotate-12"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-sky-500/30 rounded-full"></div>
         </div>

         <div className="text-center max-w-md w-full relative z-10">
            <div className="mb-16">
               <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>
                  <h1 className="relative text-6xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                     Word
                  </h1>
                  <h1 className="relative text-6xl font-bold bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent tracking-tight">
                     Impostor
                  </h1>
               </div>
               <p className="text-slate-400 text-base font-light tracking-wide">{t.subtitle}</p>
            </div>

            <div className="space-y-3 mb-12">
               <button
                  onClick={onStartOffline}
                  className="group w-full bg-gradient-to-r from-cyan-500/90 to-sky-500/90 hover:from-cyan-500 hover:to-sky-500 text-white font-medium py-4 px-6 rounded-2xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm border border-cyan-400/20"
               >
                  <div className="flex items-center justify-center gap-3">
                     <Play className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                     <span className="text-lg">{t.offline}</span>
                  </div>
               </button>

               <div className="relative">
                  <button
                     disabled
                     className="w-full bg-slate-800/50 backdrop-blur-sm text-slate-500 font-medium py-4 px-6 rounded-2xl cursor-not-allowed border border-slate-700/50"
                  >
                     <div className="flex items-center justify-center gap-3">
                        <Lock className="w-5 h-5" strokeWidth={2} />
                        <span className="text-lg">{t.online}</span>
                     </div>
                  </button>
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                     {t.comingSoon}
                  </span>
               </div>
            </div>

            <div className="mb-8">
               <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm p-1.5 rounded-xl border border-slate-700/50">
                  <Globe className="w-4 h-4 text-slate-400 ml-2" strokeWidth={2} />
                  <button
                     onClick={() => onLanguageChange('ru')}
                     className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                        language === 'ru' 
                           ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md' 
                           : 'text-slate-400 hover:text-slate-300'
                     }`}
                  >
                     RU
                  </button>
                  <button
                     onClick={() => onLanguageChange('en')}
                     className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                        language === 'en' 
                           ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md' 
                           : 'text-slate-400 hover:text-slate-300'
                     }`}
                  >
                     EN
                  </button>
               </div>
            </div>

            <footer className="text-slate-600 text-xs font-light">
               MIT License © kannoqwe
            </footer>
         </div>
      </div>
   );
});