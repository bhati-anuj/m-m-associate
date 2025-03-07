import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Compass, HardHat, Ruler } from "lucide-react";
const LiftProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-gray">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
            <Cog className="h-4 w-4" />
            <span>Our Process</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-blue">
            Our streamlined process ensures a smooth experience from initial
            consultation to ongoing maintenance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Consultation & Assessment",
              description:
                "We begin by understanding your specific needs and assessing your building's requirements.",
              icon: <Compass className="h-10 w-10 text-golden" />,
            },
            {
              title: "Design & Planning",
              description:
                "Our engineers create custom lift designs tailored to your building's architecture and usage patterns.",
              icon: <Ruler className="h-10 w-10 text-golden" />,
            },
            {
              title: "Installation & Testing",
              description:
                "Our expert technicians install your lift system with precision, followed by rigorous safety testing.",
              icon: <HardHat className="h-10 w-10 text-golden" />,
            },
            {
              title: "Maintenance & Support",
              description:
                "We provide ongoing maintenance and 24/7 support to ensure your lifts operate smoothly and safely.",
              icon: <Cog className="h-10 w-10 text-golden" />,
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

export default LiftProcess;
