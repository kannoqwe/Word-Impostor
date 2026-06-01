export interface PlayerImpostorStats {
   name: string
   roundsSinceImpostor: number
   impostorCount: number
   lastImpostorRound: number | null
}

export interface PlayerSettings {
   name: string
   id: string
}
