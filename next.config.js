/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/atavico.github.io/',  // Per hosting che non richiede un prefisso specifico
  basePath: '',     // Se non hai un percorso base specifico
  trailingSlash: true,
};

module.exports = nextConfig;
