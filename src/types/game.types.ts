export type Language = 'ru' | 'en'

export type GameMode = 'standard' | 'special'

export interface SetupSettings {
   gameMode: GameMode
   numPlayers: number
   numImpostors: number
   playerNames: string[]
   selectedThemes: string[]
   impostorsKnowEachOther: boolean
}

export interface WordEntry {
   word: string
   hints: string[]
   special: string
}

export interface GameCard {
   playerName: string
   isImpostor: boolean
   word: string
   hint: string
   impostorNames?: string[]
}

export interface GameState {
   cards: GameCard[]
   gameMode: GameMode
}