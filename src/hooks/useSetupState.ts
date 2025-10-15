import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { GameMode, SetupSettings } from '../types/game.types';

interface UseSetupStateProps {
   themes: Record<string, string>;
}

const DEFAULT_SETTINGS: SetupSettings = {
   gameMode: 'standard',
   numPlayers: 4,
   numImpostors: 1,
   playerNames: ['', '', '', ''],
   selectedThemes: []
};

export const useSetupState = ({ themes }: UseSetupStateProps) => {
   const [settings, setSettings] = useLocalStorage<SetupSettings>('gameSettings', {
      ...DEFAULT_SETTINGS,
      selectedThemes: Object.keys(themes)
   });

   const [state, setState] = useState<SetupSettings>(settings);

   useEffect(() => {
      setSettings(state);
   }, [state, setSettings]);

   const updateGameMode = useCallback((gameMode: GameMode) => {
      setState(prev => ({ ...prev, gameMode }));
   }, []);

   const updatePlayerCount = useCallback((count: number) => {
      const validCount = Math.max(3, Math.min(10, count));
    
      setState(prev => {
         const newNames = [...prev.playerNames];
         while (newNames.length < validCount) newNames.push('');
         const adjustedNames = newNames.slice(0, validCount);
      
         const maxImpostors = Math.floor(validCount / 2);
         const adjustedImpostors = Math.min(prev.numImpostors, maxImpostors);

         return {
            ...prev,
            numPlayers: validCount,
            numImpostors: adjustedImpostors,
            playerNames: adjustedNames
         };
      });
   }, []);

   const updateImpostorCount = useCallback((count: number) => {
      setState(prev => {
         const maxImpostors = Math.floor(prev.numPlayers / 2);
         const validCount = Math.max(1, Math.min(maxImpostors, count));
         return { ...prev, numImpostors: validCount };
      });
   }, []);

   const updatePlayerName = useCallback((index: number, name: string) => {
      setState(prev => {
         const newNames = [...prev.playerNames];
         newNames[index] = name;
         return { ...prev, playerNames: newNames };
      });
   }, []);

   const toggleTheme = useCallback((theme: string) => {
      setState(prev => ({
         ...prev,
         selectedThemes: prev.selectedThemes.includes(theme)
            ? prev.selectedThemes.filter(t => t !== theme)
            : [...prev.selectedThemes, theme]
      }));
   }, []);

   const isValid = state.selectedThemes.length > 0;

   return {
      state,
      updateGameMode,
      updatePlayerCount,
      updateImpostorCount,
      updatePlayerName,
      toggleTheme,
      isValid
   };
};
