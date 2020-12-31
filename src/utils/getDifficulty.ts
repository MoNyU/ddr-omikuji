const DIFFICULTY = [
  ["習", "#36efff"],
  ["楽", "#ffc300"],
  ["踊", "#f53f57"],
  ["激", "#3aff25"],
  ["鬼", "#ff42ff"],
];

export const getDifficulty = (mode: "sp" | "dp", difficulty: number) => [
  ...DIFFICULTY[difficulty + +(mode === "dp")],
  difficulty,
];
