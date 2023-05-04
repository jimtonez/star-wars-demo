"use client"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { colorState } from "@/atoms/colorAtom"

interface Display {
    name: string,
    image: string,
    path: string
}

const ShipDisplay = ( char: Display ) => {

    return (
        <div className={`col-span-1 cursor-pointer shadow-b shadow-sm ease-in-out duration-300`}>
            <div className="flex relative flex-col items-center justify-center">
                <div className='flex h-20 w-20 md:h-24 md:w-24 items-center justify-center border border-yellow-600 rounded-full'>
                    <Image priority alt="" className={`h-[100%] w-[100%] rounded-full`} src={char.image} width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default ShipDisplay