"use client"
import desine from "../../../assets/design.jpeg"
import art from "../../../assets/art.jpeg"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function View() {
    const router = useRouter()

    return <main
        className="h-dvh bg-gradient-to-b from-[#5536F6] to-white   flex flex-col justify-center items-center">
            
        <div onClick={
            ()=>{
                router.push("courses/design")
            }
        } className="w-[50vw] p-3 bg-gradient-to-b from-[#F5A208] to-[#F1D49F] rounded-2xl flex flex-col justify-around h-[25vh] m-5 hover:cursor-pointer">
            <Image src = {desine} alt = "design" className="rounded-2xl"/>
        </div>
        <div  onClick={
            ()=>{
                router.push("courses/art")
            }
        } className="w-[50vw] p-3 bg-gradient-to-b from-[#F5A208] to-[#F1D49F] rounded-2xl flex flex-col justify-around h-[25vh] m-5 hover:cursor-pointer">
            <Image src = {art} alt = "design" className="rounded-2xl"/>
        </div>

    </main>
}