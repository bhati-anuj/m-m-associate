'use client'
import Image from "next/image";
import {
 
  CheckCircle,
  Cog,
  Compass,
  CableCarIcon as Elevator,
  HardHat,
  Ruler,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import lift1 from "@/utils/liftPage/lift.jpg";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import InquiryForm from "@/components/InquiryForm";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import ProjectShowase from "@/components/ProjectShowase";
import LiftServices from "@/components/LiftsPage/LiftServices";

export default function LiftServicePage() {
  const commercialProjects = [
    {
      title: "Modern Office Complex",
      description:
        "A 12-story office building with sustainable design features and collaborative workspaces.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Retail Shopping Center",
      description:
        "An open-air shopping center with distinctive architectural elements and customer-focused design.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Corporate Headquarters",
      description:
        "A flagship headquarters building that embodies the client's brand identity and corporate values.",
      image: "/constructionPage/construction.png",
    },
  ];

  const residentialProjects = [
    {
      title: "Luxury Apartment Complex",
      description:
        "A high-end residential development with premium amenities and contemporary design.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Custom Family Home",
      description:
        "A bespoke residence designed to meet the specific lifestyle needs of a growing family.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Urban Townhouses",
      description:
        "A collection of modern townhouses that maximize space in an urban setting.",
      image: "/constructionPage/construction.png",
    },
  ];
  const institutionalProjects = [
    {
      title: "University Research Center",
      description:
        "A state-of-the-art facility designed to foster innovation and academic collaboration.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Community Hospital",
      description:
        "A healthcare facility that balances clinical functionality with patient comfort and wellbeing.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Public Library",
      description:
        "A modern library that serves as both a repository of knowledge and a community gathering space.",
      image: "/constructionPage/construction.png",
    },
  ];

  const industrialProjects = [
    {
      title: "Manufacturing Facility",
      description:
        "A purpose-built production facility designed for operational efficiency and worker safety.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Distribution Center",
      description:
        "A logistics hub optimized for modern supply chain operations and future expansion.",
      image: "/constructionPage/construction.png",
    },
    {
      title: "Research & Development Complex",
      description:
        "A specialized facility that combines laboratory, office, and testing spaces for innovation.",
      image: "/constructionPage/construction.png",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
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

        {/* Service Overview */}
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
                  At M&M Associates, our Lift Services division provides
                  end-to-end solutions for all your vertical transportation
                  needs. From design and installation to maintenance and
                  modernization, we ensure safe, efficient, and stylish lift
                  systems for buildings of all types and sizes.
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

     <LiftServices/>

        {/* Our Process */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Cog className="h-4 w-4" />
                <span>Our Process</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-blue">
                Our streamlined process ensures a smooth experience from initial
                consultation to ongoing maintenance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Consultation & Assessment",
                  description:
                    "We begin by understanding your specific needs and assessing your building's requirements.",
                  icon: <Compass className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Design & Planning",
                  description:
                    "Our engineers create custom lift designs tailored to your building's architecture and usage patterns.",
                  icon: <Ruler className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Installation & Testing",
                  description:
                    "Our expert technicians install your lift system with precision, followed by rigorous safety testing.",
                  icon: <HardHat className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Maintenance & Support",
                  description:
                    "We provide ongoing maintenance and 24/7 support to ensure your lifts operate smoothly and safely.",
                  icon: <Cog className="h-10 w-10 text-golden" />,
                },
              ].map((step, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardHeader>
                    <div className="mb-2">{step.icon}</div>
                    <CardTitle className="flex items-center gap-2 text-darkBlue">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-golden text-sm font-medium text-white">
                        {i + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ProjectShowase
          commercial={commercialProjects}
          residential={residentialProjects}
          institutional={institutionalProjects}
          industrial={industrialProjects}
        />

        <TestimonialsSection />
        <InquiryForm />

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                Our Other Services
              </h2>
              <p className="mt-4 text-lg text-blue">
                Discover our full range of services designed to meet all your
                building and design needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden bg-white">
                <div className="aspect-video relative">
                  <Image
                    src={lift1}
                    alt="Architecture and construction services"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-darkBlue">
                    ArcCon Architecture & Construction
                  </CardTitle>
                  <CardDescription className="text-blue">
                    Comprehensive architectural design and construction services
                    for projects of all scales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue">
                    Our ArcCon service combines architectural excellence with
                    construction mastery, handling every aspect of your project
                    from initial concept to final construction.
                  </p>
                  <Button
                    variant="outline"
                    className="border-golden text-golden hover:bg-golden hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white">
                <div className="aspect-video relative">
                  <Image
                    src={lift1}
                    alt="Interior design services"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-darkBlue">
                    Interior Design
                  </CardTitle>
                  <CardDescription className="text-blue">
                    Transformative interior design services that create
                    beautiful, functional spaces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue">
                    Our interior design team creates spaces that reflect your
                    style and meet your functional needs, from concept
                    development to final styling and decoration.
                  </p>
                  <Button
                    variant="outline"
                    className="border-golden text-golden hover:bg-golden hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
