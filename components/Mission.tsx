import Image from "next/image";
import { useRouter } from 'next/navigation'
import useHover from "@/hooks/useHover"
import { ArrowRightCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { profile } from "console";

interface Mission {
    name: string,
    index: number,
    image: string,
    enabled: boolean
}

export default function Mission ( mission: Mission) {

    const [hoverRef, isHovered] = useHover(false);
    const missionName = mission.name.toLowerCase()
    const router = useRouter()

    const handleClick = (name: string) => {
        if (mission.index > 0){
            return
        } else {
            router.push(`/missions/${missionName}`)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <p className='md:hidden text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-mono'>{mission.name}</p>
            <button onClick={() => handleClick(missionName)} ref={hoverRef as React.RefObject<HTMLDivElement>} className={`flex ${mission.enabled ? 'cursor-pointer' : ''} flex-col col-span-1 h-full w-auto lg:w-full border ${!isHovered ? 'border-yellow-600 bg-inherit' : 'border-gray-700 bg-gray-800/20 scale-[101%]'} rounded-xl shadow-lg shadow-black`}>
                <div className={`hidden md:flex w-full h-14 lg:h-20 items-center justify-center rounded-t-xl border-b ${!isHovered ? 'border-yellow-600 bg-zinc-900' : 'bg-zinc-900 border-gray-700'} ease-in-out duration-300`}>
                    <p className='text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-mono'>{mission.name}</p>
                    <div className={`${isHovered ? 'flex' : 'hidden'} absolute items-center justify-center right-4 h-10 w-10 lg:h-12 lg:w-12 rounded-2xl lg:border-2 ${mission.enabled ? 'border-green-400 text-green-400' : 'border-red-600 text-red-600'} hover:scale-[101%] ease-in-out duration-300`}>
                        {mission.enabled ? (
                            <ArrowRightCircleIcon className="h-9 w-9" />
                        ) : (
                            <LockClosedIcon className="h-8 w-8" />
                        )} 
                    </div>
                </div>
                <div className="flex w-auto h-auto">
                    <Image className="rounded-xl md:rounded-none md:rounded-b-xl object-cover opacity-60" alt="" src={mission.image} width={500} height={400} />
                </div>
            </button>
        </div>
    )
}