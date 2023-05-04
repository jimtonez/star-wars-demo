"use client"
import { useEffect } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

interface Navbar {
    navbarOpen: any,
    setNavbarOpen: any
}

const menuItems = [
    {
        id: 1,
        name: "Account",
        path: "/profile"
    },
    {
        id: 2,
        name: "Dashboard"
    },
    {
        id: 3,
        name: "Sign Out"
    }
]

const Menu = ( navbar: Navbar) => {

    const router = useRouter()

    useEffect(() => {
        const closeNavbar = () => {
            if(window.innerWidth > 1024) {
                navbar.setNavbarOpen((navbar.navbarOpen));
            }
        };
        window.addEventListener('resize', closeNavbar);
    },[])

    const handleClick = (i: number) => {
        if( i === 3) {
            signOut({ callbackUrl: "/"})
        } else if (i === 2) {
            router.push('/dashboard')
        } else if (i === 1) {
            router.push('/profile')
        }
    }

    return (
        <section className={`${navbar.navbarOpen ? 'flex z-50 items-center justify-center w-screen border-t border-gray-700 bg-inherit backdrop-blur-md h-screen top-[72px] xl:top-[85px] fixed space-y-4' : 'hidden'}`}>
            <div className="flex flex-col w-full max-w-2xl h-1/2 mt-20">
                <ul className="px-4 space-y-2 md:space-y-4">
                    {menuItems.map((option, i) => (
                        <li key={i} onClick={() => handleClick(option.id)} className={`flex flex-row items-center h-24 rounded-xl bg-black border border-gray-700 cursor-pointer shadow-lg shadow-black hover:scale-[101%] transition duration-300 ease-in-out`}>
                            <div className="flex w-1/4 h-auto">
                                
                            </div>
                            <div className="flex w-3/4 h-auto">
                                <p className={`${i === 2 ? 'text-red-600' : 'text-teal-400'} text-2xl`}>{option.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Menu