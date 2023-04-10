"use client"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import useHover from "@/hooks/useHover"
import { useRecoilState } from "recoil"
import { characterState } from "@/atoms/characterAtom"
import { characterImageState } from "@/atoms/characterImageAtom"

interface Character {
    id: number,
    index: number
    name: string,
    image: StaticImageData,
    path: string
}

const Character = ( char: Character ) => {

    const [hoverRef, isHovered] = useHover(false)
    const [character, setCharacter] = useRecoilState(characterState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)

    const handleSetCharacter = ({...props}) => {
        setCharacter(props.name)
        setCharacterImage(props.image)
    }

    return (
        <>
        <div onClick={() => handleSetCharacter({name: char.name, image: char.image})} key={char.id} ref={hoverRef as React.RefObject<HTMLDivElement>} className={`col-span-1 relative aspect-w-2 aspect-h-2 border ${isHovered || char.name === character ? 'border-gray-700 backdrop-blur-sm bg-gray-800/20 scale-[102%]' : 'border-yellow-600 bg-inherit'} rounded-xl cursor-pointer shadow-b shadow-sm ease-in-out duration-300`}>
            <div className='flex w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 items-center justify-center'>
                <Image className='h-[50%] w-[50%] rounded-b-xl' alt="" src={char.image} />
            </div>
        </div>
        </>
    )
}

export default Character