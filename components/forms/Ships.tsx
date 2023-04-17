"use client"
import { useRecoilState } from "recoil"
import { ArrowLeftCircleIcon, PlayIcon } from "@heroicons/react/24/outline"
import { factionState } from "@/atoms/factionAtom"
import Fleet from "../Fleet"
import Build from "../Build"
import { useSession } from "next-auth/react"
import { characterState } from "@/atoms/characterAtom"
import { shipState } from "@/atoms/shipAtom"
import { characterImageState } from "@/atoms/characterImageAtom"
import { shipImageState } from "@/atoms/shipImageAtom"
import Colors from "./Colors"
import { formState } from "@/atoms/formAtom"
import ShipDisplay from "../ShipDisplay"
import ShipIcon from '../ShipIcon'

export default function Ships () {
    
    const [faction, setFaction] = useRecoilState(factionState)
    const [character, setCharacter] = useRecoilState(characterState)
    const [ship, setShip] = useRecoilState(shipState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)
    const [shipImage, setShipImage] = useRecoilState(shipImageState)
    const [currentStep, setCurrentStep] = useRecoilState(formState)

    const { data: session } = useSession()
    
    const renderShips = () => {
        if (faction === "Rebels") {
            return (
                <Fleet />
            )
        } else if (faction === "Imperials") {
            return (
                <Fleet />
            )
        }
    }

    const handleSubmit = () => {
        // setCurrentStep("Characters")
        
    }

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl h-full">   
            <div className="flex items-center justify-center col-span-1 lg:col-span-4 flex-col-reverse lg:flex-row">
                <div className={`flex col-span-1 lg:col-span-2 flex-col items-center justify-center`}>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-teal-400 text-3xl sm:text-5xl p-4'>Select your ship...</h1>
                    </div>
                    {renderShips()}
                </div>
                <div className="flex flex-col col-span-1 lg:col-span-2 items-center justify-center">
                    {character ? (
                        <div className="flex flex-col lg:w-[450px] lg:h-[900px] items-center justify-start space-y-4 mt-10 lg:mt-0">
                            <div className="flex relative w-full flex-row items-center justify-around">
                                <button className={`flex lg:hidden w-auto items-center justify-center mb-12 px-2 py-2 rounded-3xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Characters")}>
                                   <ArrowLeftCircleIcon className="h-16 w-16 text-teal-400 p-1" />
                                </button>
                                <Build name={character} image={characterImage} path="" />
                                <div className={`${ship ? 'flex'  : 'hidden'} lg:hidden absolute -top-12 right-20 sm:right-40 md:right-52`}>
                                   <ShipIcon name={ship} image={shipImage} path="" />
                                </div>
                                <button disabled={!ship} className={`flex lg:hidden w-auto items-center justify-center mb-12 px-2 py-2 rounded-3xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Characters")}>
                                    <PlayIcon className="h-16 w-16 text-teal-400 p-1" />
                                </button>
                            </div>
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
                                <div className="hidden lg:flex lg:flex-row lg:h-[150px] w-[400px] items-center justify-around">
                                <button className={`flex w-1/4 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Characters")}>
                                    <span className="font-semibold text-teal-400 text-lg">Back</span>
                                </button>
                                <button disabled={!ship} className={`${!ship ? 'hidden' : 'flex'} w-1/2 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={handleSubmit}>
                                    <span className="font-semibold text-teal-400 text-lg">Play</span>
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