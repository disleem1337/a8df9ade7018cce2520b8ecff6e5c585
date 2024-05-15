import type { AppProps } from "next/app";
import { AppWrapper } from "@/components/layout/AppWrapper";
import { wrapper } from "@/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
        <Component {...pageProps} />
    </AppWrapper>
  );
}

export default wrapper.withRedux(App);