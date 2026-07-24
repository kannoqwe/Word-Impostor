import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.memo<InputProps>(({ className = '', ...props }) => {
   return (
      <input
         className={`h-12 w-full rounded-full border-[3px] border-[#1b1b1c] bg-white px-5
             text-base font-medium text-[#1b1b1c] shadow-[0_4px_0_#00ccf9] outline-none transition-[border-color,box-shadow,transform] placeholder:text-[#916f65]
             focus:border-[#aa3000] focus:shadow-[0_4px_0_#d43f00] ${className}`}
         {...props}
      />
   );
});
