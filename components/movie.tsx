import Link from "next/link";

interface MovieProp {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: MovieProp) {
  return (
    <div key={id}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
