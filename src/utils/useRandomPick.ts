import { useRouter } from "next/router";
import { useCallback } from "react";
import { randomPick } from "./randomPick";

type Option = {
  mode: "sp" | "dp";
  min: number;
  max: number;
  number: number;
};

export const useRandomPick = ({
  mode = "sp",
  min = 1,
  max = 19,
  number = 4,
}: Option) => {
  const router = useRouter();

  return useCallback(() => {
    const songs = randomPick({ mode, min, max, number });
    const params = new URLSearchParams();

    params.set("mode", mode);
    params.set("min", min + "");
    params.set("max", max + "");
    params.set("number", number + "");

    songs.forEach(({ name, difficulty }, i) => {
      params.set(`n${i}`, name);
      params.set(`d${i}`, difficulty + "");
    });

    router.push(`/result?${params.toString()}`);
  }, [max, min, mode, number, router]);
};
