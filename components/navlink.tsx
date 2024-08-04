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
    <Link className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default Navlink;