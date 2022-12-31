import clsx from "clsx";
import NextLink, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { linkStyle } from "./Link.css";

type Props = LinkProps & {
  readonly children: ReactNode;
  readonly className?: string;
};

export const Link = ({ children, className, ...props }: Props) => (
  <NextLink {...props} className={clsx(linkStyle, className)}>
    {children}
  </NextLink>
);
