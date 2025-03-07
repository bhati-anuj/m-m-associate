import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { CheckCircle, Palette } from "lucide-react";

const LiftServices = () => {
  return (
    <section className="py-16 md:py-24 bg-darkBlue text-white">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-md bg-golden/20 px-3 py-1 text-sm font-medium text-golden">
          <Palette className="h-4 w-4" />
          <span>Our Services</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
          Comprehensive Design Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Explore our range of specialized interior design services
          tailored to meet your specific needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Lift Installation",
            description:
              "We offer seamless installation of high-quality elevators, ensuring smooth operation and durability.",
            features: [
              "Residential Elevators",
              "Commercial Elevators ",
              "Hospital & Industrial Lifts",
              "Customized Lift Solutions",
            ],
          },
          {
            title: "Lift Modernization",
            description:
              "Upgrade old and outdated elevators with the latest technology, aesthetics, and safety standards.",
            features: [
              "Advanced control systems for better efficiency",
              "Energy-efficient solutions",
              "Sleek and modern cabin designs"
            ],
          },
          {
            title: "Lift Maintenance & Repair",
            description:
              "Our expert technicians provide 24/7 maintenance and repair services to ensure uninterrupted lift performance",
            features: [
              "Routine servicing and safety checks",
              "Emergency breakdown support",
              "Spare parts replacement"
            ],
          },
          {
            title: "Custom Lift Designs",
            description:
              "We specialize in tailor-made elevator solutions that align with your space, branding, and operational requirements",
            features: [
              " Luxury glass and panoramic lifts",
              "Space-saving hydraulic lifts",
              "Brand expression",
              "Silent and smooth gearless traction lifts",
            ],
          }
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

export default LiftServices