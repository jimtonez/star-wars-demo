import Image from "next/image";
import Link from "next/link";
import useHover from "@/hooks/useHover"
import { CheckCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { profile } from "console";
import { useRecoilState } from "recoil";
import { instructionState } from "@/atoms/instructionAtom";
import { progressState } from "@/atoms/progressAtom";

interface Step {
    name: string,
    index: number,
    enabled: boolean
    completed: boolean
    tasks: any
}

export default function Step ( step: Step) {

    const [hoverRef, isHovered] = useHover(false);
    const [currentStep, setCurrentStep] = useRecoilState(instructionState)
    const [currentProgress, setCurrentProgress] = useRecoilState(progressState)

    const handleComplete = (index : number) => {
        setCurrentStep(index + 1)
        setCurrentProgress(currentProgress + 10)
    }

    const handleRestart = (index : number) => {
        let i = (index + 1)
        setCurrentStep(index)
        setCurrentProgress(i * 10)
        
    }

    return (
            <div ref={hoverRef as React.RefObject<HTMLDivElement>} className={`flex cursor-pointer flex-col col-span-1 h-full w-full border ${isHovered || currentStep > step.index ? 'border-gray-700 bg-gray-800/20 scale-[101%]' : 'border-yellow-600 bg-inherit'} backdrop-blur-md rounded-xl shadow-lg shadow-black`}>
                <div className={`flex w-full h-20 items-center justify-center ${isHovered || currentStep > step.index ? 'border-gray-700 bg-zinc-900' : 'bg-zinc-900 border-yellow-600'} ${currentStep > step.index ? 'border-none rounded-xl' : 'border-b rounded-t-xl'} ease-in-out duration-300`}>
                    <p className='text-white text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-mono'>{step.name}</p>
                    {currentStep > step.index ? (
                        <div onClick={(i) => handleRestart(step.index)} className={`flex absolute items-center justify-center right-16 md:right-20 h-10 w-10 lg:h-12 lg:w-12 rounded-2xl lg:border-2 ${currentStep > step.index ? 'border-orange-400 text-orange-400' : 'border-gray-700 text-gray-700'} hover:scale-[101%] ease-in-out duration-300`}>
                            <ArrowPathIcon className="h-9 w-9" />
                        </div>
                    ) : (
                        <>
                        </>
                    )} 
                    <div className={`flex absolute items-center justify-center right-4 h-10 w-10 lg:h-12 lg:w-12 rounded-2xl lg:border-2 ${currentStep >= step.index ? 'border-green-400 text-green-400' : 'border-gray-700 text-red-600'} hover:scale-[101%] ease-in-out duration-300`}>
                        {currentStep > step.index ? (
                            <CheckCircleIcon className="h-9 w-9" />
                        ) : (
                            <>
                            </>
                        )} 
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-auto h-auto">
                    <div className={`flex ${currentStep > step.index ? 'hidden' : 'flex'} flex-col w-full h-auto items-start justify-center space-y-2 p-2 md:p-4`}>
                        {step.tasks.map((task, i) => (
                            <p key={i} className="text-white text-lg md:text-xl font-mono">{step.index + 1}.{i + 1}: {task.text}</p>
                        ))}
                    </div>
                    <div className={`flex flex-col w-full h-auto items-end justify-center ${currentStep > step.index ? 'p-0' : 'p-4'}`}>
                        {currentStep > step.index ? (
                            <>
                            </>

                        ) : (
                            <button onClick={(i) => handleComplete(step.index)}  className="flex items-center justify-center w-1/4 h-14 md:h-16 rounded-xl bg-green-400 shadow-lg shadow-black hover:scale-[101%] md:space-x-2">
                                <p className="hidden md:flex text-xl">Complete</p>
                                <CheckCircleIcon className="h-9 w-9" />
                            </button>
                        )}
                    </div>
                </div>
        </div>
    )
}