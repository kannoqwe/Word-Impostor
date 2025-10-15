import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.memo<InputProps>(({ className = '', ...props }) => {
   return (
      <input
         className={`w-full bg-slate-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition border border-slate-600/30 ${className}`}
         {...props}
      />
   );
});