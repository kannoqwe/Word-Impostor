export function selectImpostorsWithWeights(
   playerNames: string[],
   numImpostors: number,
   getWeight: (name: string) => number
): number[] {
   if (numImpostors >= playerNames.length) {
      return playerNames.map((_, idx) => idx);
   }

   const playersWithWeights = playerNames.map((name, index) => ({
      index,
      name,
      weight: getWeight(name)
   }));

   // console.log('weights before selection:', playersWithWeights);

   const selectedIndices: number[] = [];
  
   for (let i = 0; i < numImpostors; i++) {
      const remainingPlayers = playersWithWeights.filter(p => !selectedIndices.includes(p.index));
      const totalWeight = remainingPlayers.reduce((sum, p) => sum + p.weight, 0);
    
      let random = Math.random() * totalWeight;
    
      console.log(`Selecting impostor ${i + 1}, total weight: ${totalWeight}, random: ${random}`);
    
      for (const player of remainingPlayers) {
         random -= player.weight;
         if (random <= 0) {
            selectedIndices.push(player.index);
            console.log(`Selected: ${player.name} (index: ${player.index}, weight: ${player.weight})`);
            break;
         }
      }
   }
  
   return selectedIndices;
}