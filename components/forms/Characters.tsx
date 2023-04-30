"use client"
import { useRecoilState } from "recoil"
import { factionState } from "@/atoms/factionAtom"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import Rebels from "../Rebels"
import Imperials from "../Imperials"
import Build from "../Build"
import { characterState } from "@/atoms/characterAtom"
import { characterImageState } from "@/atoms/characterImageAtom"
import { shipState } from "@/atoms/shipAtom"
import { shipImageState } from "@/atoms/shipImageAtom"
import Colors from "./Colors"
import { formState } from "@/atoms/formAtom"
import FinalBuild from "../FinalBuild"
import ShipIcon from "../ShipIcon"

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
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl h-full w-full">   
            <div className="flex items-center lg:items-start justify-center col-span-1 lg:col-span-4 flex-col-reverse lg:flex-row">
                <div className={`flex col-span-1 lg:col-span-2 flex-col items-center justify-center`}>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-teal-400 text-3xl sm:text-5xl p-4'>Select your character...</h1>
                    </div>
                    {renderCharacters()}
                </div>
                <div className="flex flex-col col-span-1 lg:col-span-2 items-center justify-center">
                    {character ? (
                        <div className="flex flex-col w-full lg:w-[450px] h-auto items-center justify-start space-y-4 mt-4 lg:mt-12">
                            <div className="flex relative w-full flex-row items-center justify-around space-x-10 lg:space-x-4 lg:justify-center">
                                <button className={`flex lg:hidden w-auto items-center justify-center mb-12 sm:px-2 sm:py-2 rounded-3xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Factions")}>
                                   <ArrowLeftCircleIcon className="h-16 w-16 text-teal-400 p-1" />
                                </button>
                                <FinalBuild name={character} ship={ship} userImage={characterImage} shipImage={shipImage} path="" />
                                <button disabled={!character} className={`flex lg:hidden w-auto items-center justify-center mb-12 sm:px-2 sm:py-2 rounded-3xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%] z-10`} onClick={() => setCurrentStep("Ships")}>
                                    <ArrowRightCircleIcon className="h-16 w-16 text-teal-400 p-1" />
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-end w-full h-full">
                                <Colors />
                            </div>
                            <div className="hidden lg:flex lg:flex-row w-full pt-20 items-center justify-around">
                                <button className={`flex w-1/4 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Factions")}>
                                    <span className="font-semibold text-teal-400 text-lg">Back</span>
                                </button>
                                <button className={`flex w-1/4 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Ships")}>
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