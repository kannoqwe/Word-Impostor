import React from 'react';

interface CardProps {
   children: React.ReactNode
   className?: string
}

export const Card = React.memo<CardProps>(({ children, className = '' }) => {
   return (
      <div className={`bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700/50 ${className}`}>
         {children}
      </div>
   );
});