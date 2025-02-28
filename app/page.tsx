import Footer from "@/components/Footer/Footer";
import AboutUs from "@/components/HomePage/AboutUsSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Carousel from "@/components/HomePage/Carousel";
import FeatureSection from "@/components/HomePage/FeatureSection";
import OurProjects from "@/components/HomePage/OurProjects";
import ServiceSection from "@/components/HomePage/ServiceSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import WorkTimeline from "@/components/HomePage/WorkTimeline";
// import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <section className="relative">
        <Carousel />
        <div className="container relative z-10 px-10 md:px-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              ArcCon  |  Interior  |  Lift
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            From Vision to Execution
            </h1>
            <p className="text-xl text-gray-200">
            M&M Associates transforms ideas into STUNNING, FUNCTIONAL, and LUXUTIOUS spaces with expertise in Architecture, Construction, Interiors, and Lift installations—delivering INOVATION, ELEGANCE, and EXCELLENCE in every project
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="font-medium">
                  Explore Our Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 text-white border-white hover:bg-background/30"
                >
                  Contact Us
                </Button>
              </div> */}
          </div>
        </div>
      </section>
      <WhatsAppButton />
      <section>
        <AboutUs />
        <ServiceSection />
        <FeatureSection />
        <WorkTimeline />
        <OurProjects />
        <TestimonialsSection />
        <BlogSection />
      </section>

      <Footer />
    </div>
  );
}
