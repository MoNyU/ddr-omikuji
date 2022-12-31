import { SongData } from "@/data/songs";

type Options = {
  readonly mode: "sp" | "dp";
  readonly difficulty: number;
  readonly sa: SongData["sa"];
};

const DIFFICULTIES = [
  { name: "習", color: "cyan" },
  { name: "楽", color: "yellow" },
  { name: "踊", color: "red" },
  { name: "激", color: "green" },
  { name: "鬼", color: "pink" },
] as const;

export const getDifficultyInfo = ({ mode, difficulty, sa }: Options) => {
  const levelIndex = mode === "sp" ? difficulty : difficulty + 1;
  const { name, color } = DIFFICULTIES[levelIndex];

  const hasShockArrow: boolean = Array.isArray(sa)
    ? sa[levelIndex]
    : name === "鬼" && sa;

  return { name, color, hasShockArrow };
};
