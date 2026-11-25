# Cinetica

> ℹ️ Ce README a été généré après coup par Claude (IA d'Anthropic), à partir du code du projet.

- **Matière :** Programmation Web avancée, Sup Galilée, 2ᵉ année d'ingénieur
- **Date :** novembre-décembre 2024

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
cinetica/
└── cinetica/                  l'application Next.js
    ├── app/
    │   ├── api/               routes d'API (auth, movie/*, show/*, search)
    │   ├── login/             page de connexion
    │   ├── menu/              pages principales (films, séries, fiches détail)
    │   └── entities/          types Movie et Show
    ├── components/            composants d'interface
    ├── lib/auth.ts            configuration NextAuth
    ├── lib/tmdb.ts            clé et adresse de l'API TMDB (côté serveur uniquement)
    └── repository/            accès aux données TMDB et utilisateurs
```

## Lancer le projet en local

### Prérequis

- [Node.js](https://nodejs.org/) 18.17 ou plus récent (avec npm)
- une clé API TMDB, gratuite sur [themoviedb.org](https://www.themoviedb.org/settings/api)

### Installation

```bash
git clone https://github.com/Quingjie/cinetica.git
cd cinetica/cinetica
npm install
```

Créer un fichier `cinetica/.env` (il n'est pas envoyé sur GitHub) :

```
NEXTAUTH_SECRET=une_longue_chaine_aleatoire
NEXTAUTH_URL=http://localhost:3000
TMDB_API_KEY=ta_cle_api_tmdb
```

Pour générer un `NEXTAUTH_SECRET` : `openssl rand -base64 32`.

### Lancer

```bash
npm run dev                  # mode développement, sur http://localhost:3000
```

ou, pour une version optimisée :

```bash
npm run build
npm start
```

Se connecter ensuite avec le compte de démonstration ci-dessus.

### Mise en ligne

Le site est hébergé sur [Vercel](https://vercel.com). Dans les réglages du projet Vercel, le **Root Directory** est `cinetica` et les variables `NEXTAUTH_SECRET` et `TMDB_API_KEY` sont définies dans les variables d'environnement de Production. Chaque push sur la branche `main` met le site à jour automatiquement.

## Auteurs

Projet réalisé en binôme par **Katell GOUZERH** et **Adam OKBA**.
