import React from 'react';
import { Lock, ArrowUp } from 'lucide-react';

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
         className={`absolute inset-0 bg-slate-800/80 backdrop-blur-3xl rounded-3xl min-h-full flex flex-col justify-center items-center p-8 transition-all duration-300 border border-slate-700/50 ${
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
         <div className="text-center">
            <Lock className="w-20 h-20 text-slate-600 mb-6 mx-auto" />
            <ArrowUp className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-bounce" />
            <p className="text-xl font-medium text-slate-300">{swipeUpText}</p>
         </div>
      </div>
   );
});