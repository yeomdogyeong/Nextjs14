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
          {pathname === "/" ? <span className="ml-1">💧</span> : ""}
        </li>
      </ul>
      <div>
        <Link href="/about-us">about us</Link>
      </div>
      <ul className="flex justify-end space-x-4">
        <li className="relative">
          <Link href="/tab/1">
            <span
              className={`cursor-pointer text-white ${
                pathname === "/tab1" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 1
            </span>
          </Link>
          {pathname === "/tab/1" ? <span className="ml-1">💧</span> : ""}
        </li>
        <li className="relative">
          <Link href="/tab2">
            <span
              className={`cursor-pointer text-white ${
                pathname === "/tab2" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 2
            </span>
          </Link>
          {pathname === "/tab2" ? <span className="ml-1">💧</span> : ""}
        </li>
        <li className="relative">
          <Link href="/tab3">
            <span
              className={`cursor-pointer text-white ${
                pathname === "/tab3" ? " text-white" : "text-gray-700"
              }`}
            >
              Tab 3
            </span>
          </Link>
          {pathname === "/tab3" ? <span className="ml-1">💧</span> : ""}
        </li>
      </ul>
    </nav>
  );
};
