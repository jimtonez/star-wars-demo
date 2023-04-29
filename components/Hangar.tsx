"use client"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { characterImageState } from "@/atoms/characterImageAtom"
import { shipImageState } from "@/atoms/shipImageAtom"
import { characterState } from "@/atoms/characterAtom"
import { shipState } from "@/atoms/shipAtom"
import { colorState } from "@/atoms/colorAtom"
import FinalBuild from '@/components/FinalBuild'
import ShipIcon from "./ShipIcon"


interface Display {
    name: string,
    charImage: string,
    shipImage: string,
    path: string
}

const Hangar = ( submit: Display ) => {

    const [color, setColor] = useRecoilState(colorState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)
    const [shipImage, setShipImage] = useRecoilState(shipImageState)
    const [character, setCharacter] = useRecoilState(characterState)
    const [ship, setShip] = useRecoilState(shipState)

    return (
        <div className="flex w-full flex-row items-center justify-around space-x-10 lg:space-x-0">
            <FinalBuild name={character} ship={ship} userImage={characterImage} shipImage={shipImage} path="" />
        </div>
    )
}

export default Hangar