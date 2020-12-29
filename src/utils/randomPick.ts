import dictionary from "@/data/songs.json";
import { Songs } from "@/data/songs";
import intersection from "lodash/intersection";
import sampleSize from "lodash/sampleSize";
import range from "lodash/range";

const songs = Object
  .entries(dictionary as unknown as Songs)
  .map(([name, data]) => ({ ...data, name }));

type Option = {
  mode: "sp" | "dp";
  min: number;
  max: number;
  number?: number;
};

type RandomPick = (option: Option) => { difficulty: number; name: string }[];

export const randomPick: RandomPick = ({ mode, min, max, number = 1 }) => {
  const selectLevels = range(min, max + 1);
  
  const pickableSongs = songs
    .map(({ levels, name }) => ({
      raw: levels[mode],
      levels: intersection(levels[mode], selectLevels),
      name,
    }))
    .filter(({ levels }) => levels.length > 0)
    .map(({ raw, levels, name }) => ({
      difficulties: raw.map((n, i) => levels.includes(n) ? i : undefined).filter((n) => typeof n === "number"),
      name,
    }))
    .reduce((acc, { difficulties, name }) => [...acc, ...difficulties.map((difficulty) => ({ difficulty, name }))], []);

  return sampleSize(pickableSongs, number);
};
