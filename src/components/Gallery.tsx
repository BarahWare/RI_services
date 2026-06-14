'use client'

import { useState, useRef } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface GalleryProps {
  images: string[]
  title?: string
}

export default function Gallery({ images, title }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const slides = images.map((src) => ({ src }))

  if (images.length === 0) return null

  return (
    <>
      <div className="relative mt-4 w-full min-w-0">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary-400">
          {title || 'Galería'}
        </p>
        <div
          ref={scrollRef}
          className="scrollbar-thin flex w-full max-w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-2"
        >
          {images.map((src, i) => {
            const isAnim = src.endsWith('.gif') || src.endsWith('.mp4')
            const thumb = isAnim ? src.replace(/\.(gif|mp4)$/, '.poster.jpg') : src
            return (
              <button
                key={i}
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
                className="relative h-20 w-28 flex-shrink-0 snap-start overflow-hidden rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <img
                  src={thumb}
                  alt={`${title || 'Imagen'} ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            )
          })}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  )
}
