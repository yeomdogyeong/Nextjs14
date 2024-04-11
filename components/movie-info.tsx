import { API_URL } from "@/app/movies/page";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
interface MovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await getMovie(id);
  return <h2>{JSON.stringify(movie)}</h2>;
}
