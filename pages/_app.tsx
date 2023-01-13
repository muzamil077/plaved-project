import "../styles/style.css";
import type { AppProps } from "next/app";
import Layout from "../src/component/Layout/Layout";
import { createContext, useState } from "react";


export const myContext = createContext({} as any);

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState();
  const [enabled, setEnabled] = useState(false)
  const [slide, setSlide] = useState(false)
 
  return (
    <myContext.Provider value={{open, setOpen , enabled, setEnabled, slide, setSlide}}>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </myContext.Provider>
  );
}
