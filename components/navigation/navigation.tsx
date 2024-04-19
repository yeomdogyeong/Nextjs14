"use client";
import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NaviTab } from "../naviTab";
//styles 사용방법은 className = {styles.nav}
export const Navigation = () => {
  const pathname = usePathname();
  const isMoviePage = pathname.startsWith("/movies");
  const isDogPage = pathname.startsWith("/dog");

  if (isMoviePage) {
    return (
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
    );
  } else if (isDogPage) {
    return (
      <nav className="bg-pink-400 p-4 flex justify-between">
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
        <ul>
          <NaviTab name=" 🐶 cutiiiie dog" />
        </ul>
      </nav>
    );
  } else {
    return (
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
  }
};
