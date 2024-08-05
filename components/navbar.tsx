"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink";
import { motion } from "framer-motion";
import { useTheme } from 'next-themes';
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="md:relative md:h-screen flex flex-col justify-between">
      <div className="flex flex-col text-xl md:items-center mt-10">
        {/* LOGO */}
        <h1 className="font-georgia hidden md:flex text-gray-100 logo mt-5 mr-12 clip-bottom">F</h1>

        {/* LINKS */}
        <div className="font-georgia hidden md:flex flex-col mt-10 gap-4">
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
                closed: { rotate: 0, backgroundColor: theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)' },
                opened: { rotate: 45, backgroundColor: theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)' },
              }}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 rounded origin-left"
            ></motion.div>
            <motion.div
              variants={{ closed: { opacity: 1 }, opened: { opacity: 0 } }}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 rounded ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></motion.div>
            <motion.div
              variants={{
                closed: { rotate: 0, backgroundColor: theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)' },
                opened: { rotate: -45, backgroundColor: theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)' },
              }}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 rounded origin-left"
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
              initial="closed"
              animate="opened"
              className="absolute top-0 right-0 w-screen h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
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

              <motion.div
                className="flex flex-col items-center mb-10"
                variants={{
                  closed: { x: -10, opacity: 0 },
                  opened: { x: 0, opacity: 1 },
                }}
              >
                <Separator className="mb-2" />
                <Button className="mb-5" variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* THEME TOGGLE */}
      <div className="hidden md:flex flex-col items-center mb-10">
        <Separator className="mb-2" />
        <Button className="mb-5" variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;