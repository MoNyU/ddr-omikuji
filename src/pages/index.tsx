import { Layout } from "@/layouts/Layout";
import { useRandomPick } from "@/utils/useRandomPick";
import styled from "@emotion/styled";
import { FC, useState } from "react";

const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 16px;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
`;

const IndexPage: FC = () => {
  const [mode] = useState<"sp" | "dp">("sp");
  const [min] = useState(1);
  const [max] = useState(19);
  const [number] = useState(3);

  const handleClick = useRandomPick({ mode, min, max, number });

  return (
    <Layout>
      <StyledDescription>
        DDRに収録されている曲(2020/12/31現在)からランダムに数曲セレクトします
        <br />
        知らない曲や苦手な譜面でもとりあえずトライ！
      </StyledDescription>
      <StyledButton onClick={handleClick}>おみくじを引く</StyledButton>
    </Layout>
  );
};

export default IndexPage;
