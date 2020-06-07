import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
          <link rel='preload' href='/fonts/hero-new-100.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-300.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-400.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-500.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-600.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-700.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/hero-new-800.woff2' as='font' crossOrigin='' />
          <link href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
