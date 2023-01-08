import "../styles/style.css";
import type { AppProps } from "next/app";
import Layout from "../src/component/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
