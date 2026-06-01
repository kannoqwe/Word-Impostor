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
      setRevealed,
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
      <main className="app-shell game-shell">
         <div className="phone-frame flex h-full min-h-0 flex-col pb-20">
            <GameProgress
               progress={progress}
               currentCard={currentCard}
               totalCards={cards.length}
               playerName={card.playerName}
               yourTurnText={t.yourTurn}
            />

            <div className="flex min-h-0 flex-1 items-center">
               <GameCardDisplay
                  card={card}
                  gameMode={gameMode}
                  revealed={revealed}
                  resetKey={currentCard}
                  wordLabel={t.word}
                  impostorLabel={t.impostor}
                  hintLabel={t.hint}
                  playerLabel={t.player}
                  swipeUpText={t.swipeUp}
                  onReveal={() => setRevealed(true)}
                  otherImpostorsLabel={t.otherImpostors}
               />
            </div>

            <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-neutral-950/82 px-4 py-3 backdrop-blur">
               <div className="phone-frame">
                  <GameActions
                     isLastCard={currentCard >= cards.length - 1}
                     canContinue={revealed}
                     nextCardText={t.nextCard}
                     startGameText={t.startGame}
                     onNextCard={nextCard}
                     onStartGame={selectStartingPlayer}
                  />
               </div>
            </div>
         </div>
      </main>
   );
});
