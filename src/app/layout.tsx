"use client"
import localFont from "next/font/local";
import "./globals.css";

import logo from "../assets/logo.png";
import Image from "next/image";
import "./globals.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiNewspaperFill } from "react-icons/ri";
import { FaSearchPlus } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toNavi =  {
    RiNewspaperFill  : "news",
    SiCoursera : "courses",
    FaSearchPlus : "explore"
  }

  const iconComponents = new Map([
    ['newspaper', <RiNewspaperFill />],
    ['coursera', <SiCoursera />],
    ['about', <FaSearchPlus />]
  ]);

  
  const [usedIcon, setUsedIcon] = useState(['newspaper', 'coursera', 'about']);
  const controller = useAnimationControls()
  const router = useRouter()


  return (
    <html lang="en">
      <body
          className=" bg-gradient-to-b from-[#5536F6] to-white overflow-scroll"
      >
        <header className="fixed bg-[#5536F6] p-5 w-full flex flex-row items-center ">
          <Image src={logo} alt="logo" className="w-[20vw]" />
          <h2 className="ml-12 text-2xl font-title">club art et design</h2>
        </header>

        {children}

          <footer className="fixed bg-[#F5A208] h-[5vh] w-full top-[95vh] rounded-tl-3xl rounded-tr-3xl flex flex-row justify-around items-center">
            <div
              className="left-icone text-4xl"
              onClick={() => {
                  router.push(`/${usedIcon[0]}`)

                setUsedIcon((s: any) => {

                  return [s[1], s[0], s[2]];
                });
                controller.start("flip").then(
                  () => {
                    controller.start("rot")
                  }
                )

              }}
            >
              {iconComponents.get(`${usedIcon[0]}`)}
            </div>

            <motion.div
              animate={
                controller
              }
              variants={
                {
                  rot: {
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0 },
                  },
                  flip: {
                    scale: 1.25,
                    rotate: 360,
                    transition: { duration: 0.25 },

                  }
                }

              }


              className="bg-[#ADA2D0] h-[8vh] w-[8vh]  mb-12 rounded-lg text-4xl text-black flex justify-center items-center">
              <div className="rotate-[300deg]">{iconComponents.get(`${usedIcon[1]}`)}</div>
            </motion.div>

            <div
              className="left-icone text-4xl"
              onClick={async () => {

                router.push(`/${usedIcon[2]}`)


                setUsedIcon((s: any) => {
                  return [s[0], s[2], s[1]];
                });
                controller.start("flip").then(
                  () => {
                    controller.start("rot")

                  }
                )

              }}
            >
              {iconComponents.get(`${usedIcon[2]}`)}
            </div>
          </footer>
     
      </body>
    </html>
  );
}
