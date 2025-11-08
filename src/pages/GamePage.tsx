import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useGameState } from '../hooks/useGameState';
import { GameProgress } from '../components/game/GameProgress';
import { GameCardDisplay } from '../components/game/GameCardDisplay';
import { GameActions } from '../components/game/GameActions';
import { ImpostorReveal } from '../components/game/ImpostorReveal';
import { StartingPlayer } from '../components/game/StartingPlayer';
import type { Language, GameMode } from '../types/game.types';

interface GamePageProps {
   language: Language;
   gameMode: GameMode;
   playerNames: string[];
   numImpostors: number;
   selectedThemes: string[];
   impostorsKnowEachOther: boolean;
   onBackToLobby: () => void;
}

export const GamePage = React.memo<GamePageProps>(function GamePageComponent({
   language,
   gameMode,
   playerNames,
   numImpostors,
   selectedThemes,
   impostorsKnowEachOther,
   onBackToLobby,
}) {
   const { t } = useTranslation(language);
  
   const {
      cards,
      currentCard,
      revealed,
      showImpostors,
      showStartPlayer,
      startingPlayer,
      card,
      progress,
      impostors,
      nextCard,
      selectStartingPlayer,
      revealImpostors,
      startNewRound,
   } = useGameState({
      playerNames,
      numImpostors,
      selectedThemes,
      gameMode,
      language,
      impostorsKnowEachOther,
   });

   if (showImpostors) {
      return (
         <ImpostorReveal
            impostors={impostors}
            title={t.impostorsReveal}
            impostorLabel={t.impostor}
            playAgainText={t.playAgain}
            backToLobbyText={t.backToLobby}
            onPlayAgain={startNewRound}
            onBackToLobby={onBackToLobby}
         />
      );
   }

   if (showStartPlayer && startingPlayer) {
      return (
         <StartingPlayer
            startingPlayer={startingPlayer}
            title={t.playerStart}
            revealImpostorsText={t.revealImpostors}
            onRevealImpostors={revealImpostors}
         />
      );
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
         </div>

         <div className="w-full max-w-md relative z-10">
            <GameProgress
               progress={progress}
               currentCard={currentCard}
               totalCards={cards.length}
               playerName={card.playerName}
               yourTurnText={t.yourTurn}
            />

            <GameCardDisplay
               card={card}
               gameMode={gameMode}
               revealed={revealed}
               wordLabel={t.word}
               impostorLabel={t.impostor}
               hintLabel={t.hint}
               playerLabel={t.player}
               swipeUpText={t.swipeUp}
               otherImpostorsLabel={t.otherImpostors}
            />

            <GameActions
               isLastCard={currentCard >= cards.length - 1}
               nextCardText={t.nextCard}
               startGameText={t.startGame}
               onNextCard={nextCard}
               onStartGame={selectStartingPlayer}
            />
         </div>
      </div>
   );
});