import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import building from "@/utils/AboutUs/building.jpg"
export default function AboutUs() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Image Section */}
      <div className="relative h-[300px] lg:h-screen">
        <Image
          src={building}
          alt="Construction vehicle"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-textGolden font-semibold mb-4">Welcome to Home Builder</h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">We create and turn into reality</h1>
          <p className="text-gray-600 mb-8">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>

          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="mission" className="data-[state=active]:bg-bgBlue  data-[state=active]:text-white">
                Our Mission
              </TabsTrigger>
              <TabsTrigger value="vision" className="data-[state=active]:bg-bgBlue data-[state=active]:text-white">
                Our Vision
              </TabsTrigger>
              <TabsTrigger value="value" className="data-[state=active]:bg-bgBlue  data-[state=active]:text-white">
                Our Value
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </TabsContent>
            <TabsContent value="vision" className="text-gray-600">
              Our vision is to become the leading construction company, delivering innovative and sustainable building
              solutions while maintaining the highest standards of quality and customer satisfaction.
            </TabsContent>
            <TabsContent value="value" className="text-gray-600">
              We believe in integrity, excellence, and commitment to our clients. Our core values drive us to deliver
              exceptional results while maintaining strong relationships with our partners and communities.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

