import React from 'react';
import { RotateCcw } from 'lucide-react';
import { Avatar } from '../../../shared/ui/Avatar';
import { Button } from '../../../shared/ui/Button';
import { Doodles } from '../../../shared/ui/Doodles';
import type { GameCard } from '../../../shared/types/game.types';
import { GamePhaseBackButton } from './GamePhaseBackButton';

interface ImpostorRevealProps {
   impostors: GameCard[]
   title: string
   impostorLabel: string
   playAgainText: string
   backToLobbyText: string
   backText: string
   onPlayAgain: () => void
   onBackToLobby: () => void
}

export const ImpostorReveal = React.memo<ImpostorRevealProps>(({
   impostors,
   title,
   impostorLabel,
   playAgainText,
   backToLobbyText,
   backText,
   onPlayAgain,
   onBackToLobby
}) => {
   return (
      <main className="app-shell app-shell-scroll">
         <Doodles />
         <div className="phone-frame phase-frame relative flex min-h-[calc(100svh-48px)] flex-col pb-44">
            <GamePhaseBackButton label={backText} onBack={onBackToLobby} />

            <section className="flex flex-1 flex-col justify-center pt-20 sm:-translate-y-10 sm:pt-16">
               <h1 className="display-font mb-8 text-center text-4xl leading-tight tracking-[-0.035em] text-[#1b1b1c] sm:mb-[70px] sm:text-5xl lg:text-6xl">
                  {title}
               </h1>

               <div className="cartoon-panel mx-auto max-h-[52svh] w-full max-w-[680px] overflow-y-auto px-5 py-2 sm:px-8 custom-scrollbar">
                  {impostors.map((impostor, index) => (
                     <div
                        key={`${impostor.playerName}-${impostor.avatarId ?? index}`}
                        className="flex min-h-28 items-center gap-4 border-b-2 border-[#dcd9da] py-5 last:border-b-0 sm:gap-6"
                     >
                        <Avatar
                           name={impostor.playerName}
                           avatarId={impostor.avatarId}
                           src={impostor.avatarSrc}
                           size={68}
                        />
                        <p className="display-font min-w-0 flex-1 truncate text-xl text-[#1b1b1c] sm:text-2xl">
                           {impostor.playerName}
                        </p>
                        <p className="shrink-0 text-xs font-extrabold uppercase tracking-[0.06em] text-[#ff4b3f] sm:text-sm">
                           {impostorLabel}
                        </p>
                     </div>
                  ))}
               </div>
            </section>

            <div className="action-dock phase-results-dock">
               <div className="phone-frame game-frame grid gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(160px,1fr)] sm:gap-5">
                  <Button onClick={onPlayAgain} className="w-full sm:min-h-16 sm:text-xl" size="lg">
                     <RotateCcw className="h-6 w-6" strokeWidth={2.8} />
                     {playAgainText}
                  </Button>
                  <Button onClick={onBackToLobby} variant="secondary" className="w-full sm:min-h-16 sm:text-lg">
                     {backToLobbyText}
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
});
