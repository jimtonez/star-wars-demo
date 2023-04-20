import redhat from '@/public/Red_Hat_logo.png'
import Image from 'next/image'

interface Navbar {
    navbarOpen: any,
    productsOpen: any,
    setNavbarOpen: any,
    setProductsOpen: any
}

const Header = ( navbar: Navbar) => {

    const handleNavbar = () => {
        navbar.setNavbarOpen((!navbar.navbarOpen));
    }

    const handleProducts = () => {
        // navbar.setProductsOpen((!navbar.productsOpen));
    }

    return (
        <div className={`flex bg-inherit items-center justify-between h-22 w-screen max-w-7xl mx-1 sticky top-0 z-10`}>
            <div className="flex p-4 xl:py-4 xl:px-0">
                <button onClick={handleProducts} className={`${navbar.navbarOpen ? 'hidden' : 'flex'} items-center justify-center w-24 h-14 rounded-full hover:bg-zinc-900 bg-zinc-900/30 shadow-lg shadow-black cursor-pointer`}>
                    <Image alt="" src={redhat} height={40} width={40}  />
                </button>
            </div>
            <div className="flex p-4 xl:py-4 xl:px-0">
                <button className={`flex items-center justify-center w-14 h-14 rounded-full ${navbar.navbarOpen ? 'border border-gray-700' : ''} hover:bg-zinc-900 bg-zinc-900/30 shadow-lg shadow-black cursor-pointer`} onClick={handleNavbar}>
                        <span className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${navbar.navbarOpen ? 'rotate-45 delay-100 bg-teal-400' : '-translate-y-1.5 bg-yellow-600'}`}></span>
                        <span className={`absolute h-0.5 bg-yellow-600 transform transition-all duration-200 ease-in-out ${navbar.navbarOpen ? 'w-0 opacity-50' : 'w-6 delay-100 opacity-100'}`}></span>
                        <span className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${navbar.navbarOpen ? '-rotate-45 delay-100 bg-teal-400' : 'translate-y-1.5 bg-yellow-600'}`}></span>
                </button>
            </div>
        </div>
    )

}

export default Header