"use client"
import { Inter } from 'next/font/google'
import rebels from '../../public/rebels.png'
import empire from '../../public/empire.png'
import Faction from '@/components/Faction'

const inter = Inter({ subsets: ['latin'] })
const menuItems = [
  {
    id: 1,
    name: "Rebel Alliance",
    alias: "Rebels",
    image: rebels,
    path: "/dashboard"
  },
  {
    id: 2,
    name: "Galactic Empire",
    alias: "Imperials",
    image: empire,
    path: "/dashboard"
  }
]

export default function Factions() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 overflow-y-scroll">
      <div className="flex flex-col w-full max-w-7xl items-center justify-center font-mono space-y-4 md:space-y-8">
        <div className='flex w-full h-auto items-center justify-center'>
          <h1 className='text-teal-400 text-3xl sm:text-4xl md:text-5xl'>Choose your side...</h1>
        </div>
        <div className='flex flex-col md:flex-row w-full h-auto justify-center space-y-4 md:space-y-0 md:space-x-4'>
          <>
          {menuItems.map((option, i) => (
            <Faction id={option.id} name={option.name} alias={option.alias} image={option.image} path={option.path} />
          ))}
          </>
        </div>
      </div>
    </main>
  )
}