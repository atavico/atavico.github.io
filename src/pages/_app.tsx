import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  const router = useRouter(); // Aggiungi il router per ottenere la route corrente

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route} // Aggiungi una chiave univoca per ogni route
        initial={{ opacity: 0 }} // Stato iniziale dell'animazione
        animate={{ opacity: 1 }} // Stato durante l'animazione
        exit={{ opacity: 0 }} // Stato durante l'uscita della pagina
        transition={{ duration: 0.5 }} // Durata della transizione
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
