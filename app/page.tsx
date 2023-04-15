import SignIn from "@/components/SignIn"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 overflow-y-scroll">
      <div className="flex flex-col w-full max-w-7xl items-center justify-center font-mono space-y-4 md:space-y-8">
        <SignIn />
      </div>
    </main>
  )
}
