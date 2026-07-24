import React from 'react';
import { ArrowUp, EyeOff } from 'lucide-react';
import { Mascot } from '../../../shared/ui/Mascot';

interface SwipeCardProps {
   revealed: boolean
   swipeOffset: number
   swipeUpText: string
   onTouchStart: (e: React.TouchEvent) => void
   onTouchMove: (e: React.TouchEvent) => void
   onTouchEnd: () => void
   onMouseDown: (e: React.MouseEvent) => void
}

export const SwipeCard = React.memo<SwipeCardProps>(({
   revealed,
   swipeOffset,
   swipeUpText,
   onTouchStart,
   onTouchMove,
   onTouchEnd,
   onMouseDown
}) => {
   return (
      <div
         className={`absolute inset-0 flex min-h-full flex-col items-center justify-center rounded-[32px] border-4 border-[#1b1b1c] bg-white p-8 text-center shadow-[0_7px_0_#00ccf9,0_11px_0_#1b1b1c] ${
            !revealed ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
         }`}
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}
         onMouseDown={onMouseDown}
         style={{
            transform: `translateY(${revealed ? -500 : -swipeOffset}px) scale(${1 - swipeOffset / 2000})`,
            opacity: revealed ? 0 : Math.max(0.3, 1 - swipeOffset / 300),
            transition: revealed ? 'all 0.5s ease-out' : swipeOffset === 0 ? 'all 0.3s ease-out' : 'none',
            touchAction: 'none'
         }}
      >
         <div>
            <Mascot size="lg" className="mx-auto mb-7" />
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-white">
               <EyeOff className="h-14 w-14 text-[#1b1b1c]" strokeWidth={3.1} />
            </div>
            <ArrowUp className="animate-float mx-auto mb-3 h-10 w-10 fill-[#00ccf9] text-[#1b1b1c]" strokeWidth={3.2} />
            <p className="display-font text-xl font-extrabold leading-7 text-[#1b1b1c] sm:text-2xl">{swipeUpText}</p>
         </div>
      </div>
   );
});
