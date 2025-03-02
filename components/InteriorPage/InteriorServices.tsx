import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { CheckCircle, Palette } from "lucide-react";

const InteriorServices = () => {
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
            title: "Residential Design",
            description:
              "Create a home that reflects your personality and meets your lifestyle needs, from single rooms to complete homes.",
            features: [
              "Space planning",
              "Furniture selection",
              "Color consultation",
              "Accessory styling",
            ],
          },
          {
            title: "Commercial Design",
            description:
              "Design workspaces that enhance productivity, reflect your brand identity, and impress clients and employees alike.",
            features: [
              "Office layout planning",
              "Ergonomic solutions",
              "Brand integration",
              "Collaborative spaces",
            ],
          },
          {
            title: "Hospitality Design",
            description:
              "Create memorable experiences for guests with thoughtfully designed hotels, restaurants, and entertainment venues.",
            features: [
              "Atmosphere creation",
              "Traffic flow optimization",
              "Lighting design",
              "Custom furniture",
            ],
          },
          {
            title: "Retail Design",
            description:
              "Design retail environments that showcase your products effectively and enhance the customer shopping experience.",
            features: [
              "Store layout",
              "Visual merchandising",
              "Brand expression",
              "Customer journey mapping",
            ],
          },
          {
            title: "Renovation Consulting",
            description:
              "Expert guidance for renovation projects, helping you make informed decisions and avoid costly mistakes.",
            features: [
              "Project assessment",
              "Budget planning",
              "Contractor coordination",
              "Material selection",
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
              <CardDescription className="text-gray-300">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-golden" />
                    <span className="text-gray-200">{feature}</span>
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

export default InteriorServices