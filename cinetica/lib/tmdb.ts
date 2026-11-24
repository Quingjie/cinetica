// Clé API TMDB
//
// L'ancienne clé était écrite en clair dans repository/user.ts : elle était visible
// sur GitHub et dans le code JavaScript envoyé aux visiteurs du site.
// Elle a été changée (régénérée) le 24/11/2026 et ne fonctionne plus.
//
// La nouvelle clé n'est écrite nulle part dans le code. Elle est lue dans la
// variable d'environnement TMDB_API_KEY :
//   - en local : dans le fichier cinetica/.env (jamais envoyé sur GitHub)
//   - en ligne : dans les réglages du projet sur Vercel (Settings > Environment Variables)
//
// Ce fichier ne doit être importé que par du code serveur (routes d'API, repository),
// jamais par un composant 'use client', sinon la clé serait renvoyée au navigateur.
export const TMDB_API_KEY = process.env.TMDB_API_KEY ?? "";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
