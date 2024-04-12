import { API_URL } from "@/app/movies/page";

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error();
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const data = await getVideo(id);
  return (
    <div className="">
      <h6>{JSON.stringify(data[0].type)}</h6>;
    </div>
  );
}
