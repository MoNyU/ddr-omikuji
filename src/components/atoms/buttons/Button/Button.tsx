import { ButtonUnstyled } from "@mui/base";
import clsx from "clsx";
import { ReactNode } from "react";
import { buttonStyle } from "./Button.css";

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
  <ButtonUnstyled
    className={clsx(buttonStyle, className)}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonUnstyled>
);
