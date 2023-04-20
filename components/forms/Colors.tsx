"use client"
import useHover from "@/hooks/useHover"
import { useRecoilState } from "recoil"
import { colorState } from "@/atoms/colorAtom"

const colors = [
    {
        id: 1,
        name: "Green",
        color: "bg-green-400"
    },
    {
        id: 2,
        name: "Red",
        color: "bg-red-400"
    },
    {
        id: 3,
        name: "Blue",
        color: "bg-blue-400"
    },
    {
        id: 4,
        name: "Yellow",
        color: "bg-yellow-400"
    },
    {
        id: 5,
        name: "Purple",
        color: "bg-purple-400"
    },
    {
        id: 6,
        name: "Orange",
        color: "bg-orange-400"
    },
    {
        id: 7,
        name: "Gray",
        color: "bg-slate-400"
    },
    {
        id: 8,
        name: "Teal",
        color: "bg-teal-400"
    }
]

export default function Colors () {

    const [hoverRef, isHovered] = useHover(false)
    const [selectedColor, setSelectedColor] = useRecoilState(colorState)

    const handleSelect = (color: string) => {
        setSelectedColor(color)
    }

    return (
        <div className="grid items-center justify-center grid-cols-4 grid-rows-2 sm:grid-cols-8 lg:grid-cols-4 sm:grid-rows-1 lg:grid-rows-2 gap-8 sm:gap-4 h-24 sm:h-16 md:h-20 lg:h-40 w-3/4 sm:w-[600px] md:w-[700px] lg:w-[350px] p-2">
            {colors.map((color, i) => (
                <div onClick={() => handleSelect(color.color)} key={i} className={`flex flex-row items-center justify-center border shadow-lg shadow-black ${selectedColor === color.color ? 'border-gray-700' : 'border-yellow-600'} hover:bg-inherit hover:border-gray-700 hover:backdrop-blur-sm hover:bg-gray-800/20'} cursor-pointer shadow-b shadow-sm rounded-full hover:scale-[105%] ease-in-out duration-300 w-12 h-12 sm:h-16 sm:w-16 md:w-20 md:h-20`}>
                    <div className={`flex ${color.color} items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full`}>
                    </div>
                </div>
            ))}
        </div>
    )
}