import React from 'react';
import { GameModeSelector } from './GameModeSelector';
import { PlayerCounter } from './PlayerCounter';
import { ThemeSelector } from './ThemeSelector';
import type { GameMode } from '../../types/game.types';

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
      <div className="space-y-6">
         <div className="mb-8">
            <label className="block text-slate-300 mb-4 font-medium text-center">
               {gameModeLabel}
            </label>
            <GameModeSelector
               gameMode={gameMode}
               onSelect={onGameModeChange}
               classicLabel={classicLabel}
               specialLabel={specialLabel}
            />
         </div>

         <div className="grid grid-cols-2 gap-4">
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
            <div className="flex items-center justify-between bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
               <label className="text-slate-300 font-medium cursor-pointer" onClick={onToggleImpostorsKnowEachOther}>
                  {impostorsKnowEachOtherLabel}
               </label>
               <button
                  onClick={onToggleImpostorsKnowEachOther}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                     impostorsKnowEachOther ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
               >
                  <span
                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        impostorsKnowEachOther ? 'translate-x-6' : 'translate-x-1'
                     }`}
                  />
               </button>
            </div>
         )}

         <div>
            <label className="block text-slate-300 mb-3 font-medium">
               {themesLabel}
            </label>
            <ThemeSelector
               themes={themes}
               selectedThemes={selectedThemes}
               onToggle={onThemeToggle}
            />
         </div>
      </div>
   );
};