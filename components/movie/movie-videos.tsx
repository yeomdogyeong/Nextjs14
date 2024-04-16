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
      <iframe
        key={data[0].id}
        src={`https://youtube.com/embed/${data[0].key}`}
        title={data[0].name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
