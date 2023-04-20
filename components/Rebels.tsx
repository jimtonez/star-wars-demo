import { Inter } from 'next/font/google'
import Character from '@/components/Character'
import princess from '@/public/princess-leia.png'
import han from '@/public/han-solo.png'
import ewok from '@/public/ewok.png'
import luke from '@/public/luke-skywalker.png'
import chewbacca from '@/public/chewbacca.png'
import c3po from '@/public/c3p0.png'
import admiral from '@/public/admiral-ackbar.png'
import lando from '@/public/lando-calrissian.png'
import red from '@/public/red-five.png'
import r2d2 from '@/public/r2d2.png'
import obi from '@/public/obiwan-kenobi.png'
import yoda from '@/public/yoda.png'

const inter = Inter({ subsets: ['latin'] })
const rebels = [
  {
    id: 1,
    name: "Luke Skywalker",
    image: luke,
    disabled: false
  },
  {
    id: 2,
    name: "Han Solo",
    image: han,
    disabled: false
  },
  {
    id: 3,
    name: "Princess Leia",
    image: princess,
    disabled: false
  },
  {
    id: 4,
    name: "Chewbacca",
    image: chewbacca,
    disabled: false
  },
  {
    id: 5,
    name: "C3PO",
    image: c3po,
    disabled: false
  },
  {
    id: 5,
    name: "Ewok",
    image: ewok,
    disabled: false
  },
  {
    id: 9,
    name: "Red Five",
    image: red,
    disabled: false
  },
  {
    id: 10,
    name: "R2D2",
    image: r2d2,
    disabled: false
  },
  {
    id: 11,
    name: "Obiwan Kenobi",
    image: obi,
    disabled: false
  },
  {
    id: 12,
    name: "Yoda",
    image: yoda,
    disabled: false
  },
  {
    id: 13,
    name: "Admiral Ackbar",
    image: admiral,
    disabled: false
  },
  {
    id: 14,
    name: "Lando Calrissian",
    image: lando,
    disabled: false
  }
]

export default function Rebels() {

  return (
    <section className="grid grid-cols-3 grid-rows-4 max-w-7xl p-4 gap-4">
          <>
          {rebels.map((rebel, i) => (
            <Character key={i} index={i} id={rebel.id} name={rebel.name} image={rebel.image} path={''} disabled={rebel.disabled} />
          ))}
          </>
    </section>
  )
}