import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import lift1 from "@/utils/liftPage/lift.jpg";

const LiftHero = () => {
  return (
    <section className="relative">
    <div className="absolute inset-0 z-0">
      <Image
        src={lift1}
        alt="Modern elevator in a sleek building"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />
    </div>
    <div className="container relative z-10 py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl space-y-5">
        <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
          Lift Services
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          Elevating Your World, Floor by Floor
        </h1>
        <p className="text-xl text-white">
          Comprehensive lift solutions for modern buildings, ensuring
          smooth vertical transportation with safety and style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            onClick={() => (window.location.href = "/projects")}
            size="lg"
            className="font-medium bg-golden hover:bg-golden/90 text-white"
          >
            Explore Our Projects
          </Button>
          <Button
            onClick={() => (window.location.href = "/contact")}
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

export default LiftHero