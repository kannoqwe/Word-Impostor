import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { PlayerImpostorStats } from '../types/player.types';

const INITIAL_STATS: Omit<PlayerImpostorStats, 'name'> = {
   roundsSinceImpostor: 0,
   impostorCount: 0,
   lastImpostorRound: null
};

export function usePlayerImpostorStats() {
   const [stats, setStats] = useLocalStorage<Record<string, PlayerImpostorStats>>('playerImpostorStats', {});

   const getPlayerStats = useCallback((playerName: string): PlayerImpostorStats => {
      return stats[playerName] ?? {
         name: playerName,
         ...INITIAL_STATS
      };
   }, [stats]);

   const updateStatsAfterRound = useCallback((
      playerNames: string[],
      impostorNames: string[],
      currentRound: number
   ) => {
      const nextStats = { ...stats };

      playerNames.forEach(name => {
         const currentStats = nextStats[name] ?? {
            name,
            ...INITIAL_STATS
         };

         const isImpostor = impostorNames.includes(name);

         nextStats[name] = {
            name,
            roundsSinceImpostor: isImpostor ? 0 : currentStats.roundsSinceImpostor + 1,
            impostorCount: isImpostor ? currentStats.impostorCount + 1 : currentStats.impostorCount,
            lastImpostorRound: isImpostor ? currentRound : currentStats.lastImpostorRound
         };
      });

      setStats(nextStats);
   }, [stats, setStats]);

   const resetStats = useCallback(() => {
      setStats({});
   }, [setStats]);

   return {
      getPlayerStats,
      updateStatsAfterRound,
      resetStats,
      stats
   };
}
