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
      <>
         <button
            onClick={onBack}
            className="mb-5 flex h-11 items-center gap-2 rounded-2xl px-1 text-stone-300 transition hover:text-white"
         >
            <ArrowLeft className="w-5 h-5" />
            {backText}
         </button>

         <div className="mb-6">
            <h2 className="text-3xl font-black tracking-normal text-stone-50">
               {title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">{subtitle}</p>
         </div>
      </>
   );
};
