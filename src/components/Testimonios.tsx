'use client'

const testimonios = [
  {
    name: 'María Elena González',
    location: 'Barrio Centro',
    text: 'Llamé por una pérdida de agua urgente un sábado a la tarde. Rubén vino en menos de una hora, solucionó el problema y me dejó todo impecable. Muy recomendable.',
    rating: 5,
  },
  {
    name: 'Carlos Martínez',
    location: 'Nueva Córdoba',
    text: 'Hizo la instalación eléctrica completa de mi departamento. Trabajo prolijo, respetando tiempos y con todos los certificados. Quedó todo perfecto.',
    rating: 5,
  },
  {
    name: 'Laura Fernández',
    location: 'Cerro de las Rosas',
    text: 'Contraté a Rubén para reformar el baño y la cocina. Mejor de lo que esperaba. Precio justo, muy profesional y limpio. Sin dudas lo voy a recomendar.',
    rating: 5,
  },
  {
    name: 'Diego Rodríguez',
    location: 'Alta Córdoba',
    text: 'Instalación de gas con certificación. Todo en regla, materiales de primera y muy buena onda. Se nota que sabe lo que hace. Un capo.',
    rating: 5,
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-gray-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-600">
            Testimonios
          </span>
          <h2 className="section-title mt-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="section-subtitle mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.name}
              className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-secondary-600">
                &ldquo;{testimonio.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
                  {testimonio.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-500">
                    {testimonio.name}
                  </p>
                  <p className="text-xs text-secondary-400">
                    {testimonio.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
