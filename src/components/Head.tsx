import NextHead from "next/head";
import { FC } from "react";

export const Head: FC = ({ children }) => (
  <NextHead>
    <title>DDRおみくじ</title>
    <meta name="description" content="DDRの全曲からランダムに数曲ピックアップするおみくじです。" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💃</text></svg>" />
    <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
    {children}
  </NextHead>
);
