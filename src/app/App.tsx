import React, { useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LobbyPage } from '../pages/LobbyPage';
import { SetupPage } from '../pages/SetupPage';
import { GamePage } from '../pages/GamePage';
import type { GameConfig, Language } from '../types/game.types';

type Screen = 'lobby' | 'setup' | 'game'

export default function App() {
   const [language, setLanguage] = useLocalStorage<Language>('language', 'ru');
   const [screen, setScreen] = useState<Screen>('lobby');
   const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);

   const handleLanguageChange = useCallback((lang: Language) => {
      setLanguage(lang);
   }, [setLanguage]);

   const handleStartOffline = useCallback(() => {
      setScreen('setup');
   }, []);

   const handleBackToLobby = useCallback(() => {
      setScreen('lobby');
      setGameConfig(null);
   }, []);

   const handleBackFromSetup = useCallback(() => {
      setScreen('lobby');
   }, []);

   const handleStartGame = useCallback((config: GameConfig) => {
      setGameConfig(config);
      setScreen('game');
   }, []);

   return (
      <>
         {screen === 'lobby' && (
            <LobbyPage
               language={language}
               onLanguageChange={handleLanguageChange}
               onStartOffline={handleStartOffline}
            />
         )}
         {screen === 'setup' && (
            <SetupPage
               language={language}
               onBack={handleBackFromSetup}
               onStartGame={handleStartGame}
            />
         )}
         {screen === 'game' && gameConfig && (
            <GamePage
               language={language}
               gameMode={gameConfig.gameMode}
               playerNames={gameConfig.playerNames}
               numImpostors={gameConfig.numImpostors}
               selectedThemes={gameConfig.selectedThemes}
               impostorsKnowEachOther={gameConfig.impostorsKnowEachOther}
               onBackToLobby={handleBackToLobby}
            />
         )}
      </>
   );
}
