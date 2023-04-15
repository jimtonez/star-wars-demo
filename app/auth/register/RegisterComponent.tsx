"use client"
import { FcGoogle } from "react-icons/fc"
import { getProviders, signIn, useSession } from "next-auth/react"
import { RecoilRoot } from "recoil"
import Stepper from "@/components/forms/Stepper"

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function RegisterComponent({ providers }: Props) {

    const { data: session, status } = useSession();

    return (
      <>
      {!session ? (
        <div className="mx-auto py-12 px-6 sm:p-20 xl:w-10/12">
        <div className="flex items-center justify-center">
          <span className="emoji text-3xl" role="img" aria-label="rocket">⚽️</span>
          <p className="text-xl text-white font-semibold pl-3 cursor-default">Edge Your Bets</p>
        </div>
          <div role="hidden" className="mt-12 border-t border-gray-700">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Create account with</span>
          </div>
          <div className="mt-12 grid grid-cols-1">
            {Object.values(providers!).map((provider) => (
              <button key={provider.id} className="py-3 px-6 bg-blue-400 hover:opacity-80 shadow-sm rounded-lg" onClick={() => signIn(provider.id, { callbackUrl: "/auth/register"})}>
                <div className="flex gap-4 items-center justify-center">
                  <FcGoogle className="scale-150"/>
                  <span className="block w-max font-medium tracking-wide text-sm text-white">{provider.name}</span>
                </div>
              </button>
            ))}
          </div>
          <div role="hidden" className="mt-12 border-t border-gray-700">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Or</span>
          </div>
          <form action="" className="space-y-6 py-6 text-white">
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full py-3 px-6 rounded-lg border border-gray-700 placeholder-gray-600 bg-inherit transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>
            <div className="flex flex-col items-end">
              <input 
                type="password" 
                placeholder="Password"
                className="w-full py-3 px-6 rounded-lg border border-gray-700 placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <button type="reset" className="w-max p-3 -mr-3">
                <span className="text-sm tracking-wide text-blue-600">Reset password?</span>
              </button>
            </div>
            <div>
              <button className="w-full px-6 py-3 rounded-lg bg-[#32cd32] transition hover:opacity-80 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Register</span>
              </button>
            </div>
          </form>
          <div className="border-t border-gray-700 pt-12">
            <div className="space-y-2 text-center">
              <span className="block text-sm tracking-wide text-gray-500">By signing up, you agree to the Terms of Service. View our Privacy Policy.</span>
            </div>
          </div>
      </div>
      ) : (
        <>
          <div className="mx-auto py-12 p-8 w-full">
            <div className="flex flex-col">
              <RecoilRoot>
                <Stepper />
              </RecoilRoot>
            </div>
          </div>
        </>
      )}
      </>
    )
}

export default RegisterComponent