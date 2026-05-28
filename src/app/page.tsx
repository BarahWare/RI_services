import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Trabajos from '@/components/Trabajos'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import Testimonios from '@/components/Testimonios'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Trabajos />
      <PorQueElegirnos />
      <Testimonios />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
