import 'tailwindcss/tailwind.css';
import '../styles/styles.css';

import React from 'react';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;