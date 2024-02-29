"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

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

      <ul className="flex justify-end space-x-4">
        <li className="relative">
          <Link href="/tab/todo">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/todo" ? " text-white" : "text-gray-700"
              }`}
            >
              Todo
            </span>
          </Link>
        </li>
        <li className="relative">
          <Link href="/tab/addTodo">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/addTodo" ? " text-white" : "text-gray-700"
              }`}
            >
              addTodo
            </span>
          </Link>
        </li>
        <li className="relative">
          <Link href="/tab/retouchTodo">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/retouchTodo"
                  ? " text-white"
                  : "text-gray-700"
              }`}
            >
              retouchTodo
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
