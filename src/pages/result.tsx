import { Button } from "@/components/Button";
import { LinkButton } from "@/components/LinkButton";
import { SongSummary, SongSummaryProps } from "@/components/SongSummary";
import { TwitterButton } from "@/components/TwitterButton";
import dictionary from "@/data/songs.json";
import { Layout } from "@/layouts/Layout";
import { getDifficulty } from "@/utils/getDifficulty";
import { useRandomPick } from "@/utils/useRandomPick";
import styled from "@emotion/styled";
import { omit } from "lodash";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

const StyledParagraph = styled.p`
  font-size: 1.8rem;
`;

const StyledList = styled.div`
  max-width: 680px;
  margin-top: 16px;

  > :not(:first-of-type) {
    margin-top: 8px;
  }
`;

const StyledTwitterButton = styled(TwitterButton)`
  margin-top: 16px;
`;

const StyledRepickButton = styled(Button)`
  width: 180px;
  margin-top: 16px;
`;

const StyledLinkButton = styled(LinkButton)`
  width: 180px;
  margin-top: 16px;
`;

const parseIntForOption = (param: string | string[]) =>
  typeof param === "string" ? parseInt(param, 10) || 1 : 1;

const ResultPage: FC = () => {
  const router = useRouter();
  const mode = router.query.mode === "dp" ? "dp" : "sp";
  const [min, max, number] = useMemo(
    () =>
      [router.query.min, router.query.max, router.query.number].map(
        parseIntForOption
      ),
    [router.query.max, router.query.min, router.query.number]
  );
  const handleRepickClick = useRandomPick({ mode, min, max, number });

  const songs: SongSummaryProps[] = useMemo(() => {
    const params = omit(router.query, "mode");
    const items: { name: string; difficulty: number }[] = [];

    Object.entries(params).forEach(([k, v]) => {
      if (Array.isArray(v)) return;
      const index = k.slice(1);
      const key = k[0] === "n" ? "name" : "difficulty";

      const item = items[index] ? { ...items[index] } : {};
      item[key] = key === "difficulty" ? parseInt(v, 10) : v;
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
