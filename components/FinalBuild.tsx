"use client"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import useHover from "@/hooks/useHover"
import { useRecoilState } from "recoil"
import { colorState } from "@/atoms/colorAtom"
import ShipIcon from "./ShipIcon"

interface Build {
    name: string,
    userImage: StaticImageData,
    ship: string,
    shipImage: string,
    path: string
}

const FinalBuild = ( char: Build ) => {

    const [color, setColor] = useRecoilState(colorState)

    return (
        <div className={`col-span-1 border border-gray-700 backdrop-blur-sm bg-gray-800/20 rounded-full shadow-lg shadow-black ease-in-out duration-300 mb-12`}>
            <div className="flex relative flex-col items-center justify-center">
                <div className='flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center'>
                    <div className={`flex w-28 h-28 sm:w-32 sm:h-32 items-center justify-center ${color} rounded-full p-4`}>
                        <Image className={`h-[80%] w-[80%]`} alt="" src={char.userImage} />
                    </div>
                </div>
                <div className="flex min-w-[400px] absolute -bottom-12 items-center justify-center">
                    <h2 className="text-white text-3xl sm:text-4xl font-mono">{char.name}</h2>
                </div>
                <div className={`flex absolute -top-16 -right-4 sm:-right-8 w-1/2`}>
                    <ShipIcon name={char.ship} image={char.shipImage} path="" />
                </div>
            </div>
        </div>
    )
}

export default FinalBuild