import Head from "next/head";
import { MediaContextProvider } from "utils/media";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
   return (
      <MediaContextProvider>
         <Head>
            <title>{Component.title || "Byju's US Math"}</title>
            <meta
               name="description"
               content={Component.meta || "Math concept pages"}
            />
         </Head>
         <Component {...pageProps} />
      </MediaContextProvider>
   );
}

export default MyApp;
