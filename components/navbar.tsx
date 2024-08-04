"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import NavLink from "./navlink";
import {motion} from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div>
      <div className="h-full flex flex-col justify-between px-4 text-xl md:flex-col md:items-center max">
        {/* LINKS */}
        <div className="hidden md:flex flex-col gap-4 ">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>


        {/* RESPONSIVE MENU */}
        <div className="md:hidden flex items-end absolute top-0 right-0">
          {/* MENU BUTTON */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 absolute top-3 right-3"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={{
                closed: { rotate: 0 },
                opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
              }}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={{ closed: { opacity: 1 }, opened: { opacity: 0 } }}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={{
                closed: { rotate: 0 },
                opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
              }}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {open && (
            <motion.div
              variants={{
                closed: { x: "100vw" },
                opened: {
                  x: 0,
                  transition: { when: "beforeChildren", staggerChildren: 0.2 },
                },
              }}
              initial="closed "
              animate="opened"
              className="absolute top-0 right-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={{
                    closed: { x: -10, opacity: 0 },
                    opened: { x: 0, opacity: 1 },
                  }}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;