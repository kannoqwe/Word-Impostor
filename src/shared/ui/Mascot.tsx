import React from 'react';
import mascotImage from '../../assets/impostor-mascot.png';

interface MascotProps {
   size?: 'sm' | 'md' | 'lg';
   className?: string;
}

const sizeStyles: Record<NonNullable<MascotProps['size']>, string> = {
   sm: 'h-20 w-20',
   md: 'h-28 w-28',
   lg: 'h-36 w-36 sm:h-40 sm:w-40',
};

export const Mascot = React.memo<MascotProps>(({ size = 'md', className = '' }) => (
   <div
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full border-4 border-[#1b1b1c] bg-[#b7eaff]
          shadow-[0_6px_0_#1b1b1c] ${sizeStyles[size]} ${className}`}
      aria-hidden="true"
   >
      <img
         src={mascotImage}
         alt=""
         className="h-[112%] w-[112%] max-w-none object-contain"
         draggable={false}
      />
   </div>
));
