import ImageSlider from "./imageSlider"

export default function NewsElement(props :any) {
    return <div className="  m-5 p-5 bg-[#a57b2d] text-black rounded-xl w-[90vw] lg:w-[60vw] lg:h-[fit-content] h-[fit-content]">
        <ImageSlider images = {props.images} />
        <h1 className="font-black text-3xl m-5">{props.title}</h1>
        <h2 className="">{props.description}</h2>
    </div>

}