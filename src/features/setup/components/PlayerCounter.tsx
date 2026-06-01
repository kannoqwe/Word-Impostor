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
   const textColor = variant === 'danger' ? 'text-rose-300' : 'text-lime-200';
  
   return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
         <label className="block text-stone-400 mb-3 text-center text-sm font-medium">{label}</label>
         <div className="flex items-center gap-3">
            <button
               onClick={onDecrement}
               className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition hover:bg-white/15 active:scale-95"
            >
               <Minus className="w-4 h-4 text-white" />
            </button>
            <span className={`text-4xl font-bold ${textColor} flex-1 text-center`}>{value}</span>
            <button
               onClick={onIncrement}
               className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition hover:bg-white/15 active:scale-95"
            >
               <Plus className="w-4 h-4 text-white" />
            </button>
         </div>
      </div>
   );
});
