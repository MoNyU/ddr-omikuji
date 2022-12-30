import styled from "@emotion/styled";
import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: #efefef;
`;

export const Button = ({
  as,
  children,
  className,
  type = "button",
  onClick,
}: Props) => (
  <StyledButton as={as} className={className} type={type} onClick={onClick}>
    {children}
  </StyledButton>
);
