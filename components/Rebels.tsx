import { Inter } from 'next/font/google'
import Character from '@/components/Character'
import princess from '../public/princess-leia.png'
import han from '../public/han-solo.png'
import ewok from '../public/ewok.png'
import luke from '../public/luke-skywalker.png'
import chewbacca from '../public/chewbacca.png'
import c3po from '../public/c3p0.png'
import admiral from '../public/admiral-ackbar.png'
import lando from '../public/lando-calrissian.png'
import lobot from '../public/lobot.png'
import red from '../public/red-five.png'
import r2d2 from '../public/r2d2.png'
import obi from '../public/obiwan-kenobi.png'
import yoda from '../public/yoda.png'

const inter = Inter({ subsets: ['latin'] })
const rebels = [
  {
    id: 1,
    name: "Luke Skywalker",
    image: luke
  },
  {
    id: 2,
    name: "Han Solo",
    image: han
  },
  {
    id: 3,
    name: "Princess Leia",
    image: princess
  },
  {
    id: 4,
    name: "Chewbacca",
    image: chewbacca
  },
  {
    id: 5,
    name: "C3PO",
    image: c3po
  },
  {
    id: 5,
    name: "Ewok",
    image: ewok
  },
  {
    id: 9,
    name: "Red Five",
    image: red
  },
  {
    id: 10,
    name: "R2D2",
    image: r2d2
  },
  {
    id: 11,
    name: "Obiwan Kenobi",
    image: obi
  },
  {
    id: 12,
    name: "Yoda",
    image: yoda
  },
  {
    id: 13,
    name: "Admiral Ackbar",
    image: admiral
  },
  {
    id: 14,
    name: "Lando Calrissian",
    image: lando
  }
]

export default function Rebels() {

  return (
    <section className="grid grid-cols-3 grid-rows-4 max-w-7xl p-4 gap-4">
          <>
          {rebels.map((rebel, i) => (
            <Character index={i} id={rebel.id} name={rebel.name} image={rebel.image} path={''} />
          ))}
          </>
    </section>
  )
}