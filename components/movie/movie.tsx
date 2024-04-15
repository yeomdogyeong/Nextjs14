"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface MovieProp {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: MovieProp) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div key={id}>
      <Image
        src={poster_path}
        alt={title}
        width={500}
        height={500}
        onClick={handleClick}
      />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
