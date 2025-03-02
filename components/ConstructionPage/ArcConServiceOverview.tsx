import React from "react";
import Image from "next/image";
import construction1 from "@/utils/constructionPage/construction.png";
import { CheckCircle, Compass } from "lucide-react";
const ArcConServiceOverview = () => {
  return (
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
              excellence with construction mastery. We handle every aspect of
              your project from initial concept to final construction, ensuring
              a seamless process and exceptional results.
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
  );
};

export default ArcConServiceOverview;
