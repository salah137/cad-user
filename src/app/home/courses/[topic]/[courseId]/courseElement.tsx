export default function CourseElement(props : any){
    return <div className="h-[5vh]  bg-[#a57b2d]  w-[90%] text-black flex justify-start items-center p-3 rounded-xl m-5">
        <h1><span className="font-black">#{props.id}</span> {props.title}</h1>
    </div>
}