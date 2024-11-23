"use client"
import NewsElement from "./newsElement"
import { getFirestore, getDoc, doc, collection, query, DocumentData, getDocs, setDoc } from "firebase/firestore";
import app from "@/app/firebase_config";
import { useEffect, useState } from "react";
export default function page() {
    const db = getFirestore(app);

    const [posts, setPosts] = useState<any>()

    const getData = () => {


        (async () => {
            const queri = query(collection(db, 'posts'),)
            const docs = await getDocs(queri)
            let ds: any[] = []
            docs.forEach(
                (e) => {

                    let { description, images, title } = e.data()
                    ds.push(
                        {
                            description, images, title
                        }
                    )
                }
            )
            console.log(ds);

            setPosts(ds)
        })()
    }
    useEffect(() => {
        console.log("hello effect");
        
        getData()
    }, [])

    return <main className="h-[100vh] overflow-scroll bg-[#DFE0AF] flex  justify-center items-center">
        <div className="scrolling h-[89vh] overflow-scroll lg:h-full pt-[7vh]">
            
              {posts &&  posts.map((e : any)=>{
                    return  <NewsElement title={e.title} description={e.description} images = {e.images}/>
                })
            } 
        </div>

    </main>
}

