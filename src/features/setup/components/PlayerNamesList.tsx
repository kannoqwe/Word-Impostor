import React from 'react';
import { Input } from '../../../shared/ui/Input';

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
      <div className="grid gap-3 sm:grid-cols-2">
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
