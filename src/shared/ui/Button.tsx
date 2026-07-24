import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
   size?: 'sm' | 'md' | 'lg'
   children: React.ReactNode
}

const BASE_STYLES = 'display-font inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[3px] border-[#1b1b1c] font-extrabold transition-[transform,box-shadow,background-color] duration-150 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#00ccf9] active:translate-y-1 disabled:cursor-not-allowed disabled:active:translate-y-0';

const VARIANT_STYLES = {
   primary: 'bg-[#d43f00] text-white shadow-[0_5px_0_#852400,0_8px_0_#1b1b1c] hover:bg-[#aa3000] active:shadow-[0_1px_0_#852400,0_4px_0_#1b1b1c] disabled:bg-[#dcd9da] disabled:text-[#916f65] disabled:shadow-[0_3px_0_#916f65,0_6px_0_#1b1b1c]',
   secondary: 'bg-white text-[#1b1b1c] shadow-[0_5px_0_#00ccf9,0_8px_0_#1b1b1c] hover:bg-[#f0edee] active:shadow-[0_1px_0_#00ccf9,0_4px_0_#1b1b1c] disabled:bg-[#e5e2e3] disabled:text-[#916f65]',
   danger: 'bg-[#ba1a1a] text-white shadow-[0_5px_0_#93000a,0_8px_0_#1b1b1c] hover:bg-[#93000a] active:shadow-[0_1px_0_#93000a,0_4px_0_#1b1b1c] disabled:bg-[#dcd9da] disabled:text-[#916f65]',
   ghost: 'border-transparent bg-transparent text-[#1b1b1c] shadow-none hover:bg-[#e5e2e3] active:shadow-none'
} as const;

const SIZE_STYLES = {
   sm: 'min-h-10 px-4 text-sm',
   md: 'px-5 py-3 text-[15px]',
   lg: 'min-h-14 px-7 py-4 text-lg'
} as const;

export const Button = React.memo<ButtonProps>(({
   variant = 'primary',
   size = 'md',
   className = '',
   children,
   ...props
}) => {
   return (
      <button
         className={`${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
});
