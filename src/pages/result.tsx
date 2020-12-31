import { Button } from "@/components/Button";
import { LinkButton } from "@/components/LinkButton";
import { SongSummary, SongSummaryProps } from "@/components/SongSummary";
import { TwitterButton } from "@/components/TwitterButton";
import dictionary from "@/data/songs.json";
import { Layout } from "@/layouts/Layout";
import { getDifficulty } from "@/utils/getDifficulty";
import { useRandomPick } from "@/utils/useRandomPick";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FC, useCallback, useMemo } from "react";

const StyledParagraph = styled.p`
  font-size: 1.8rem;
`;

const StyledList = styled.div`
  max-width: 680px;
  margin-top: 48px;

  > :not(:first-of-type) {
    margin-top: 8px;
  }
`;

const StyledTwitterButton = styled(TwitterButton)`
  margin-top: 48px;
`;

const StyledRepickButton = styled(Button)`
  width: 180px;
  margin-top: 16px;
`;

const StyledLinkButton = styled(LinkButton)`
  width: 180px;
  margin-top: 16px;
`;

const ResultPage: FC = () => {
  const router = useRouter();
  const mode =
    process.browser && localStorage.getItem("mode") === "dp" ? "dp" : "sp";

  const randomPick = useRandomPick();
  const handleRepickClick = useCallback(() => {
    const min = +localStorage.getItem("min") || 1;
    const max = +localStorage.getItem("max") || 19;
    const number = +localStorage.getItem("number") || 3;
    randomPick({ mode, min, max, number });
  }, [randomPick, mode]);

  const songs: SongSummaryProps[] = useMemo(() => {
    const items: { name: string; difficulty: number }[] = [];

    Object.entries(router.query).forEach(([k, v]) => {
      if (Array.isArray(v)) return;
      const index = k.slice(1);
      const key = k[0] === "n" ? "name" : "difficulty";

      const item = items[index] ? { ...items[index] } : {};
      item[key] = key === "difficulty" ? +v : v;
      items[index] = item;
    });

    return items
      .map(({ name, difficulty }) => ({
        ...dictionary[name],
        name,
        difficulty: getDifficulty(mode, difficulty),
      }))
      .filter(({ artist }) => artist);
  }, [mode, router.query]);

  const tweet = useMemo(
    () =>
      [
        `DDRの${mode.toUpperCase()}で次の曲をプレイしよう！\n`,
        ...songs.map(
          ({ difficulty, levels, name, sa }) =>
            `- ${name} (${difficulty[0] + (sa ? "⚡" : "")}:${
              levels[mode][difficulty[2]]
            })`
        ),
        "\n",
      ].join("\n"),
    [mode, songs]
  );

  return (
    <Layout>
      <StyledParagraph>{mode.toUpperCase()}のおみくじ結果</StyledParagraph>
      <StyledList>
        {songs.map((song) => (
          <SongSummary
            {...song}
            key={song.name + song.difficulty}
            mode={mode}
          />
        ))}
      </StyledList>
      <StyledTwitterButton
        tweet={tweet}
        hashtags={["DDR", "DDRおみくじ"]}
        url="https://monyu.github.io/ddr-omikuji"
      />
      <StyledRepickButton onClick={handleRepickClick}>
        もう一度引く
      </StyledRepickButton>
      <StyledLinkButton to="/">条件を変える</StyledLinkButton>
    </Layout>
  );
};

export default ResultPage;
