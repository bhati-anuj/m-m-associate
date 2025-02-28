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
          Elevating Lifestyle With M&M 
          </h1>
          <p className="text-gray-600 mb-8 text-justify">
          M&M Associates is a premier multi-disciplinary firm specializing in Architecture & Construction, Interior Design, and Lift Solutions. With a commitment to excellence, innovation, and luxury, we provide comprehensive solutions for residential, commercial, and industrial projects. Our expertise lies in delivering world-class designs, high-quality construction, and cutting-edge elevator solutions that redefine modern living and working spaces.
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
              To provide high-quality, innovative, and sustainable
              architectural, construction, interior, and lift solutions that
              enhance the lifestyle and business efficiency of our clients.
            </TabsContent>
            <TabsContent value="vision" className="text-gray-600 text-justify">
              To become the most trusted and preferred brand in the industry by
              delivering superior craftsmanship, cutting-edge design, and
              exceptional service in every project we undertake.
            </TabsContent>
            <TabsContent value="value" className="text-gray-600 text-justify">
              ✔ Excellence & Innovation <br/>
              ✔ Client-Centric Approach <br/>
              ✔ Quality & Durability <br/>
              ✔ Integrity & Transparency <br/>
              ✔ Sustainability & Smart Solutions <br/>
              ✔ On-Time Project Delivery
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
