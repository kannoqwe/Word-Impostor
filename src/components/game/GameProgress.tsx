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
      <div className="mb-6">
         <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden mb-4 backdrop-blur-sm">
            <div
               className="h-full bg-gradient-to-r from-cyan-500 to-sky-500 transition-all duration-500"
               style={{ width: `${progress}%` }}
            />
         </div>
         <div className="text-center">
            <span className="inline-block bg-slate-800/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-3 border border-slate-700/50">
               {currentCard + 1} / {totalCards}
            </span>
            <h2 className="text-3xl font-bold text-white mb-1">{playerName}</h2>
            <p className="text-slate-400 text-sm">{yourTurnText}</p>
         </div>
      </div>
   );
};