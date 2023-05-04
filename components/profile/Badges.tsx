import Badge from "../Badge"
const badges = [
    {
        id: 1,
        name: "Endor",
        description: "OpenShift Battle of Endor",
        icon: "ocpv",
        completed: true,
    },
    {
        id: 1,
        name: "Tatooine",
        description: "AMQ Streams Pod Race",
        icon: "amq",
        completed: false,
    },
    {
        id: 1,
        name: "Bespin",
        description: "ACM Hybrid Cloud City",
        icon: "acm",
        completed: false,
    },
    {
        id: 1,
        name: "Hoth",
        description: "ACS Battle of Hoth",
        icon: "acs",
        completed: false,
    },
]

export default function Badges () {

    return (
        <>
        <div className="flex w-full h-auto mt-4 pl-4 max-w-5xl items-center justify-start">
            <h1 className="text-teal-400 text-3xl lg:text-4xl">Badges...</h1>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 max-w-5xl p-4 w-full h-full z-10 mb-10">
            {badges.map((badge, i) => (
                <Badge key={i} name={badge.name} description={badge.description} icon={badge.icon} completed={badge.completed} />
            ))}
        </div>
        </>
    )
}