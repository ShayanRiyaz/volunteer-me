import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth'
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';
import customTheme from '../styles/theme';
import '../styles/globals.css'
import MDXComponents from '@/components/MDXComponents';

const GlobalStyle =({ children }) => {
  return (
    <>
    <CSSReset />
    <Global
    styles = {css`
      html {
        min-width : 360px;
        scroll-behavior: smooth;
      }
    #__next {
      display : flex;
      flex-direction: column;
      min-height: 100vh;
    }
    `}
    />
    {children}
    </>
      // <ProvideAuth>
    //<Component {...pageProps} />
  //</ProvideAuth> }
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
  <AuthProvider>
  <MDXProvider components={MDXComponents}>
    <GlobalStyle/>
    <Component {...pageProps} />
    </MDXProvider>
  </AuthProvider>
  </ThemeProvider>
  );
};

export default App;
