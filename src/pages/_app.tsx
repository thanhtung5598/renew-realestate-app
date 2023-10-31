import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/index";
import AppInit from "@/helpers/appInitial";

import "@/assets/styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppInit />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp; 
