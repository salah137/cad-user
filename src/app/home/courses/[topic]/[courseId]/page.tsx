"use client"
import Link from "next/link";
import CourseElement from "./courseElement";
import { useParams } from "next/navigation";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "@/app/firebase_config";
import { useEffect, useState } from "react";

export default function page(){
    const params = useParams<{ topic: string, courseId: string }>()
    const db  = getFirestore(app)

    const [items,setItems] = useState<any>()

    const getItems = () => {
        (async () => {
            console.log(params);

            const qurie = query(collection(db, `${params.topic}/${params.courseId}/items`))
            const docs = await getDocs(qurie)
            let ds: any[] = []
            docs.forEach(
                (e) => {
                    let { title } = e.data()
                    console.log(title);
                    
                    ds.push(
                        {
                            title,
                            id : e.id       
                        }
                    )
                }
            )
            console.log(ds);

            setItems(ds)

        })()
    }
    useEffect(()=>{
        getItems()
    },[])
    return <main className="h-dvh pt-[7vh] w-full lg:w-[60vw]  overflow-y-scroll pb-[4vh] ">
      <div className="mt-[5vh]">  {items &&
            items.map(
                (e:any)=>{
                    return <Link href={`${params.courseId}/${e.id}`} > <CourseElement id = {e.id} title = {e.title}></CourseElement></Link>
                }
            )
        }</div>
       

    </main>
}