import ImageSlider from "./imageSlider"

export default function NewsElement(props :any) {
    return <div className="  m-5 p-5 bg-gradient-to-b from-[#F5A208] to-[#F1D49F] text-black rounded-xl w-[90vw] lg:w-[60vw] lg:h-[fit-content] h-[60vh]">
        <ImageSlider images = {props.images} />
        <h1 className="font-black text-3xl">{props.title}</h1>
        <h2>{props.description}</h2>
    </div>

}