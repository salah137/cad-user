import Image from "next/image"

export default function Course (props : any){
    return <div className="m-5 w-[90vw] lg:w-[70vw] flex flex-col lg:flex-row h-[fit-content] md:h-[50vh] lg:h-[30vh] bg-gradient-to-b from-[#F5A208] to-[#F1D49F] rounded-2xl p-5 hover:cursor-pointer">
        <Image src  ={props.img} alt ='dd' className="lg:w-[30%] lg:h-[25vh] md:h-[25vh] rounded-2xl w-full" width={200} height={200}/>
        <div className="text-black  m-5 flex flex-col overflow-hidden h-full pb-5">
            <h1 className="lg:text-3xl font-black mb-1">{props.title}</h1>
            <h2 className="text-sm">{props.description}</h2>
        </div>
    </div>
}