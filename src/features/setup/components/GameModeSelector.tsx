import React from 'react';
import type { GameMode } from '../../../shared/types/game.types';

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
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/[0.06] p-1 ring-1 ring-white/10">
         <button
            onClick={() => onSelect('standard')}
            className={`min-h-12 rounded-xl px-3 text-sm font-semibold transition ${
               gameMode === 'standard'
                  ? 'bg-stone-50 text-neutral-950 shadow-lg shadow-black/30'
                  : 'text-stone-400 hover:text-stone-100'
            }`}
         >
            {classicLabel}
         </button>
         <button
            onClick={() => onSelect('special')}
            className={`min-h-12 rounded-xl px-3 text-sm font-semibold transition ${
               gameMode === 'special'
                  ? 'bg-stone-50 text-neutral-950 shadow-lg shadow-black/30'
                  : 'text-stone-400 hover:text-stone-100'
            }`}
         >
            {specialLabel}
         </button>
      </div>
   );
});
