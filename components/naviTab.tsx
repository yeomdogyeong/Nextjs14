"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NaviProps {
  name: string;
}

export const NaviTab: React.FC<NaviProps> = ({ name }) => {
  const pathname = usePathname();
  return (
    <li className="relative">
      <Link href={`/tab/${name}`}>
        <span
          className={`cursor-pointer ${
            pathname === `/tab/${name}` ? " text-white" : "text-gray-700"
          }`}
        >
          {name.toUpperCase()}
        </span>
      </Link>
    </li>
  );
};
