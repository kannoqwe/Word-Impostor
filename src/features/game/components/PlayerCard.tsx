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
         <div className="mb-6 flex justify-center pt-1">
            <Avatar
               name={card.playerName}
               avatarId={card.avatarId}
               src={card.avatarSrc}
               size={112}
            />
         </div>

         {gameMode === 'standard' && card.isImpostor ? (
            <div className="flex flex-1 flex-col">
               <div className="mb-5 flex items-center justify-center gap-3">
                  <AlertCircle className="h-8 w-8 text-[#aa3000]" strokeWidth={3} />
                  <h3 className="display-font text-3xl font-extrabold text-[#aa3000]">
                     {impostorLabel}
                  </h3>
               </div>
               <div className="rounded-3xl border-[3px] border-[#1b1b1c] bg-[#ffe170] p-5 shadow-[0_5px_0_#c9a900]">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[#5c4037]">{hintLabel}</p>
                  <p className="display-font break-words text-2xl font-extrabold leading-8 text-[#1b1b1c]">{card.hint}</p>
               </div>
               <div className="mt-4 min-h-0 flex-1">
                  {card.impostorNames && card.impostorNames.length > 0 && otherImpostorsLabel && (
                     <div className="rounded-3xl border-[3px] border-[#1b1b1c] bg-[#ffdbd0] p-4">
                        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[#5c4037]">{otherImpostorsLabel}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                           {card.impostorNames.map((name, idx) => (
                              <span key={idx} className="rounded-full border-2 border-[#1b1b1c] bg-white px-3 py-1 text-base font-extrabold text-[#aa3000]">
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
                  <Sparkles className="h-8 w-8 fill-[#e9c400] text-[#1b1b1c]" strokeWidth={2.8} />
                  <p className="text-base font-extrabold uppercase tracking-[0.08em] text-[#5c4037]">{wordLabel}</p>
               </div>
               <div className="rounded-3xl border-[3px] border-[#1b1b1c] bg-[#b7eaff] p-6 shadow-[0_5px_0_#00677f]">
                  <h3 className="display-font break-words text-4xl font-extrabold leading-tight text-[#1b1b1c]">{card.word}</h3>
               </div>
               <div className="min-h-0 flex-1" />
            </div>
         )}

         <div className="border-t-[3px] border-[#1b1b1c] pt-4">
            <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#916f65]">{playerLabel}</p>
            <p className="display-font break-words text-2xl font-extrabold text-[#1b1b1c]">{card.playerName}</p>
         </div>
      </div>
   );
});
