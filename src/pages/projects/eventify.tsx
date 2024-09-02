import React from 'react';

const Eventify: React.FC = () => {
  return (
    <div className="min-h-screen p-4 text-black">
      <header className="container mx-auto text-center" style={{ marginTop: '12vh' }}>
        <h1 className="text-4xl font-bold mt-20 mb-8">Eventify</h1>
        <p className="text-lg">Benvenuti a Eventify, la tua piattaforma per gestire eventi.</p>
      </header>
      <main className="container mx-auto mt-10">
        {/* Aggiungi qui il contenuto principale della tua applicazione */}
      </main>
    </div>
  );
};

export default Eventify;