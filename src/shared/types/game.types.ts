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

export interface PlayerAvatar {
   id: string
   src: string
}

export interface GameCard {
   playerName: string
   avatarId?: string
   avatarSrc?: string
   isImpostor: boolean
   word: string
   hint: string
   impostorNames?: string[]
}

export interface GameConfig {
   gameMode: GameMode
   playerNames: string[]
   numImpostors: number
   selectedThemes: string[]
   impostorsKnowEachOther: boolean
}
