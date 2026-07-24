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
      <div className="grid grid-cols-2 gap-1 rounded-full border-[3px] border-[#1b1b1c] bg-white p-1 shadow-[0_4px_0_#00ccf9]">
         <button
            onClick={() => onSelect('standard')}
            aria-pressed={gameMode === 'standard'}
            className={`display-font min-h-11 rounded-full px-3 text-xs transition sm:text-sm ${
               gameMode === 'standard'
                  ? 'border-2 border-[#1b1b1c] bg-[#ffe170] text-[#1b1b1c]'
                  : 'text-[#5c4037] hover:bg-[#f0edee]'
            }`}
         >
            {classicLabel}
         </button>
         <button
            onClick={() => onSelect('special')}
            aria-pressed={gameMode === 'special'}
            className={`display-font min-h-11 rounded-full px-3 text-xs transition sm:text-sm ${
               gameMode === 'special'
                  ? 'border-2 border-[#1b1b1c] bg-[#ffe170] text-[#1b1b1c]'
                  : 'text-[#5c4037] hover:bg-[#f0edee]'
            }`}
         >
            {specialLabel}
         </button>
      </div>
   );
});
