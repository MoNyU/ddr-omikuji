
import { TwitterButton } from "@/components/TwitterButton";
import { Layout } from "@/layouts/Layout";
import { useRouter } from "next/router";
import { FC, useEffect, useMemo } from "react";
import dictionary from "@/data/songs.json";
import { omit } from "lodash";
import { getDifficulty } from "@/utils/getDifficulty";
import { SongData } from "@/data/songs";

const ResultPage: FC = () => {
  const router = useRouter();
  const mode = router.query.mode === "dp" ? "dp" : "sp";

  const songs: (SongData & { difficulty: [string, string] })[] = useMemo(() => {
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

  const tweet = useMemo(() => [
    `DDRの${mode.toUpperCase()}で次の曲をプレイしよう！\n`,
    ...songs.map(({ name, difficulty }) => `- ${name} (${difficulty[0]})`),
    "\n",
  ].join("\n"), [mode, songs]);

  useEffect(() => {
    if (songs.length === 0) router.replace("/");
  }, [router, songs.length]);

  return (
    <Layout>
      <p>{mode.toUpperCase()}のおみくじ結果</p>
      <div>
        {songs.map((song) => <div key={song.name}>{song.name} {song.difficulty[0]}</div>)}
      </div>
      <TwitterButton tweet={tweet} hashtags={["DDR", "DDRおみくじ"]} />
    </Layout>
  );
};

export default ResultPage;
