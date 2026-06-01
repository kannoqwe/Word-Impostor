import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
   size?: 'sm' | 'md' | 'lg'
   children: React.ReactNode
}

export const Button = React.memo<ButtonProps>(({ 
   variant = 'primary', 
   size = 'md',
   className = '',
   children,
   ...props 
}) => {
   const baseStyles = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100';
  
   const variantStyles = {
      primary: 'bg-lime-300 text-neutral-950 shadow-[0_18px_45px_rgba(132,204,22,0.22)] hover:bg-lime-200',
      secondary: 'bg-white/8 text-stone-100 ring-1 ring-white/12 hover:bg-white/12',
      danger: 'bg-rose-500 text-white shadow-[0_18px_45px_rgba(244,63,94,0.24)] hover:bg-rose-400',
      ghost: 'bg-transparent text-stone-300 hover:bg-white/8'
   };
  
   const sizeStyles = {
      sm: 'min-h-10 px-4 text-sm',
      md: 'px-5 py-3',
      lg: 'min-h-14 px-6 py-4 text-lg'
   };
  
   return (
      <button
         className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
});
