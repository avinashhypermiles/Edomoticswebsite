import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="eDomotics - Smart Living Solutions. Market leader in home automation, home theatre, and smart home systems." />
        <meta name="keywords" content="home automation, smart home, home theatre, security systems, smart lighting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}