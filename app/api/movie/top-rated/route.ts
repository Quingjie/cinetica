import { Movie } from '../../../entities/movie';
import { NextResponse } from 'next/server';

const TMDB_ACCESS_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmIzYjFmZWZiN2I1YjllNjFiOTJiNWI4ZWQ3Nzg1YyIsIm5iZiI6MTczMDkxODQwNC41NDU2NTYyLCJzdWIiOiI2NzJhMjRiMTQyYmVjNDk4Nzc4MDRiMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ang9o2QRBv3kMBSrT8iJ-LcuQL1pFmUzjbhmmX9y30k'

export async function GET() {

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      return NextResponse.json({ error: `Error ${response.status}: ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    const movies: Movie[] = data.results;

    return NextResponse.json(movies);
  }
  catch (error) {
    console.error("Erreur lors de la récupération des films:", error);
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}