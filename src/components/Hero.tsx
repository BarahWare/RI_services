'use client'

import { siteConfig } from '@/lib/metadata'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="gradient-hero relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              Matriculado · Responsabilidad · Garantía
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Servicios{' '}
              <span className="text-blue-300">Profesionales</span>
              <br />
              para tu Hogar
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              Plomería, gas, electricidad, cloacas y obras en general.
              Atención rápida, presupuesto sin cargo y trabajo garantizado
              en Córdoba y zona.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar Ahora
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
              >
                Ver Servicios
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: '🛡️', text: 'Profesional Matriculado' },
                { icon: '⚡', text: 'Respuesta Rápida' },
                { icon: '✅', text: 'Trabajo Garantizado' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-white/80">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: '🔧', label: 'Plomería' },
                    { emoji: '🔥', label: 'Gas' },
                    { emoji: '💡', label: 'Electricidad' },
                    { emoji: '🏗️', label: 'Obras' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center rounded-xl bg-white/10 p-4 text-center transition-colors hover:bg-white/20"
                    >
                      <span className="text-3xl">{item.emoji}</span>
                      <span className="mt-2 text-sm font-medium text-white/90">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-green-500/20 p-4 text-center">
                  <p className="text-sm font-medium text-green-300">
                    Urgencias: Respondemos en el día
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
