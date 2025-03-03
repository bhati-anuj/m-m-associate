'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import interior1 from "@/utils/interiorPage/interior.jpg";


const InteriorHero = () => {
  return (
    <section className="relative">
    <div className="absolute inset-0 z-0">
      <Image
        src={interior1}
        alt="Elegant interior design"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />
    </div>
    <div className="container relative z-10 py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl space-y-5">
        <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
          Interior Design
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          Transforming Spaces Into Experiences
        </h1>
        <p className="text-xl text-gray-200">
          Elevate your environment with our bespoke interior design
          services that blend aesthetics, functionality, and your unique
          vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            size="lg"
            className="font-medium bg-golden hover:bg-golden/90 text-white"
            onClick={()=>window.location.href="/projects"}
          >
            View Our Portfolio
          </Button>
          <Button
          onClick={()=>window.location.href="/contact"}
            size="lg"
            variant="outline"
            className="bg-background/20 text-white border-white hover:bg-background/30"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InteriorHero