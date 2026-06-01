import React from 'react';
import { Eye, Play } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import type { GameCard } from '../../types/game.types';

interface StartingPlayerProps {
   startingPlayer: GameCard
   title: string
   revealImpostorsText: string
   onRevealImpostors: () => void
}

export const StartingPlayer = React.memo<StartingPlayerProps>(({
   startingPlayer,
   title,
   revealImpostorsText,
   onRevealImpostors
}) => {
   return (
      <main className="app-shell">
         <div className="phone-frame flex min-h-[calc(100svh-38px)] flex-col justify-center pb-24">
            <div className="text-center">
               <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full bg-lime-300/12 ring-1 ring-lime-300/20">
                  <Play className="h-10 w-10 text-lime-300" />
               </div>
               <h2 className="text-3xl font-black tracking-normal text-stone-50">{title}</h2>
               <div className="my-8 flex justify-center">
                  <Avatar name={startingPlayer.playerName} size={132} />
               </div>
               <p className="break-words text-5xl font-black leading-tight text-stone-50">
                  {startingPlayer.playerName}
               </p>
            </div>

            <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-neutral-950/82 px-4 py-3 backdrop-blur">
               <div className="phone-frame">
                  <Button
                     onClick={onRevealImpostors}
                     variant="danger"
                     className="w-full"
                     size="lg"
                  >
                     <Eye className="h-5 w-5" />
                     {revealImpostorsText}
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
});
