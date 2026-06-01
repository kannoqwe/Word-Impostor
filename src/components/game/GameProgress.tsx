import React from 'react';

interface GameProgressProps {
   progress: number;
   currentCard: number;
   totalCards: number;
   playerName: string;
   yourTurnText: string;
}

export const GameProgress: React.FC<GameProgressProps> = ({
   progress,
   currentCard,
   totalCards,
   playerName,
   yourTurnText,
}) => {
   return (
      <header className="mb-5">
         <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
               className="h-full rounded-full bg-lime-300 transition-all duration-500"
               style={{ width: `${progress}%` }}
            />
         </div>
         <div className="flex items-end justify-between gap-4">
            <div>
               <p className="text-sm font-medium text-stone-400">{yourTurnText}</p>
               <h2 className="mt-1 text-3xl font-black tracking-normal text-stone-50">{playerName}</h2>
            </div>
            <span className="rounded-2xl bg-white/[0.08] px-3 py-2 text-sm font-bold text-stone-200 ring-1 ring-white/10">
               {currentCard + 1} / {totalCards}
            </span>
         </div>
      </header>
   );
};
