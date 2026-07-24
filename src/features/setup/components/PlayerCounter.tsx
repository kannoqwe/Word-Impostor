import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface PlayerCounterProps {
   label: string
   value: number
   onIncrement: () => void
   onDecrement: () => void
   variant?: 'default' | 'danger'
}

export const PlayerCounter = React.memo<PlayerCounterProps>(({
   label,
   value,
   onIncrement,
   onDecrement,
   variant = 'default'
}) => {
   const accentColor = variant === 'danger' ? 'text-[#aa3000]' : 'text-[#00677f]';
  
   return (
      <div>
         <label className="display-font mb-2 block text-center text-xs text-[#1b1b1c] sm:text-sm">{label}</label>
         <div className="flex items-center gap-3 rounded-full border-[3px] border-[#1b1b1c] bg-white p-1.5 shadow-[0_4px_0_#00ccf9]">
            <button
               onClick={onDecrement}
               aria-label={`${label}: decrease`}
               className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#1b1b1c] bg-white transition hover:bg-[#f0edee] active:scale-90"
            >
               <Minus className="h-5 w-5 text-[#1b1b1c]" strokeWidth={3} />
            </button>
            <span className={`display-font flex-1 text-center text-4xl font-extrabold ${accentColor}`}>{value}</span>
            <button
               onClick={onIncrement}
               aria-label={`${label}: increase`}
               className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#1b1b1c] bg-white transition hover:bg-[#f0edee] active:scale-90"
            >
               <Plus className="h-5 w-5 text-[#1b1b1c]" strokeWidth={3} />
            </button>
         </div>
      </div>
   );
});
