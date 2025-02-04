import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/HomePage/AboutUsSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Carousel from "@/components/HomePage/Carousel";
import FeatureSection from "@/components/HomePage/FeatureSection";
import OurProjects from "@/components/HomePage/OurProjects";
import ServiceSection from "@/components/HomePage/ServiceSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import WorkTimeline from "@/components/HomePage/WorkTimeline";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative">
        
        <Carousel />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing content and services
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <WhatsAppButton/>
      <section>
        <AboutUs/>
        <ServiceSection />
        <FeatureSection/>
        <WorkTimeline/>
        <OurProjects/>
        <TestimonialsSection/>
        <BlogSection/>
        
      </section>

      <Footer />
    </>
  );
}
