export const generateGrid = (groupSize, itemCount) => {
  const groups = [];
  const numGroups = itemCount / groupSize;

  for (let i = 0; i < numGroups; i++) {
    const group = Array.from({ length: groupSize }, (_, j) => ({
      text: `Word ${i}-${j}`,
      group: i,
    }));
    groups.push(...group);
  }

  return groups.sort(() => Math.random() - 0.5); // Shuffle words
};
