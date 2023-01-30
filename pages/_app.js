import Head from "next/head";
import Script from "next/script";
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
         <Script
            id="ms-clarity"
            type="text/javascript"
            strategy="afterInteractive"
         >
            {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "9iu6tgy0ez");`}
         </Script>
         <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DJFMGBYN4Z"
            strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJFMGBYN4Z');
        `}
         </Script>
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}

export default MyApp;
