import React from 'react';

interface ThemeSelectorProps {
   themes: Record<string, string>
   selectedThemes: string[]
   onToggle: (theme: string) => void
}

export const ThemeSelector = React.memo<ThemeSelectorProps>(({
   themes,
   selectedThemes,
   onToggle
}) => {
   return (
      <div className="grid grid-cols-2 gap-3">
         {Object.entries(themes).map(([key, label]) => (
            <button
               key={key}
               onClick={() => onToggle(key)}
               className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  selectedThemes.includes(key)
                     ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md'
                     : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600/50'
               }`}
            >
               {label}
            </button>
         ))}
      </div>
   );
});