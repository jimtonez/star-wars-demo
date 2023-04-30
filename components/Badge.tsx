import useHover from "@/hooks/useHover"
import { ArrowRightCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface Badge {
    name: string,
    description: string,
    icon: string,
    completed: boolean
}

export default function Badge ( badge: Badge) {

    const [hoverRef, isHovered] = useHover(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className='md:hidden text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-mono'>{badge.name}</p>
            <div ref={hoverRef as React.RefObject<HTMLDivElement>} className={`flex ${badge.completed ? 'cursor-pointer' : ''} flex-col col-span-1 h-full lg:w-full w-auto border ${!isHovered ? 'border-yellow-600 bg-inherit' : 'border-gray-700 bg-gray-800/20 scale-[101%]'} rounded-xl shadow-lg shadow-black`}>
                <div className={`hidden md:flex w-full h-14 lg:h-20 items-center justify-center rounded-t-xl border-b ${!isHovered ? 'border-yellow-600 bg-zinc-900' : 'bg-zinc-900 border-gray-700'} ease-in-out duration-300`}>
                    <p className='text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-mono'>{badge.name}</p>
                    <div className={`${isHovered ? 'flex' : 'hidden'} absolute items-center justify-center right-4 h-10 w-10 lg:h-12 lg:w-12 rounded-2xl lg:border-2 ${badge.completed? 'border-green-400 text-green-400' : 'border-red-600 text-red-600'} hover:scale-[101%] ease-in-out duration-300`}>
                        {badge.completed ? (
                            <ArrowRightCircleIcon className="h-9 w-9" />
                        ) : (
                            <LockClosedIcon className="h-8 w-8" />
                        )} 
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-auto">
                    <div className="flex flex-col items-center justify-center w-[400px] sm:w-[500px] h-[273px] space-y-4">
                        <p className="w-auto md:w-auto text-lg md:text-2xl text-white font-mono truncate">{badge.description}</p>
                        <span className="text-8xl">{badge.icon}</span>
                    </div>
                </div>
            </div>
        </div>                 
    )
}