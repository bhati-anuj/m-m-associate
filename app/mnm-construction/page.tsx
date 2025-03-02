import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import construction1 from "@/utils/constructionPage/construction.png";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import ArcConServiceOverview from "@/components/ConstructionPage/ArcConServiceOverview";
import ArcConProcess from "@/components/ConstructionPage/ArcConProcess";
import ArcConHero from "@/components/ConstructionPage/ArcConHero";
import InquiryForm from "@/components/InquiryForm";
import ProjectShowase from "@/components/ProjectShowase";

export default function ArcConServicePage() {
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
        <ArcConHero />
        <ArcConServiceOverview />
        <ArcConProcess />
        <ProjectShowase
          commercial={commercialProjects}
          residential={residentialProjects}
          institutional={institutionalProjects}
          industrial={industrialProjects}
        />
        <TestimonialsSection />
        <InquiryForm />

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
