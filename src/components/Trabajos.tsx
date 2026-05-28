'use client'

const trabajos = [
  {
    title: 'Instalación Eléctrica Completa',
    desc: 'Cableado nuevo, tablero general, térmicas y disyuntor para vivienda de 3 dormitorios.',
    category: 'Electricidad',
    bg: 'bg-blue-100',
    icon: '💡',
  },
  {
    title: 'Baño Completo Reformado',
    desc: 'Renovación integral de baño con nueva grifería, cañerías, sanitarios y revestimientos.',
    category: 'Plomería',
    bg: 'bg-cyan-100',
    icon: '🚿',
  },
  {
    title: 'Instalación de Gas Natural',
    desc: 'Conexión de cocina, calefón y termotanque con certificación de gasista matriculado.',
    category: 'Gas',
    bg: 'bg-orange-100',
    icon: '🔥',
  },
  {
    title: 'Sistema de Agua a Presión',
    desc: 'Instalación de bomba presurizadora y tanque de 1000 litros con cisterna.',
    category: 'Tanques y Bombas',
    bg: 'bg-sky-100',
    icon: '💧',
  },
  {
    title: 'Reparación de Cloacas',
    desc: 'Destapación y reparación de cañería principal con cámara séptica nueva.',
    category: 'Cloacas',
    bg: 'bg-teal-100',
    icon: '🔧',
  },
  {
    title: 'Obra Civil - Ampliación',
    desc: 'Ampliación de cocina y living con instalaciones eléctricas y de agua completas.',
    category: 'Obras',
    bg: 'bg-stone-100',
    icon: '🏗️',
  },
]

export default function Trabajos() {
  return (
    <section id="trabajos" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600">
            Trabajos Realizados
          </span>
          <h2 className="section-title mt-4">
            Ejemplos de Nuestro Trabajo
          </h2>
          <p className="section-subtitle mx-auto">
            Cada proyecto recibe atención personalizada y los más altos
            estándares de calidad.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((trabajo) => (
            <div
              key={trabajo.title}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`flex h-48 items-center justify-center ${trabajo.bg}`}
              >
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  {trabajo.icon}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                  {trabajo.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-primary-500">
                  {trabajo.title}
                </h3>
                <p className="mt-2 text-sm text-secondary-500">
                  {trabajo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
