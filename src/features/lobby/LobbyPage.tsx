import React from 'react';
import { Lock, Play } from 'lucide-react';
import { Button } from '../../shared/ui/Button';
import { Doodles } from '../../shared/ui/Doodles';
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
         <Doodles />
         <div className="phone-frame lobby-frame flex min-h-[calc(100svh-48px)] flex-col">
            <header className="flex items-center justify-end">
               <div className="grid grid-cols-2 rounded-full border-[3px] border-[#1b1b1c] bg-white p-1 shadow-[0_4px_0_#00ccf9] lg:p-1.5">
                  <button
                     onClick={() => onLanguageChange('ru')}
                     aria-pressed={language === 'ru'}
                     className={`h-9 rounded-full px-4 text-sm font-extrabold transition lg:h-10 lg:px-5 ${
                        language === 'ru' ? 'bg-[#1b1b1c] text-white' : 'text-[#5c4037] hover:bg-[#f0edee]'
                     }`}
                  >
                     RU
                  </button>
                  <button
                     onClick={() => onLanguageChange('en')}
                     aria-pressed={language === 'en'}
                     className={`h-9 rounded-full px-4 text-sm font-extrabold transition lg:h-10 lg:px-5 ${
                        language === 'en' ? 'bg-[#1b1b1c] text-white' : 'text-[#5c4037] hover:bg-[#f0edee]'
                     }`}
                  >
                     EN
                  </button>
               </div>
            </header>

            <section className="flex flex-1 flex-col justify-center py-12 sm:py-16">
               <div className="mb-10 text-center">
                  <p className="relative mx-auto mb-4 w-fit text-xs font-extrabold uppercase tracking-[0.04em] text-[#1b1b1c] after:absolute after:-inset-x-2 after:bottom-0 after:-z-10 after:h-2 after:rounded-full after:bg-[#e9c400] sm:text-sm lg:text-base">
                     Word Impostor
                  </p>
                  <h1 className="display-font mx-auto max-w-[11ch] text-5xl font-extrabold leading-[0.9] tracking-[-0.045em] text-[#1b1b1c] sm:text-7xl lg:max-w-[8ch] lg:text-[124px] lg:leading-[0.84]">
                     Word Impostor
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-7 text-[#5c4037] sm:text-xl lg:mt-7 lg:text-2xl">
                     {t.subtitle}
                  </p>
               </div>

               <div className="mx-auto w-full max-w-xl space-y-5 lg:max-w-3xl lg:space-y-6">
                  <Button
                     onClick={onStartOffline}
                     className="w-full lg:min-h-[88px] lg:text-2xl"
                     size="lg"
                  >
                     <Play className="h-5 w-5" />
                     {t.offline}
                  </Button>

                  <Button
                     disabled
                     variant="secondary"
                     className="relative w-full lg:min-h-[88px] lg:text-2xl"
                     size="lg"
                  >
                     <Lock className="absolute left-5 h-5 w-5 sm:left-7" />
                     <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">{t.online}</span>
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-[#1b1b1c] bg-[#ffe170] px-3 py-1 text-[11px] font-extrabold uppercase text-[#1b1b1c]">
                        {t.comingSoon}
                     </span>
                  </Button>
               </div>
            </section>

            <footer className="pb-1 text-center text-xs font-medium text-[#916f65]">
               MIT License (c) kannoqwe
            </footer>
         </div>
      </main>
   );
});
