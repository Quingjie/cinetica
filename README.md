# Cinetica

Application web pour parcourir des films et des séries, construite avec Next.js et les données de [The Movie Database (TMDB)](https://www.themoviedb.org/).

**Démo en ligne :** https://cinet-sigma.vercel.app

Pour tester l'application, connectez-vous avec le compte de démonstration :

| E-mail | Mot de passe |
|---|---|
| `demo@cinetica.fr` | `Cinetica2026` |

## Fonctionnalités

- **Connexion** par e-mail et mot de passe (NextAuth, mots de passe hachés avec bcrypt). Les pages du menu ne sont accessibles qu'une fois connecté.
- **Films** : populaires, les mieux notés, actuellement au cinéma.
- **Séries** : populaires, les mieux notées, en cours de diffusion.
- **Fiche détaillée** d'un film ou d'une série, avec le casting.
- Interface avec barre latérale, en-tête et carrousels, thème clair / sombre.

## Technologies

| Brique | Utilisation |
|---|---|
| Next.js 14 (App Router) + TypeScript | Pages et routes d'API |
| NextAuth | Authentification (session JWT) |
| TanStack Query | Récupération des données |
| Tailwind CSS + Radix UI (shadcn/ui) | Interface |
| Swiper / Embla | Carrousels |
| API TMDB | Données des films et séries |

## Structure

```
Cinet/
└── cinetica/                  l'application Next.js
    ├── app/
    │   ├── api/               routes d'API (auth, movie/*, show/*)
    │   ├── login/             page de connexion
    │   ├── menu/              pages principales (films, séries, fiches détail)
    │   └── entities/          types Movie et Show
    ├── components/            composants d'interface
    ├── lib/auth.ts            configuration NextAuth
    └── repository/            accès aux données TMDB et utilisateurs
```

## Lancer le projet en local

```bash
cd cinetica
npm install
```

Créer un fichier `cinetica/.env` (il n'est pas envoyé sur GitHub) :

```
NEXTAUTH_SECRET=une_longue_chaine_aleatoire
NEXTAUTH_URL=http://localhost:3000
TMDB_API_KEY=ta_cle_api_tmdb
```

La clé API TMDB s'obtient gratuitement sur [themoviedb.org](https://www.themoviedb.org/settings/api). Pour le site en ligne, les mêmes variables sont définies dans les réglages du projet sur Vercel.

Puis :

```bash
npm run dev
```

L'application est disponible sur http://localhost:3000.

## Auteurs

Projet réalisé en binôme par **Katell GOUZERH** et **Adam OKBA**.
