import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, Compass, HardHat, Ruler } from "lucide-react";

const ArcConProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
            <Clock className="h-4 w-4" />
            <span>Our Process</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
            From Concept to Completion
          </h2>
          <p className="mt-4 text-lg text-blue">
            Our proven methodology ensures your project moves smoothly from
            initial concept through design, construction, and final delivery.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Discovery & Planning",
              description:
                "We begin by understanding your vision, requirements, and constraints to establish a solid foundation for your project.",
              icon: <Compass className="h-10 w-10 text-golden" />,
            },
            {
              title: "Design & Engineering",
              description:
                "Our architects and engineers collaborate to create detailed designs that are both aesthetically pleasing and structurally sound.",
              icon: <Ruler className="h-10 w-10 text-golden" />,
            },
            {
              title: "Construction",
              description:
                "Our experienced construction teams bring the designs to life with precision, quality materials, and attention to detail.",
              icon: <HardHat className="h-10 w-10 text-golden" />,
            },
            {
              title: "Delivery & Support",
              description:
                "We complete the project with thorough quality checks and provide ongoing support to ensure your complete satisfaction.",
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

export default ArcConProcess;
