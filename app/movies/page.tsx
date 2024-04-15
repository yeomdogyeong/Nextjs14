import Movie from "@/components/movie";
import { url } from "inspector";
import Link from "next/link";

export const metadata = {
  title: "Movie",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((el) => setTimeout(el, 3000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <div className="">
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}

//서버에서 Data를 Fetch할 때 loading 파일을 제공해주면 해당 로딩페이지가 적용된다.
