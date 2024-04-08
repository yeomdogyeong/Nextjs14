import { API_URL } from "../page";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}
console.log(getVideo);
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const movie = await getMovie(id);
  // const video = await getVideo(id);
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{video.name}</h2>
    </>
  );
}
