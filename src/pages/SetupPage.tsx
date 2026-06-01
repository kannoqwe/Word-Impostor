import React, { useCallback } from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useSetupState } from '../hooks/useSetupState';
import { Button } from '../components/ui/Button';
import { SetupHeader } from '../components/setup/SetupHeader';
import { GameSettings } from '../components/setup/GameSettings';
import { PlayerNamesList } from '../components/setup/PlayerNamesList';
import type { GameConfig, Language } from '../types/game.types';

interface SetupPageProps {
   language: Language;
   onBack: () => void;
   onStartGame: (config: GameConfig) => void;
}

export const SetupPage = React.memo<SetupPageProps>(({
   language,
   onBack,
   onStartGame
}) => {
   const { t } = useTranslation(language);
  
   const {
      state,
      updateGameMode,
      updatePlayerCount,
      updateImpostorCount,
      updatePlayerName,
      toggleTheme,
      toggleImpostorsKnowEachOther,
      isValid
   } = useSetupState({ themes: t.themes });

   const handleStartGame = useCallback(() => {
      if (!isValid) return;

      onStartGame({
         gameMode: state.gameMode,
         playerNames: state.playerNames.map((name, index) => {
            const trimmedName = name.trim();
            return trimmedName || `${t.player} ${index + 1}`;
         }),
         numImpostors: state.numImpostors,
         selectedThemes: state.selectedThemes,
         impostorsKnowEachOther: state.impostorsKnowEachOther
      });
   }, [isValid, onStartGame, state, t.player]);

   return (
      <main className="app-shell">
         <div className="phone-frame pb-24">
            <div className="mb-2">
               <SetupHeader
                  title={t.offline}
                  subtitle={t.subtitle}
                  backText={t.back}
                  onBack={onBack}
               />
            </div>

            <div className="space-y-4">
               <GameSettings
                  gameMode={state.gameMode}
                  gameModeLabel={t.gameMode}
                  classicLabel={t.classicMode}
                  specialLabel={t.newMode}
                  onGameModeChange={updateGameMode}
                  numPlayers={state.numPlayers}
                  numPlayersLabel={t.numPlayers}
                  onPlayerCountChange={updatePlayerCount}
                  numImpostors={state.numImpostors}
                  numImpostorsLabel={t.numImpostors}
                  onImpostorCountChange={updateImpostorCount}
                  impostorsKnowEachOther={state.impostorsKnowEachOther}
                  impostorsKnowEachOtherLabel={t.impostorsKnowEachOther}
                  onToggleImpostorsKnowEachOther={toggleImpostorsKnowEachOther}
                  themes={t.themes}
                  selectedThemes={state.selectedThemes}
                  themesLabel={t.selectThemes}
                  onThemeToggle={toggleTheme}
               />

               <section className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  <label className="mb-3 block text-sm font-semibold uppercase text-stone-400">
                     {t.playerName}
                  </label>
                  <PlayerNamesList
                     playerNames={state.playerNames}
                     onNameChange={updatePlayerName}
                     placeholder={t.playerName}
                  />
               </section>
            </div>

            <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-neutral-950/82 px-4 py-3 backdrop-blur">
               <div className="phone-frame">
                  <Button
                     onClick={handleStartGame}
                     disabled={!isValid}
                     className="w-full"
                     size="lg"
                  >
                     <Play className="h-5 w-5" />
                     {t.startGame}
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
});
