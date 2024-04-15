"use client";
import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NaviTab } from "./naviTab";

export const Navigation = () => {
  const pathname = usePathname();
  const isMoviePage = pathname.startsWith("/movies");

  return isMoviePage ? (
    <nav className="bg-blue-400 p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li className="flex justify-start">
          <Link href="/">
            <span
              className={`cursor-pointer text-white ${
                pathname === "/" ? " text-white" : "text-gray-700"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="bg-orange-400 p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li className="flex justify-start">
          <Link href="/">
            <span
              className={`cursor-pointer text-white ${
                pathname === "/" ? " text-white" : "text-gray-700"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
      </ul>

      <ul className="flex justify-end space-x-4">
        <NaviTab name="todo" />
        <NaviTab name="addTodo" />
        <NaviTab name="retouchTodo" />
      </ul>
    </nav>
  );
};
