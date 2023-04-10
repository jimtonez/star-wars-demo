"use client"
import { useRecoilState } from "recoil"
import { factionState } from "@/atoms/factionAtom"
import Rebels from "../Rebels"
import Imperials from "../Imperials"
import Build from "../Build"
import { characterState } from "@/atoms/characterAtom"
import { characterImageState } from "@/atoms/characterImageAtom"
import Colors from "./Colors"

export default function Characters () {
    
    const [faction, setFaction] = useRecoilState(factionState)
    const [character, setCharacter] = useRecoilState(characterState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)
    
    const renderCharacters = () => {
        if (faction === "Rebels") {
            return (
                <Rebels />
            )
        } else if (faction === "Imperials") {
            return (
                <Imperials />
            )
        }
    }

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl">   
            <div className="flex items-center justify-center col-span-1 lg:col-span-4 flex-col-reverse lg:flex-row">
                <div className={`flex col-span-1 lg:col-span-2 flex-col items-center justify-center`}>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-teal-400 text-3xl sm:text-5xl p-4'>Select your character...</h1>
                    </div>
                    {renderCharacters()}
                </div>
                <div className="flex flex-col col-span-1 lg:col-span-2 items-center justify-center lg:mt-0">
                    {character ? (
                        <div className="flex flex-col lg:w-[450px] lg:h-screen items-center justify-start space-y-4">
                            <Build name={character} image={characterImage} path="" />
                            <Colors />
                        </div>
                    ): (
                        <>
                        </>
                    )}
                </div>
            </div> 
        </div>
        </>
    )
}