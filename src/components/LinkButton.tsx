import Link from "next/link";
import { FC } from "react";
import { Button } from "./Button";

type Props = {
  className?: string;
  to: string;
};

export const LinkButton: FC<Props> = ({ children, className, to }) => (
  <Link href={to}>
    <a>
      <Button className={className}>{children}</Button>
    </a>
  </Link>
);
