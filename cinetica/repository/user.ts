// La clé API TMDB n'est plus stockée ici : voir lib/tmdb.ts

export interface User {
  id: string;
  username: string;
  name: string;
  password: string;
}

export const users : User[] = [
    {
      id: "1",
      username : 'katell.gouzerh@hotmail.com',
      password : '$2y$10$Gt.w6FPXKkSxCuIJzQYdh.hhBqgcnySIj/k8pVs5wwAfDKMvTHatq',
      name: "Katell Gouzerh",
    },
    {
      id: "2",
      username : 'adam.okba@hotmail.com',
      password : '$2y$10$Gt.w6FPXKkSxCuIJzQYdh.hhBqgcnySIj/k8pVs5wwAfDKMvTHatq',
      name: "Adam Okba",
    },
  ];
  