import React from 'react';

interface CardProps {
   children: React.ReactNode
   className?: string
}

export const Card = React.memo<CardProps>(({ children, className = '' }) => {
   return (
      <div className={`rounded-2xl border border-white/10 bg-neutral-900/82 p-5 shadow-2xl shadow-black/35 backdrop-blur ${className}`}>
         {children}
      </div>
   );
});
