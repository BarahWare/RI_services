'use client'

import { siteConfig } from '@/lib/metadata'

const servicios = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Plomería',
    desc: 'Reparación de cañerías, pérdidas de agua, destapaciones, instalación de termotanques y todo tipo de trabajos de plomería domiciliaria.',
    items: ['Reparación de pérdidas', 'Destapaciones', 'Termotanques', 'Cañerías'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.152 3.75 3.75 0 003.085 5.073z" />
      </svg>
    ),
    title: 'Gas',
    desc: 'Instalación y mantenimiento de artefactos a gas. Gasista matriculado para garantizar la seguridad de tu hogar.',
    items: ['Artefactos a gas', 'Cocinas y calefones', 'Termotanques a gas', 'Detección de pérdidas'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18L12 21m0 0l3.75-3.75M12 21V11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 9.938l7.5-4.5a1.5 1.5 0 012.25 0l7.5 4.5M21 15V6m0 0l-9-5.25L3 6m18 9l-9 5.25M21 15v2.25" />
      </svg>
    ),
    title: 'Electricidad',
    desc: 'Instalaciones eléctricas completas, renovación de cableados, tableros, térmicas y soluciones para todo tipo de problema eléctrico.',
    items: ['Instalación completa', 'Renovación cableados', 'Tableros y térmicas', 'Luminarias'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Obras y Reformas',
    desc: 'Realizamos obras en general, reformas integrales, ampliaciones y refacciones. Transformamos tu espacio con profesionalismo.',
    items: ['Reformas integrales', 'Ampliaciones', 'Refacciones', 'Mantenimiento general'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Tanques y Bombas',
    desc: 'Instalación de tanques de agua, bombas presurizadoras y cisternas. Soluciones eficientes para el suministro de agua.',
    items: ['Tanques de agua', 'Bombas presurizadoras', 'Cisternas', 'Sistemas de presión'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Cloacas',
    desc: 'Servicio de reparación y mantenimiento de cloacas. Destapaciones, cámaras sépticas y solución de problemas de desagüe.',
    items: ['Destapaciones', 'Cámaras sépticas', 'Reparación de desagües', 'Mantenimiento'],
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
