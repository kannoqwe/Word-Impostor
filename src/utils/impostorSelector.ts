import { shuffleArray } from './shuffleArray';
import type { PlayerImpostorStats } from '../types/player.types';

const CANDIDATE_POOL_MULTIPLIER = 2;
const CANDIDATE_POOL_EXTRA = 1;

export function selectImpostorsByHistory(
   playerNames: string[],
   numImpostors: number,
   getStats: (name: string) => PlayerImpostorStats
): number[] {
   if (numImpostors <= 0) {
      return [];
   }

   if (numImpostors >= playerNames.length) {
      return playerNames.map((_, idx) => idx);
   }

   const candidates = shuffleArray(
      playerNames.map((name, index) => ({
         index,
         stats: getStats(name)
      }))
   ).sort((a, b) => {
      const roundsDiff = b.stats.roundsSinceImpostor - a.stats.roundsSinceImpostor;
      if (roundsDiff !== 0) return roundsDiff;

      return a.stats.impostorCount - b.stats.impostorCount;
   });

   const poolSize = Math.min(
      playerNames.length,
      Math.max(numImpostors, numImpostors * CANDIDATE_POOL_MULTIPLIER + CANDIDATE_POOL_EXTRA)
   );

   return shuffleArray(candidates.slice(0, poolSize))
      .slice(0, numImpostors)
      .map(candidate => candidate.index);
}
