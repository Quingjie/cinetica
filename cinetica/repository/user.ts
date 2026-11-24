// La clé API TMDB n'est plus stockée ici : voir lib/tmdb.ts

// Comptes autorisés à se connecter.
// Les anciens comptes personnels (et leurs mots de passe) ont été retirés le 24/11/2026.
// Il ne reste qu'un compte de démonstration, dont les identifiants sont donnés dans le README :
//   e-mail : demo@cinetica.fr
//   mot de passe : Cinetica2026
// Seul le hachage bcrypt du mot de passe est stocké ici.
export interface User {
  id: string;
  username: string;
  name: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    username: "demo@cinetica.fr",
    password: "$2a$10$K6RHc.Ga8D5K4dOmMlJF/usEyHSHgkha0EmCBlXXG3We1DyBZFB5q",
    name: "Compte démo",
  },
];
