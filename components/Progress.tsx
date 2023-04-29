"use client"
import Image from "next/image"
import ShipDisplay from "@/components/ShipDisplay"
import { useRecoilState } from "recoil"
import { progressState } from "@/atoms/progressAtom"


interface Profile {
    username: string,
    name: string,
    image: string,
    shipImage: string,
    color: string,
}

const Progress = ( profile: Profile ) => {

    const [currentProgress, setCurrentProgress] = useRecoilState(progressState)
    const progress = currentProgress * 2

    return (
        <>
        <div className={`flex flex-col z-40 sticky top-20 md:top-4 w-full max-w-5xl ease-in-out duration-300 items-start justify-center z-20 rounded-full border border-gray-700 backdrop-blur-sm bg-gray-800/30 shadow-lg shadow-black p-2`}>
            <div className={`flex flex-row w-[${progress}%] items-center justify-end`}>
                <div className="flex w-auto h-auto z-10">
                    <ShipDisplay image={profile.shipImage} name={profile.name} path="" />
                </div>
            </div>
        </div>
        </>

    )
}

export default Progress