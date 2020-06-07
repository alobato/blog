import App from 'next/app'
import { AppProvider } from '../components/AppContext'

// import 'react-notion/src/styles.css'
// import 'prismjs/themes/prism-tomorrow.css'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <style jsx global>{`
@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-800.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-700.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-600.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-500.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-400.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-300.woff2') format('woff2'); /* Super Modern Browsers */
}

@font-face {
  font-family: 'Hero New';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local('Hero New'), local('HeroNew'),
       url('/fonts/hero-new-100.woff2') format('woff2'); /* Super Modern Browsers */
}`}
        </style>
        <Component {...pageProps} />
      </>
    )
  }
}

export default props => {
  return <AppProvider defaultValue={{ theme: 'default' }}><MyApp {...props} /></AppProvider>
}
