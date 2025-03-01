'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import lift from "@/utils/Carousel/lift.jpg"
import miniConstruction from "@/utils/Carousel/mini-construction.png"
import interior from "@/utils/Carousel/interior.png"
import planning from "@/utils/Carousel/planning.jpg"
import Header from '../Header/Header'



const images = [
  { src: miniConstruction, alt: 'First slide' },
  { src: planning, alt: 'Second slide' },
  { src: lift, alt: 'Third slide' },
  { src: interior, alt: 'Fourth slide' },

]

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <div className=' absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'>

      <Header/>
      </div>
      {images.map((image, index) => (
        <Image
          key={`carousel-image-${index}`}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-1000 brightness-[0.4] ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  )
}

