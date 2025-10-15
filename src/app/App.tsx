import React, { useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LobbyPage } from '../pages/LobbyPage';
import { SetupPage } from '../pages/SetupPage';
import { GamePage } from '../pages/GamePage';
import type { Language, GameMode } from '../types/game.types';

type Screen = 'lobby' | 'setup' | 'game'

interface GameConfig {
   gameMode: GameMode
   playerNames: string[]
   numImpostors: number
   selectedThemes: string[]
}

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

   const handleStartGame = useCallback(() => {
      const savedSettings = localStorage.getItem('gameSettings');
      if (savedSettings) {
         const settings = JSON.parse(savedSettings);
         setGameConfig({
            gameMode: settings.gameMode,
            playerNames: settings.playerNames.map((name: string, idx: number) => 
               name || `Player ${idx + 1}`
            ),
            numImpostors: settings.numImpostors,
            selectedThemes: settings.selectedThemes
         });
         setScreen('game');
      }
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
               onBackToLobby={handleBackToLobby}
            />
         )}
      </>
   );
}