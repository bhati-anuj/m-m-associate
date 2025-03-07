import React from 'react'
import { CheckCircle, CableCarIcon as Elevator } from "lucide-react";
import Image from "next/image";
import lift1 from "@/utils/liftPage/lift.jpg";



const LiftServiceOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
            <Elevator className="h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl md:text-5xl">
            Comprehensive Lift Solutions
          </h2>
          <p className="text-lg text-blue">
            At M&M Lifts division provides end-to-end solutions for all
            your vertical transportation needs. From design and
            installation to maintenance and modernization, we ensure safe,
            efficient, and stylish lift systems for buildings of all types
            and sizes.
          </p>
          <ul className="grid gap-3">
            {[
              "Custom lift design and engineering",
              "New lift installation for all building types",
              "Lift modernization and upgrades",
              "Regular maintenance and servicing",
              "24/7 emergency repair services",
              "Safety inspections and certifications",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-blue">
                <CheckCircle className="h-5 w-5 text-golden" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={lift1}
            alt="Modern elevator installation"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default LiftServiceOverview