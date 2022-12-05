import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        theme="colored"
        position="bottom-right"
        hideProgressBar={true}
        closeButton={false}
        autoClose={3000}
      />
    </>
  );
}

export default MyApp;
