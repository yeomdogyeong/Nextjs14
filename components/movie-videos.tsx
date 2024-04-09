import { API_URL } from "@/app/movies/page";

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const data = await getVideo(id);
  return <h6>{JSON.stringify(data)}</h6>;
}
