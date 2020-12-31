import styled from "@emotion/styled";
import { FC } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 1.4rem;
`;

export const Button: FC<Props> = ({ children, className, onClick }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);
