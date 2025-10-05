export type Language = 'ru' | 'en';

export interface GameCard {
  playerName: string;
  isImpostor: boolean;
  word: string;
  hint: string;
}

export interface SetupState {
  gamemode: 'classic' | 'new';
  numPlayers: number;
  numImpostors: number;
  playerNames: string[];
  selectedThemes: string[];
}
