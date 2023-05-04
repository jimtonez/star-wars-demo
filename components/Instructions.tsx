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
                text: "Open the workshop console in a browser window."
            },
            {
                id: 2,
                text: "Copy the 'kubeadmin' password and click the console link to login to the OpenShift Web Console as the 'kubeadmin' user."
            },
            {
                id: 3,
                text: "Explore the Administrator and Developer roles in the left sidebar."
            }
        ]
    },
    {
        id: 2,
        name: "Phase 2",
        completed: false,
        enabled: false,
        description: "Install the OpenShift Virtualization Operator",
        tasks: [
            {
                id: 1,
                text: "With the Administrator role selected, click 'Operators', then select 'OperatorHub'."
            },
            {
                id: 2,
                text: "Under 'All Items', click 'OpenShift Optional', and select the OpenShift Virtualization operator."
            },
            {
                id: 3,
                text: "Review the details section of the OpenShift Virtualization operator, then click 'Install'."
            },
            {
                id: 4,
                text: "Review the options, keep all default configurations, then click 'Install'."
            }
        ]
    },
    {
        id: 3,
        name: "Phase 3",
        completed: false,
        enabled: false,
        description: "Create the HyperConverged Custom Resource",
        tasks: [
            {
                id: 1,
                text: "Click 'Create HyperConverged'."
            },
            {
                id: 2,
                text: "Select the 'YAML view' radio button, and review the HyperConverged custom resource."
            },
            {
                id: 3,
                text: "Select the 'Form view' radio button, scroll to the bottom of the page, keeping all default configurations, then click 'Create'."
            },
            {
                id: 4,
                text: "When the 'Status' field of the HyperConverged resource changes to 'Conditions: ReconcileComplete, Available, Upgradeable', you have successfully installed the HyperConverged custom resource."
            }
        ]
    },
    {
        id: 4,
        name: "Phase 4",
        completed: false,
        enabled: false,
        description: "Explore the Virtualization dashboard",
        tasks: [
            {
                id: 1,
                text: "Now that the OpenShift Virtualization Operator is installed, refresh the console, and select the Administrator role."
            },
            {
                id: 2,
                text: "The 'Virtualization' option will now be present in the sidebar, select the 'Virtualization' option, and click 'Overview'."
            },
            {
                id: 3,
                text: "Explore the Virtualization dashboard."
            }
        ]
    },
    {
        id: 5,
        name: "Phase 5",
        completed: false,
        enabled: false,
        description: "Create the project",
        tasks: [
            {
                id: 1,
                text: "With the Administrator role selected, click 'Home', and select 'Projects'."
            },
            {
                id: 2,
                text: "Click 'Create Project' in the top right of the screen."
            },
            {
                id: 3,
                text: "Name the project 'endor', then click 'Create'."
            }
        ]
    },
    {
        id: 6,
        name: "Phase 6",
        completed: false,
        enabled: false,
        description: "Create the virtual machine",
        tasks: [
            {
                id: 1,
                text: "Navigate to the 'Virtualization' option in the left sidebar and select 'Catalog'."
            },
            {
                id: 2,
                text: "Select the 'Red Hat Enterprise Linux 9 VM' option and click 'Customize VirtualMachine'."
            },
            {
                id: 3,
                text: "Name the VM 'shield-generator' and click the 'Optional Parameters' dropdown."
            },
            {
                id: 4,
                text: "Change the password to something easy to remember, like 'opensource', and click 'Next'. NOTE: You will need this password to access the terminal in the next Phase."
            },
            {
                id: 5,
                text: "Click 'Create VirtualMachine' to launch the VM. When the VM status is 'Running', move on to the next Phase."
            },
        ]
    },
    {
        id: 7,
        name: "Phase 7",
        completed: false,
        enabled: false,
        description: "Explore the Virtual Machine dashboard interface",
        tasks: [
            {
                id: 1,
                text: "From the 'shield-generator' VM Dashboard, select the 'Console' tab."
            },
            {
                id: 2,
                text: "Log in to the VM as 'cloud-user' with the password created in Phase 6."
            },
            {
                id: 3,
                text: "Run the following command to register the VM to subscription management:",
                code: "sudo subscription-manager register"
            },
            {
                id: 4,
                text: "Enter your Red Hat username and password."
            },
            {
                id: 5,
                text: "Run the following command to update:",
                code: "sudo dnf update -y"
            },
            {
                id: 6,
                text: "Create a file called snapshot.txt with the following content:",
                code: "echo 'May the 4th be with you!' > snapshot.txt"
            }
        ]
    },
    {
        id: 8,
        name: "Phase 8",
        completed: false,
        enabled: false,
        description: "Create and restore from snapshot",
        tasks: [
            {
                id: 1,
                text: "From the 'shield-generator' VM Dashboard, select the 'Snapshots' tab."
            },
            {
                id: 2,
                text: "Click 'Take Snapshot' and give the snapshot a description, such as, 'snapshot file', and click 'Save'."
            },
            {
                id: 3,
                text: "Return to the console and delete the snapshot file with following command:",
                code: "rm -f snapshot.txt"
            },
            {
                id: 4,
                text: "Select the 'Actions' dropdown menu in the top right and click 'Stop' to stop the VM."
            },
            {
                id: 5,
                text: "Select the 'Snapshots' tab and restore the VirtualMachine Snapshot by clicking the right menu icon and selecting 'Restore', then clicking 'Restore' to confirm."
            },
            {
                id: 6,
                text: "Select the 'Actions' dropdown menu in the top right and click 'Start' to start the VM."
            },
            {
                id: 6,
                text: "Validate the snapshot was successful by returning to the console, logging in as 'cloud-user' and running the following command:",
                code: "cat snapshot.txt"
            }
        ]
    }
]

export default function Instructions () {

    const [currentStep, setCurrentStep] = useRecoilState(instructionState)

    return (
        <>
        <div className="flex flex-col w-full max-w-5xl ease-in-out duration-300 items-center justify-start space-y-4 mt-10 mb-10 p-2">
            {steps.map((step, i) => (
                <Step key={i} index={i} name={step.name} enabled={step.enabled} completed={step.completed} tasks={[...step.tasks]} />
            ))}
        </div>
        </>
    )
}