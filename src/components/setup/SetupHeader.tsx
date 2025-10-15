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
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors font-medium"
         >
            <ArrowLeft className="w-5 h-5" />
            {backText}
         </button>

         <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent mb-2">
               {title}
            </h2>
            <p className="text-slate-400 text-sm">{subtitle}</p>
         </div>
      </>
   );
};