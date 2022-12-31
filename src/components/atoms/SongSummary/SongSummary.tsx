import { SongData } from "@/data/songs";
import { getDifficultyInfo } from "@/utils/getDifficultyInfo";
import { useMemo } from "react";
import {
  difficultyStyle,
  headingStyle,
  paragraphStyle,
} from "./SongSummary.css";

export type Props = SongData & {
  readonly difficulty: number;
  readonly mode: "sp" | "dp";
};

export const SongSummary = ({
  artist,
  bpm,
  difficulty,
  levels,
  name,
  mode,
  sa,
  version,
}: Props) => {
  const level = levels[mode][difficulty];

  const {
    name: difficultyName,
    color,
    hasShockArrow,
  } = useMemo(
    () => getDifficultyInfo({ mode, difficulty, sa }),
    [difficulty, mode, sa]
  );

  return (
    <section>
      <h2 className={headingStyle}>
        {name + " "}
        <span className={difficultyStyle({ color })}>
          ({difficultyName}
          {hasShockArrow && "⚡"}:{level})
        </span>
      </h2>
      <p className={paragraphStyle}>
        BPM: {bpm} / {artist} / ver: {version}
      </p>
    </section>
  );
};
