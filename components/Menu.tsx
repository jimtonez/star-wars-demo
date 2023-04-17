"use client"
import { useEffect } from "react"
import { signOut } from "next-auth/react"

interface Navbar {
    navbarOpen: any,
    setNavbarOpen: any
}

const menuItems = [
    {
        id: 1,
        name: "Account"
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

    const handleNavbar = () => {
        navbar.setNavbarOpen((navbar.navbarOpen));
    }

    useEffect(() => {
        const closeNavbar = () => {
            if(window.innerWidth > 1024) {
                handleNavbar()
            }
        };
        window.addEventListener('resize', closeNavbar);
    },[])

    return (
        <section className={`${navbar.navbarOpen ? 'flex items-center justify-center w-screen max-w-2xl h-screen fixed space-y-4' : 'hidden'}`}>
            <div className="flex flex-col w-full h-3/4 mt-20">
                <ul className="px-4 space-y-2 md:space-y-4">
                    {menuItems.map((option, i) => (
                        <li onClick={() => signOut({ callbackUrl: "/"})} key={option.id} className="flex flex-row items-center h-24 rounded-xl border border-yellow-600 hover:border-gray-700 hover:bg-zinc-900/30 cursor-pointer shadow-lg shadow-black hover:scale-[101%] transition duration-300 ease-in-out">
                            <div className="flex w-1/4 h-auto">
                                
                            </div>
                            <div className="flex w-3/4 h-auto">
                                <p className="text-teal-400 text-2xl">{option.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Menu