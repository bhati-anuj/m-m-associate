import React from "react";
import interior1 from "@/utils/interiorPage/interior.jpg";
import Image from "next/image";
import { CheckCircle, Palette } from "lucide-react";

const InteriorOverview = () => {
  return (
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
              At M&M Associates, our Interior Design service creates spaces that
              reflect your personality, meet your functional needs, and exceed
              your aesthetic expectations. We believe that thoughtful design
              transforms not just spaces, but experiences.
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
  );
};

export default InteriorOverview;
