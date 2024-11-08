"use client"
import { useParams } from "next/navigation"
import Course from "./courseElement"
import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query } from "firebase/firestore"
import app from "../../../firebase_config"
export default function page() {
    const db = getFirestore(app);
   
    const params = useParams<{ topic: string }>()
    const [courses, setCourse] = useState<any>()

    const getData = () => {
        (async () => {
            const queri = query(collection(db, `${params.topic}`),)
            const docs = await getDocs(queri)
            let ds: any[] = []
            docs.forEach(
                (e) => {

                    let { description, image, title } = e.data()
                    ds.push(
                        {
                            description, image, title, id : e.id
                        }
                    )
                }
            )
            console.log(ds);

            setCourse(ds)
        })()
    }
    useEffect(
        ()=>{
            getData()
        },[]
    )
    return <main className="w-[100vw] overflow-scroll h-[95vh]">
      <div className="mt-[10vh]"> {
        courses && courses.map(
            (e : any)=>{
                console.log(e.title);
                
                return <Link href={`${params.topic}/${e.id}`}><Course title = {e.title} img = {e.image} description = {e.description}/></Link>
            }
        )
       }</div>
    </main>
}

