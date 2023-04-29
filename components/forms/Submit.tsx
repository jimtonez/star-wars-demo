"use client"
import { useRecoilState } from "recoil"
import { PlayIcon } from "@heroicons/react/24/outline"
import { factionState } from "@/atoms/factionAtom"
import { useSession } from "next-auth/react"
import { characterState } from "@/atoms/characterAtom"
import { shipState } from "@/atoms/shipAtom"
import { characterImageState } from "@/atoms/characterImageAtom"
import { shipImageState } from "@/atoms/shipImageAtom"
import { formState } from "@/atoms/formAtom"
import Hangar from "../Hangar"
import { colorState } from "@/atoms/colorAtom"
import { useRouter } from 'next/navigation'

export default function Submit () {
    
    const [faction, setFaction] = useRecoilState(factionState)
    const [character, setCharacter] = useRecoilState(characterState)
    const [ship, setShip] = useRecoilState(shipState)
    const [characterImage, setCharacterImage] = useRecoilState(characterImageState)
    const [shipImage, setShipImage] = useRecoilState(shipImageState)
    const [ selectedColor, setSelectedColor] = useRecoilState(colorState)
    const [currentStep, setCurrentStep] = useRecoilState(formState)

    const { data: session } = useSession()
    const router = useRouter()

    async function handleSubmit  (e: any)  {
        const newUser = {
            user_email: session?.user?.email,
            user_name: session?.user?.name,
            character_name: character,
            image: character,
            ship_url: shipImage,
            color: selectedColor
        }
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        const uuid = data.user_id
        router.push(`/profile/${uuid}`)
    }

    return (
        <>
        <div className={`grid grid-cols-1 lg:grid-cols-4 max-w-7xl w-full h-full space-y-4`}>
            <div className="flex items-center justify-center col-span-1 lg:col-span-4 flex-col space-y-4">
                <div className={`flex col-span-1 lg:col-span-4 flex-col items-center justify-center space-y-4`}>
                    <Hangar name={ship} charImage={characterImage} shipImage={shipImage} path={''} />
                </div>
            </div>
            <div className="flex flex-col col-span-1 lg:col-span-4 items-center justify-between">                            
                    <div className="flex flex-col h-[250px] w-[400px] items-center justify-around space-y-4">
                        <button disabled={!ship} className={`flex w-36 h-36 items-center justify-center px-6 py-3 rounded-full bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[105%]`} onClick={(e) => handleSubmit(e)}>
                            <PlayIcon className="text-teal-400 h-16 h-16 ml-2" />
                        </button>
                        <button className={`flex w-1/3 items-center justify-center px-6 py-3 rounded-xl bg-inherit border border-yellow-600 shadow-lg shadow-black hover:border-gray-700 transition hover:bg-zinc-800/30 hover:opacity-80 hover:scale-[102%]`} onClick={() => setCurrentStep("Ships")}>
                            <span className="font-semibold text-teal-400 text-lg">Back</span>
                        </button>
                    </div>
            </div>
        </div> 
        </>
    )
}