import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';

interface GameActionsProps {
   isLastCard: boolean;
   canContinue: boolean;
   nextCardText: string;
   startGameText: string;
   onNextCard: () => void;
   onStartGame: () => void;
}

export const GameActions: React.FC<GameActionsProps> = ({
   isLastCard,
   canContinue,
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
               disabled={!canContinue}
               className="w-full"
               size="lg"
            >
               {nextCardText}
               <ChevronRight className="w-5 h-5" />
            </Button>
         ) : (
            <Button
               onClick={onStartGame}
               disabled={!canContinue}
               className="w-full"
               size="lg"
            >
               <Play className="w-5 h-5" />
               {startGameText}
            </Button>
         )}
      </div>
   );
};
