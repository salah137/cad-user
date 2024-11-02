"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter()
  useEffect(
    ()=>{
      router.push("/home/newspaper")
    }
  )
  return (
    <main className="flex justify-center items-center h-dvh flex-col">
      <Image src = {logo} alt='logo'></Image>
      <h1 className="text-5xl">. . .</h1>
    </main>
  );
}
