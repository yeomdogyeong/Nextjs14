import { API_URL } from "@/app/movies/page";
import { get } from "http";

async function getCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  const json = await res.json();
  console.log(json);
  return json;
}

export default async function MovieCredits({ id }: { id: string }) {
  const credit = await getCredits(id);
  console.log(credit);
  return <div>{JSON.stringify(credit[0].popularity)}</div>;
}
