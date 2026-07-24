import React from 'react';
import { GameModeSelector } from './GameModeSelector';
import { PlayerCounter } from './PlayerCounter';
import { ThemeSelector } from './ThemeSelector';
import type { GameMode } from '../../../shared/types/game.types';

interface GameSettingsProps {
   gameMode: GameMode;
   gameModeLabel: string;
   classicLabel: string;
   specialLabel: string;
   onGameModeChange: (mode: GameMode) => void;

   numPlayers: number;
   numPlayersLabel: string;
   onPlayerCountChange: (count: number) => void;

   numImpostors: number;
   numImpostorsLabel: string;
   onImpostorCountChange: (count: number) => void;

   impostorsKnowEachOther: boolean;
   impostorsKnowEachOtherLabel: string;
   onToggleImpostorsKnowEachOther: () => void;

   themes: Record<string, string>;
   selectedThemes: string[];
   themesLabel: string;
   onThemeToggle: (theme: string) => void;
}

export const GameSettings: React.FC<GameSettingsProps> = ({
   gameMode,
   gameModeLabel,
   classicLabel,
   specialLabel,
   onGameModeChange,
   numPlayers,
   numPlayersLabel,
   onPlayerCountChange,
   numImpostors,
   numImpostorsLabel,
   onImpostorCountChange,
   impostorsKnowEachOther,
   impostorsKnowEachOtherLabel,
   onToggleImpostorsKnowEachOther,
   themes,
   selectedThemes,
   themesLabel,
   onThemeToggle
}) => {
   return (
      <div className="space-y-7">
         <section>
            <label className="section-label text-center">
               {gameModeLabel}
            </label>
            <GameModeSelector
               gameMode={gameMode}
               onSelect={onGameModeChange}
               classicLabel={classicLabel}
               specialLabel={specialLabel}
            />
         </section>

         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <PlayerCounter
               label={numPlayersLabel}
               value={numPlayers}
               onIncrement={() => onPlayerCountChange(numPlayers + 1)}
               onDecrement={() => onPlayerCountChange(numPlayers - 1)}
            />
            <PlayerCounter
               label={numImpostorsLabel}
               value={numImpostors}
               onIncrement={() => onImpostorCountChange(numImpostors + 1)}
               onDecrement={() => onImpostorCountChange(numImpostors - 1)}
               variant="danger"
            />
         </div>

         {numImpostors > 1 && (
            <section className="flex items-center justify-between gap-4 rounded-3xl border-[3px] border-[#1b1b1c] bg-[#fff8dc] p-4">
               <label className="cursor-pointer text-sm font-bold leading-5 text-[#1b1b1c]" onClick={onToggleImpostorsKnowEachOther}>
                  {impostorsKnowEachOtherLabel}
               </label>
               <button
                  onClick={onToggleImpostorsKnowEachOther}
                  role="switch"
                  aria-checked={impostorsKnowEachOther}
                  className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border-[3px] border-[#1b1b1c] transition-colors ${
                     impostorsKnowEachOther ? 'bg-[#e9c400]' : 'bg-[#e5e2e3]'
                  }`}
               >
                  <span
                     className={`inline-block h-6 w-6 transform rounded-full border-2 border-[#1b1b1c] bg-white transition-transform ${
                        impostorsKnowEachOther ? 'translate-x-8' : 'translate-x-1'
                     }`}
                  />
               </button>
            </section>
         )}

         <section>
            <label className="section-label text-center">
               {themesLabel}
            </label>
            <ThemeSelector
               themes={themes}
               selectedThemes={selectedThemes}
               onToggle={onThemeToggle}
            />
         </section>
      </div>
   );
};
