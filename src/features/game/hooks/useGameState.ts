import { useState, useCallback, useMemo } from 'react';
import { generateGameCards } from '../../../shared/lib/cardGenerator';
import { assignPlayerAvatars } from '../../../shared/lib/avatarAssignment';
import { selectImpostorsByHistory } from '../../../shared/lib/impostorSelector';
import { shuffleArray } from '../../../shared/lib/shuffleArray';
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage';
import { usePlayerImpostorStats } from './usePlayerImpostorStats';
import type { GameMode, Language } from '../../../shared/types/game.types';

interface UseGameStateProps {
   playerNames: string[];
   numImpostors: number;
   selectedThemes: string[];
   gameMode: GameMode;
   language: Language;
   impostorsKnowEachOther: boolean;
}

export const useGameState = ({
   playerNames,
   numImpostors,
   selectedThemes,
   gameMode,
   language,
   impostorsKnowEachOther,
}: UseGameStateProps) => {
   const { getPlayerStats, updateStatsAfterRound } = usePlayerImpostorStats();
   const [roundNumber, setRoundNumber] = useLocalStorage('currentRound', 0);
   const [playerAvatars] = useState(() => assignPlayerAvatars(playerNames.length));

   const createRoundCards = useCallback(() => {
      const impostorIndices = selectImpostorsByHistory(
         playerNames,
         numImpostors,
         getPlayerStats
      );

      const cards = generateGameCards(
         playerNames,
         impostorIndices,
         selectedThemes,
         gameMode,
         language,
         impostorsKnowEachOther
      );

      const cardsWithAvatars = cards.map((card, index) => ({
         ...card,
         avatarId: playerAvatars[index]?.id,
         avatarSrc: playerAvatars[index]?.src,
      }));

      return shuffleArray(cardsWithAvatars);
   }, [playerNames, numImpostors, selectedThemes, gameMode, language, impostorsKnowEachOther, getPlayerStats, playerAvatars]);

   const [cards, setCards] = useState(createRoundCards);
   const [currentCard, setCurrentCard] = useState(0);
   const [revealed, setRevealed] = useState(false);
   const [showImpostors, setShowImpostors] = useState(false);
   const [showStartPlayer, setShowStartPlayer] = useState(false);
   const [startingPlayer, setStartingPlayer] = useState(cards[0] ?? null);

   const card = cards[currentCard];
   const progress = ((currentCard + 1) / cards.length) * 100;
   const impostors = useMemo(() => cards.filter((c) => c.isImpostor), [cards]);

   const nextCard = useCallback(() => {
      if (currentCard < cards.length - 1) {
         setCurrentCard((prev) => prev + 1);
         setRevealed(false);
      }
   }, [currentCard, cards.length]);

   const selectStartingPlayer = useCallback(() => {
      const randomPlayer = cards[Math.floor(Math.random() * cards.length)];
      setStartingPlayer(randomPlayer);
      setShowStartPlayer(true);
   }, [cards]);

   const revealImpostors = useCallback(() => {
      const impostorNames = impostors.map((i) => i.playerName);
      updateStatsAfterRound(playerNames, impostorNames, roundNumber);
      setRoundNumber(roundNumber + 1);
      setShowImpostors(true);
   }, [impostors, playerNames, roundNumber, updateStatsAfterRound, setRoundNumber]);

   const startNewRound = useCallback(() => {
      const nextCards = createRoundCards();

      setCards(nextCards);
      setRevealed(false);
      setCurrentCard(0);
      setShowImpostors(false);
      setShowStartPlayer(false);
      setStartingPlayer(nextCards[0] ?? null);
   }, [createRoundCards]);

   return {
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
   };
};
