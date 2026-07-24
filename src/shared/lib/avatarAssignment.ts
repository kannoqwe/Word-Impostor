import { PLAYER_AVATARS } from '../data/avatars';
import type { PlayerAvatar } from '../types/game.types';
import { shuffleArray } from './shuffleArray';

export function assignPlayerAvatars(playerCount: number): PlayerAvatar[] {
   if (playerCount <= 0) {
      return [];
   }

   const assignedAvatars: PlayerAvatar[] = [];

   while (assignedAvatars.length < playerCount) {
      const shuffledPack = shuffleArray([...PLAYER_AVATARS]);
      const remainingSlots = playerCount - assignedAvatars.length;
      assignedAvatars.push(...shuffledPack.slice(0, remainingSlots));
   }

   return assignedAvatars;
}
