import Image from "next/image";
import Link from "next/link";
import {
  
  Calendar,
  Clock,
  User,
  Tag,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar/Navbar";
import blog from "../../public/blog/blog.jpg"
import Footer from "@/components/Footer/Footer";

export default function BlogPostPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
     <Navbar/>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={blog}
              alt="The Future of Sustainable Architecture"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <Badge className="bg-golden hover:bg-golden/90 text-white">
                Sustainability
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                The Future of Sustainable Architecture
              </h1>
              <div className="flex items-center justify-center text-sm text-white gap-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>June 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>Sarah Martinez</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-blue">
                    Explore how sustainable design practices are reshaping the
                    future of architecture and creating buildings that are not
                    only beautiful but environmentally responsible.
                  </p>

                  <p>
                    The architecture industry stands at a pivotal moment in its
                    evolution. As climate change concerns intensify and
                    resources become increasingly scarce, the need for
                    sustainable building practices has never been more urgent.
                    This shift isn&apos;t just about environmental
                    responsibility—it&apos;s about reimagining how we design,
                    construct, and inhabit spaces in ways that benefit both
                    people and the planet.
                  </p>

                  <h2>The Evolution of Green Architecture</h2>

                  <p>
                    Sustainable architecture has come a long way from its early
                    days of simple energy conservation. Today&apos;s green
                    buildings integrate complex systems and innovative materials
                    to create structures that actively contribute to
                    environmental health. From passive solar design to living
                    walls, architects are employing a diverse toolkit of
                    strategies to reduce carbon footprints while enhancing
                    occupant comfort.
                  </p>

                  <div className="my-8 aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src={blog}
                      alt="Modern sustainable building with green features"
                      fill
                      className="object-cover"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">
                      The Edge in Amsterdam, considered one of the world&apos;s
                      most sustainable office buildings
                    </p>
                  </div>

                  <h2>Key Principles of Sustainable Architecture</h2>

                  <p>
                    At its core, sustainable architecture revolves around
                    several fundamental principles:
                  </p>

                  <ul>
                    <li>
                      <strong>Energy Efficiency:</strong> Minimizing energy
                      consumption through proper insulation, efficient HVAC
                      systems, and smart building controls.
                    </li>
                    <li>
                      <strong>Renewable Energy Integration:</strong>{" "}
                      Incorporating solar panels, wind turbines, and other
                      renewable energy sources to power buildings.
                    </li>
                    <li>
                      <strong>Water Conservation:</strong> Implementing
                      rainwater harvesting, greywater recycling, and
                      water-efficient fixtures.
                    </li>
                    <li>
                      <strong>Sustainable Materials:</strong> Using locally
                      sourced, recycled, or rapidly renewable materials with low
                      embodied carbon.
                    </li>
                    <li>
                      <strong>Biophilic Design:</strong> Connecting occupants
                      with nature through natural light, ventilation, and
                      greenery.
                    </li>
                  </ul>

                  <h2>Innovative Technologies Driving Change</h2>

                  <p>
                    Technological advancements are accelerating the sustainable
                    architecture movement. Building Information Modeling (BIM)
                    allows architects to simulate and optimize energy
                    performance before construction begins. 3D printing enables
                    the creation of complex, material-efficient structures with
                    minimal waste. Smart building systems continuously monitor
                    and adjust energy usage based on occupancy and environmental
                    conditions.
                  </p>

                  <blockquote>
                    &quot;The most sustainable building is the one that already
                    exists. Adaptive reuse of existing structures represents one
                    of the most impactful approaches to sustainable
                    architecture.&quot;
                    <cite>— Michael Chang, Chief Operations Officer</cite>
                  </blockquote>

                  <h2>Case Studies in Excellence</h2>

                  <p>
                    Around the world, pioneering projects are demonstrating
                    what&apos;s possible when sustainability drives design:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div>
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-2">
                        <Image
                          src={blog}
                          alt="Bosco Verticale in Milan"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium">Bosco Verticale, Milan</h4>
                      <p className="text-sm text-blue">
                        Residential towers featuring hundreds of trees and
                        thousands of plants, creating a vertical forest that
                        absorbs CO2 and produces oxygen.
                      </p>
                    </div>
                    <div>
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-2">
                        <Image
                          src={blog}
                          alt="CopenHill in Copenhagen"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium">CopenHill, Copenhagen</h4>
                      <p className="text-sm text-blue">
                        A waste-to-energy plant that doubles as a public ski
                        slope and hiking area, turning infrastructure into
                        community space.
                      </p>
                    </div>
                  </div>

                  <h2>The Economic Case for Sustainability</h2>

                  <p>
                    While sustainable features may increase initial construction
                    costs, they typically pay for themselves many times over
                    through operational savings. Energy-efficient buildings have
                    lower utility bills, water-conserving systems reduce water
                    costs, and healthy indoor environments can boost
                    productivity and reduce absenteeism. Additionally, green
                    buildings often command premium rents and higher resale
                    values.
                  </p>

                  <h2>Looking Ahead: The Future of Sustainable Architecture</h2>

                  <p>
                    As we look to the future, several trends are likely to shape
                    sustainable architecture:
                  </p>

                  <ul>
                    <li>
                      <strong>Net-Zero and Net-Positive Buildings:</strong>{" "}
                      Structures that produce as much or more energy than they
                      consume.
                    </li>
                    <li>
                      <strong>Circular Economy Principles:</strong> Designing
                      buildings for disassembly and material reuse at
                      end-of-life.
                    </li>
                    <li>
                      <strong>Climate Resilience:</strong> Creating buildings
                      that can withstand and adapt to changing climate
                      conditions.
                    </li>
                    <li>
                      <strong>Regenerative Design:</strong> Moving beyond
                      sustainability to buildings that actively restore and
                      improve their environments.
                    </li>
                  </ul>

                  <h2>Conclusion</h2>

                  <p>
                    The future of architecture is inextricably linked to
                    sustainability. As architects, builders, and clients
                    increasingly prioritize environmental responsibility,
                    we&apos;re witnessing a transformation in how buildings are
                    conceived and constructed. This evolution isn&apos;t just
                    about reducing harm—it&apos;s about creating spaces that
                    actively contribute to environmental health, human
                    wellbeing, and community resilience.
                  </p>

                  <p>
                    At M&M Associates, we&apos;re committed to leading this
                    transformation through innovative, sustainable design
                    solutions that meet the needs of our clients while
                    respecting the planet. The buildings we create today will
                    shape the world of tomorrow—and we&apos;re dedicated to
                    ensuring that future is sustainable.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-blue" />
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sustainable",
                      "Green Design",
                      "Architecture",
                      "Innovation",
                      "Environment",
                    ].map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="hover:bg-golden hover:text-white cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8">
                  <Separator className="my-8" />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" className="gap-2">
                      <ChevronLeft className="h-4 w-4" />
                      Back to Blog
                    </Button>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-blue">Share:</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue hover:text-golden"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue hover:text-golden"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue hover:text-golden"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-12 bg-gray p-6 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="/placeholder.svg?height=64&width=64"
                        alt="Sarah Martinez"
                      />
                      <AvatarFallback className="bg-golden text-white">
                        SM
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-darkBlue">
                        Sarah Martinez
                      </h3>
                      <p className="text-blue">Co-Founder & Chief Architect</p>
                    </div>
                  </div>
                  <p className="mt-4 text-blue">
                    Sarah&apos;s innovative designs have won numerous awards and
                    set new standards in sustainable architecture. With over 20
                    years of experience, she leads our architectural team with a
                    focus on environmentally responsible design solutions.
                  </p>
                </div>

                {/* Related Posts */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-darkBlue mb-6">
                    Related Articles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Biophilic Design: Bringing Nature Indoors",
                        excerpt:
                          "Learn how incorporating natural elements into interior design can improve well-being and productivity.",
                        image: {blog},
                        category: "Interior Design",
                        date: "June 10, 2023",
                      },
                      {
                        title: "The Rise of Modular Construction",
                        excerpt:
                          "Explore how prefabricated and modular construction methods are addressing housing shortages.",
                        image: {blog},
                        category: "Construction",
                        date: "June 5, 2023",
                      },
                    ].map((post, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden border-none shadow-md"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={post.image.blog || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardDescription>
                            {post.category} • {post.date}
                          </CardDescription>
                          <CardTitle className="text-lg">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-blue mb-4">{post.excerpt}</p>
                          <Button
                            variant="link"
                            className="text-golden p-0 h-auto"
                          >
                            Read More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        { name: "Architecture", count: 12 },
                        { name: "Construction", count: 8 },
                        { name: "Interior Design", count: 10 },
                        { name: "Sustainability", count: 7 },
                        { name: "Urban Planning", count: 5 },
                        { name: "Innovation", count: 9 },
                      ].map((category, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="flex justify-between items-center text-blue hover:text-golden"
                          >
                            <span>{category.name}</span>
                            <span className="bg-gray rounded-full px-2 py-0.5 text-xs">
                              {category.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "10 Trends Shaping the Future of Architecture",
                          date: "April 18, 2023",
                          image: {blog},
                        },
                        {
                          title:
                            "How to Choose the Right Materials for Your Project",
                          date: "March 25, 2023",
                          image: {blog},
                        },
                        {
                          title:
                            "The Psychology of Space: Designing for Well-being",
                          date: "February 12, 2023",
                          image: {blog},
                        },
                      ].map((post, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={post.image.blog || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-darkBlue hover:text-golden">
                              <Link href="#">{post.title}</Link>
                            </h4>
                            <p className="text-sm text-blue">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-none shadow-md bg-darkBlue text-white">
                  <CardHeader>
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                    <CardDescription className="text-gray-300">
                      Stay updated with our latest insights and news
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full rounded-md border border-blue/20 bg-blue/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-golden"
                        />
                      </div>
                      <Button className="w-full bg-golden hover:bg-golden/90 text-white">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="bg-darkBlue rounded-xl p-8 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Ready to Start Your Sustainable Project?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Let&apos;s collaborate to create environmentally responsible
                  spaces that inspire and endure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-golden hover:bg-golden/90 text-white"
                  >
                    Contact Our Team
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Our Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
}
