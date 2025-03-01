import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Clock,
  Compass,
  Users,
  Award,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import team1 from "@/utils/AboutUs/team1.jpg";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={team1}
              alt="M&M Associates team"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-5">
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
                About M&M Associates
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Building Excellence, Shaping Futures
              </h1>
              <p className="text-xl text-gray-200">
                Discover the story, values, and people behind M&M Associates -
                your trusted partner in architecture, construction, and design.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                  <Building2 className="h-4 w-4" />
                  <span>Our Company</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl md:text-5xl">
                  Innovative Solutions for the Built Environment
                </h2>
                <p className="text-lg text-blue">
                  M&M Associates is a leading integrated architecture,
                  construction, and design firm. With over two decades of
                  experience, we&apos;ve been at the forefront of creating
                  innovative, sustainable, and functional spaces that inspire
                  and endure.
                </p>
                <ul className="grid gap-3">
                  {[
                    "Comprehensive architectural and construction services",
                    "Award-winning designs and structures",
                    "Commitment to sustainability and innovation",
                    "Expert team of professionals",
                    "Client-centric approach",
                    "Proven track record of successful projects",
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
                  src={team1}
                  alt="M&M Associates office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Clock className="h-4 w-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                A Legacy of Excellence
              </h2>
              <p className="mt-4 text-lg text-blue">
                From our humble beginnings to becoming an industry leader, our
                journey has been marked by innovation, perseverance, and a
                commitment to excellence.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: "2000",
                  title: "Foundation",
                  description:
                    "M&M Associates was founded by John Miller and Sarah Martinez, with a vision to revolutionize the architecture and construction industry.",
                },
                {
                  year: "2005",
                  title: "Expansion",
                  description:
                    "We expanded our services to include interior design, offering comprehensive solutions to our clients.",
                },
                {
                  year: "2010",
                  title: "Sustainability Focus",
                  description:
                    "Launched our green building initiative, committing to sustainable practices in all our projects.",
                },
                {
                  year: "2015",
                  title: "International Projects",
                  description:
                    "Expanded our reach globally, taking on landmark projects in Europe and Asia.",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description:
                    "Embraced cutting-edge technologies like BIM and VR to enhance our design and construction processes.",
                },
                {
                  year: "Present",
                  title: "Industry Leader",
                  description:
                    "Recognized as an industry leader, continuing to shape the future of architecture and construction.",
                },
              ].map((milestone, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <div className="text-4xl font-bold text-golden">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-darkBlue mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-blue">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 md:py-24 bg-darkBlue text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/20 px-3 py-1 text-sm font-medium text-golden">
                <Compass className="h-4 w-4" />
                <span>Our Guiding Principles</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
                Mission and Values
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Our mission and values are the foundation of everything we do,
                driving us to create exceptional spaces and experiences for our
                clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push the boundaries of design and construction, embracing new technologies and methodologies to deliver cutting-edge solutions.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We are committed to creating environmentally responsible designs and implementing sustainable practices in all our projects.",
                },
                {
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of professionalism, honesty, and transparency in all our dealings with clients, partners, and team members.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and foster a collaborative environment that brings out the best in our people and partners.",
                },
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our work, from conceptualization to execution, ensuring the highest quality in all our deliverables.",
                },
                {
                  title: "Client-Centric",
                  description:
                    "Our clients' vision and satisfaction are at the heart of everything we do. We tailor our solutions to meet and exceed their expectations.",
                },
              ].map((value, i) => (
                <Card key={i} className="bg-blue/10 border-none">
                  <CardHeader>
                    <CardTitle className="text-golden">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Users className="h-4 w-4" />
                <span>Our People</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                Meet Our Leadership
              </h2>
              <p className="mt-4 text-lg text-blue">
                Our diverse team of experts brings a wealth of experience and
                passion to every project, ensuring exceptional results for our
                clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Miller",
                  position: "Co-Founder & CEO",
                  bio: "With over 30 years of experience in architecture and construction, John leads our company with vision and expertise.",
                  image: { team1 },
                },
                {
                  name: "Sarah Martinez",
                  position: "Co-Founder & Chief Architect",
                  bio: "Sarah's innovative designs have won numerous awards and set new standards in sustainable architecture.",
                  image: { team1 },
                },
                {
                  name: "Michael Chang",
                  position: "Chief Operations Officer",
                  bio: "Michael ensures the smooth execution of our projects, bringing efficiency and excellence to every endeavor.",
                  image: { team1 },
                },
                {
                  name: "Emily Rodriguez",
                  position: "Head of Interior Design",
                  bio: "Emily's creative vision transforms spaces into beautiful, functional environments that inspire and delight.",
                  image: { team1 },
                },
                {
                  name: "David Thompson",
                  position: "Chief Technology Officer",
                  bio: "David leads our digital transformation, integrating cutting-edge technologies into our design and construction processes.",
                  image: { team1 },
                },
                {
                  name: "Lisa Patel",
                  position: "Sustainability Director",
                  bio: "Lisa spearheads our green initiatives, ensuring our projects meet the highest standards of environmental responsibility.",
                  image: { team1 },
                },
              ].map((member, i) => (
                <Card key={i} className="overflow-hidden bg-white">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image.team1 || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-darkBlue">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-golden">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements and Awards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Award className="h-4 w-4" />
                <span>Our Achievements</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                Awards and Recognition
              </h2>
              <p className="mt-4 text-lg text-blue">
                Our commitment to excellence has been recognized by industry
                leaders and organizations worldwide.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  year: "2022",
                  award: "Sustainable Design Award",
                  organization: "Green Building Council",
                  project: "EcoTower Office Complex",
                },
                {
                  year: "2021",
                  award: "Best Residential Development",
                  organization: "International Property Awards",
                  project: "The Oasis Residences",
                },
                {
                  year: "2020",
                  award: "Innovation in Construction",
                  organization: "Construction Technology Forum",
                  project: "Smart City Infrastructure Project",
                },
                {
                  year: "2019",
                  award: "Architect of the Year",
                  organization: "Architectural Digest",
                  project: "Sarah Martinez (Co-Founder)",
                },
                {
                  year: "2018",
                  award: "Best Public Space Design",
                  organization: "Urban Design Institute",
                  project: "Riverside Cultural Center",
                },
                {
                  year: "2017",
                  award: "Excellence in Project Management",
                  organization: "Construction Management Association",
                  project: "Skyline Tower",
                },
              ].map((achievement, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-golden">
                      {achievement.award}
                    </CardTitle>
                    <CardDescription className="text-darkBlue">
                      {achievement.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-blue">Project: {achievement.project}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
                <Star className="h-4 w-4" />
                <span>Client Feedback</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-blue">
                Don&apos;t just take our word for it. Here&apos;s what our
                valued clients have to say about working with M&M Associates.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "M&M Associates transformed our vision into reality. Their attention to detail and innovative solutions exceeded our expectations.",
                  author: "Jane Smith",
                  position: "CEO, TechCorp Innovations",
                },
                {
                  quote:
                    "Working with M&M was a seamless experience. Their team's expertise and professionalism shone through at every stage of our project.",
                  author: "Mark Johnson",
                  position: "Director of Facilities, Meridian Healthcare",
                },
                {
                  quote:
                    "The sustainable design solutions provided by M&M not only met our environmental goals but also significantly reduced our operating costs.",
                  author: "Laura Chen",
                  position: "Sustainability Manager, GreenLeaf Enterprises",
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
                  Ready to Build Your Vision?
                </h2>
                <p className="text-xl text-white/90">
                  Let&apos;s collaborate to bring your architectural dreams to
                  life. Contact us today to start your journey with M&M
                  Associates.
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
                    View Our Projects
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
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
