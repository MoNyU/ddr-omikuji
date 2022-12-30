import "@/styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>DDRおみくじ</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
