import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

interface GameActionsProps {
   isLastCard: boolean;
   nextCardText: string;
   startGameText: string;
   onNextCard: () => void;
   onStartGame: () => void;
}

export const GameActions: React.FC<GameActionsProps> = ({
   isLastCard,
   nextCardText,
   startGameText,
   onNextCard,
   onStartGame,
}) => {
   return (
      <div className="space-y-3">
         {!isLastCard ? (
            <Button
               onClick={onNextCard}
               className="w-full flex items-center justify-center gap-2"
            >
               {nextCardText}
               <ChevronRight className="w-5 h-5" />
            </Button>
         ) : (
            <Button
               onClick={onStartGame}
               className="w-full flex items-center justify-center gap-2"
            >
               <Play className="w-5 h-5" />
               {startGameText}
            </Button>
         )}
      </div>
   );
};