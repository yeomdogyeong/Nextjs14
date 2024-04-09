import MovieVideos from "@/components/movie-videos";
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
  return (
    <>
      <MovieVideos id={id} />
    </>
  );
}
