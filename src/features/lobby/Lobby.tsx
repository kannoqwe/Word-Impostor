import React, { useEffect } from 'react'
import { Skull, Play, Lock } from 'lucide-react'
import { texts } from '../../data/texts'
import type { Language } from '../../types/game'

interface Props {
  language: Language
  setLanguage: (l: Language) => void
  goToSetup: () => void
}

export default function Lobby({ language, setLanguage, goToSetup }: Props) {
  const t = texts[language]
  
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('spyGameLanguage') as Language
      if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error('Error loading language:', error)
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    try {
      localStorage.setItem('spyGameLanguage', lang)
    } catch (error) {
      console.error('Error saving language:', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        <div className="mb-12">
          <Skull className="w-24 h-24 mx-auto text-red-400 mb-6" />
          <h1 className="text-6xl font-bold text-white mb-3">{t.title}</h1>
          <p className="text-slate-400 text-lg">{t.subtitle}</p>
        </div>

        <div className="space-y-4 mb-8">
          <button
            onClick={goToSetup}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5 inline-block mr-2" />
            {t.offline}
          </button>

          <div className="relative">
            <button
              disabled
              className="w-full bg-slate-800 text-slate-600 font-semibold py-5 px-6 rounded-2xl cursor-not-allowed"
            >
              <Lock className="w-5 h-5 inline-block mr-2" />
              {t.online}
            </button>
            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              {t.comingSoon}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => handleLanguageChange('ru')}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              language === 'ru' 
                ? 'bg-red-500 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            RU
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              language === 'en' 
                ? 'bg-red-500 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            EN
          </button>
        </div>

        <footer className="text-slate-500 text-xs text-center mt-4">
          MIT License © kannoqwe
        </footer>
      </div>
    </div>
  )
}