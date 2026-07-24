import React from 'react';
import { Avatar } from '../../../shared/ui/Avatar';

interface GameProgressProps {
   progress: number;
   currentCard: number;
   totalCards: number;
   playerName: string;
   avatarId?: string;
   avatarSrc?: string;
   yourTurnText: string;
}

export const GameProgress: React.FC<GameProgressProps> = ({
   progress,
   currentCard,
   totalCards,
   playerName,
   avatarId,
   avatarSrc,
   yourTurnText,
}) => {
   return (
      <header className="mb-5">
         <div className="mb-4 h-7 w-full overflow-hidden rounded-full border-[3px] border-[#1b1b1c] bg-white p-1 shadow-[0_4px_0_#00ccf9]">
            <div
               className="relative h-full min-w-4 overflow-hidden rounded-full bg-[#e9c400] transition-all duration-500 after:absolute after:inset-x-2 after:top-0 after:h-[3px] after:rounded-full after:bg-white/80"
               style={{ width: `${progress}%` }}
            />
         </div>
         <div className="flex items-center justify-between gap-3 px-1">
            <div className="flex min-w-0 items-center gap-3">
               <div className="shrink-0">
                  <Avatar
                     name={playerName}
                     avatarId={avatarId}
                     src={avatarSrc}
                     size={56}
                  />
               </div>
               <div className="min-w-0">
                  <p className="text-sm font-bold text-[#5c4037]">{yourTurnText}</p>
                  <h2 className="display-font mt-1 truncate text-3xl font-extrabold tracking-[-0.02em] text-[#1b1b1c] sm:text-4xl">{playerName}</h2>
               </div>
            </div>
            <span className="shrink-0 rounded-full border-[3px] border-[#1b1b1c] bg-white px-4 py-2 text-sm font-extrabold text-[#1b1b1c] shadow-[0_3px_0_#00ccf9]">
               {currentCard + 1} / {totalCards}
            </span>
         </div>
      </header>
   );
};
