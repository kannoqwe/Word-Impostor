import React from 'react';
import { Lock, Play, Sparkles } from 'lucide-react';
import { Button } from '../../shared/ui/Button';
import { useTranslation } from '../../shared/hooks/useTranslation';
import type { Language } from '../../shared/types/game.types';

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
      <main className="app-shell">
         <div className="phone-frame flex min-h-[calc(100svh-38px)] flex-col">
            <header className="flex items-center justify-between">
               <div className="flex h-11 items-center gap-2 rounded-2xl bg-white/[0.07] px-3 text-sm font-semibold text-stone-200 ring-1 ring-white/10">
                  <Sparkles className="h-4 w-4 text-lime-300" />
                  Party game
               </div>

               <div className="grid grid-cols-2 rounded-2xl bg-white/[0.07] p-1 ring-1 ring-white/10">
                  <button
                     onClick={() => onLanguageChange('ru')}
                     className={`h-9 rounded-xl px-3 text-sm font-bold transition ${
                        language === 'ru' ? 'bg-stone-50 text-neutral-950' : 'text-stone-400'
                     }`}
                  >
                     RU
                  </button>
                  <button
                     onClick={() => onLanguageChange('en')}
                     className={`h-9 rounded-xl px-3 text-sm font-bold transition ${
                        language === 'en' ? 'bg-stone-50 text-neutral-950' : 'text-stone-400'
                     }`}
                  >
                     EN
                  </button>
               </div>
            </header>

            <section className="flex flex-1 flex-col justify-center py-10">
               <div className="mb-10">
                  <p className="mb-4 text-sm font-semibold uppercase text-lime-300">Word Impostor</p>
                  <h1 className="max-w-[9ch] text-6xl font-black leading-[0.92] tracking-normal text-stone-50">
                     Word Impostor
                  </h1>
                  <p className="mt-6 max-w-sm text-lg leading-8 text-stone-300">{t.subtitle}</p>
               </div>

               <div className="space-y-3">
                  <Button
                     onClick={onStartOffline}
                     className="w-full"
                     size="lg"
                  >
                     <Play className="h-5 w-5" />
                     {t.offline}
                  </Button>

                  <Button
                     disabled
                     variant="secondary"
                     className="relative w-full"
                     size="lg"
                  >
                     <Lock className="h-5 w-5" />
                     {t.online}
                     <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-2 py-0.5 text-[11px] font-black text-neutral-950">
                        {t.comingSoon}
                     </span>
                  </Button>
               </div>
            </section>

            <footer className="pb-1 text-xs text-stone-500">
               MIT License (c) kannoqwe
            </footer>
         </div>
      </main>
   );
});
