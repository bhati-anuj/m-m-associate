import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import building from "@/utils/AboutUs/building.jpg";
export default function AboutUs() {
  return (
    <div className="grid lg:grid-cols-2 reverse min-h-screen bg-bgGray ">
      {/* Image Section */}
      <div className="relative h-[300px] lg:h-auto m-10 overflow-hidden">
        <Image
          src={building}
          alt="high-rise building"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-8 lg:p-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-textGolden font-semibold mb-4">
            Welcome to M&M Assocate
          </h2>
          <h1 className="text-4xl lg:text-4xl font-bold mb-6">
          HOW M&M ELEVATE LIFESTYLES? 
          </h1>
          <p className="text-gray-600 mb-8 text-justify">
          consultancy to visionary Projects redefining reality. We provide Seamless, Smart, Sustainable Architecture & Construction, Elegant Interior & Hi-Tech Lift solutions that enhance the Environmental extraordinary Lifestyle Experiences. Our Planning & Execution ensures Functionality, Efficient & Modern Innovative solutions tailored for your vision, that offers Exclusive, High-Quality & Customised Solutions in Residential, Commercial, Eco & luxury projects
          </p>

          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="mission"
                className="data-[state=active]:bg-bgBlue  data-[state=active]:text-textGolden"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="data-[state=active]:bg-bgBlue data-[state=active]:text-textGolden"
              >
                Our Vision
              </TabsTrigger>
              <TabsTrigger
                value="value"
                className="data-[state=active]:bg-bgBlue  data-[state=active]:text-textGolden"
              >
                Our Value
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="text-gray-600 text-justify">
            M&M dedicated to Craft Build Landmarks, delivering Innovation with Sustainability with Seamless Integration & Planning. Redefining Projects with our Values.  
            We don&apos;t just Build Structures, We build Legacies
            </TabsContent>
            <TabsContent value="vision" className="text-gray-600 text-justify">
            M&M Craft Vision into Sustainable Reality. Setting new standards in design Functionality & Aesthetics blending with Innovation & Excellence. We envision  creating iconic spaces that Inspire, Endure & redefine lifestyles.
            Building Excellence, Elevating Lifestyle
            </TabsContent>
            <TabsContent value="value" className="text-gray-600 text-justify">
            M&M never Compromise on Quality to ensure perfection in every details with Integrity, Transparency & Ethical Business practices at our core.
            Sustainable Innovation & Collaboration in projects meet Expectations.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
