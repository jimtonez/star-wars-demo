"use client"
import { getProviders, useSession, signIn } from "next-auth/react"


export default function SignIn () {

    const { data: session } = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signIn()
    }

    return (
        <button onClick={handleSignin} className='flex w-full h-auto items-center justify-center'>
            <h1 className='text-teal-400 text-3xl sm:text-4xl md:text-5xl'>Sign in to Enter...</h1>
        </button>
    )
}