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
   const textColor = variant === 'danger' ? 'text-orange-400' : 'text-white';
  
   return (
      <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
         <label className="block text-slate-300 mb-3 font-medium text-sm text-center">{label}</label>
         <div className="flex items-center gap-3">
            <button
               onClick={onDecrement}
               className="bg-cyan-600/80 hover:bg-cyan-600 p-2 rounded-lg transition"
            >
               <Minus className="w-4 h-4 text-white" />
            </button>
            <span className={`text-4xl font-bold ${textColor} flex-1 text-center`}>{value}</span>
            <button
               onClick={onIncrement}
               className="bg-sky-600/80 hover:bg-sky-600 p-2 rounded-lg transition"
            >
               <Plus className="w-4 h-4 text-white" />
            </button>
         </div>
      </div>
   );
});