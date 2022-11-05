import "react-multi-carousel/lib/styles.css";

import "../styles/application.scss";
import GoogleTagManager from "@components/GoogleTagManager";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  );
}

export default MyApp;
