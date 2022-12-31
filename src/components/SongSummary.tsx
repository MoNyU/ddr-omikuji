import { SongData } from "@/data/songs";
import { getDifficultyInfo } from "@/utils/getDifficultyInfo";
import styled from "@emotion/styled";
import { useMemo } from "react";

type Props = SongData & {
  difficulty: number;
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
    <StyledSummary>
      <StyledName>
        {name + " "}
        <StyledDifficulty noForwardColor={color}>
          ({difficultyName}
          {hasShockArrow && "⚡"}:{level})
        </StyledDifficulty>
      </StyledName>
      <StyledDetail>
        BPM: {bpm} / {artist} / ver: {version}
      </StyledDetail>
    </StyledSummary>
  );
};
