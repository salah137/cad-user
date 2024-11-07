"use client"
import Image from "next/image"
import { useState } from "react"
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io"
export default function ImageSlider(props: any) {
    const [current, setCurrent] = useState(0)

    return <div className="relative w-full h-[80%]  bg-[rgb(0,0,0,0.2)] flex justify-center items-center p-5 rounded-xl">
        <Image src={props.images[current]} alt={"image"} className="mb-4  rounded-xl  lg:h-[50vh] z-0" />

        {props.images.length !=1 && <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hover:bg-[rgb(0,0,0,0.25)] pl-3 h-full flex justify-center items-center rounded-xl pr-3" onClick={
            () => {
                if (current == 0) {
                    setCurrent(
                        (c) => {
                            return props.images.length - 1
                        }
                    )
                } else {
                    setCurrent(
                        (c) => {
                            return c - 1
                        }
                    )
                }
            }
        }>
            <IoMdArrowDropleftCircle className="text-black text-2xl" />
        </div>
}
{props.images.length !=1 && <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hover:bg-[rgb(0,0,0,0.25)] pr-3 h-full flex justify-center items-center rounded-xl pl-3" onClick={

            () => {
                if (current == props.images.length - 1) {
                    setCurrent(
                        (c) => {
                            return 0
                        }
                    )
                } else {
                    setCurrent(
                        (c) => {
                            return c + 1
                        }
                    )
                }
            }
        }>
            <IoMdArrowDroprightCircle className="text-black text-2xl" />
        </div>
    }
    </div>
}