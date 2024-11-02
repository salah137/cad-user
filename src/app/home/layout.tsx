"use client"

import logo from "../../assets/logo.png";
import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiNewspaperFill } from "react-icons/ri";
import { FaSearchPlus } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { Metadata } from "next";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <header className="fixed bg-[#5536F6] p-5 w-full flex flex-row items-center lg:h-[5vw] lg:flex lg:justify-end">
          <Image src={logo} alt="logo" className="w-[20vw] lg:w-[5vw]" />
          <h2 className="ml-12 text-2xl font-title lg:hidden ">club art et design</h2>
        </header>

        <div className="lg:flex">
          <div className="hidden lg:block w-[30vw] h-[100vh] bg-[#5536F6] pt-[10vh]">
            <div onClick={
              ()=>{
                router.push('/home/newspaper')
              }
            } className="w-full p-3 flex justify-around text-3xl hover:cursor-pointer hover:bg-white hover:text-[#5536F6] h-[10vh] items-center">
              <RiNewspaperFill /> <h1 className="">newspaper</h1>
            </div>
            <div onClick={
              ()=>{
                router.push('/home/coursera')
              }
            } className="w-full p-3 flex justify-around text-3xl hover:cursor-pointer hover:bg-white hover:text-[#5536F6] h-[10vh] items-center">
              <SiCoursera /> <h1 className="">coursera</h1>
            </div>
            <div onClick={
              ()=>{
                router.push('/home/about')
              }
            } className="w-full p-3 flex justify-around text-3xl hover:cursor-pointer hover:bg-white hover:text-[#5536F6] h-[10vh] items-center">
              <FaSearchPlus /> <h1 className="">about</h1>
            </div>
          </div>
          {children}
        </div>

        <footer className="fixed bg-[#F5A208] h-[5vh] w-full top-[95vh] rounded-tl-3xl rounded-tr-3xl flex flex-row justify-around items-center pt-1 lg:hidden">
          <div
            className="left-icone text-4xl flex md:w-[60vw] justify-center items-center"
            onClick={() => {
              router.push(`/home/${usedIcon[0]}`)

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
            <h4 className=" ml-5 hidden md:block">{`${usedIcon[0]}`}</h4>
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
            className="left-icone text-4xl flex md:w-[60vw] justify-center items-center"
            onClick={async () => {

              router.push(`/home/${usedIcon[2]}`)


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
            <h4 className="hidden mr-5 md:block" >{`${usedIcon[2]}`}</h4>

            {iconComponents.get(`${usedIcon[2]}`)}

          </div>
        </footer>

      </body>
    </html>
  );
}
