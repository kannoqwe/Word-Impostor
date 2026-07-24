import React from 'react';
import {
   Briefcase,
   Cat,
   Clapperboard,
   Gamepad2,
   Home,
   Orbit,
   Plane,
   Smile,
   UtensilsCrossed,
   Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ThemeSelectorProps {
   themes: Record<string, string>
   selectedThemes: string[]
   onToggle: (theme: string) => void
}

const THEME_ICONS: Record<string, LucideIcon> = {
   food_and_drinks: UtensilsCrossed,
   animals_and_nature: Cat,
   people_and_jobs: Briefcase,
   home_and_objects: Home,
   transport_and_places: Plane,
   fun_and_games: Gamepad2,
   technology_and_tools: Wrench,
   time_and_space: Orbit,
   colors_and_shapes: Clapperboard,
   feelings_and_actions: Smile,
};

export const ThemeSelector = React.memo<ThemeSelectorProps>(({
   themes,
   selectedThemes,
   onToggle
}) => {
   return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
         {Object.entries(themes).map(([key, label]) => {
            const Icon = THEME_ICONS[key] ?? Gamepad2;
            const isSelected = selectedThemes.includes(key);

            return (
               <button
                  key={key}
                  onClick={() => onToggle(key)}
                  aria-pressed={isSelected}
                  className={`display-font flex min-h-12 items-center gap-3 rounded-full border-[3px] border-[#1b1b1c] px-4 py-2 text-left text-xs leading-tight transition-[transform,box-shadow,background-color] active:translate-y-0.5 sm:text-sm ${
                     isSelected
                        ? 'bg-[#ffe170] text-[#1b1b1c] shadow-[0_4px_0_#c9a900]'
                        : 'bg-white text-[#5c4037] shadow-[0_4px_0_#00ccf9] hover:bg-[#f0edee]'
                  }`}
               >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-[#1b1b1c] ${isSelected ? 'bg-white' : 'bg-[#b7eaff]'}`}>
                     <Icon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{label}</span>
               </button>
            );
         })}
      </div>
   );
});
