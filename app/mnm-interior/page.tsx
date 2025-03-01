import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Clock,
  Compass,
  Palette,
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
import interior1 from "@/utils/interiorPage/interior.jpg";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function InteriorDesignServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={interior1}
              alt="Elegant interior design"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-5">
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
                Interior Design
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Transforming Spaces Into Experiences
              </h1>
              <p className="text-xl text-gray-200">
                Elevate your environment with our bespoke interior design
                services that blend aesthetics, functionality, and your unique
                vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="font-medium bg-golden hover:bg-golden/90 text-white"
                >
                  View Our Portfolio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 text-white border-white hover:bg-background/30"
                >
                  Book a Consultation
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
                  <Palette className="h-4 w-4" />
                  <span>Our Expertise</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl md:text-5xl">
                  Crafting Interiors That Inspire
                </h2>
                <p className="text-lg text-blue">
                  At M&M Associates, our Interior Design service creates spaces
                  that reflect your personality, meet your functional needs, and
                  exceed your aesthetic expectations. We believe that thoughtful
                  design transforms not just spaces, but experiences.
                </p>
                <ul className="grid gap-3">
                  {[
                    "Residential and commercial interior design",
                    "Space planning and layout optimization",
                    "Custom furniture design and selection",
                    "Color consultation and material selection",
                    "Lighting design and implementation",
                    "Art curation and styling",
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
                  src={interior1}
                  alt="Elegant interior design showcase"
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
                The Design Journey
              </h2>
              <p className="mt-4 text-lg text-blue">
                Our collaborative design process ensures that your vision is
                realized through thoughtful planning, creative design, and
                meticulous execution.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Consultation & Discovery",
                  description:
                    "We begin by understanding your style preferences, functional needs, and project goals through in-depth consultation.",
                  icon: <Compass className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Concept Development",
                  description:
                    "Our designers create detailed concepts that translate your vision into cohesive design plans with material and color selections.",
                  icon: <Palette className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Design Implementation",
                  description:
                    "We coordinate with contractors and craftspeople to bring the design to life, overseeing every detail of the implementation.",
                  icon: <Ruler className="h-10 w-10 text-golden" />,
                },
                {
                  title: "Styling & Completion",
                  description:
                    "The final touches—art, accessories, and styling elements—are carefully selected and placed to complete your transformed space.",
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
                Design Excellence
              </h2>
              <p className="mt-4 text-lg text-blue">
                Browse our collection of thoughtfully designed interiors that
                showcase our commitment to beauty, functionality, and client
                satisfaction.
              </p>
            </div>

            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white">
                  <TabsTrigger
                    value="residential"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Residential
                  </TabsTrigger>
                  <TabsTrigger
                    value="commercial"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Commercial
                  </TabsTrigger>
                  <TabsTrigger
                    value="hospitality"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Hospitality
                  </TabsTrigger>
                  <TabsTrigger
                    value="retail"
                    className="data-[state=active]:bg-golden data-[state=active]:text-white"
                  >
                    Retail
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="residential" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Modern Minimalist Home",
                      description:
                        "A clean, contemporary design that maximizes space and light for a young professional couple.",
                      image: { interior1 },
                    },
                    {
                      title: "Luxurious Family Residence",
                      description:
                        "An elegant family home that balances sophistication with comfort and functionality.",
                      image: { interior1 },
                    },
                    {
                      title: "Urban Apartment Renovation",
                      description:
                        "A complete transformation of a dated apartment into a stylish urban retreat.",
                      image: { interior1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.interior1 || "/placeholder.svg"}
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
              <TabsContent value="commercial" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Corporate Headquarters",
                      description:
                        "A sophisticated office design that reflects the company's brand identity and enhances productivity.",
                      image: { interior1 },
                    },
                    {
                      title: "Creative Agency Workspace",
                      description:
                        "A dynamic, flexible workspace that inspires creativity and collaboration.",
                      image: { interior1 },
                    },
                    {
                      title: "Financial Firm Offices",
                      description:
                        "An elegant, professional environment that conveys trust and stability.",
                      image: { interior1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.interior1 || "/placeholder.svg"}
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
              <TabsContent value="hospitality" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Boutique Hotel Lobby",
                      description:
                        "A welcoming yet luxurious entrance space that sets the tone for the guest experience.",
                      image: { interior1 },
                    },
                    {
                      title: "Fine Dining Restaurant",
                      description:
                        "An atmospheric dining environment that complements the culinary experience.",
                      image: { interior1 },
                    },
                    {
                      title: "Wellness Spa Retreat",
                      description:
                        "A serene, rejuvenating space designed to promote relaxation and wellbeing.",
                      image: { interior1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.interior1 || "/placeholder.svg"}
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
              <TabsContent value="retail" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Luxury Boutique",
                      description:
                        "An exclusive retail environment that enhances the shopping experience and showcases premium products.",
                      image: { interior1 },
                    },
                    {
                      title: "Concept Store Design",
                      description:
                        "An innovative retail space that tells a brand story and creates an immersive customer experience.",
                      image: { interior1 },
                    },
                    {
                      title: "Flagship Store Renovation",
                      description:
                        "A complete redesign of a flagship location to reflect evolving brand identity and consumer expectations.",
                      image: { interior1 },
                    },
                  ].map((project, i) => (
                    <Card key={i} className="overflow-hidden bg-white">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image.interior1 || "/placeholder.svg"}
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
                Voices of Satisfaction
              </h2>
              <p className="mt-4 text-lg text-blue">
                Hear from clients who have experienced the transformative power
                of our interior design services.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "M&M Associates completely transformed our home. Their attention to detail and ability to understand our style was remarkable. The design not only looks beautiful but functions perfectly for our family's lifestyle.",
                  author: "Emily Richardson",
                  position: "Residential Client",
                },
                {
                  quote:
                    "Our office redesign has significantly improved team morale and productivity. The designers at M&M Associates created a space that perfectly balances professionalism with comfort and creativity.",
                  author: "James Wilson",
                  position: "CEO, Innovate Solutions",
                },
                {
                  quote:
                    "Working with M&M Associates on our restaurant design was a collaborative and rewarding experience. They understood our culinary vision and created an atmosphere that enhances the dining experience for our guests.",
                  author: "Sofia Martinez",
                  position: "Owner, Bistro Elegance",
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

        {/* Design Services */}
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

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-golden text-white">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-white/90">
                  Contact our team of interior design experts today to begin
                  your journey toward a beautifully designed space that reflects
                  your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-medium bg-white text-golden hover:bg-white/90"
                  >
                    Book a Design Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Our Portfolio
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-xl">
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
                      <option value="" className="bg-golden text-white">
                        Select project type
                      </option>
                      <option
                        value="residential"
                        className="bg-golden text-white"
                      >
                        Residential
                      </option>
                      <option
                        value="commercial"
                        className="bg-golden text-white"
                      >
                        Commercial
                      </option>
                      <option
                        value="hospitality"
                        className="bg-golden text-white"
                      >
                        Hospitality
                      </option>
                      <option value="retail" className="bg-golden text-white">
                        Retail
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
                    variant="secondary"
                    className="w-full bg-white text-golden hover:bg-white/90"
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
                    src={interior1}
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
                    src={interior1}
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
