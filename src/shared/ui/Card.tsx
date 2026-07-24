import React from 'react';

interface CardProps {
   children: React.ReactNode
   className?: string
}

export const Card = React.memo<CardProps>(({ children, className = '' }) => {
   return (
      <div className={`cartoon-panel p-5 ${className}`}>
         {children}
      </div>
   );
});
