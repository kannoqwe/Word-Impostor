import React from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { Avatar } from '../../../shared/ui/Avatar';
import type { GameCard, GameMode } from '../../../shared/types/game.types';

interface PlayerCardProps {
   card: GameCard
   gameMode: GameMode
   wordLabel: string
   impostorLabel: string
   hintLabel: string
   playerLabel: string
   otherImpostorsLabel?: string
}

export const PlayerCard = React.memo<PlayerCardProps>(({
   card,
   gameMode,
   wordLabel,
   impostorLabel,
   hintLabel,
   playerLabel,
   otherImpostorsLabel
}) => {
   return (
      <div className="flex h-full min-h-0 flex-col text-center">
         <div className="mb-6 flex justify-center">
            <Avatar name={card.playerName} size={104} />
         </div>

         {gameMode === 'standard' && card.isImpostor ? (
            <div className="flex flex-1 flex-col">
               <div className="mb-5 flex items-center justify-center gap-3">
                  <AlertCircle className="h-8 w-8 text-rose-300" />
                  <h3 className="text-3xl font-black text-rose-200">
                     {impostorLabel}
                  </h3>
               </div>
               <div className="rounded-2xl border border-rose-300/20 bg-rose-300/10 p-5">
                  <p className="mb-2 text-sm font-semibold uppercase text-stone-400">{hintLabel}</p>
                  <p className="break-words text-2xl font-black leading-8 text-amber-200">{card.hint}</p>
               </div>
               <div className="mt-4 min-h-0 flex-1">
                  {card.impostorNames && card.impostorNames.length > 0 && otherImpostorsLabel && (
                     <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                        <p className="mb-2 text-sm font-semibold uppercase text-stone-400">{otherImpostorsLabel}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                           {card.impostorNames.map((name, idx) => (
                              <span key={idx} className="rounded-xl bg-rose-300/12 px-3 py-1 text-base font-bold text-rose-200">
                                 {name}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <div className="flex flex-1 flex-col">
               <div className="mb-5 flex items-center justify-center gap-3">
                  <Sparkles className="h-8 w-8 text-lime-300" />
                  <p className="text-lg font-bold uppercase text-stone-300">{wordLabel}</p>
               </div>
               <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 p-6">
                  <h3 className="break-words text-4xl font-black leading-tight text-stone-50">{card.word}</h3>
               </div>
               <div className="min-h-0 flex-1" />
            </div>
         )}

         <div className="border-t border-white/10 pt-4">
            <p className="mb-1 text-sm font-semibold uppercase text-stone-500">{playerLabel}</p>
            <p className="break-words text-2xl font-black text-stone-50">{card.playerName}</p>
         </div>
      </div>
   );
});
