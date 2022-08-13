import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import { ParallaxProvider } from "react-scroll-parallax";
import NavigationBar from "../component/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ScrollObserver>
  );
}

export default MyApp;
