"use client"
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import RedHat from '@/components/RedHat';
import { RecoilRoot } from 'recoil';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UsersFeed from '@/components/UsersFeed';

export default function Home() {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [productsOpen, setProductsOpen] = useState<boolean>(false);
  const [dashboard, setDashboard ] = useState<boolean>(false);

  const { data: session} = useSession()
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
            if (/@redhat.com\s*$/.test(dbuser.user_email)) {
                setDashboard(true)
            } else {
              router.push('/profile')
            }
        }
        getUser()
    } else {
        router.push('/auth/signin')
    }
  },[session])

  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between space-y-4 h-full">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <RedHat productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
        <RecoilRoot>
          {dashboard ? (
              <UsersFeed />
          ) : ( 
              <>
              </>
          )}
        </RecoilRoot>
      <Footer />
    </main>
    
  )
}