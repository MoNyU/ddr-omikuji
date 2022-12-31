import { Link } from "@/components/atoms/Link";
import "@/styles/global.css";
import { themeClass } from "@/styles/theme.css";
import type { ReactNode } from "react";
import { articleStyle, headingStyle } from "./RootLayout.css";

type Props = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="ja">
    <body className={themeClass}>
      <article className={articleStyle}>
        <Link href="/">
          <h1 className={headingStyle}>💃DDRおみくじ🕺</h1>
        </Link>
        {children}
      </article>
    </body>
  </html>
);

export default RootLayout;
