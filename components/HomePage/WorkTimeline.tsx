"use client"

import { useEffect, useState } from "react"
import { Users, FileCheck, Factory, Truck, Key } from "lucide-react"

export default function WorkTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const purple = "#b6a27b"

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 5)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: Users,
      title: "Talk to our Interior Designer",
      subtitle: "& Get an Estimate",
    },
    {
      icon: FileCheck,
      title: "Detailed Drawing",
      subtitle: "and Approval",
    },
    {
      icon: Factory,
      title: "Production at Own",
      subtitle: "Factories",
    },
    {
      icon: Truck,
      title: "Material Delivery",
      subtitle: "& Execution",
    },
    {
      icon: Key,
      title: "On Time Project",
      subtitle: "Hand Over",
    },
  ]

  return (
    <div className="py-16 px-4 m-auto ">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-12">
        HOW IT WORKS <span className="text-textGolden">40 WORKING DAYS*</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full max-w-[200px]">
        

            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-colors duration-500"
              style={{
                backgroundColor: index <= activeIndex ? purple : "white",
                border: `2px solid ${purple}`,
              }}
            >
              <step.icon className="w-12 h-12" color={index <= activeIndex ? "white" : purple} />
            </div>
{/* 
            {index < steps.length - 1 && (
              <div
                className="hidden md:block absolute h-[2px] bg-gray-300"
                style={{
                  width: "15%",
                  left: `${18 + index * 10}%`,
                  top: "12%",
                }}
              >
                <div className="w-4 h-4 absolute -right-2 top-1/3 -translate-y-1/2">
                  <div className="w-2 h-2 rotate-45 border-t-2 border-r-2 border-gray-300" />
                </div>
              </div>
             
            )} */}

            <h3 className="font-medium text-sm md:text-base mt-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

