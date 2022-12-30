import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "./Button";

type Props = {
  children: ReactNode;
  className?: string;
  to: string;
};

export const LinkButton = ({ children, className, to }: Props) => (
  <Link href={to}>
    <Button className={className}>{children}</Button>
  </Link>
);
