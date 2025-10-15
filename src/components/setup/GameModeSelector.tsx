import React from 'react';
import type { GameMode } from '../../types/game.types';

interface GameModeSelectorProps {
   gameMode: GameMode
   onSelect: (mode: GameMode) => void
   classicLabel: string
   specialLabel: string
}

export const GameModeSelector = React.memo<GameModeSelectorProps>(({
   gameMode,
   onSelect,
   classicLabel,
   specialLabel
}) => {
   return (
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
         <button
            onClick={() => onSelect('standard')}
            className={`py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
               gameMode === 'standard'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600/50'
            }`}
         >
            {classicLabel}
         </button>
         <button
            onClick={() => onSelect('special')}
            className={`py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
               gameMode === 'special'
                  ? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600/50'
            }`}
         >
            {specialLabel}
         </button>
      </div>
   );
});