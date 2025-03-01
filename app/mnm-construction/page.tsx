import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Clock,
  Compass,
  HardHat,
  Ruler,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import construction1 from "@/utils/constructionPage/construction.png";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ArcConServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
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
              <p className="text-xl text-gray-200">
                Transforming architectural concepts into stunning realities with
                precision engineering and expert construction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="font-medium bg-golden hover:bg-golden/90 text-white"
                >
                  Explore Our Projects
                </Button>
                <Button
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
                  <Compass className="h-4 w-4" />
                  <span>Our Expertise</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl md:text-5xl">
                  Comprehensive Architecture & Construction Solutions
                </h2>
                <p className="text-lg text-blue">
                  At M&M Associates, our ArcCon service combines architectural
                  excellence with construction mastery. We handle every aspect
                  of your project from initial concept to final construction,
                  ensuring a seamless process and exceptional results.
                </p>
                <ul className="grid gap-3">
                  {[
                    "Architectural design and planning",
                    "Structural engineering",
                    "Construction management",
                    "Regulatory compliance",
                    "Sustainable building practices",
                    "Project lifecycle management",
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
                  src={construction1}
                  alt="Architectural blueprint and construction site"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Clock className="h-4 w-4" />
                <span>Our Process</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                From Concept to Completion
              </h2>
              <p className="mt-4 text-lg text-blue">
                Our proven methodology ensures your project moves smoothly from
                initial concept through design, construction, and final
                delivery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "We begin by understanding your vision, requirements, and constraints to establish a solid foundation for your project.",
                  icon: <Compass className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Design & Engineering",
                  description:
                    "Our architects and engineers collaborate to create detailed designs that are both aesthetically pleasing and structurally sound.",
                  icon: <Ruler className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Construction",
                  description:
                    "Our experienced construction teams bring the designs to life with precision, quality materials, and attention to detail.",
                  icon: <HardHat className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Delivery & Support",
                  description:
                    "We complete the project with thorough quality checks and provide ongoing support to ensure your complete satisfaction.",
                  icon: <Building2 className="h-10 w-10 text-golden" />,
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
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Building2 className="h-4 w-4" />
                <span>Our Portfolio</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-blue">
                Explore our diverse portfolio of architectural and construction
                projects that showcase our expertise and commitment to
                excellence.
              </p>
            </div>

            <Tabs defaultValue="commercial" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white">
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
                    value="institutional"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Institutional
                  </TabsTrigger>
                  <TabsTrigger
                    value="industrial"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Industrial
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="commercial" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Modern Office Complex",
                      description:
                        "A 12-story office building with sustainable design features and collaborative workspaces.",
                      image: { construction1 },
                    },
                    {
                      title: "Retail Shopping Center",
                      description:
                        "An open-air shopping center with distinctive architectural elements and customer-focused design.",
                      image: { construction1 },
                    },
                    {
                      title: "Corporate Headquarters",
                      description:
                        "A flagship headquarters building that embodies the client's brand identity and corporate values.",
                      image: { construction1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={
                            project.image.construction1 || "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-blue">
                          {project.description}
                        </CardDescription>
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
                      description:
                        "A high-end residential development with premium amenities and contemporary design.",
                      image: { construction1 },
                    },
                    {
                      title: "Custom Family Home",
                      description:
                        "A bespoke residence designed to meet the specific lifestyle needs of a growing family.",
                      image: { construction1 },
                    },
                    {
                      title: "Urban Townhouses",
                      description:
                        "A collection of modern townhouses that maximize space in an urban setting.",
                      image: { construction1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={
                            project.image.construction1 || "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-blue">
                          {project.description}
                        </CardDescription>
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
              <TabsContent value="institutional" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "University Research Center",
                      description:
                        "A state-of-the-art facility designed to foster innovation and academic collaboration.",
                      image: { construction1 },
                    },
                    {
                      title: "Community Hospital",
                      description:
                        "A healthcare facility that balances clinical functionality with patient comfort and wellbeing.",
                      image: { construction1 },
                    },
                    {
                      title: "Public Library",
                      description:
                        "A modern library that serves as both a repository of knowledge and a community gathering space.",
                      image: { construction1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={
                            project.image.construction1 || "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-blue">
                          {project.description}
                        </CardDescription>
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
                      title: "Manufacturing Facility",
                      description:
                        "A purpose-built production facility designed for operational efficiency and worker safety.",
                      image: { construction1 },
                    },
                    {
                      title: "Distribution Center",
                      description:
                        "A logistics hub optimized for modern supply chain operations and future expansion.",
                      image: { construction1 },
                    },
                    {
                      title: "Research & Development Complex",
                      description:
                        "A specialized facility that combines laboratory, office, and testing spaces for innovation.",
                      image: { construction1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={
                            project.image.construction1 || "/placeholder.svg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-darkBlue">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-blue">
                          {project.description}
                        </CardDescription>
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
              <Button
                size="lg"
                className="bg-golden hover:bg-golden/90 text-white"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
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
                Don&apos;t just take our word for it. Hear from clients who have
                experienced the M&M Associates difference.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "M&M Associates transformed our vision into reality. Their architectural design was innovative and their construction execution was flawless. We couldn't be happier with our new headquarters.",
                  author: "Sarah Johnson",
                  position: "CEO, TechInnovate Inc.",
                },
                {
                  quote:
                    "The attention to detail throughout both the design and construction phases was impressive. The team at M&M Associates anticipated challenges before they became problems and delivered our project on time and on budget.",
                  author: "Michael Chen",
                  position: "Director of Facilities, Meridian Healthcare",
                },
                {
                  quote:
                    "Working with M&M Associates on our residential development was a seamless experience. Their integrated approach to architecture and construction eliminated the usual coordination headaches and resulted in a superior final product.",
                  author: "David Rodriguez",
                  position: "Principal, Horizon Development Group",
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
                        <span className="text-lg font-medium text-golden">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-darkBlue">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-blue">
                          {testimonial.position}
                        </p>
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
                  Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-xl text-white/90">
                  Contact our team today to discuss your architecture and
                  construction needs. We&apos;re here to transform your ideas
                  into exceptional spaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="font-medium bg-golden hover:bg-golden/90 text-white"
                  >
                    Schedule a Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Our Services
                  </Button>
                </div>
              </div>
              <div className="bg-blue/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Request Information</h3>
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
                    <label
                      htmlFor="project-type"
                      className="text-sm font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <option value="" className="bg-darkBlue text-white">
                        Select project type
                      </option>
                      <option
                        value="commercial"
                        className="bg-darkBlue text-white"
                      >
                        Commercial
                      </option>
                      <option
                        value="residential"
                        className="bg-darkBlue text-white"
                      >
                        Residential
                      </option>
                      <option
                        value="institutional"
                        className="bg-darkBlue text-white"
                      >
                        Institutional
                      </option>
                      <option
                        value="industrial"
                        className="bg-darkBlue text-white"
                      >
                        Industrial
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
                  <Button
                    type="submit"
                    className="w-full bg-golden hover:bg-golden/90 text-white"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-gray">
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
                    src={construction1}
                    alt="Lift services"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-darkBlue">Lift Services</CardTitle>
                  <CardDescription className="text-blue">
                    Comprehensive elevator and lift solutions for buildings of
                    all types and heights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue">
                    Our lift services include design, installation, maintenance,
                    and modernization of elevators and lifts for commercial,
                    residential, and industrial buildings.
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
                    src={construction1}
                    alt="Interior design"
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
