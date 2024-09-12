const { execSync } = require('child_process');
const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

// Esegui la build e l'export del progetto
execSync('npm run build', { stdio: 'inherit' });

// Crea il file .nojekyll nella cartella out se non esiste
const nojekyllPath = path.join(__dirname, 'out', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
}

// Pubblica la cartella /out nel branch gh-pages
ghpages.publish(path.join(__dirname, 'out'), {
  branch: 'gh-pages',
  repo: 'https://github.com/atavico/atavico.github.io.git', // Sostituisci con il tuo repository
  user: {
    name: 'atavico', // Sostituisci con il tuo nome
    email: 'aletarsi97@gmail.com' // Sostituisci con la tua email
  }
}, (err) => {
  if (err) {
    console.error('Errore durante il deploy:', err);
  } else {
    console.log('Deploy completato con successo!');
  }
});
