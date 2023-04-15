import { getProviders } from "next-auth/react";
import SignInComponent from './SignInComponent'

async function SignIn() {

    const providers = await getProviders();

    return (
      <main className='flex h-screen w-screen flex-col overflow-y-scroll scrollbar-hide'>
        <div className="flex m-auto pt-10 px-4">
          <div className="bg-inherit rounded-xl shadow-lg shadow-black border border-yellow-600 hover:border-gray-700 hover:bg-zinc-900/30">
            <SignInComponent providers={providers} />
          </div>
        </div>
      </main>
    )
  }
  
  export default SignIn