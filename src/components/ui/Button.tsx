import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'primary' | 'secondary' | 'danger'
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
   const baseStyles = 'font-medium rounded-2xl transition-all';
  
   const variantStyles = {
      primary: 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'bg-slate-700/50 hover:bg-slate-700 text-white border border-slate-600/50',
      danger: 'bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
   };
  
   const sizeStyles = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-4 px-6',
      lg: 'py-5 px-8 text-lg'
   };
  
   const disabledStyles = 'disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed disabled:scale-100';
  
   return (
      <button
         className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
});