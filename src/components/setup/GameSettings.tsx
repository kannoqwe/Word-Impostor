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