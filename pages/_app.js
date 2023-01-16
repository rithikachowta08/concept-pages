import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "styles/globals.scss";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Nunito-Regular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/Nunito-Regular.ttf"); /* IE9 Compat Modes */
    src: local("Nunito"),
       url("fonts/Nunito-Regular.ttf?#iefix") format("embedded-opentype"),
       /* IE6-IE8 */ url("fonts/Nunito-Regular.ttf") format("woff2"),
       /* Super Modern Browsers */ url("fonts/Nunito-Regular.ttf") format("woff"),
       /* Modern Browsers */ url("fonts/Nunito-Regular.ttf") format("truetype"),
       /* Safari, Android, iOS */ url("fonts/Nunito-Regular.ttf#Nunito") format("svg"); /* Legacy iOS */
  }

    @font-face {
    font-family: 'Nunito-Medium';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("fonts/Nunito-Medium.ttf"); /* IE9 Compat Modes */
    src: local("Nunito"),
       url("fonts/Nunito-Medium.ttf?#iefix") format("embedded-opentype"),
       /* IE6-IE8 */ url("fonts/Nunito-Medium.ttf") format("woff2"),
       /* Super Modern Browsers */ url("fonts/Nunito-Medium.ttf") format("woff"),
       /* Modern Browsers */ url("fonts/Nunito-Medium.ttf") format("truetype"),
       /* Safari, Android, iOS */ url("fonts/Nunito-Medium.ttf#Nunito") format("svg"); /* Legacy iOS */
  }

    @font-face {
    font-family: 'Nunito-Bold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("fonts/Nunito-Bold.woff2"); /* IE9 Compat Modes */
    src: local("Nunito"),
       url("fonts/Nunito-Bold.woff2?#iefix") format("embedded-opentype"),
       /* IE6-IE8 */ url("fonts/Nunito-Bold.woff2") format("woff2"),
       /* Super Modern Browsers */ url("fonts/Nunito-Bold.woff2") format("woff"),
       /* Modern Browsers */ url("fonts/Nunito-Bold.woff2") format("truetype"),
       /* Safari, Android, iOS */ url("fonts/Nunito-Bold.woff2#Nunito") format("svg"); /* Legacy iOS */
  }

  h1 {
   font-family: 'Nunito-Bold', 'Verdana';
  }

  body {
   font-family: 'Nunito-Medium', 'Verdana';
  }

  .katex .mathdefault,
.katex .mathnormal,
.katex .mord {
   font-family: 'Nunito-Medium', 'Verdana';
}
`;

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
         <GlobalStyle />
         <Component {...pageProps} />
         <ToastContainer />
      </>
   );
}

export default MyApp;
