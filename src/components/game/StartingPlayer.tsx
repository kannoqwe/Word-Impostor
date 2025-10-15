import React from 'react';
import { Play, Eye } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import type { GameCard } from '../../types/game.types';

interface StartingPlayerProps {
   startingPlayer: GameCard
   title: string
   revealImpostorsText: string
   onRevealImpostors: () => void
}

export const StartingPlayer = React.memo<StartingPlayerProps>(({
   startingPlayer,
   title,
   revealImpostorsText,
   onRevealImpostors
}) => {
   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
         </div>
      
         <div className="w-full max-w-md relative z-10">
            <Card>
               <div className="text-center mb-8">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                  <div className="flex justify-center mb-6">
                     <Avatar name={startingPlayer.playerName} size={128} />
                  </div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                     {startingPlayer.playerName}
                  </p>
               </div>

               <div className="space-y-3">
                  <Button 
                     onClick={onRevealImpostors} 
                     variant="danger" 
                     className="w-full flex items-center justify-center gap-2"
                  >
                     <Eye className="w-5 h-5" />
                     {revealImpostorsText}
                  </Button>
               </div>
            </Card>
         </div>
      </div>
   );
});