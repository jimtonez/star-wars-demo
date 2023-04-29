import { useRecoilState } from "recoil"
import { instructionState } from "@/atoms/instructionAtom"
import Step from "./Step"

const steps = [
    {
        id: 1,
        name: "Phase 1",
        completed: false,
        enabled: true,
        description: "Explore OpenShift CLI / Console",
        tasks: [
            {
                id: 1,
                text: "Use the credentials provided to log in to the OpenShift Web Console."
            },
            {
                id: 2,
                text: "Explore both the Administrator and Developer roles in the left sidebar."
            }
        ]
    },
    {
        id: 2,
        name: "Phase 2",
        completed: false,
        enabled: false,
        description: "Validate Lab Connectivity",
        tasks: [
            {
                id: 1,
                text: "Use the credentials provided to log in to the OpenShift Web Console."
            },
            {
                id: 2,
                text: "Explore both the Administrator and Developer roles in the left sidebar."
            }
        ]
    },
    {
        id: 3,
        name: "Phase 3",
        completed: false,
        enabled: false,
        description: "Validate Lab Connectivity",
        tasks: [
            {
                id: 1,
                text: "Use the credentials provided to log in to the OpenShift Web Console."
            },
            {
                id: 2,
                text: "Explore both the Administrator and Developer roles in the left sidebar."
            }
        ]
    },
    {
        id: 4,
        name: "Phase 4",
        completed: false,
        enabled: false,
        description: "Validate Lab Connectivity",
        tasks: [
            {
                id: 1,
                text: "Use the credentials provided to log in to the OpenShift Web Console."
            },
            {
                id: 2,
                text: "Explore both the Administrator and Developer roles in the left sidebar."
            }
        ]
    },
    {
        id: 5,
        name: "Phase 5",
        completed: false,
        enabled: false,
        description: "Validate Lab Connectivity",
        tasks: [
            {
                id: 1,
                text: "Use the credentials provided to log in to the OpenShift Web Console."
            },
            {
                id: 2,
                text: "Explore both the Administrator and Developer roles in the left sidebar."
            }
        ]
    }
]

export default function Instructions () {

    const [currentStep, setCurrentStep] = useRecoilState(instructionState)

    return (
        <>
        <div className="flex flex-col w-full max-w-5xl ease-in-out duration-300 items-center justify-start min-h-screen space-y-4 mt-10 mb-10 p-2">
            {steps.map((step, i) => (
                <Step index={i} name={step.name} enabled={step.enabled} completed={step.completed} tasks={[...step.tasks]} />
            ))}
        </div>
        </>
    )
}