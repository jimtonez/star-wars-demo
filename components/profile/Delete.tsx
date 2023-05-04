"use client"
import { useRecoilState } from 'recoil'
import { profileState } from '@/atoms/profileAtom'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from "next/navigation"


export default function Delete () {

        const [currentTab, setCurrentTab] = useRecoilState(profileState)
        const { data: session } = useSession()
        const path = usePathname()
        const id = path?.split('/profile/')[1]

        
        async function handleDelete  (e: any)  {
            e.preventDefault()
            console.log(id)
            const response = await fetch('/api/users/delete', {
                method: 'POST',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            signOut({ callbackUrl: "/"})
        }

        return (
            <div className="flex flex-col relative items-center justify-start p-4 w-full h-full space-y-20 top-20 mb-[542px]">
                <h1 className="text-3xl md:text-4xl text-teal-400 lg:text-5xl">Are you sure you want to delete your account?</h1>
                <div className="flex flex-col md:flex-row w-full h-40 items-center justify-around md:justify-center md:space-x-4 space-y-4 md:space-y-0">
                    <button onClick={() => setCurrentTab("Missions")} className="flex items-center justify-center w-3/4 md:w-1/4 h-1/2 rounded-xl bg-green-400 shadow-lg shadow-black hover:scale-[102%]">
                        <p>NO</p>
                    </button>
                    <button onClick={(e) => handleDelete(e)} className="flex items-center justify-center w-3/4 md:w-1/4 h-1/2 rounded-xl bg-red-600 shadow-lg shadow-black hover:scale-[102%]">
                        <p>DELETE</p>
                    </button>
                </div>
            </div>
        )
}