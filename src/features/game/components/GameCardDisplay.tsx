import React from 'react';
import { Card } from '../../../shared/ui/Card';
import { PlayerCard } from './PlayerCard';
import { SwipeCard } from './SwipeCard';
import { useSwipe } from '../hooks/useSwipe';
import type { GameCard, GameMode } from '../../../shared/types/game.types';

interface GameCardDisplayProps {
   card: GameCard;
   gameMode: GameMode;
   revealed: boolean;
   resetKey: number;
   wordLabel: string;
   impostorLabel: string;
   hintLabel: string;
   playerLabel: string;
   swipeUpText: string;
   onReveal: () => void;
   otherImpostorsLabel?: string;
}

export const GameCardDisplay: React.FC<GameCardDisplayProps> = ({
   card,
   gameMode,
   revealed,
   resetKey,
   wordLabel,
   impostorLabel,
   hintLabel,
   playerLabel,
   swipeUpText,
   onReveal,
   otherImpostorsLabel,
}) => {
   const { swipeOffset, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown } = useSwipe({ onReveal });

   return (
      <div className="relative h-full min-h-0 w-full select-none touch-none">
         <Card className="h-full min-h-0 p-5 sm:p-7">
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
            key={resetKey}
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
