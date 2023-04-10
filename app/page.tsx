import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 overflow-y-scroll">
      <div className="flex flex-col w-full max-w-7xl items-center justify-center font-mono space-y-4 md:space-y-8">
        <Link href={"/dashboard"} className='flex w-full h-auto items-center justify-center'>
          <h1 className='text-teal-400 text-3xl sm:text-4xl md:text-5xl'>Sign in to Enter...</h1>
        </Link>
      </div>
    </main>
  )
}
