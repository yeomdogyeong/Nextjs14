import { url } from "inspector";
import Link from "next/link";

export const metadata = {
  title: "Movie",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((el) => setTimeout(el, 10000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

//서버에서 Data를 Fetch할 때 loading 파일을 제공해주면 해당 로딩페이지가 적용된다.
