import React, { useCallback } from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { Button } from '../../shared/ui/Button';
import { Doodles } from '../../shared/ui/Doodles';
import { SetupHeader } from './components/SetupHeader';
import { GameSettings } from './components/GameSettings';
import { PlayerNamesList } from './components/PlayerNamesList';
import { useSetupState } from './hooks/useSetupState';
import type { GameConfig, Language } from '../../shared/types/game.types';

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
      <main className="app-shell app-shell-scroll">
         <Doodles />
         <div className="phone-frame pb-28">
            <SetupHeader
               title={t.offline}
               subtitle={t.subtitle}
               backText={t.back}
               onBack={onBack}
            />

            <div className="cartoon-panel animate-pop-in p-4 sm:p-7">
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

               <section className="mt-7 border-t-[3px] border-[#1b1b1c] pt-6">
                  <label className="section-label text-center">
                     {t.playerName}
                  </label>
                  <PlayerNamesList
                     playerNames={state.playerNames}
                     onNameChange={updatePlayerName}
                     placeholder={t.playerName}
                  />
               </section>
            </div>

            <div className="action-dock">
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
