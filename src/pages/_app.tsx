import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme">
      {(Component as any).isBlogPage ? (
        <Component {...pageProps} />
      ) : (
        <Container>
          <Component {...pageProps} />
        </Container>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
