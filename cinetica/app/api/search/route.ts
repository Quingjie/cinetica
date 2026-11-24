import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../../../lib/tmdb";

// Recherche de films et de séries, utilisée par la barre de recherche de l'en-tête.
// L'appel à TMDB est fait ici, côté serveur, pour que la clé API ne soit jamais
// envoyée au navigateur.
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  if (!TMDB_API_KEY) {
    console.error("Erreur : variable d'environnement TMDB_API_KEY manquante");
    return NextResponse.json({ error: "Clé API manquante" }, { status: 500 });
  }

  const query = req.nextUrl.searchParams.get("query")?.trim() ?? "";
  if (!query) {
    return NextResponse.json({ movies: { results: [] }, series: { results: [] } });
  }

  const q = encodeURIComponent(query);
  const [moviesResponse, seriesResponse] = await Promise.all([
    fetch(`${TMDB_BASE_URL}/search/movie?query=${q}&api_key=${TMDB_API_KEY}`),
    fetch(`${TMDB_BASE_URL}/search/tv?query=${q}&api_key=${TMDB_API_KEY}`),
  ]);

  if (!moviesResponse.ok || !seriesResponse.ok) {
    return NextResponse.json({ error: "Erreur TMDB" }, { status: 502 });
  }

  return NextResponse.json({
    movies: await moviesResponse.json(),
    series: await seriesResponse.json(),
  });
}
