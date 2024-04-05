import { API_URL } from "../page";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
