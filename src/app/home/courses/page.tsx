"use client"
import desine from "../../../assets/design.jpeg"
import art from "../../../assets/art.jpeg"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function View() {
    const router = useRouter()

    return <main
        className="overflow-scroll w-[100vw] h-[95vh] bg-[#DFE0AF]    flex flex-col lg:flex-row md:flex-row justify-center items-center">
            
        <div onClick={
            ()=>{
                router.push("courses/design")
            }
        } className="w-[50vw] lg:w-[30vw] p-3 bg-[#a57b2d] rounded-2xl flex flex-col justify-around h-[25vh] lg:h-[50vh] md:h-[35vh]  m-5 hover:cursor-pointer">
            <Image src = {desine} alt = "design" className="rounded-2xl"/>
        </div>
        <div  onClick={
            ()=>{
                router.push("courses/art")
            }
        } className="w-[50vw] lg:w-[30vw] p-3 bg-[#a57b2d]  rounded-2xl flex flex-col justify-around h-[25vh] lg:h-[50vh] md:h-[35vh]  m-5 hover:cursor-pointer">
            <Image src = {art} alt = "design" className="rounded-2xl"/>
        </div>

    </main>
}