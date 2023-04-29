import Mission from "../Mission"

const missions = [
    {
        id: 1,
        name: "Endor",
        description: "Battle of Endor",
        image: "https://media.contentapi.ea.com/content/dam/ea/walrus/maps/endor-tile-lg-2x.jpg.adapt.crop16x9.652w.jpg",
        enabled: true,
        complete: false,
    },
    {
        id: 2,
        name: "Tatooine",
        description: "Pod Race",
        image: "https://media.contentapi.ea.com/content/dam/ea/walrus/maps/tatooine-tile-lg-2x.jpg.adapt.crop16x9.652w.jpg",
        enabled: false,
        complete: false,
    },
    {
        id: 3,
        name: "Bespin",
        description: "Cloud City",
        image: "https://media.contentapi.ea.com/content/dam/ea/walrus/maps/hub-bespin-xlg-2x.jpg.adapt.crop16x9.652w.jpg",
        enabled: false,
        complete: false,
    },
    {
        id: 4,
        name: "Hoth",
        description: "Empire Stikes Back",
        image: "https://media.contentapi.ea.com/content/dam/ea/walrus/maps/hoth-tile-lg-2x.jpg.adapt.crop16x9.652w.jpg",
        enabled: false,
        complete: false,
    },
]

export default function Missions () {

    return (
        <>
        <div className="flex w-full h-auto mt-4 pl-4 max-w-5xl items-center justify-start">
            <h1 className="text-teal-400 text-3xl lg:text-4xl">Missions...</h1>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 max-w-5xl p-4 w-full h-full z-10 mb-10">
            {missions.map((mission, i) => (
                <Mission name={mission.name} image={mission.image} enabled={mission.enabled} />
            ))}
        </div>
        </>
    )
}