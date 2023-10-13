import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/store/index";

import "@/assets/styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
