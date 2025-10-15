import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import type { GameCard } from '../../types/game.types';

interface ImpostorRevealProps {
   impostors: GameCard[]
   title: string
   impostorLabel: string
   playAgainText: string
   backToLobbyText: string
   onPlayAgain: () => void
   onBackToLobby: () => void
}

export const ImpostorReveal = React.memo<ImpostorRevealProps>(({
   impostors,
   title,
   impostorLabel,
   playAgainText,
   backToLobbyText,
   onPlayAgain,
   onBackToLobby
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
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <AlertCircle className="w-12 h-12 text-orange-400" />
                     <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                        {title}
                     </h2>
                  </div>
               </div>

               <div className="space-y-4 mb-8">
                  {impostors.map((impostor, idx) => (
                     <div key={idx} className="bg-gradient-to-r from-orange-500/20 to-rose-500/20 border-2 border-orange-500/50 rounded-xl p-6 flex items-center gap-4 backdrop-blur-sm">
                        <Avatar name={impostor.playerName} size={64} />
                        <div className="flex-1">
                           <p className="text-white text-xl font-bold">{impostor.playerName}</p>
                           <p className="text-orange-400 text-sm uppercase tracking-wider mt-1">{impostorLabel}</p>
                        </div>
                        <AlertCircle className="w-8 h-8 text-orange-400" />
                     </div>
                  ))}
               </div>

               <div className="space-y-3">
                  <Button onClick={onPlayAgain} className="w-full">
                     {playAgainText}
                  </Button>
                  <Button onClick={onBackToLobby} variant="secondary" className="w-full">
                     {backToLobbyText}
                  </Button>
               </div>
            </Card>
         </div>
      </div>
   );
});