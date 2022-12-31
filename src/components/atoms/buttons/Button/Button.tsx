import { ButtonUnstyled } from "@mui/base";
import { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly type?: "button" | "submit" | "reset";
  readonly onClick?: () => void;
};

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
}: Props) => (
  <ButtonUnstyled className={className} type={type} onClick={onClick}>
    {children}
  </ButtonUnstyled>
);
