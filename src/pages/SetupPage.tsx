import React, { useCallback } from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useSetupState } from '../hooks/useSetupState';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SetupHeader } from '../components/setup/SetupHeader';
import { GameSettings } from '../components/setup/GameSettings';
import { PlayerNamesList } from '../components/setup/PlayerNamesList';
import type { Language, GameState } from '../types/game.types';

interface SetupPageProps {
   language: Language;
   onBack: () => void;
   onStartGame: (state: GameState) => void;
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
         cards: [],
         gameMode: state.gameMode
      });
   }, [isValid, state.gameMode, onStartGame]);

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 p-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
         </div>

         <div className="max-w-5xl mx-auto relative z-10">
            <Card>
               <SetupHeader
                  title={t.offline}
                  subtitle={t.subtitle}
                  backText={t.back}
                  onBack={onBack}
               />

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                  <div>
                     <label className="block text-slate-300 mb-3 font-medium">
                        {t.playerName}
                     </label>
                     <PlayerNamesList
                        playerNames={state.playerNames}
                        onNameChange={updatePlayerName}
                        placeholder={t.playerName}
                     />
                  </div>
               </div>

               <Button
                  onClick={handleStartGame}
                  disabled={!isValid}
                  className="w-full mt-8 text-lg"
                  size="lg"
               >
                  <Play className="w-6 h-6 inline-block mr-2" />
                  {t.startGame}
               </Button>
            </Card>
         </div>
      </div>
   );
});