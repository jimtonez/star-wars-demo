import { getProviders } from "next-auth/react";
import RegisterComponent from './RegisterComponent'

async function Register() {

    const providers = await getProviders();

    return (
      <main className='flex h-screen w-screen flex-col scrollbar-hide'>
        <div className="flex m-auto pt-10">
          <div className="bg-[#070D0D] min-w-screen rounded-xl shadow-lg border border-gray-700 border-dashed">
            <RegisterComponent providers={providers} />
          </div>
        </div>
      </main>
    )
  }
  
  export default Register