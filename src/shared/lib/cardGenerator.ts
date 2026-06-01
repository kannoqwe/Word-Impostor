import type { GameCard, GameMode, Language, WordEntry } from '../types/game.types';
import wordsEn from '../data/words/words_en.json';
import wordsRu from '../data/words/words_ru.json';

const wordsData: Record<Language, Record<string, WordEntry[]>> = {
   en: wordsEn,
   ru: wordsRu
};

export function generateGameCards(
   playerNames: string[],
   impostorIndices: number[],
   selectedThemes: string[],
   gameMode: GameMode,
   language: Language,
   impostorsKnowEachOther: boolean
): GameCard[] {
   const allWords = selectedThemes.flatMap(
      theme => wordsData[language][theme] || []
   );
  
   if (allWords.length === 0) {
      throw new Error('No words available for selected themes');
   }

   const chosenWord = allWords[Math.floor(Math.random() * allWords.length)];
   const usedHintIndices = new Set<number>();
   
   const impostorNames = impostorsKnowEachOther 
      ? impostorIndices.map(idx => playerNames[idx])
      : undefined;

   return playerNames.map((name, index) => {
      const isImpostor = impostorIndices.includes(index);
      
      let hintIndex: number;
      if (chosenWord.hints.length <= 1) {
         hintIndex = 0;
      } else {
         do {
            hintIndex = Math.floor(Math.random() * chosenWord.hints.length);
         } while (usedHintIndices.has(hintIndex) && usedHintIndices.size < chosenWord.hints.length);
         
         usedHintIndices.add(hintIndex);
      }
    
      const card: GameCard = {
         playerName: name,
         isImpostor,
         word: gameMode === 'special' && isImpostor 
            ? chosenWord.special 
            : chosenWord.word,
         hint: chosenWord.hints[hintIndex]
      };

      if (isImpostor && impostorNames && impostorNames.length > 1) {
         card.impostorNames = impostorNames.filter(n => n !== name);
      }

      return card;
   });
}