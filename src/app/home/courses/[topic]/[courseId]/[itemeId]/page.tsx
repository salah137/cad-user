"use client"
import app from "@/app/firebase_config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function page() {
    const [item, setIteme] = useState<any>()
    const db = getFirestore(app)
    const params = useParams<{ topic: string, courseId: string, itemeId: string }>()

    useEffect(
        () => {
            (async () => {
                const docs = await getDoc(doc(db, `${params.topic}/${params.courseId}/items/${params.itemeId}`))
                console.log(docs.data());
                console.log(`${params.topic}/${params.courseId}/items/${params.itemeId}`);

                setIteme(docs.data())
            })()
        }, []
    )
    return <main className="h-[100%] overflow-scroll">
        {item && <div className="flex justify-center items-center flex-col">
            {item["video"] && <ReactPlayer
                width={window.screen.width < 900 ? "100vw" :  "80vw"}
                height={window.screen.width < 900 ? "40vh" :  "60vh"}
                url={item["video"]}
                controls={true}
                light={false}
                pip={true}
            />}
            <h1 className="text-black text-3xl m-1 lg:m-3">{item["title"]}</h1>
            
            <h3 className="text-black text-xl m-3 lg:ml-5">{item["description"]}</h3>
            
            {item.pdf &&<a href={item.pdf} target="_blank"><div className="bg-[#F5A208] w-[40vw] h-[10vh] text-5xl flex justify-center items-center rounded-xl cursor-pointer">
                <FaFilePdf />

            </div></a>}
        </div>
        }

    </main>
}

