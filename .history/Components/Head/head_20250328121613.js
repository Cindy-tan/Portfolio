
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Custom Title Here</title> {/* Add your custom title for this page */}
        {/* You can also add other head elements like meta tags */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
