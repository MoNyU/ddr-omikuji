import { SongData } from "@/data/songs";

type Options = {
  readonly mode: "sp" | "dp";
  readonly difficulty: number;
  readonly sa: SongData["sa"];
};

const DIFFICULTIES = [
  { name: "習", color: "#36efff" },
  { name: "楽", color: "#ffc300" },
  { name: "踊", color: "#f53f57" },
  { name: "激", color: "#3aff25" },
  { name: "鬼", color: "#ff42ff" },
] as const;

export const getDifficultyInfo = ({ mode, difficulty, sa }: Options) => {
  const levelIndex = mode === "sp" ? difficulty : difficulty + 1;
  const { name, color } = DIFFICULTIES[levelIndex];

  const hasShockArrow: boolean = Array.isArray(sa)
    ? sa[levelIndex]
    : name === "鬼" && sa;

  return { name, color, hasShockArrow };
};
