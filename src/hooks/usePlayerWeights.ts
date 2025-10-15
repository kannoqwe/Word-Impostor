import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { PlayerWeight } from '../types/player.types';

const WEIGHT_INCREMENT = 1.5; 
const INITIAL_WEIGHT = 1.0;
const MIN_WEIGHT = 0.5;

export function usePlayerWeights() {
   const [weights, setWeights] = useLocalStorage<Record<string, PlayerWeight>>('playerWeights', {});
  
   const getPlayerWeight = useCallback((playerName: string): number => {
      const player = weights[playerName];
      if (!player) return INITIAL_WEIGHT;
      return player.weight;
   }, [weights]);

   const updateWeightsAfterRound = useCallback((
      playerNames: string[],
      impostorNames: string[],
      currentRound: number
   ) => {
      const newWeights = { ...weights };
    
      playerNames.forEach(name => {
         const isImpostor = impostorNames.includes(name);
      
         if (!newWeights[name]) {
            newWeights[name] = {
               name,
               weight: INITIAL_WEIGHT,
               lastImpostorRound: isImpostor ? currentRound : null
            };
         } else {
            if (isImpostor) {
               newWeights[name].weight = MIN_WEIGHT;
               newWeights[name].lastImpostorRound = currentRound;
            } else {
               newWeights[name].weight = Math.min(
                  newWeights[name].weight * WEIGHT_INCREMENT,
                  10 
               );
            }
         }
      });
    
      console.log('Updated weights after round', currentRound, ':', newWeights);
    
      setWeights(newWeights);
   }, [weights, setWeights]);

   const resetWeights = useCallback(() => {
      setWeights({});
   }, [setWeights]);

   return {
      getPlayerWeight,
      updateWeightsAfterRound,
      resetWeights,
      weights
   };
}