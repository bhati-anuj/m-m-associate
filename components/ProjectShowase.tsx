'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ProjectShowcaseProps {
  commercial: Project[];
  residential: Project[];
  institutional: Project[];
  industrial: Project[];
}

const ProjectShowase: React.FC<ProjectShowcaseProps> = ({
  commercial,
  residential,
  institutional,
  // industrial,
}) => {
  return (
    <section className="py-16 md:py-24 bg-gray">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
            <Building2 className="h-4 w-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-blue">
            Explore our diverse portfolio of architectural and construction
            projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="commercial" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white">
              <TabsTrigger
                value="commercial"
                className="data-[state=active]:bg-golden data-[state=active]:text-white"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger
                value="residential"
                className="data-[state=active]:bg-golden data-[state=active]:text-white"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="institutional"
                className="data-[state=active]:bg-golden data-[state=active]:text-white"
              >
                Institutional
              </TabsTrigger>
              {/* <TabsTrigger
                value="industrial"
                className="data-[state=active]:bg-golden data-[state=active]:text-white"
              >
                Industrial
              </TabsTrigger> */}
            </TabsList>
          </div>
          <TabsContent value="commercial" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commercial.map((project, i) => (
                <Card key={i} className="overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-darkBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-blue">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                    >
                      View Project Details
                    </Button>
                  </CardContent> */}
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="residential" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {residential.map((project, i) => (
                <Card key={i} className="overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-darkBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-blue">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                    >
                      View Project Details
                    </Button>
                  </CardContent> */}
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="institutional" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {institutional.map((project, i) => (
                <Card key={i} className="overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-darkBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-blue">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                    >
                      View Project Details
                    </Button>
                  </CardContent> */}
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* <TabsContent value="industrial" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industrial.map((project, i) => (
                <Card key={i} className="overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-darkBlue">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-blue">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                    >
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent> */}
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg"  className="bg-golden hover:bg-golden/90 text-white" onClick={()=>window.location.href="/projects"}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowase;
