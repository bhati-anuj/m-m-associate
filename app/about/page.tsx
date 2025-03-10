'use client'
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Clock,
 
  Users,

} from "lucide-react";
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
import InquiryForm from "@/components/InquiryForm";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import FeatureSection from "@/components/HomePage/FeatureSection";

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
              <p className="text-xl text-white">
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
<FeatureSection/>
     

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
                }
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

       

        <TestimonialsSection />

        <InquiryForm />
      </main>

      <Footer />
    </div>
  );
}
