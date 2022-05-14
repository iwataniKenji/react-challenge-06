import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "../styles/theme.ts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/slider.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
