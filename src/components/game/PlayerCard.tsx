import React from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import type { GameCard, GameMode } from '../../types/game.types';

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
      <div className="text-center space-y-6">
         <div className="mb-6 flex justify-center">
            <Avatar name={card.playerName} size={128} />
         </div>

         {gameMode === 'standard' && card.isImpostor ? (
            <div className="space-y-4">
               <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-orange-400" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                     {impostorLabel}
                  </h3>
               </div>
               <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                  <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider">{hintLabel}</p>
                  <p className="text-amber-400 text-2xl font-bold">{card.hint}</p>
               </div>
               <div className="min-h-[120px]">
                  {card.impostorNames && card.impostorNames.length > 0 && otherImpostorsLabel && (
                     <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30">
                        <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider">{otherImpostorsLabel}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                           {card.impostorNames.map((name, idx) => (
                              <span key={idx} className="text-orange-400 text-lg font-semibold px-3 py-1 bg-orange-400/10 rounded-lg">
                                 {name}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <div className="space-y-4">
               <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                  <p className="text-slate-300 text-xl font-medium uppercase tracking-wider">{wordLabel}</p>
               </div>
               <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                  <h3 className="text-4xl font-bold text-white">{card.word}</h3>
               </div>
               {/* Резервируем такое же место для выравнивания высоты карточек */}
               <div className="min-h-[120px]" />
            </div>
         )}

         <div className="pt-4 border-t border-slate-700/50">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-1">{playerLabel}</p>
            <p className="text-white text-2xl font-bold">{card.playerName}</p>
         </div>
      </div>
   );
});