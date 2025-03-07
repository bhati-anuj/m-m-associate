'use client'
import Footer from "@/components/Footer/Footer";
import AboutUs from "@/components/HomePage/AboutUsSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Carousel from "@/components/HomePage/Carousel";
import FeatureSection from "@/components/HomePage/FeatureSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import WorkProcess from "@/components/HomePage/WorkProcess";
// import WorkTimeline from "@/components/HomePage/WorkTimeline";
import InquiryForm from "@/components/InquiryForm";
import Navbar from "@/components/Navbar/Navbar";
import ProjectShowase from "@/components/ProjectShowase";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import React from "react";

export default function Home() {
  return (
    <div className="">
     <Navbar/>
      <section className="relative">
        <Carousel />
        <div className="container relative z-1 px-10 md:px-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-primary-foreground">
              ArcCon | Interior | Lift
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              From Vision to Execution
            </h1>
            <p className="text-lg text-white">
              M&M Associates transforms ideas into STUNNING, FUNCTIONAL, and
              LUXUTIOUS spaces with expertise in Architecture, Construction,
              Interiors, and Lift installations—delivering INOVATION, ELEGANCE,
              and EXCELLENCE in every project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-medium bg-golden"  onClick={()=>window.location.href="/projects"}>
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
      <WhatsAppButton />
      <section>
        <AboutUs />
        <ServiceSection />
        <FeatureSection />
        {/* <WorkTimeline /> */}
        <WorkProcess/>
      
        <ProjectShowase
          commercial={commercialProjects}
          residential={residentialProjects}
          institutional={institutionalProjects}
          industrial={industrialProjects}
        />
        <TestimonialsSection />
        <InquiryForm />
        <BlogSection />
      </section>

      <Footer />
    </div>
  );
}
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
