"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Definiere den Typ für das Link-Objekt
interface LinkType {
  url: string;
  title: string;
}

interface NavlinkProps {
  link: LinkType;
}

const Navlink: React.FC<NavlinkProps> = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`px-5 py-1 rounded ${pathName === link.url ? "dark:bg-[#262626] bg-gray-100 bg-opacity-70 w-min text-black dark:text-white" : ""}`} href={link.url}>
  {link.title}
</Link>
  );
};

export default Navlink;