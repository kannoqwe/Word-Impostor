import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface GamePhaseBackButtonProps {
   label: string
   onBack: () => void
}

export const GamePhaseBackButton = React.memo<GamePhaseBackButtonProps>(({
   label,
   onBack
}) => (
   <button
      type="button"
      onClick={onBack}
      className="display-font fixed left-4 top-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border-[3px] border-[#1b1b1c] bg-white px-5 text-sm text-[#1b1b1c] shadow-[0_5px_0_#e9c400,0_8px_0_#1b1b1c] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#e9c400,0_4px_0_#1b1b1c] sm:left-10 sm:top-8 sm:text-base"
   >
      <ArrowLeft className="h-5 w-5" strokeWidth={3} />
      {label}
   </button>
));
