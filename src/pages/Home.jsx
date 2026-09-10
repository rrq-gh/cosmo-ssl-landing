import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Highlight from '../components/Highlight'
import Brands from '../components/Brands'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function Home() {
  const { hash } = useLocation()

  // Permite llegar con un ancla desde otra página (p.ej. el Header del Blog
  // enlazando a "/#precios") y hacer scroll suave hasta la sección.
  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-surface-base pt-0">
        <div className="flex w-full flex-col">
          <Hero />
          <Services />
          <Highlight />
          <Brands />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}
