# Ruben Servicios - Web Profesional

Web profesional para servicios de plomería, gas, electricidad, cloacas y obras en Córdoba.

## Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Deploy en Vercel (gratuito)

## Requisitos

- Node.js 18+
- Git
- Cuenta en [Vercel](https://vercel.com) (gratis)
- Cuenta en [GitHub](https://github.com) (gratis)

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en http://localhost:3000
```

## Build producción

```bash
npm run build
npm start
```

## Deploy en Vercel (gratis)

### Opción 1: Desde GitHub (recomendada)

```bash
# 1. Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit"

# 2. Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/ruben-servicios.git
git branch -M main
git push -u origin main

# 3. Ir a https://vercel.com/new
# 4. Importar repositorio "ruben-servicios"
# 5. Vercel detecta Next.js automáticamente
# 6. Click en "Deploy"
```

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Dominio personalizado

1. En Vercel: ir a Project Settings > Domains
2. Agregar tu dominio (ej: rubenservicios.com)
3. Seguir las instrucciones de DNS que da Vercel
4. Agregar los registros CNAME en tu proveedor de DNS

## Personalizar

Editar `src/lib/metadata.ts` para cambiar:
- Número de WhatsApp
- Teléfono
- Email
- Ubicación
- URL del sitio

## Estructura

```
src/
  app/
    layout.tsx      # Layout principal y SEO
    page.tsx        # Página principal
    globals.css     # Estilos globales
  components/
    Navbar.tsx
    Hero.tsx
    Servicios.tsx
    Trabajos.tsx
    PorQueElegirnos.tsx
    Testimonios.tsx
    Contacto.tsx
    Footer.tsx
    WhatsAppButton.tsx
  lib/
    metadata.ts     # Configuración del sitio
```
