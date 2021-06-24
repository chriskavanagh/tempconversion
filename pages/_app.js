import "../styles/globals.css";
import CxtProvider from "../context/ConverterContext";

function MyApp({ Component, pageProps }) {
  return (
    <CxtProvider>
      <Component {...pageProps} />
    </CxtProvider>
  );
}

export default MyApp;
