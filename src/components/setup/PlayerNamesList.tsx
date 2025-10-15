import React from 'react';
import { Input } from '../ui/Input';

interface PlayerNamesListProps {
   playerNames: string[]
   onNameChange: (index: number, name: string) => void
   placeholder: string
}

export const PlayerNamesList = React.memo<PlayerNamesListProps>(({
   playerNames,
   onNameChange,
   placeholder
}) => {
   return (
      <div className="space-y-2 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
         {playerNames.map((name, idx) => (
            <Input
               key={idx}
               type="text"
               value={name}
               onChange={(e) => onNameChange(idx, e.target.value)}
               placeholder={`${placeholder} ${idx + 1}`}
            />
         ))}
      </div>
   );
});