"use client"
import Image from "next/image"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import ShipDisplay from "@/components/ShipDisplay"
import { useRecoilState } from "recoil"
import { instructionState } from "@/atoms/instructionAtom"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"


interface Profile {
    username: string,
    name: string,
    image: string,
    shipImage: string,
    color: string,
}

const Progress = ( profile: Profile ) => {

    const [currentProgress, setCurrentProgress] = useRecoilState(instructionState)
    const router = useRouter()
    const { data: session } = useSession()

    async function handleComplete (e: any)  {
        const completed = true
        const email = session?.user?.email
        
        e.preventDefault()
        
        const res = await fetch(`/api/users`, {
            method: "POST",
            cache: 'no-store',
            body: email
        });
        const dbuser = await res.json();
        const updateUser = {
            user_id: dbuser.user_id,
            user_email: dbuser.user_email,
            user_name: dbuser.user_name,
            character_name: dbuser.character_name,
            image: dbuser.image,
            ship_url: dbuser.ship_url,
            color: dbuser.color,
            enabled: true,
            complete: true
        }

        if (dbuser.user_email == email) {
            const res = await fetch(`/api/users/update`, {
                method: "POST",
                cache: 'no-store',
                body: JSON.stringify(updateUser)
            });
            const update = await res.json()
            console.log(update)
            router.push(`/profile/${dbuser.user_id}`)
        } else {
            router.push(`/profile/`)
        }
    }

    return (
        <>
        <div className={`flex flex-col z-40 sticky top-20 md:top-4 w-full max-w-screen lg:max-w-5xl ease-in-out duration-300 items-start justify-center z-20 rounded-full border border-gray-700 backdrop-blur-sm bg-gray-800/30 shadow-lg shadow-black p-2`}>
            <div className={`grid grid-rows-1 grid-cols-8 items-center justify-center w-full`}>
                <div className={`${currentProgress > 7 ? 'flex absolute items-center justify-center' : 'hidden'} w-full h-auto`}>
                    <button onClick={handleComplete} className="flex items-center justify-center h-14 w-auto space-x-2 p-4 bg-green-400 rounded-xl cursor-pointer hover:scale-[101%] z-50">
                        <p className="text-black text-xl">Complete</p>
                        <CheckBadgeIcon className="h-9 w-9" />
                    </button>
                </div>
                <div className={`flex items-center justify-end col-span-${currentProgress} w-full h-auto ${currentProgress > 7 ? 'ml-0' : 'ml-4'} sm:ml-0 z-10`}>
                    <ShipDisplay image={profile.shipImage} name={profile.name} path="" />
                </div>
            </div>
        </div>
        </>

    )
}

export default Progress