import MovieVideos from "@/components/movie-videos";
import { API_URL } from "../page";
import MovieInfo from "@/components/movie-info";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<Spinner />}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Movie loading</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

//suspense는 감싼 component가 await될 동안 표시할 메세지를 Render할 수 있게 해줌
//option key 포인터 다중사용 가능
