"use client"
import { RocketLaunchIcon, CheckBadgeIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useRecoilState } from "recoil"
import { profileState } from "@/atoms/profileAtom"


function ProfileMenu () {

    const [currentTab, setCurrentTab] = useRecoilState(profileState)

    return (
        <div className="flex flex-row items-center justify-center w-auto h-auto space-x-2 md:space-x-4">
            <div onClick={() => setCurrentTab("Missions")} className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full cursor-pointer hover:bg-zinc-900 hover:scale-[105%] p-1 lg:p-0 ${currentTab === "Missions" ? 'bg-zinc-900 border border-gray-700' : ''}`}>
                <RocketLaunchIcon className={`h-8 w-8 md:h-10 md:w-10 hover:text-blue-400 ${currentTab === "Missions" ? 'text-blue-400' : 'text-teal-400'}`} />
            </div>
            <div onClick={() => setCurrentTab("Badges")} className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full cursor-pointer hover:bg-zinc-900 hover:scale-[105%] p-1 lg:p-0 ${currentTab === "Badges" ? 'bg-zinc-900 border border-gray-700' : ''}`}>
                <CheckBadgeIcon className={`h-8 w-8 md:h-10 md:w-10 hover:text-yellow-400 ${currentTab === "Badges" ? 'text-yellow-400' : 'text-teal-400'}`} />
            </div>
            <div onClick={() => setCurrentTab("Delete")} className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full cursor-pointer hover:bg-zinc-900 hover:scale-[105%] p-1 lg:p-0 ${currentTab === "Delete" ? 'bg-zinc-900 border border-gray-700' : ''}`}>
                <TrashIcon className={`h-8 w-8 md:h-10 md:w-10 hover:text-red-600 ${currentTab === "Delete" ? 'text-red-600' : 'text-teal-400'}`} />
            </div>
        </div>
    )
}

export default ProfileMenu