import { API_URL } from "@/app/movies/page";
import { title } from "process";

async function getVideo(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error();
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const data = await getVideo(id);
  return (
    <div className="">
      {data.map((video: any) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
