import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "../styles/theme.ts";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
