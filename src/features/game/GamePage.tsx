import React from 'react';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { Doodles } from '../../shared/ui/Doodles';
import { GameProgress } from './components/GameProgress';
import { GameCardDisplay } from './components/GameCardDisplay';
import { GameActions } from './components/GameActions';
import { ImpostorReveal } from './components/ImpostorReveal';
import { StartingPlayer } from './components/StartingPlayer';
import { useGameState } from './hooks/useGameState';
import type { Language, GameMode } from '../../shared/types/game.types';

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
            backText={t.back}
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
            subtitle={t.startingPlayerSubtitle}
            revealHint={t.revealImpostorsHint}
            revealImpostorsText={t.revealImpostors}
            backText={t.back}
            onBack={onBackToLobby}
            onRevealImpostors={revealImpostors}
         />
      );
   }

   return (
      <main className="app-shell game-shell">
         <Doodles />
         <div className="phone-frame game-frame flex h-full min-h-0 flex-col pb-24">
            <GameProgress
               progress={progress}
               currentCard={currentCard}
               totalCards={cards.length}
               playerName={card.playerName}
               avatarId={card.avatarId}
               avatarSrc={card.avatarSrc}
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

            <div className="action-dock">
               <div className="phone-frame game-frame">
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
