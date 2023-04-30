"use client"
import UserProfile from "@/components/UserProfile"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Menu from "@/components/Menu"
import RedHat from "@/components/RedHat"
import Footer from "@/components/Footer"
import { RecoilRoot } from "recoil"
import { useRouter } from "next/navigation"
import Instructions from "@/components/Instructions"
import Progress from "@/components/Progress"

export default function Endor () {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [productsOpen, setProductsOpen] = useState<boolean>(false);
    const [user, setUser] = useState({})
    const { data: session } = useSession()
    const email = session?.user?.email
    const router = useRouter()

    useEffect(() => {
        if (session) {
            const getUser = async () => {
                const res = await fetch(`/api/users`, {
                    method: "POST",
                    cache: 'no-store',
                    body: email
                });
                const dbuser = await res.json();
                if (dbuser) {
                    setUser({...user, ...dbuser})
                } else {
                    router.push('/')
                }
            }
            getUser()
        } else {
            router.push('/auth/signin')
        }
    },[session])

    return (
        <>
            <RecoilRoot>
                <div className="flex flex-col items-center justify-between w-full h-auto scrollbar-hide">
                    <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
                    <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                    <RedHat productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
                    <Progress username={user.user_name} name={user.character_name} image={user.image} shipImage={user.ship_url} color={user.color} />
                    <Instructions />
                    <Footer />
                </div>
            </RecoilRoot>
        </>
    )
}