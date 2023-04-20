import Ship from '@/components/Ship'
import boba from '../public/boba-fett.png'
import xwing from '../public/xwing.png'
import falcon from '../public/falcon.png'
import ywing from '../public/ywing.webp'
import cr90 from '../public/cr90.webp'
import awing from '../public/awing.webp'
import bwing from '../public/bwing.webp'
import mc80 from '../public/mc80.webp'
import gr75 from '../public/gr75.png'
import nebulon from '../public/nebulon.png'
import empire from '../public/empire.png'

const fleet = [
  {
    id: 1,
    name: "Luke's X-Wing",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-red-5-x-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 2,
    name: "Millenium Falcon",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-millennium-falcon-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 3,
    name: "Y-Wing",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-btl-a4-y-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 4,
    name: "A-Wing",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-rz1-a-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 5,
    name: "T-65B X-Wing",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-x-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 6,
    name: "Slave-1",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-slave1-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 7,
    name: "TIE Fighter",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-tie-fighter-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 8,
    name: "TIE Interceptor",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-tie-interceptor-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 9,
    name: "TIE Bomber",
    image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-tie-bomber-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    disabled: false
  },
  {
    id: 10,
    name: "empty",
    image: "",
    disabled: true
  },
  {
    id: 11,
    name: "empty",
    image: "",
    disabled: true
  },
  {
    id: 12,
    name: "empty",
    image: "",
    disabled: true
  }
]

export default function Fleet() {

  return (
    <section className="grid grid-cols-3 grid-rows-4 max-w-7xl p-4 gap-4">
          <>
          {fleet.map((imperial, i) => (
            <Ship key={i} index={i} id={imperial.id} name={imperial.name} image={imperial.image} path={''} disabled={imperial.disabled} />
          ))}
          </>
    </section>
  )
}