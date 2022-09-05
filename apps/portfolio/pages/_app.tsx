import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header/header.component';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>[ batarin ]</title>
      </Head>
      <Header />
      <main className="bg-custom-black min-h-screen pt-29 text-custom-white">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
