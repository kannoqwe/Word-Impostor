import React, { useState } from 'react'
import { ArrowLeft, Crown, Minus, Plus, Play } from 'lucide-react'
import { texts } from '../../data/texts'
import { words } from '../../data/words'
import type { Language } from '../../types/game'
import type { SetupState } from '../../types/game'

interface Props {
  language: Language
  setLanguage: (l: Language) => void
  startGame: (state: any) => void
  goBack: () => void
}

export default function Setup({ language, setLanguage, startGame, goBack }: Props) {
  const t = texts[language]
  const [gameMode, setGameMode] = useState<'standard' | 'special'>('standard')
  const [numPlayers, setNumPlayers] = useState(4)
  const [numImpostors, setNumImpostors] = useState(1)
  const [playerNames, setPlayerNames] = useState<string[]>(['', '', '', ''])
  const [selectedThemes, setSelectedThemes] = useState<string[]>(Object.keys(texts[language].themes))

  const updatePlayerCount = (count: number) => {
    const newCount = Math.max(3, Math.min(10, count))
    setNumPlayers(newCount)
    setPlayerNames(prev => {
      const newNames = [...prev]
      while (newNames.length < newCount) newNames.push('')
      return newNames.slice(0, newCount)
    })
    setNumImpostors(Math.min(numImpostors, Math.floor(newCount / 2)))
  }

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev =>
      prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]
    )
  }

  const start = () => {
    if (selectedThemes.length === 0) return
    
    const allWords = selectedThemes.flatMap(theme => words[language][theme])
    const chosenWordObj = allWords[Math.floor(Math.random() * allWords.length)]

    const impostorIndices: number[] = []
    while (impostorIndices.length < numImpostors) {
      const idx = Math.floor(Math.random() * numPlayers)
      if (!impostorIndices.includes(idx)) impostorIndices.push(idx)
    }

    const gameCards = playerNames.map((name, idx) => {
      const isImpostor = impostorIndices.includes(idx)
      return {
        playerName: name || `${t.playerName} ${idx + 1}`,
        isImpostor: isImpostor,
        word: gameMode === 'special' && isImpostor ? chosenWordObj.special : chosenWordObj.word,
        hint: chosenWordObj.hint,
      }
    })

    startGame({ cards: gameCards, gameMode: gameMode })
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-red-400 hover:text-red-300 mb-6 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.back}
        </button>

        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <Crown className="w-12 h-12 mx-auto text-yellow-400 mb-3" />
            <h2 className="text-3xl font-bold text-white">{t.offline}</h2>
          </div>

          {/* Game Mode Selection */}
          <div className="mb-6">
            <label className="block text-slate-300 mb-3 font-semibold text-center">{t.gameMode}</label>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              <button
                onClick={() => setGameMode('standard')}
                className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  gameMode === 'standard'
                    ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/30 scale-105'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {t.classicMode}
              </button>
              <button
                onClick={() => setGameMode('special')}
                className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  gameMode === 'special'
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30 scale-105'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {t.newMode}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Settings */}
            <div className="space-y-6">
              {/* Players */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <label className="block text-slate-300 mb-3 font-semibold text-sm text-center">{t.numPlayers}</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updatePlayerCount(numPlayers - 1)}
                      className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-4xl font-bold text-white flex-1 text-center">{numPlayers}</span>
                    <button
                      onClick={() => updatePlayerCount(numPlayers + 1)}
                      className="bg-violet-500 hover:bg-violet-600 p-2 rounded-lg transition"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-4">
                  <label className="block text-slate-300 mb-3 font-semibold text-sm text-center">{t.numImpostors}</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setNumImpostors(Math.max(1, numImpostors - 1))}
                      className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-4xl font-bold text-red-400 flex-1 text-center">{numImpostors}</span>
                    <button
                      onClick={() => setNumImpostors(Math.min(Math.floor(numPlayers / 2), numImpostors + 1))}
                      className="bg-violet-500 hover:bg-violet-600 p-2 rounded-lg transition"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Themes */}
              <div>
                <label className="block text-slate-300 mb-3 font-semibold">{t.selectThemes}</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(t.themes).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => toggleTheme(theme)}
                      className={`py-3 px-4 rounded-xl font-semibold transition ${
                        selectedThemes.includes(theme)
                          ? 'bg-violet-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {/* @ts-ignore */}
                      {t.themes[theme]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Player Names */}
            <div>
              <label className="block text-slate-300 mb-3 font-semibold">{t.playerName}</label>
              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                {playerNames.map((name, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      const newNames = [...playerNames]
                      newNames[idx] = e.target.value
                      setPlayerNames(newNames)
                    }}
                    placeholder={`${t.playerName} ${idx + 1}`}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={start}
            disabled={selectedThemes.length === 0}
            className="w-full mt-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg text-lg"
          >
            <Play className="w-6 h-6 inline-block mr-2" />
            {t.startGame}
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.7);
        }
      `}</style>
    </div>
  )
}