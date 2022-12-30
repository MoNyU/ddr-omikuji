import styled from "@emotion/styled";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StyledWrapper = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  cursor: pointer;
`;

export const Layout = ({ children }: Props) => (
  <StyledWrapper>
    <StyledLink href="/">
      <StyledTitle>💃DDRおみくじ🕺</StyledTitle>
    </StyledLink>
    {children}
  </StyledWrapper>
);
