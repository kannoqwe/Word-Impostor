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
      <div className="space-y-4">
         <section className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
            <label className="mb-3 block text-sm font-semibold uppercase text-stone-400">
               {gameModeLabel}
            </label>
            <GameModeSelector
               gameMode={gameMode}
               onSelect={onGameModeChange}
               classicLabel={classicLabel}
               specialLabel={specialLabel}
            />
         </section>

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
            <section className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
               <label className="cursor-pointer text-sm font-semibold leading-5 text-stone-200" onClick={onToggleImpostorsKnowEachOther}>
                  {impostorsKnowEachOtherLabel}
               </label>
               <button
                  onClick={onToggleImpostorsKnowEachOther}
                  className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors ${
                     impostorsKnowEachOther ? 'bg-lime-300' : 'bg-white/15'
                  }`}
               >
                  <span
                     className={`inline-block h-6 w-6 transform rounded-full bg-neutral-950 transition-transform ${
                        impostorsKnowEachOther ? 'translate-x-7' : 'translate-x-1'
                     }`}
                  />
               </button>
            </section>
         )}

         <section className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
            <label className="mb-3 block text-sm font-semibold uppercase text-stone-400">
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
