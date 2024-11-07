import Image from "next/image"
import img from '../../../img/Pasted image.png'

export default function Course (){
    return <div onClick={
        ()=>{

        }
    } className="m-5 w-[90vw] lg:w-[70vw] flex flex-col lg:flex-row h-[60vh] md:h-[50vh] lg:h-[30vh] bg-gradient-to-b from-[#F5A208] to-[#F1D49F] rounded-2xl p-5 hover:cursor-pointer">
        <Image src  ={img} alt ='dd' className="lg:w-:[30%] lg:h-[25vh] md:h-[25vh] rounded-2xl"/>
        <div className="text-black  m-5 flex flex-col overflow-hidden h-full pb-5">
            <h1 className="lg:text-3xl font-black mb-1">course title</h1>
            <h2 className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nihil voluptates perspiciatis impedit, omnis non accusantium temporibus dolorem at enim explicabo qui amet rerum expedita possimus voluptatem velit, consectetur aspernatur.</h2>
        </div>
    </div>
}