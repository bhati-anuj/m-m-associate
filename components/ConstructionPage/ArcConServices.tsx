import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { CheckCircle, Palette } from "lucide-react";

const ArcConServices = () => {
  return (
    <section className="py-16 md:py-24 bg-darkBlue text-white">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-md bg-golden/20 px-3 py-1 text-sm font-medium text-golden">
          <Palette className="h-4 w-4" />
          <span>Our Services</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
        Comprehensive ArcCon Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-300">
        Explore our range of specialized interior design services tailored to meet your specific needs. 
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: " Architectural Design & Planning",
            description:
              "Crafting iconic structures with a seamless blend of aesthetics, functionality, and sustainability.",
            features: [
              "Conceptual master Mlanning",
              "3D visualization & Rendering",
              "Regulatory Approvals & Compliance",
              "Structural & Space Planning",
            ],
          },
          {
            title: "Residential Construction",
            description:
              "Building luxury residences that redefine comfort, elegance, and timeless appeal.",
            features: [
              "High-end villa Construction",
              "Premium Apartment developments",
              "Custom home design & execution",
              "Renovation & remodeling",
            ],
          },
          {
            title: "Commercial & Corporate Construction",
            description:
              "Developing state-of-the-art commercial spaces that enhance brand identity and operational efficiency.",
            features: [
              "Corporate office buildings",
              "Retail & Shopping Complexes",
              "Hospitality & Hotel Projects",
              "Mixed-use Developments",
            ],
          },
          {
            title: "Smart & Sustainable Building Solutions",
            description:
              "Innovating with energy-efficient, future-ready, and eco-friendly solutions for modern architecture.",
            features: [
              "Green Building Technology",
              "Smart home & Office Automation",
              "Energy-efficient construction",
              "Advanced Structural Engineering",
            ],
          },
          {
            title: "Turnkey Project Management",
            description:
              "Delivering seamless execution from concept to completion with uncompromised quality & timelines.",
            features: [
              "End-to-end Project Execution",
              "Budget & Cost Optimization",
              "Quality Control & Assurance",
              "Timely Project Handover",
            ],
          },
          {
            title: "Virtual Design Services",
            description:
              "Professional design assistance regardless of your location, with digital consultations and detailed design packages.",
            features: [
              "Remote consultations",
              "Digital mood boards",
              "3D visualizations",
              "Detailed specifications",
            ],
          },
        ].map((service, i) => (
          <Card key={i} className="bg-blue/10 border-none">
            <CardHeader>
              <CardTitle className="text-golden">
                {service.title}
              </CardTitle>
              <CardDescription className="text-white">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-golden" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ArcConServices