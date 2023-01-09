import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const lightBg = "assets/white_bg.webp";
const darkBg = "assets/purple_bg.webp";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" as="image" href="assets/white_bg.webp" />
          <link rel="preload" as="image" href="assets/purple_bg.webp" />
          <meta name="robots" content="noindex" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={
              "https://search-static.byjusweb.com/assets" +
              "/favicon/apple-touch-icon.png"
            }
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={
              "https://search-static.byjusweb.com/assets" +
              "/favicon/favicon-32x32.png"
            }
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={
              "https://search-static.byjusweb.com/assets" +
              "/favicon/favicon-16x16.png"
            }
          />
        </Head>
        <body>
          {/* <img src={lightBg} style={{ display: "none" }} />
               <img src={darkBg} style={{ display: "none" }} />
               <img src={darkWithTrianglesBg} style={{ display: "none" }} /> */}
          <Main />
          <div id="modal-container"></div>
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
