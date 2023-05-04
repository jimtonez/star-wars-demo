"use client"
import Image from "next/image"
import chewbacca from '@/public/chewbacca.png'
import bobafett from '@/public/boba-fett.png'
import c3pO from '@/public/c3p0.png'
import princess from '@/public/princess-leia.png'
import han from '@/public/han-solo.png'
import ewok from '@/public/ewok.png'
import luke from '@/public/luke-skywalker.png'
import admiral from '@/public/admiral-ackbar.png'
import lando from '@/public/lando-calrissian.png'
import red from '@/public/red-five.png'
import r2d2 from '@/public/r2d2.png'
import obi from '@/public/obiwan-kenobi.png'
import yoda from '@/public/yoda.png'
import vader from '../public/darth-vader.png'
import storm from '../public/stormtrooper.png'
import emperor from '../public/emperor-palpatine.png'
import greedo from '../public/greedo.png'
import jabba from '../public/jabba-the-hutt.png'
import tusken from '../public/tusken-raider.png'
import jawa from '../public/jawa.png'
import ShipDisplay from "@/components/ShipDisplay"
import ProfileMenu from "./ProfileMenu"

interface Profile {
    username: string,
    name: string,
    email: string,
    image: string,
    shipImage: string,
    color: string,
}

const FeedProfile = ( profile: Profile ) => {

    const renderImage = () => {
        if (profile.name === "Chewbacca") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={chewbacca} width={100} height={100}  />
            )
        } else if (profile.name === "Admiral Ackbar") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={admiral} width={100} height={100}  />
            )
        } else if (profile.name === "Boba Fett") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={bobafett} width={100} height={100}  />
            )
        } else if (profile.name === "C3PO") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={c3pO} width={100} height={100}  />
            )
        } else if (profile.name === "Princess Leia") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={princess} width={100} height={100}  />
            )
        } else if (profile.name === "Han Solo") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={han} width={100} height={100}  />
            )
        } else if (profile.name === "Ewok") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={ewok} width={100} height={100}  />
            )
        } else if (profile.name === "Luke Skywalker") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={luke} width={100} height={100}  />
            )
        } else if (profile.name === "Red Five") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={red} width={100} height={100}  />
            )
        } else if (profile.name === "Lando Calrissian") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={lando} width={100} height={100}  />
            )
        } else if (profile.name === "R2D2") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={r2d2} width={100} height={100}  />
            )
        } else if (profile.name === "Obiwan Kenobi") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={obi} width={100} height={100}  />
            )
        } else if (profile.name === "Yoda") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={yoda} width={100} height={100}  />
            )
        } else if (profile.name === "Darth Vader") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={vader} width={100} height={100}  />
            )
        } else if (profile.name === "Storm Trooper") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={storm} width={100} height={100}  />
            )
        } else if (profile.name === "Emperor Palpatine") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={emperor} width={100} height={100}  />
            )
        } else if (profile.name === "Greedo") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={greedo} width={100} height={100}  />
            )
        } else if (profile.name === "Jabba the Hutt") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={jabba} width={100} height={100}  />
            )
        } else if (profile.name === "Tusken Raider") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={tusken} width={100} height={100}  />
            )
        } else if (profile.name === "Jawa") {
            return (
                <Image className={`h-[100%] w-[100%]`} alt="" src={jawa} width={100} height={100}  />
            )
        }
    }

    return (
        <>
        <div className={`flex flex-col w-full max-w-5xl ease-in-out duration-300 items-start justify-center z-20 rounded-full border border-gray-700 backdrop-blur-sm bg-gray-800/30 shadow-lg shadow-black p-2`}>
            <div className="flex w-full flex-row items-center space-x-4">
                <div className="flex space-x-2">
                <div className={`col-span-1 z-20 border border-yellow-600 backdrop-blur-sm bg-gray-800/20 rounded-full cursor-pointer ease-in-out duration-300`}>
                    <div className="flex relative flex-col items-center justify-center ease-in-out duration-300">
                        <div className='flex h-20 w-20 md:h-24 md:w-24 items-center justify-center'>
                            <div className={`flex w-16 h-16 md:w-20 md:h-20 items-center justify-center ${profile.color} rounded-full p-4`}>
                                {renderImage()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-auto h-auto z-10">
                    <ShipDisplay image={profile.shipImage} name={profile.name} path="" />
                </div>
                </div>
                <div className="flex items-start justify-center jusitfy-around space-x-8">
                    <div className="hidden md:flex">
                        <p className="text-white text-3xl font-mono">{profile.username}</p>
                    </div>
                    <div className="hidden md:flex">
                        <p className="text-white text-3xl font-mono">{profile.email}</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default FeedProfile