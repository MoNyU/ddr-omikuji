import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { randomPick } from "./randomPick";

type Option = {
  readonly mode: "sp" | "dp";
  readonly min: number;
  readonly max: number;
  readonly number: number;
};

export const useRandomPick = () => {
  const router = useRouter();

  return useCallback(
    ({ mode, min, max, number }: Option) => {
      const songs = randomPick({ mode, min, max, number });
      const params = new URLSearchParams();

      songs.forEach(({ name, difficulty }, i) => {
        params.set(`n${i}`, name);
        params.set(`d${i}`, difficulty + "");
      });
      router.push(`/result?${params.toString()}`);
    },
    [router]
  );
};
