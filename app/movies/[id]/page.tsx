import MovieVideos from "@/components/movie-videos";
import { API_URL } from "../page";
import MovieInfo from "@/components/movie-info";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <MovieInfo id={id} />
      <br />
      <MovieVideos id={id} />
    </>
  );
}
