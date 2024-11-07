"use client"
import { useParams } from "next/navigation"
import img from '../../../img/Pasted image.png'
import Image from "next/image"
import { useRouter } from "next/router"
import Course from "./courseElement"
import Link from "next/link"
export default function page(){
    const params = useParams<{ topic: string }>()

    return <main className="pt-[7vh] w-[100vw] overflow-scroll h-dvh">
       <Link href={"design/dsds"}><Course /></Link> 
    </main>
}

