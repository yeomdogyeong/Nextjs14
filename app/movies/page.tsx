import { url } from "inspector";

export const metadata = {
  title: "Movie",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((el) => setTimeout(el, 5000));
  return fetch(URL).then((response) => response.json());
}

export default async function Movies() {
  const movies = await getMovies();

  return <div>{JSON.stringify(movies)}</div>;
}

//서버에서 Data를 Fetch할 때 loading 파일을 제공해주면 해당 로딩페이지가 적용된다.
