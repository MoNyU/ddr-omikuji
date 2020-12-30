import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const StyledWrapper = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
`;

const StyledTitle = styled.h1`
  font-size: 2.2rem;
`;

export const Layout: FC = ({ children }) => (
  <StyledWrapper>
    <Head>
      <title>DDRおみくじ</title>
      <meta name="description" content="DDRに収録されている曲からランダムに数曲ピックアップするおみくじです。" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💃</text></svg>" />
      <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
    </Head>
    <Link href="/" passHref>
      <StyledTitle>💃DDRおみくじ🕺</StyledTitle>
    </Link>
    {children}
  </StyledWrapper>
);
