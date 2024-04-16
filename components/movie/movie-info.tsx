import { API_URL } from "@/app/movies/page";
import Image from "next/image";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
interface MovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await getMovie(id);
  return (
    <div>
      <Image src={movie.poster_path} alt="movie_img" width={500} height={500} />
      <h1>{movie.title}</h1>
      <h3>{movie.vote_average}</h3>
      <p>{movie.overview}</p>
    </div>
  );
}
