import img from "../img/Pasted image.png"
import Image from "next/image"
export default function View(){
    return <main className="h-dvh bg-gradient-to-b from-[#5536F6] to-white   flex  justify-center items-center">
        <div className="h-[89vh] overflow-scroll ">
        {element()}
        {element()}
        {element()}
        {element()}
        {element()}
        </div>

    </main>
}

const element = ()=>{
    return <div className="m-5 p-5 bg-gradient-to-b from-[#F5A208] to-[#F1D49F] text-black rounded-xl ">
        <Image src = {img} alt = "ximage" className="mb-4 rounded-xl"/>
        <h1 className="font-black text-3xl">title balabama</h1>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, debitis vitae! Et vitae voluptates sequi quo perspiciatis eius dolores. Rem, mollitia ducimus sed laudantium distinctio tempora commodi deserunt explicabo nihil.</h2>
    </div>
}