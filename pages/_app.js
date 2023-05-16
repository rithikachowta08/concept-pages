import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { isLive } from "utils/constants";
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
         {isLive && (
            <Script
               id="ms-clarity"
               type="text/javascript"
               strategy="lazyOnload"
            >
               {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "9iu6tgy0ez");`}
            </Script>
         )}
         {isLive && (
            <Script
               src="https://www.googletagmanager.com/gtag/js?id=G-6QMNTL74XB"
               strategy="lazyOnload"
            />
         )}
         {isLive && (
            <Script id="google-analytics" strategy="lazyOnload">
               {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6QMNTL74XB');
        `}
            </Script>
         )}
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}

export default MyApp;
