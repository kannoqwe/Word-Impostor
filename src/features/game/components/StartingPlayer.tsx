import React from 'react';
import { Eye } from 'lucide-react';
import { Avatar } from '../../../shared/ui/Avatar';
import { Button } from '../../../shared/ui/Button';
import { Doodles } from '../../../shared/ui/Doodles';
import type { GameCard } from '../../../shared/types/game.types';
import { GamePhaseBackButton } from './GamePhaseBackButton';

interface StartingPlayerProps {
   startingPlayer: GameCard
   title: string
   subtitle: string
   revealHint: string
   revealImpostorsText: string
   backText: string
   onBack: () => void
   onRevealImpostors: () => void
}

export const StartingPlayer = React.memo<StartingPlayerProps>(({
   startingPlayer,
   title,
   subtitle,
   revealHint,
   revealImpostorsText,
   backText,
   onBack,
   onRevealImpostors
}) => {
   return (
      <main className="app-shell">
         <Doodles />
         <div className="phone-frame phase-frame relative flex min-h-[calc(100svh-48px)] flex-col pb-28">
            <GamePhaseBackButton label={backText} onBack={onBack} />

            <section className="flex flex-1 flex-col items-center justify-center pt-20 text-center sm:-translate-y-14 sm:pt-16">
               <h1 className="display-font text-4xl leading-tight tracking-[-0.035em] text-[#1b1b1c] sm:text-5xl lg:text-6xl">
                  {title}
               </h1>

               <div className="my-8 rounded-full bg-[#ffe170] p-2 sm:my-10">
                  <Avatar
                     name={startingPlayer.playerName}
                     avatarId={startingPlayer.avatarId}
                     src={startingPlayer.avatarSrc}
                     size={136}
                  />
               </div>

               <h2 className="display-font max-w-full break-words text-5xl leading-tight tracking-[-0.04em] text-[#1b1b1c] sm:text-6xl">
                  {startingPlayer.playerName}
               </h2>
               <p className="mt-3 text-lg font-medium text-[#1b1b1c] sm:text-xl">
                  {subtitle}
               </p>
            </section>

            <div className="action-dock phase-start-dock">
               <div className="phone-frame w-full max-w-[540px]">
                  <p className="mb-3 text-center text-sm font-medium text-[#5c4037] sm:text-base">
                     {revealHint}
                  </p>
                  <Button
                     onClick={onRevealImpostors}
                     variant="danger"
                     className="w-full sm:min-h-16 sm:text-xl"
                     size="lg"
                  >
                     <Eye className="h-6 w-6" strokeWidth={2.8} />
                     {revealImpostorsText}
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
});
