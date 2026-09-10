import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Highlight from './components/Highlight'
import Brands from './components/Brands'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
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
