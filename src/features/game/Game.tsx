import React, { useState, useEffect } from 'react'
import { ChevronRight, Lock, ArrowUp, Skull, Sparkles, Eye } from 'lucide-react'
import type { GameCard, Language } from '../../types/game'
import { texts } from '../../data/texts'
import { Avatar } from '../../components/common/Avatar'
import { useSwipe } from '../../hooks/useSwipe'

interface Props {
  language: Language
  initialState: { cards: GameCard[]; gameMode?: 'standard' | 'special' }
  goToLobby: () => void
}

export default function Game({ language, initialState, goToLobby }: Props) {
  const t = texts[language]
  const [cards] = useState<GameCard[]>(initialState.cards)
  const [gameMode] = useState<'standard' | 'special'>(initialState.gameMode || 'standard')
  const [currentCard, setCurrentCard] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showImpostors, setShowImpostors] = useState(false)

  const { swipeOffset, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown } = useSwipe(revealed, setRevealed)

  const card = cards[currentCard]
  const progress = ((currentCard + 1) / cards.length) * 100
  const impostors = cards.filter(c => c.isImpostor)

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setRevealed(false)
    }
  }

  const resetGame = () => {
    setRevealed(false)
    setCurrentCard(0)
    setShowImpostors(false)
    goToLobby()
  }

  if (showImpostors) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Skull className="w-12 h-12 text-red-400" />
                <h2 className="text-3xl font-bold text-red-400">{t.impostorsReveal}</h2>
                <Skull className="w-12 h-12 text-red-400" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {impostors.map((impostor, idx) => (
                <div key={idx} className="bg-red-500/20 border-2 border-red-500 rounded-xl p-6 flex items-center gap-4">
                  <Avatar name={impostor.playerName} size={64} />
                  <div className="flex-1">
                    <p className="text-white text-xl font-bold">{impostor.playerName}</p>
                    <p className="text-red-400 text-sm uppercase tracking-wider mt-1">{t.impostor}</p>
                  </div>
                  <Skull className="w-8 h-8 text-red-400" />
                </div>
              ))}
            </div>

            <button
              onClick={resetGame}
              className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg"
            >
              {t.backToLobby}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-red-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center">
            <span className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
              {currentCard + 1} / {cards.length}
            </span>
            <h2 className="text-3xl font-bold text-white mb-1">{card.playerName}</h2>
            <p className="text-slate-400 text-sm">{t.yourTurn}</p>
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden select-none">
          <div className="bg-slate-800 rounded-3xl p-8">
            <div className="text-center space-y-6">
              <div className="mb-6 flex justify-center">
                <Avatar name={card.playerName} size={128} />
              </div>

              {gameMode === 'standard' && card.isImpostor ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Skull className="w-8 h-8 text-red-400" />
                    <h3 className="text-3xl font-bold text-red-400">{t.impostor}</h3>
                    <Skull className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-6">
                    <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider">{t.hint}</p>
                    <p className="text-yellow-400 text-2xl font-bold">{card.hint}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                    <p className="text-slate-300 text-xl font-semibold uppercase tracking-wider">{t.word}</p>
                    <Sparkles className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-8">
                    <h3 className="text-4xl font-bold text-white">{card.word}</h3>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-700">
                <p className="text-slate-500 text-sm uppercase tracking-widest mb-1">{t.player}</p>
                <p className="text-white text-2xl font-bold">{card.playerName}</p>
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-0 bg-slate-800 rounded-3xl min-h-full flex flex-col justify-center items-center p-8 transition-all duration-300 ${
              !revealed ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
            }`}
            onTouchStart={handleTouchStart as any}
            onTouchMove={handleTouchMove as any}
            onTouchEnd={handleTouchEnd as any}
            onMouseDown={handleMouseDown as any}
            style={{
              transform: `translateY(${revealed ? -500 : -swipeOffset}px) scale(${1 - swipeOffset / 2000})`,
              opacity: revealed ? 0 : Math.max(0.3, 1 - swipeOffset / 300),
              transition: revealed ? 'all 0.5s ease-out' : 'none'
            }}
          >
            <div className="text-center">
              <Lock className="w-20 h-20 text-slate-600 mb-6 mx-auto" />
              <ArrowUp className="w-10 h-10 text-red-400 mx-auto mb-4 animate-bounce" />
              <p className="text-xl font-semibold text-slate-300">{t.swipeUp}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {currentCard < cards.length - 1 ? (
            <button
              onClick={nextCard}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-2xl transition shadow-lg flex items-center justify-center gap-2"
            >
              {t.nextCard}
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setShowImpostors(true)}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {t.revealImpostors}
            </button>
          )}

          <button
            onClick={goToLobby}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 px-6 rounded-2xl transition"
          >
            {t.back}
          </button>
        </div>
      </div>
    </div>
  )
}