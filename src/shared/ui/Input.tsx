import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.memo<InputProps>(({ className = '', ...props }) => {
   return (
      <input
         className={`h-12 w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-base text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-lime-300/80 focus:ring-4 focus:ring-lime-300/10 ${className}`}
         {...props}
      />
   );
});
