'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#por-que-elegirnos', label: 'Por qué nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white font-bold text-sm">
              R
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                scrolled ? 'text-primary-500' : 'text-white'
              }`}
            >
              Ruben Servicios
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                  scrolled ? 'text-secondary-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Presupuesto
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              scrolled ? 'text-primary-500' : 'text-white'
            }`}
            aria-label="Menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="animate-slide-down rounded-b-2xl bg-white pb-4 shadow-lg md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-secondary-600 transition-colors hover:bg-gray-50 hover:text-primary-500"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-primary-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
