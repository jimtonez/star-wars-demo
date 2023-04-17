"use client"
import { FcGoogle } from "react-icons/fc"
import Image from "next/image"
import azure from '../../../public/azure.png'
import { getProviders, signIn } from "next-auth/react"

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({ providers }: Props) {

    const renderIcon = (name: string) => {
      if ( name === 'Google') {
        return (
          <FcGoogle className="scale-150"/>
        )
      } else {
        return (
          <Image alt="" src={azure} width={22} height={22} />
        )
      }
    }

    return (
        <div className="mx-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="flex items-center justify-center">
            <span className="emoji text-3xl" role="img" aria-label="rocket"></span>
            <p className="text-4xl text-white font-bold pl-3 cursor-default">VM Wars</p>
          </div>
        <div role="hidden" className="mt-12 border-t border-gray-700">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-teal-400 border border-teal-400 bg-zinc-900 rounded-full">Sign in with</span>
        </div>
        <div className="mt-12 grid grid-cols-1 space-y-4 mb-12">
          {Object.values(providers!).map((provider) => (
            <button key={provider.id} className="py-3 px-6 w-full bg-inherit border border-yellow-600 hover:border-gray-700 hover:bg-zinc-900/30 shadow-lg shadow-black rounded-lg" onClick={() => signIn(provider.id, { callbackUrl: "/dashboard"})}>
              <div className="flex w-full items-center justify-center space-x-4">
                <div className="flex w-1/4 items-center justify-center">
                  {renderIcon(provider.name)}
                </div>
                <div className="flex w-3/4 items-center justify-start">
                <span className="font-medium text-md text-white">{provider.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-12">
          <div className="space-y-2 text-center">
            <span className="block text-sm tracking-wide text-gray-500">By signing up, you agree to the Terms of Service. View our Privacy Policy.</span>
          </div>
        </div>
      </div>
    )
}

export default SignInComponent