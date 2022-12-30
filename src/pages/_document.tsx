import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <meta
        name="description"
        content="DDRに収録されている曲からランダムに数曲ピックアップするおみくじです。"
      />
      <meta property="og:title" content="DDRおみくじ" />
      <meta
        property="og:description"
        content="DDRに収録されている曲からランダムに数曲ピックアップするおみくじです。"
      />
      <meta property="og:url" content="https://monyu.github.io/ddr-omikuji/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@MoNyU_Chan" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💃</text></svg>"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
