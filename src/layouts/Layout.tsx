import { Link } from "@/components/atoms/Link";
import type { ReactNode } from "react";
import { articleStyle, headingStyle } from "./Layout.css";

type Props = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <article className={articleStyle}>
    <Link href="/">
      <h1 className={headingStyle}>💃DDRおみくじ🕺</h1>
    </Link>
    {children}
  </article>
);
