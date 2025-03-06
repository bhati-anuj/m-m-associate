'use client'
import React from 'react'
import construction1 from "@/utils/constructionPage/construction.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";



const ArcConHero = () => {
  return (
    <section className="relative">
    <div className="absolute inset-0 z-0">
      <Image
        src={construction1}
        alt="Modern architecture building"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />
    </div>
    <div className="container relative z-10 py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl space-y-5">
        <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
          Architecture & Construction
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          ArcCon: Where Vision Meets Structure
        </h1>
        <p className="text-xl text-white">
          Transforming architectural concepts into stunning realities with
          precision engineering and expert construction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
           onClick={()=>window.location.href="/projects"}
            size="lg"
            className="font-medium bg-golden hover:bg-golden/90 text-white"
          >
            Explore Our Projects
          </Button>
          <Button
           onClick={()=>window.location.href="/contact"}
            size="lg"
            variant="outline"
            className="bg-background/20 text-white border-white hover:bg-background/30"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ArcConHero