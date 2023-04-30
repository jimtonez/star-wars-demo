"use client"
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import RedHat from '@/components/RedHat';
import Register from '@/components/forms/Register';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [productsOpen, setProductsOpen] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);

  const { data: session} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {

    } else {
        router.push('/auth/signin')
    }
  },[session])

  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between h-full space-y-4">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <RedHat productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
      <Footer />
    </main>
    
  )
}