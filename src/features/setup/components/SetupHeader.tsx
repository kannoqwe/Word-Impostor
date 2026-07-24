import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SetupHeaderProps {
   title: string;
   subtitle: string;
   backText: string;
   onBack: () => void;
}

export const SetupHeader: React.FC<SetupHeaderProps> = ({
   title,
   subtitle,
   backText,
   onBack
}) => {
   return (
      <header className="relative mb-8 text-center">
         <button
            onClick={onBack}
            className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border-[3px] border-[#1b1b1c] bg-white px-4 text-sm font-extrabold text-[#1b1b1c] shadow-[0_4px_0_#e9c400] transition active:translate-y-1 active:shadow-none md:absolute md:left-0 md:top-0 md:mb-0 lg:fixed lg:left-10 lg:top-8"
         >
            <ArrowLeft className="h-5 w-5" strokeWidth={3} />
            {backText}
         </button>

         <div className="mx-auto max-w-3xl">
            <h1 className="display-font text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1b1b1c] sm:text-5xl">
               {title}
            </h1>
            <p className="mt-2 text-sm font-medium leading-6 text-[#5c4037] sm:text-base">{subtitle}</p>
         </div>
      </header>
   );
};
