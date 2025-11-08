import React from 'react';
import { Card } from '../ui/Card';
import { PlayerCard } from './PlayerCard';
import { SwipeCard } from './SwipeCard';
import { useSwipe } from '../../hooks/useSwipe';
import type { GameCard, GameMode } from '../../types/game.types';

interface GameCardDisplayProps {
   card: GameCard;
   gameMode: GameMode;
   revealed: boolean;
   wordLabel: string;
   impostorLabel: string;
   hintLabel: string;
   playerLabel: string;
   swipeUpText: string;
   otherImpostorsLabel?: string;
}

export const GameCardDisplay: React.FC<GameCardDisplayProps> = ({
   card,
   gameMode,
   revealed,
   wordLabel,
   impostorLabel,
   hintLabel,
   playerLabel,
   swipeUpText,
   otherImpostorsLabel,
}) => {
   const { swipeOffset, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown } = useSwipe();

   return (
      <div className="relative mb-6 overflow-hidden select-none touch-none">
         <Card>
            <PlayerCard
               card={card}
               gameMode={gameMode}
               wordLabel={wordLabel}
               impostorLabel={impostorLabel}
               hintLabel={hintLabel}
               playerLabel={playerLabel}
               otherImpostorsLabel={otherImpostorsLabel}
            />
         </Card>

         <SwipeCard
            revealed={revealed}
            swipeOffset={swipeOffset}
            swipeUpText={swipeUpText}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
         />
      </div>
   );
};