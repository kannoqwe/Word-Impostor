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
      <div className="grid grid-cols-2 gap-2">
         {Object.entries(themes).map(([key, label]) => (
            <button
               key={key}
               onClick={() => onToggle(key)}
               className={`min-h-11 rounded-2xl px-3 py-2 text-sm font-semibold leading-tight transition ${
                  selectedThemes.includes(key)
                     ? 'bg-lime-300 text-neutral-950'
                     : 'border border-white/10 bg-white/[0.06] text-stone-300 hover:bg-white/10'
               }`}
            >
               {label}
            </button>
         ))}
      </div>
   );
});
