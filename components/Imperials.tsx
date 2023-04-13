import Character from '@/components/Character'
import boba from '../public/boba-fett.png'
import vader from '../public/darth-vader.png'
import storm from '../public/stormtrooper.png'
import emperor from '../public/emperor-palpatine.png'
import greedo from '../public/greedo.png'
import jabba from '../public/jabba-the-hutt.png'
import tusken from '../public/tusken-raider.png'
import jawa from '../public/jawa.png'
import empire from '../public/empire.png'

const imperials = [
  {
    id: 1,
    name: "Darth Vader",
    image: vader,
    disabled: false
  },
  {
    id: 2,
    name: "Storm Trooper",
    image: storm,
    disabled: false
  },
  {
    id: 3,
    name: "Emporer Palpatine",
    image: emperor,
    disabled: false
  },
  {
    id: 4,
    name: "Greedo",
    image: greedo,
    disabled: false
  },
  {
    id: 5,
    name: "Boba Fett",
    image: boba,
    disabled: false
  },
  {
    id: 6,
    name: "Jabba the Hutt",
    image: jabba,
    disabled: false
  },
  {
    id: 7,
    name: "Tusken Raider",
    image: tusken,
    disabled: false
  },
  {
    id: 8,
    name: "Jawa",
    image: jawa,
    disabled: false
  },
  {
    id: 9,
    name: "empty",
    image: empire,
    disabled: true
  },
  {
    id: 10,
    name: "empty",
    image: empire,
    disabled: true
  },
  {
    id: 11,
    name: "empty",
    image: empire,
    disabled: true
  },
  {
    id: 12,
    name: "empty",
    image: empire,
    disabled: true
  }
]

export default function Imperials() {

  return (
    <section className="grid grid-cols-3 grid-rows-4 max-w-7xl p-4 gap-4">
          <>
          {imperials.map((imperial, i) => (
            <Character index={i} id={imperial.id} name={imperial.name} image={imperial.image} path={''} disabled={imperial.disabled} />
          ))}
          </>
    </section>
  )
}