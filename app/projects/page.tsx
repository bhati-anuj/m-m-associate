import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
   <Navbar/>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cranes.jpg"
              alt="M&M Associates projects collage"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-5">
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">Our Portfolio</div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Showcasing Excellence in Architecture and Design
              </h1>
              <p className="text-xl text-gray-200">
                Explore our diverse portfolio of projects, spanning residential, commercial, industrial, and
                institutional sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Project Search and Filter */}
        <section className="py-12 bg-gray">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="search" placeholder="Search projects..." className="pl-10 bg-white border-none" />
                </div>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <Select>
                  <SelectTrigger className="w-[180px] bg-white border-none">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="institutional">Institutional</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] bg-white border-none">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-8">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Skyline Tower",
                  category: "Commercial",
                  description: "A state-of-the-art office complex with panoramic city views.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Green Meadows Residences",
                  category: "Residential",
                  description: "Eco-friendly luxury apartments with cutting-edge sustainable features.",
                  image: "/cranes.jpg",
                },
                {
                  title: "TechHub Innovation Center",
                  category: "Industrial",
                  description: "A modern research and development facility for emerging technologies.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Riverside Cultural Center",
                  category: "Institutional",
                  description: "A multi-purpose venue celebrating arts and community engagement.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Urban Oasis Shopping Mall",
                  category: "Commercial",
                  description: "A next-generation retail experience blending nature and architecture.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Smart City Infrastructure",
                  category: "Industrial",
                  description: "Innovative urban planning integrating IoT and sustainable technologies.",
                  image: "/cranes.jpg",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-8">All Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Harmony Heights",
                  category: "Residential",
                  description: "A modern apartment complex with community-centric design.",
                  image: "/cranes.jpg",
                },
                {
                  title: "EcoTech Office Park",
                  category: "Commercial",
                  description: "Sustainable office spaces promoting productivity and well-being.",
                  image: "/cranes.jpg",
                },
                {
                  title: "NextGen Manufacturing Plant",
                  category: "Industrial",
                  description: "A high-tech facility optimized for Industry 4.0 standards.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Central Library Renovation",
                  category: "Institutional",
                  description: "Modernizing a historic library while preserving its heritage.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Seaside Resort",
                  category: "Commercial",
                  description: "A luxury beachfront resort harmonizing with its natural surroundings.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Urban Vertical Farm",
                  category: "Industrial",
                  description: "Innovative agricultural solution for sustainable urban food production.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Smart Home Development",
                  category: "Residential",
                  description: "Cutting-edge homes equipped with the latest in smart technology.",
                  image: "/cranes.jpg",
                },
                {
                  title: "City Hall Expansion",
                  category: "Institutional",
                  description: "Expanding and modernizing municipal services with citizen-centric design.",
                  image: "/cranes.jpg",
                },
                {
                  title: "Renewable Energy Plant",
                  category: "Industrial",
                  description: "State-of-the-art facility harnessing multiple renewable energy sources.",
                  image: "/cranes.jpg",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-darkBlue text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project. Our team of experts is ready to turn your ideas into reality.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-white">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
<Footer/>
    </div>
  )
}

