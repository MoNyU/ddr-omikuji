import { Button } from "@/components/atoms/buttons/Button";
import { TwitterButton } from "@/components/atoms/buttons/TwitterButton";
import { Link } from "@/components/atoms/Link";
import {
  SongSummary,
  type SongSummaryProps,
} from "@/components/atoms/SongSummary";
import dictionary from "@/data/songs.json";
import { Layout } from "@/layouts/Layout";
import { getDifficultyInfo } from "@/utils/getDifficultyInfo";
import { isBrowser } from "@/utils/isBrowser";
import { useRandomPick } from "@/utils/useRandomPick";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import {
  linkButtonStyle,
  liStyle,
  paragraphStyle,
  repickButtonStyle,
  twitterButtonStyle,
  ulStyle,
} from "./ResultPage.css";

const ResultPage: NextPage = () => {
  const router = useRouter();
  const mode = isBrowser && localStorage.getItem("mode") === "dp" ? "dp" : "sp";

  const randomPick = useRandomPick();
  const handleRepickClick = useCallback(() => {
    const min = +localStorage.getItem("min") || 1;
    const max = +localStorage.getItem("max") || 19;
    const number = +localStorage.getItem("number") || 3;
    randomPick({ mode, min, max, number });
  }, [randomPick, mode]);

  const songs: readonly SongSummaryProps[] = useMemo(() => {
    const items: readonly {
      readonly name: string;
      readonly difficulty: number;
    }[] = [];

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
        difficulty,
      }))
      .filter(({ artist }) => artist);
  }, [router.query]);

  const tweet = useMemo(
    () =>
      [
        `DDRの${mode.toUpperCase()}で次の曲をプレイしよう！\n`,
        ...songs.map(({ difficulty, levels, name, sa }) => {
          const { name: difficultyName, hasShockArrow } = getDifficultyInfo({
            mode,
            difficulty,
            sa,
          });

          return `- ${name} (${difficultyName + (hasShockArrow ? "⚡" : "")}:${
            levels[mode][difficulty]
          })`;
        }),
        "\n",
      ].join("\n"),
    [mode, songs]
  );

  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <p className={paragraphStyle}>{mode.toUpperCase()}のおみくじ結果</p>
      <ul className={ulStyle}>
        {songs.map((song) => (
          <li key={song.name + song.difficulty} className={liStyle}>
            <SongSummary {...song} mode={mode} />
          </li>
        ))}
      </ul>
      <TwitterButton
        className={twitterButtonStyle}
        tweet={tweet}
        hashtags={["DDR", "DDRおみくじ"]}
        url="https://monyu.github.io/ddr-omikuji/"
      />
      <Button className={repickButtonStyle} onClick={handleRepickClick}>
        もう一度引く
      </Button>
      <Link href="/">
        <Button className={linkButtonStyle}>条件を変える</Button>
      </Link>
    </Layout>
  );
};

export default ResultPage;
