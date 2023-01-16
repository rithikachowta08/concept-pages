import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>{Component.title || "Byju's US Math"}</title>
            <meta
               name="description"
               content={Component.meta || "Math concept pages"}
            />
         </Head>
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}

export default MyApp;
