import type { AppProps } from "next/app";

import "@/assets/styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
