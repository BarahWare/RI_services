import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Ruben Servicios | Plomería, Gas, Electricidad y Obras',
  description:
    'Servicios profesionales de plomería, gas, electricidad, cloacas y obras en general. Urgencias domiciliarias, instalaciones completas y reparaciones. Presupuesto sin cargo.',
  url: 'https://rubenservicios.com',
  whatsapp: 'https://wa.me/543518751067?text=Hola%2C%20quisiera%20consultar%20por%20un%20trabajo.',
  phone: '+54 351 875-1067',
  email: 'info@rubenservicios.com',
  location: 'Córdoba, Argentina',
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'plomero en Córdoba',
    'gasista matriculado',
    'electricista domiciliario',
    'instalación de bombas de agua',
    'reparación cloacas',
    'instalación eléctrica completa',
    'urgencias domiciliarias',
    'servicio técnico Córdoba',
    'reparaciones del hogar',
    'obras y reformas',
    'instalación de luminarias',
    'tanques de agua',
    'cisternas',
    'bombas presurizadoras',
    'griferías',
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}
