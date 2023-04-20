import SignIn from "@/components/SignIn"

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center overflow-y-scroll h-screen w-screen scrollbar-hide">
      <div className="flex flex-col w-full max-w-7xl items-center justify-center font-mono space-y-4 md:space-y-8">
        <SignIn />
      </div>
    </main>
  )
}
