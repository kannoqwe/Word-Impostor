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
   language: Language
): GameCard[] {
   const allWords = selectedThemes.flatMap(
      theme => wordsData[language][theme] || []
   );
  
   if (allWords.length === 0) {
      throw new Error('No words available for selected themes');
   }

   const chosenWord = allWords[Math.floor(Math.random() * allWords.length)];

   return playerNames.map((name, index) => {
      const isImpostor = impostorIndices.includes(index);
    
      return {
         playerName: name,
         isImpostor,
         word: gameMode === 'special' && isImpostor 
            ? chosenWord.special 
            : chosenWord.word,
         hint: chosenWord.hint
      };
   });
}