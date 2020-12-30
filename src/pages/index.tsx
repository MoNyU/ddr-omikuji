import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { Layout } from "@/layouts/Layout";
import { randomPick } from "@/utils/randomPick";
import styled from "@emotion/styled";

const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 16px;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
`;

const IndexPage: FC = () => {
  const router = useRouter();
  const [mode] = useState<"sp" | "dp">("sp");

  const handleClick = useCallback(() => {
    const songs = randomPick({ mode, min: 1, max: 19, number: 4 });
    const params = new URLSearchParams();
    params.set("mode", mode);
    
    songs.forEach(({ name, difficulty }, i) => {
      params.set(`n${i}`, name);
      params.set(`d${i}`, difficulty + "");
    });

    router.push(`/result?${params.toString()}`);
  }, [mode, router]);

  return (
    <Layout>
      <StyledDescription>
        DDRに収録されている曲(2020/12/30現在)からランダムに数曲セレクトします<br />
        知らない曲や苦手な譜面でもとりあえずトライ！
      </StyledDescription>
      <StyledButton onClick={handleClick}>おみくじを引く</StyledButton>
    </Layout>
  );
};

export default IndexPage;
