"use client"
import { useEffect } from "react"

interface Products {
    productsOpen: any,
    setProductsOpen: any
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

const RedHat = ( products: Products) => {

    const handleNavbar = () => {
        products.setProductsOpen((products.productsOpen));
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
        <section className={`${products.productsOpen ? 'flex items-center justify-center w-screen max-w-2xl h-screen fixed space-y-4 p-4' : 'hidden'}`}>
            <div className="flex flex-col w-full h-1/2 mt-20 bg-zinc-900/30 rounded-2xl shadow-lg shadow-black border border-gray-700">
                <ul className="">
                    {menuItems.map((option, i) => (
                        <li key={option.id} className={`flex flex-row items-center h-24 hover:bg-black cursor-pointer ${i === 0 ? 'rounded-t-2xl' : ''} transition duration-300 ease-in-out`}>
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

export default RedHat