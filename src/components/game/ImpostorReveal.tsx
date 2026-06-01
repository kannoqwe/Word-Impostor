import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import type { GameCard } from '../../types/game.types';

interface ImpostorRevealProps {
   impostors: GameCard[]
   title: string
   impostorLabel: string
   playAgainText: string
   backToLobbyText: string
   onPlayAgain: () => void
   onBackToLobby: () => void
}

export const ImpostorReveal = React.memo<ImpostorRevealProps>(({
   impostors,
   title,
   impostorLabel,
   playAgainText,
   backToLobbyText,
   onPlayAgain,
   onBackToLobby
}) => {
   return (
      <main className="app-shell">
         <div className="phone-frame flex min-h-[calc(100svh-38px)] flex-col pb-28">
            <header className="mb-7 pt-4">
               <div className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-rose-300/12 ring-1 ring-rose-300/20">
                  <AlertCircle className="h-8 w-8 text-rose-300" />
               </div>
               <h2 className="text-4xl font-black tracking-normal text-stone-50">{title}</h2>
            </header>

            <div className="space-y-3">
               {impostors.map((impostor, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4">
                     <Avatar name={impostor.playerName} size={64} />
                     <div className="min-w-0 flex-1">
                        <p className="truncate text-xl font-black text-stone-50">{impostor.playerName}</p>
                        <p className="mt-1 text-sm font-bold uppercase text-rose-200">{impostorLabel}</p>
                     </div>
                     <AlertCircle className="h-7 w-7 shrink-0 text-rose-300" />
                  </div>
               ))}
            </div>

            <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-neutral-950/82 px-4 py-3 backdrop-blur">
               <div className="phone-frame space-y-2">
                  <Button onClick={onPlayAgain} className="w-full" size="lg">
                     <RotateCcw className="h-5 w-5" />
                     {playAgainText}
                  </Button>
                  <Button onClick={onBackToLobby} variant="secondary" className="w-full">
                     {backToLobbyText}
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
});
