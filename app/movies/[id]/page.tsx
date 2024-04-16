import MovieVideos from "@/components/movie/movie-videos";
import { API_URL } from "../page";
import MovieInfo from "@/components/movie/movie-info";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import Dummy from "@/components/dummy";
import MovieCredits from "@/components/movie/movie-credits";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col">
      <div className="max-w-[500px] min-h-screen w-full h-full flex flex-col items-center">
        <Suspense fallback={<Spinner />}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense>
          <MovieCredits id={id} />
        </Suspense>
        <Suspense fallback={<h1>Movie loading</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </div>
  );
}

//suspense는 감싼 component가 await될 동안 표시할 메세지를 Render할 수 있게 해줌
//하나의 정보가 Fetch되면 바로 나타남. 다른 데이터를 기다릴 필요 없음.
//option key 포인터 다중사용 가능
