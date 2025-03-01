import Image from "next/image"
import { Building2, CheckCircle, Cog, Compass, CableCarIcon as Elevator, HardHat, Ruler, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import lift1 from "@/utils/liftPage/lift.jpg"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"


export default function LiftServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
 <Navbar/>

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
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">Lift Services</div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Elevating Your World, Floor by Floor
              </h1>
              <p className="text-xl text-gray-200">
                Comprehensive lift solutions for modern buildings, ensuring smooth vertical transportation with safety
                and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="font-medium bg-golden hover:bg-golden/90 text-white">
                  Explore Our Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 text-white border-white hover:bg-background/30"
                >
                  Request a Consultation
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
                  At M&M Associates, our Lift Services division provides end-to-end solutions for all your vertical
                  transportation needs. From design and installation to maintenance and modernization, we ensure safe,
                  efficient, and stylish lift systems for buildings of all types and sizes.
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

        {/* Types of Lift Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Cog className="h-4 w-4" />
                <span>Our Services</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                Lift Solutions for Every Need
              </h2>
              <p className="mt-4 text-lg text-blue">
                We offer a wide range of lift services to meet the diverse needs of residential, commercial, and
                industrial buildings.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Passenger Lifts",
                  description:
                    "Efficient and comfortable lifts designed for smooth transportation of people in various building types.",
                  icon: <Users className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Goods & Freight Lifts",
                  description:
                    "Heavy-duty lifts engineered for transporting goods and equipment in industrial and commercial settings.",
                  icon: <HardHat className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Panoramic Lifts",
                  description:
                    "Glass-walled lifts offering stunning views, perfect for hotels, shopping centers, and modern office buildings.",
                  icon: <Compass className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Home Lifts",
                  description:
                    "Compact and stylish lifts designed for residential use, enhancing accessibility and property value.",
                  icon: <Building2 className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Platform Lifts",
                  description:
                    "Versatile lifts for improved accessibility, suitable for both indoor and outdoor installations.",
                  icon: <Ruler className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Modernization Services",
                  description:
                    "Upgrade existing lifts with the latest technology to improve performance, safety, and energy efficiency.",
                  icon: <Cog className="h-10 w-10 text-golden" />,
                },
              ].map((service, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardHeader>
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle className="text-darkBlue">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Cog className="h-4 w-4" />
                <span>Our Process</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">How We Work</h2>
              <p className="mt-4 text-lg text-blue">
                Our streamlined process ensures a smooth experience from initial consultation to ongoing maintenance.
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

        {/* Project Showcase */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Building2 className="h-4 w-4" />
                <span>Our Portfolio</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-blue">
                Explore our diverse portfolio of lift installations across various building types and industries.
              </p>
            </div>

            <Tabs defaultValue="commercial" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray">
                  <TabsTrigger
                    value="commercial"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Commercial
                  </TabsTrigger>
                  <TabsTrigger
                    value="residential"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Residential
                  </TabsTrigger>
                  <TabsTrigger
                    value="industrial"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Industrial
                  </TabsTrigger>
                  <TabsTrigger
                    value="specialized"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Specialized
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="commercial" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Luxury Hotel Panoramic Lifts",
                      description: "High-speed panoramic lifts offering breathtaking city views for a 5-star hotel.",
                      image: {lift1},
                    },
                    {
                      title: "Office Tower Multi-Lift System",
                      description:
                        "Integrated multi-lift system for efficient vertical transportation in a busy corporate hub.",
                      image: {lift1},
                    },
                    {
                      title: "Shopping Mall Glass Elevators",
                      description:
                        "Stylish glass elevators enhancing the shopping experience in a modern retail complex.",
                      image: {lift1},
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.lift1 || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">{project.title}</CardTitle>
                        <CardDescription className="text-blue">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                        >
                          View Project Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="residential" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Luxury Apartment Complex",
                      description: "High-speed lifts with premium finishes for a high-rise residential tower.",
                      image: {lift1},
                    },
                    {
                      title: "Smart Home Lift Installation",
                      description:
                        "Compact, energy-efficient home lift with smart controls for a modern family residence.",
                      image: {lift1},
                    },
                    {
                      title: "Accessible Retirement Community",
                      description:
                        "User-friendly lifts designed for comfort and accessibility in a senior living complex.",
                      image: {lift1},
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.lift1 || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">{project.title}</CardTitle>
                        <CardDescription className="text-blue">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                        >
                          View Project Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="industrial" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Warehouse Freight Elevator",
                      description:
                        "Heavy-duty freight elevator system for efficient goods movement in a large distribution center.",
                      image: {lift1},
                    },
                    {
                      title: "Manufacturing Plant Lifts",
                      description:
                        "Custom-designed lifts for transporting materials and equipment in a multi-level factory.",
                      image: {lift1},
                    },
                    {
                      title: "Shipyard Personnel Elevators",
                      description:
                        "Rugged, weather-resistant elevators for safe personnel transport in a busy shipyard.",
                      image: {lift1},
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.lift1 || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">{project.title}</CardTitle>
                        <CardDescription className="text-blue">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                        >
                          View Project Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="specialized" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Hospital Bed Elevators",
                      description:
                        "Spacious, smooth-operating elevators designed for patient transport in a major hospital.",
                      image: {lift1},
                    },
                    {
                      title: "Stadium Accessibility Lifts",
                      description:
                        "Multiple accessibility lifts ensuring easy navigation for all visitors in a large sports stadium.",
                      image: {lift1},
                    },
                    {
                      title: "Historic Building Retrofit",
                      description:
                        "Carefully integrated lift system preserving the aesthetics of a heritage-listed building.",
                      image: {lift1},
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.lift1 || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">{project.title}</CardTitle>
                        <CardDescription className="text-blue">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                        >
                          View Project Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-white">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Users className="h-4 w-4" />
                <span>Client Testimonials</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-blue">
                Hear from clients who have experienced the quality and reliability of our lift services.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "M&M Associates' lift installation in our office tower has significantly improved our tenants' experience. The smooth operation and energy efficiency have exceeded our expectations.",
                  author: "Sarah Thompson",
                  position: "Facility Manager, Skyline Offices",
                },
                {
                  quote:
                    "The modernization of our hotel's lifts by M&M Associates has not only enhanced the guest experience but also improved our energy efficiency. Their team's professionalism was outstanding throughout the project.",
                  author: "Michael Chen",
                  position: "General Manager, Grand Plaza Hotel",
                },
                {
                  quote:
                    "As a developer of luxury apartments, we rely on M&M Associates for all our lift needs. Their attention to detail and commitment to quality align perfectly with our high standards.",
                  author: "Emma Rodriguez",
                  position: "CEO, Prestige Homes",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="relative border-none shadow-md">
                  <CardHeader className="pb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 text-golden/20"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-6 text-blue">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-golden/10 flex items-center justify-center">
                        <span className="text-lg font-medium text-golden">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-darkBlue">{testimonial.author}</p>
                        <p className="text-sm text-blue">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-darkBlue text-white">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Building&apos;s Potential?
                </h2>
                <p className="text-xl text-white/90">
                  Contact our team of lift experts today to discuss your project needs and discover how we can enhance
                  your building&apos;s vertical transportation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="font-medium bg-golden text-white hover:bg-golden/90">
                    Request a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="bg-blue/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="text-sm font-medium">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <option value="" className="bg-darkBlue text-white">
                        Select project type
                      </option>
                      <option value="new-installation" className="bg-darkBlue text-white">
                        New Installation
                      </option>
                      <option value="modernization" className="bg-darkBlue text-white">
                        Modernization
                      </option>
                      <option value="maintenance" className="bg-darkBlue text-white">
                        Maintenance
                      </option>
                      <option value="consultation" className="bg-darkBlue text-white">
                        Consultation
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Tell us about your project"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-golden hover:bg-golden/90 text-white">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">Our Other Services</h2>
              <p className="mt-4 text-lg text-blue">
                Discover our full range of services designed to meet all your building and design needs.
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
                  <CardTitle className="text-darkBlue">ArcCon Architecture & Construction</CardTitle>
                  <CardDescription className="text-blue">
                    Comprehensive architectural design and construction services for projects of all scales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue">
                    Our ArcCon service combines architectural excellence with construction mastery, handling every
                    aspect of your project from initial concept to final construction.
                  </p>
                  <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-white">
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
                  <CardTitle className="text-darkBlue">Interior Design</CardTitle>
                  <CardDescription className="text-blue">
                    Transformative interior design services that create beautiful, functional spaces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue">
                    Our interior design team creates spaces that reflect your style and meet your functional needs, from
                    concept development to final styling and decoration.
                  </p>
                  <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  )
}

