import { SongData } from "@/data/songs";
import styled from "@emotion/styled";

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
  const [difficultyName, color, levelIndex] = difficulty;
  const level = levels[mode][levelIndex];
  const hasShockArrow = Array.isArray(sa)
    ? sa[mode === "sp" ? levelIndex : levelIndex + 1]
    : difficultyName === "鬼" && sa;

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
