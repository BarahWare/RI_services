'use client'

import { siteConfig } from '@/lib/metadata'
import Gallery from '@/components/Gallery'

const servicios = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Agua',
    desc: 'Instalación y reparación de cañerías de agua, pérdidas, conexiones y todo tipo de trabajos relacionados con el suministro de agua domiciliaria.',
    items: ['Reparación de pérdidas', 'Instalación de cañerías', 'Conexiones domiciliarias', 'Mantenimiento'],
    images: [
      '/images/Agua/IMG-20260604-WA0027.jpg',
      '/images/Agua/IMG-20260604-WA0036.jpg',
      '/images/Agua/IMG-20260604-WA0051.jpg',
      '/images/Agua/VID-20260604-WA0070.gif',
      '/images/Agua/VID-20260604-WA0077.gif',
      '/images/Agua/VID-20260604-WA0079.gif',
      '/images/Agua/VID-20260604-WA0083.gif',
      '/images/Agua/VID-20260604-WA0090.gif',
      '/images/Agua/VID-20260604-WA0094.gif',
      '/images/Agua/VID-20260604-WA0096.gif',
      '/images/Agua/VID-20260604-WA0098.gif',
      '/images/Agua/VID-20260604-WA0099.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18L12 21m0 0l3.75-3.75M12 21V11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 9.938l7.5-4.5a1.5 1.5 0 012.25 0l7.5 4.5M21 15V6m0 0l-9-5.25L3 6m18 9l-9 5.25M21 15v2.25" />
      </svg>
    ),
    title: 'Electricidad',
    desc: 'Instalaciones eléctricas completas, renovación de cableados, tableros, térmicas, disyuntores y soluciones para todo tipo de problema eléctrico.',
    items: ['Instalación completa', 'Renovación cableados', 'Tableros y térmicas', 'Luminarias'],
    images: [
      '/images/Electicidad/IMG-20260604-WA0018.jpg',
      '/images/Electicidad/IMG-20260604-WA0019.jpg',
      '/images/Electicidad/IMG-20260604-WA0023.jpg',
      '/images/Electicidad/IMG-20260604-WA0025.jpg',
      '/images/Electicidad/IMG-20260604-WA0030.jpg',
      '/images/Electicidad/IMG-20260604-WA0037.jpg',
      '/images/Electicidad/IMG-20260604-WA0044.jpg',
      '/images/Electicidad/VID-20260604-WA0064.gif',
      '/images/Electicidad/VID-20260604-WA0068.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.152 3.75 3.75 0 003.085 5.073z" />
      </svg>
    ),
    title: 'Gas',
    desc: 'Instalación, mantenimiento y certificación de artefactos a gas. Gasista matriculado para garantizar la seguridad de tu hogar.',
    items: ['Instalación de artefactos', 'Cocinas y calefones', 'Termotanques a gas', 'Detección de pérdidas'],
    images: [
      '/images/GAS/IMG-20260604-WA0020.jpg',
      '/images/GAS/IMG-20260604-WA0021.jpg',
      '/images/GAS/IMG-20260604-WA0026.jpg',
      '/images/GAS/IMG-20260604-WA0028.jpg',
      '/images/GAS/IMG-20260604-WA0029.jpg',
      '/images/GAS/IMG-20260604-WA0033.jpg',
      '/images/GAS/IMG-20260604-WA0040.jpg',
      '/images/GAS/IMG-20260604-WA0042.jpg',
      '/images/GAS/IMG-20260604-WA0043.jpg',
      '/images/GAS/IMG-20260604-WA0045.jpg',
      '/images/GAS/IMG-20260604-WA0048.jpg',
      '/images/GAS/IMG-20260604-WA0049.jpg',
      '/images/GAS/IMG-20260604-WA0059.jpg',
      '/images/GAS/IMG-20260604-WA0061.jpg',
      '/images/GAS/VID-20260604-WA0065.gif',
      '/images/GAS/VID-20260604-WA0084.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Albañilería y Construcción',
    desc: 'Realizamos obras de albañilería en general, desde pequeños arreglos hasta reformas completas. Transformamos tus espacios con profesionalismo.',
    items: ['Reformas y ampliaciones', 'Tabiquería y mampostería', 'Revoques y revestimientos', 'Mantenimiento general'],
    images: [
      '/images/Albanileria-Construc/VID-20260604-WA0075.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Tanques',
    desc: 'Instalación y mantenimiento de tanques de agua, cisternas y sistemas de almacenamiento. Soluciones eficientes para el suministro de agua.',
    items: ['Instalación de tanques', 'Cisternas', 'Conexiones', 'Mantenimiento'],
    images: [
      '/images/Tanques/IMG-20260604-WA0017.jpg',
      '/images/Tanques/VID-20260604-WA0062.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Bombas',
    desc: 'Instalación y reparación de bombas presurizadoras, sistemas de presión y equipos de bombeo para hogares y comercios.',
    items: ['Bombas presurizadoras', 'Sistemas de presión', 'Reparación y mantenimiento', 'Equipos de bombeo'],
    images: [
      '/images/Bombas/IMG-20260604-WA0016.jpg',
      '/images/Bombas/IMG-20260604-WA0022.jpg',
      '/images/Bombas/IMG-20260604-WA0054.jpg',
      '/images/Bombas/VID-20260604-WA0063.gif',
      '/images/Bombas/VID-20260604-WA0076.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Desagüe y Cloacas',
    desc: 'Servicio completo de reparación y mantenimiento de desagües y cloacas. Destapaciones, cámaras sépticas y solución de problemas de desagüe.',
    items: ['Destapaciones', 'Cámaras sépticas', 'Reparación de desagües', 'Mantenimiento'],
    images: [
      '/images/Desague/IMG-20260604-WA0024.jpg',
      '/images/Desague/IMG-20260604-WA0031.jpg',
      '/images/Desague/IMG-20260604-WA0032.jpg',
      '/images/Desague/IMG-20260604-WA0034.jpg',
      '/images/Desague/IMG-20260604-WA0035.jpg',
      '/images/Desague/IMG-20260604-WA0041.jpg',
      '/images/Desague/IMG-20260604-WA0047.jpg',
      '/images/Desague/IMG-20260604-WA0052.jpg',
      '/images/Desague/IMG-20260604-WA0053.jpg',
      '/images/Desague/IMG-20260604-WA0055.jpg',
      '/images/Desague/IMG-20260604-WA0060.jpg',
      '/images/Desague/VID-20260604-WA0074.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Instalación Sanitaria',
    desc: 'Instalación completa de sistemas sanitarios, conexiones de agua potable y desagües para construcciones nuevas y remodelaciones.',
    items: ['Instalación sanitaria completa', 'Conexiones de agua', 'Desagües domiciliarios', 'Remodelaciones'],
    images: [
      '/images/Instalacion-Sanitaria/IMG-20260604-WA0050.jpg',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
    title: 'Mantenimiento de Artefactos de Gas',
    desc: 'Mantenimiento preventivo y correctivo de artefactos a gas. Servicio técnico especializado para cocinas, calefones, termotanques y estufas.',
    items: ['Mantenimiento preventivo', 'Reparación de artefactos', 'Cambio de piezas', 'Certificación'],
    images: [
      '/images/Mantenimiento-Artef-de-Gas/IMG-20260604-WA0038.jpg',
      '/images/Mantenimiento-Artef-de-Gas/IMG-20260604-WA0056.jpg',
      '/images/Mantenimiento-Artef-de-Gas/IMG-20260604-WA0058.jpg',
      '/images/Mantenimiento-Artef-de-Gas/VID-20260604-WA0073.gif',
      '/images/Mantenimiento-Artef-de-Gas/VID-20260604-WA0089.gif',
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Final de Obras',
    desc: 'Trabajos de finalización de obra: colocación de artefactos, grifería, sanitarios, detalles de terminación y puesta a punto de instalaciones.',
    items: ['Colocación de artefactos', 'Grifería y sanitarios', 'Terminaciones', 'Puesta a punto'],
    images: [
      '/images/Final-de-Obras/IMG-20260604-WA0039.jpg',
      '/images/Final-de-Obras/IMG-20260604-WA0046.jpg',
      '/images/Final-de-Obras/IMG-20260604-WA0057.jpg',
      '/images/Final-de-Obras/VID-20260604-WA0066.gif',
      '/images/Final-de-Obras/VID-20260604-WA0067.gif',
      '/images/Final-de-Obras/VID-20260604-WA0071.gif',
      '/images/Final-de-Obras/VID-20260604-WA0081.gif',
      '/images/Final-de-Obras/VID-20260604-WA0085.gif',
      '/images/Final-de-Obras/VID-20260604-WA0092.gif',
      '/images/Final-de-Obras/VID-20260604-WA0097.gif',
    ],
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600">
            Nuestros Servicios
          </span>
          <h2 className="section-title mt-4">
            Soluciones Profesionales para tu Hogar
          </h2>
          <p className="section-subtitle mx-auto">
            Ofrecemos una amplia gama de servicios técnicos domiciliarios con
            profesionalismo, garantía y los mejores precios.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <div key={servicio.title} className="card-service group">
              <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-500">
                {servicio.title}
              </h3>
              <p className="mt-2 text-secondary-500">{servicio.desc}</p>
              <ul className="mt-4 space-y-2">
                {servicio.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-secondary-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Gallery images={servicio.images} title={servicio.title} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl"
          >
            Consultar por un servicio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
