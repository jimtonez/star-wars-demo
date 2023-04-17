"use client"
import Register from '@/components/forms/Register';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import RedHat from '@/components/RedHat';
import { useState } from 'react';

export default function Home() {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [productsOpen, setProductsOpen] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-4">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <RedHat productsOpen={productsOpen} setProductsOpen={setProductsOpen} />
      {(!navbarOpen && !productsOpen) && (
        <Register />
      )}
    </main>
  )
}
