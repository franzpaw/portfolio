import Image from "next/image";
import { Button } from "@/components/ui/button"; // Importieren des Buttons
import { GraduationCap, Laptop, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react"; // Importieren der Icons von Shadcn UI

export default function Home() {
  return (
    <main className="container mx-auto mt-12">
      <div className="">
        <h1 className="font-georgia text-gray-100 text-5xl">Franz Pawlus</h1>
        <p className="mt-4 ">
          Hey, I'm Franz. I'm a <strong>student</strong> and <strong>aspiring fullstack-developer</strong> from Germany.
          <br/>bla bli bluu der graue mann im mond schaut zu
        </p>

        <div className="flex gap-10 justify-start items-center mt-10">
          <div>
            <Image
              src="/profil-pic.jpg" // Pfad zum Profilbild
              alt="Franz Pawlus"
              width={100}
              height={100}
              className="rounded-full mx-auto grayscale"
            />
          </div>
          <div className="flex flex-col text-gray-500">
            <p className="flex items-center hover:text-white "><Github className="mr-2 h-5" /> GitHub</p>
            <p className="flex items-center hover:text-white "><Instagram className="mr-2 h-5" /> Instagram</p>
            <p className="flex items-center hover:text-white "><Linkedin className="mr-2 h-5" /> LinkedIn</p>
          </div>
        </div>

        <div className="mt-10">
          <p>
            I'm a Next.js contributor and help lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js, and web development. I'm an advisor and investor in early stage startups.
          </p>
        </div>
        <div className="mt-10 flex">
          <a href="https://twitter.com/leerob" className="text-gray-500 flex items-center hover:text-white">
            <ArrowUpRight className="mr-1" /> my projects
          </a> 
          <a href="https://leerob.io" className="text-gray-500 flex items-center hover:text-white">
            <ArrowUpRight className="ml-4 mr-1" /> contact me
          </a>
        </div>
      </div>
    </main>
  );
}