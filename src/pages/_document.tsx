import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Roboto+Mono:wght@300;500&family=Roboto:wght@500;900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
