"use client"
import { useRecoilState } from "recoil"
import { factionState } from "@/atoms/factionAtom"
import Rebels from "../Rebels"
import Imperials from "../Imperials"
import Build from "../Build"
import { characterState } from "@/atoms/characterAtom"
import { characterImageState } from "@/atoms/characterImageAtom"
import { shipState } from "@/atoms/shipAtom"
import { shipImageState } from "@/atoms/shipImageAtom"
import Colors from "./Colors"
import { formState } from "@/atoms/formAtom"
import ShipDisplay from "../ShipDisplay"

export default function Characters () {
    
    const [faction, setFaction] = useRecoilState(factionState)
    const [character, setCharacter] = useRecoilState(characterState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)
    const [currentStep, setCurrentStep] = useRecoilState(formState)
    const [ship, setShip] = useRecoilState(shipState)
    const [shipImage, setShipImage] = useRecoilState(shipImageState)

    
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
                <div className="flex flex-col col-span-1 lg:col-span-2 items-center justify-center">
                    {character ? (
                        <div className="flex flex-col lg:w-[450px] lg:h-[900px] items-center justify-start space-y-4">
                            <Build name={character} image={characterImage} path="" />
                            <Colors />
                                <div className={`hidden lg:flex`}>
                                    {ship ? (
                                        <>
                                            <ShipDisplay name={ship} image={shipImage} path="" />
                                        </>
                                        
                                    ) : (
                                        <div className="h-48 w-48 mt-4">
                                        </div>
                                    )}
                                </div>
                                <div className="hidden lg:flex lg:flex-col lg:h-[100px] w-full items-center justify-end">
                                <button className={`flex w-1/4 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80`} onClick={() => setCurrentStep("Ships")}>
                                    <span className="font-semibold text-teal-400 text-lg">Next</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div> 
        </div>
        </>
    )
}