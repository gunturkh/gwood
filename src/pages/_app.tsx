import { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <Component {...pageProps} />
);

export default MyApp;
