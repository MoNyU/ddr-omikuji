import styled from "@emotion/styled";
import { ElementType, FC } from "react";

type Props = {
  as?: ElementType;
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
`;

export const Button: FC<Props> = ({
  as,
  children,
  className,
  type = "button",
  onClick,
}) => (
  <StyledButton as={as} className={className} type={type} onClick={onClick}>
    {children}
  </StyledButton>
);
