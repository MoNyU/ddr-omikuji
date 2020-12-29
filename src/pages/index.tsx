import { FC, useCallback } from "react";
import { Layout } from "@/layouts/Layout";
import { randomPick } from "@/utils/randomPick";

const IndexPage: FC = () => {
  const handleClick = useCallback(() => {
    const songs = randomPick({ mode: "sp", min: 1, max: 19, number: 4 });
    console.log({ songs });
  }, []);

  return (
    <Layout>
      <button onClick={handleClick}>click</button>
    </Layout>
  );
};

export default IndexPage;
