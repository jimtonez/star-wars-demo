"use client"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import useHover from "@/hooks/useHover"
import { useRecoilState } from "recoil"
import { shipState } from "@/atoms/shipAtom"
import { shipImageState } from "@/atoms/shipImageAtom"

interface Slab {
    id: number,
    index: number
    name: string,
    image: string,
    path: string
    disabled: boolean
}

const Ship = ( slab: Slab ) => {

    const [hoverRef, isHovered] = useHover(false)
    const [ship, setShip] = useRecoilState(shipState)
    const [shipImage, setShipImage] = useRecoilState(shipImageState)

    const handleSetShip = ({...props}) => {
        setShip(props.name)
        setShipImage(props.image)
    }

    return (
        <>
        <button disabled={slab.disabled} ref={hoverRef as React.RefObject<HTMLDivElement>} onClick={() => handleSetShip({name: slab.name, image: slab.image})} key={slab.id} className={`col-span-1 relative aspect-w-2 aspect-h-2 border ${isHovered || slab.name === ship ? 'border-gray-700 backdrop-blur-sm bg-gray-800/20 scale-[102%]' : 'border-yellow-600 bg-inherit'} rounded-xl cursor-pointer shadow-lg shadow-black ease-in-out duration-300`}>
            <div className='flex w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 items-center justify-center'>
                <Image alt="" className={`${slab.name === "empty" ? 'hidden' : ''} h-[100%] w-[100%] rounded-xl`} src={slab.image} width={200} height={200} />
            </div>
        </button>
        </>
    )
}

export default Ship