"use client"
import Image from "next/image"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"

interface Icon {
    name: string,
    image: string,
    path: string
}

const ProfileShip= ( char: Icon ) => {

    return (
        <div className={`col-span-1 aspect-w-2 aspect-h-2 cursor-pointer shadow-b shadow-sm ease-in-out duration-300`}>
            <div className="flex relative flex-col items-center justify-center">
                <div className='flex h-24 w-24 items-center justify-center mt-4 border border-gray-700 bg-zinc-900 rounded-full shadow-lg shadow-black'>
                    {char.image ? (
                        <Image priority alt="" className={`h-[100%] w-[100%] rounded-full`} src={char.image} width={500} height={500} />
                    ) : (
                        <RocketLaunchIcon className="h-12 w-12 text-blue-400" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileShip