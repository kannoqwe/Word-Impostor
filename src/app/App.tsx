import React, { useState } from 'react'
import Lobby from '../features/lobby/Lobby'
import Setup from '../features/setup/Setup'
import Game from '../features/game/Game'
import type { Language } from '../types/game'

export default function App() {
  const [screen, setScreen] = useState<'lobby'|'setup'|'game'>('lobby')
  const [language, setLanguage] = useState<Language>('ru')
  const [gameState, setGameState] = useState<any>(null)

  return (
    <>
      {screen === 'lobby' && (
        <Lobby
          language={language}
          setLanguage={setLanguage}
          goToSetup={() => setScreen('setup')}
        />
      )}
      {screen === 'setup' && (
        <Setup
          language={language}
          setLanguage={setLanguage}
          startGame={(state) => { setGameState(state); setScreen('game') }}
          goBack={() => setScreen('lobby')}
        />
      )}
      {screen === 'game' && gameState && (
        <Game
          language={language}
          initialState={gameState}
          goToLobby={() => { setGameState(null); setScreen('lobby') }}
        />
      )}
    </>
  )
}
