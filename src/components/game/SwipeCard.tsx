import React from 'react';
import { ArrowUp, EyeOff } from 'lucide-react';

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
         className={`absolute inset-0 flex min-h-full flex-col items-center justify-center rounded-[28px] border border-white/10 bg-neutral-950/86 p-8 text-center backdrop-blur-2xl transition-all duration-300 ${
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
            <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-white/[0.07] ring-1 ring-white/10">
               <EyeOff className="h-11 w-11 text-stone-400" />
            </div>
            <ArrowUp className="mx-auto mb-4 h-9 w-9 animate-bounce text-lime-300" />
            <p className="text-xl font-bold leading-7 text-stone-100">{swipeUpText}</p>
         </div>
      </div>
   );
});
