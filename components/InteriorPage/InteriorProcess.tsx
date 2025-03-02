import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, Compass, Palette, Ruler } from "lucide-react";

const InteriorProcess = () => {
  return (
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
  );
};

export default InteriorProcess;
