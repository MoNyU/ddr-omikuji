import { SongData } from "@/data/songs";
import styled from "@emotion/styled";
import { FC } from "react";

type Props = SongData & {
  difficulty: [string, string, number];
  mode: "sp" | "dp";
};
export type SongSummaryProps = Props;

const StyledSummary = styled.section``;

const StyledName = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  word-break: break-word;
`;

const StyledDifficulty = styled.span<{ noForwardColor: string }>`
  color: ${(props) => props.noForwardColor};
`;

const StyledDetail = styled.p`
  font-size: 1.4rem;
`;

export const SongSummary: FC<Props> = ({
  artist,
  bpm,
  difficulty,
  levels,
  name,
  mode,
  sa,
  version,
}) => {
  const [difficultyName, color, levelIndex] = difficulty;
  const level = levels[mode][levelIndex];

  return (
    <StyledSummary>
      <StyledName>
        {name + " "}
        <StyledDifficulty noForwardColor={color}>
          ({difficultyName}
          {difficultyName === "鬼" && sa && "⚡"}:{level})
        </StyledDifficulty>
      </StyledName>
      <StyledDetail>
        BPM: {bpm} / {artist} / ver: {version}
      </StyledDetail>
    </StyledSummary>
  );
};
