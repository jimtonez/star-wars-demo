"use client"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { colorState } from "@/atoms/colorAtom"

interface Icon {
    name: string,
    image: string,
    path: string
}

const ShipIcon = ( char: Icon ) => {

    const [color, setColor] = useRecoilState(colorState)

    return (
        <div className={`col-span-1 aspect-w-2 aspect-h-2 cursor-pointer shadow-b shadow-sm ease-in-out duration-300`}>
            <div className="flex relative flex-col items-center justify-center">
                <div className='flex h-24 w-24 items-center justify-center mt-4 border border-gray-700 rounded-full shadow-lg shadow-black'>
                    <Image priority alt="" className={`h-[100%] w-[100%] rounded-full`} src={char.image} width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default ShipIcon