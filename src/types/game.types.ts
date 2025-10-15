export type Language = 'ru' | 'en'

export type GameMode = 'standard' | 'special'

export interface SetupSettings {
   gameMode: GameMode
   numPlayers: number
   numImpostors: number
   playerNames: string[]
   selectedThemes: string[]
}

export interface WordEntry {
   word: string
   hint: string
   special: string
}

export interface GameCard {
   playerName: string
   isImpostor: boolean
   word: string
   hint: string
}

export interface GameState {
   cards: GameCard[]
   gameMode: GameMode
}