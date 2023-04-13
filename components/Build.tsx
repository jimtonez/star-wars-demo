"use client"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import useHover from "@/hooks/useHover"
import { useRecoilState } from "recoil"
import { colorState } from "@/atoms/colorAtom"

interface Build {
    name: string,
    image: StaticImageData,
    path: string
}

const Character = ( char: Build ) => {

    const [color, setColor] = useRecoilState(colorState)

    return (
        <div className={`col-span-1 aspect-w-2 aspect-h-2 border border-gray-700 backdrop-blur-sm bg-gray-800/20 rounded-full cursor-pointer shadow-lg shadow-black ease-in-out duration-300 mb-12 lg:mt-20`}>
            <div className="flex relative flex-col items-center justify-center">
                <div className='flex h-48 w-48 items-center justify-center'>
                    <div className={`flex w-32 h-32 items-center justify-center ${color} rounded-full p-4`}>
                        <Image className={`h-[80%] w-[80%]`} alt="" src={char.image} />
                    </div>
                </div>
                <div className="flex min-w-[400px] absolute -bottom-12 items-center justify-center">
                    <h2 className="text-white text-4xl font-mono">{char.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default Character