"use client"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import useHover from "@/hooks/useHover"
import { ArrowRightCircleIcon, ForwardIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { factionState } from "@/atoms/factionAtom"
import { formState } from "@/atoms/formAtom"

interface Faction {
    id: number,
    name: string,
    alias: string,
    image: StaticImageData,
    path: string
}

const Faction = ( faction: Faction ) => {

    const [hoverRef, isHovered] = useHover(false)
    const [side, setSide] = useRecoilState(factionState)
    const [currentStep, setCurrentStep] = useRecoilState(formState)

    const handleSelect = (team: string) => {
        setSide(team)
        setCurrentStep("Characters")
    }

    return (
        <>
        <div onClick={() => handleSelect(faction.alias)}>
        <div key={faction.id} ref={hoverRef as React.RefObject<HTMLDivElement>} className={`flex-col relative aspect-w-3 aspect-h-2 border ${!isHovered ? 'border-yellow-600 bg-inherit' : 'border-gray-700 backdrop-blur-sm bg-gray-800/20 scale-[102%]'} rounded-xl cursor-pointer shadow-b shadow-sm ease-in-out duration-300`}>
            <div className={`flex w-full h-20 lg:h-24 items-center justify-center rounded-t-xl border-b ${!isHovered ? 'border-yellow-600 bg-zinc-900' : 'bg-zinc-900 border-gray-700'} ease-in-out duration-300`}>
                <p className='text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl'>{faction.name}</p>
                <div className={`${isHovered ? 'flex' : 'hidden'} absolute items-center justify-center right-4 h-14 w-14 lg:h-16 lg:w-16 rounded-2xl border-2 border-green-400 text-green-400 hover:scale-[101%] hover:border-green-300 hover:text-green-300 ease-in-out duration-300`}>
                    <ArrowRightCircleIcon className="h-10 w-10 lg:h-12 lg:w-12" />
                </div>
            </div>
            <div className='flex w-full h-auto items-center justify-center p-4 sm:p-8 md:p-4 lg:p-8'>
                <Image priority className='h-[90%] w-[90%] rounded-b-xl' alt="" src={faction.image} />
            </div>
        </div>
        </div>
        </>
    )
}

export default Faction