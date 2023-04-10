import Character from '@/components/Character'
import boba from '../public/boba-fett.png'
import vader from '../public/darth-vader.png'
import storm from '../public/stormtrooper.png'
import emperor from '../public/emperor-palpatine.png'
import greedo from '../public/greedo.png'
import jabba from '../public/jabba-the-hutt.png'
import tusken from '../public/tusken-raider.png'
import jawa from '../public/jawa.png'

const imperials = [
  {
    id: 1,
    name: "Darth Vader",
    image: vader
  },
  {
    id: 2,
    name: "Storm Trooper",
    image: storm
  },
  {
    id: 3,
    name: "Emporer Palpatine",
    image: emperor
  },
  {
    id: 4,
    name: "Greedo",
    image: greedo
  },
  {
    id: 5,
    name: "Boba Fett",
    image: boba
  },
  {
    id: 6,
    name: "Jabba the Hutt",
    image: jabba
  },
  {
    id: 7,
    name: "Tusken Raider",
    image: tusken
  },
  {
    id: 8,
    name: "Jawa",
    image: jawa
  }
]

export default function Imperials() {

  return (
    <section className="grid grid-cols-3 grid-rows-4 max-w-7xl p-4 gap-4 overflow-y-scroll">
          <>
          {imperials.map((imperial, i) => (
            <Character index={i} id={imperial.id} name={imperial.name} image={imperial.image} path={''} />
          ))}
          </>
    </section>
  )
}