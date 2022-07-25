import Navbar from "../components/Navbar";
import ToastContainer from "../components/ToastContainer";
import { ToastProvider } from "../context/ToastContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </>
  );
}

export default MyApp;
