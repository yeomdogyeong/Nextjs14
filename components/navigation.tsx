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
          <Link href="/tab/1">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/1" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 1
            </span>
          </Link>
        </li>
        {/* <li className="relative">
          <Link href="/tab/2">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/2" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 2
            </span>
          </Link>
        </li>
        <li className="relative">
          <Link href="/tab/3">
            <span
              className={`cursor-pointer ${
                pathname === "/tab/3" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 3
            </span>
          </Link>
          {pathname === "/tab/3" ? <span className="ml-1">💧</span> : ""}
        </li> */}
      </ul>
    </nav>
  );
};
