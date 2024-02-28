import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
