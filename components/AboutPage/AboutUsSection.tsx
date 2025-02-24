import type React from "react";
// import { Award, Users, TrendingUp, Lightbulb } from "lucide-react";
import Image from "next/image";
import team1 from "@/utils/AboutUs/team1.jpg";
import Achievments from "./Achievments";
import CoreValues from "./CoreValues";

export default function AboutUsSection() {
  return (
    <>
  
    <div className="container mx-auto px-4 py-16">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2023, M&M Associates has grown from a small local
              construction firm to a leading name in construction, interior
              design, and lift installation across the region.
            </p>
            <p className="text-lg text-muted-foreground">
              Our journey has been marked by continuous innovation, unwavering
              commitment to quality, and a deep understanding of our
              clients&apos; needs. From our first residential project to our
              latest commercial complexes, we&apos;ve consistently delivered
              excellence in every aspect of our work.
            </p>
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src={team1}
              alt="M&M Associates journey"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src={team1}
              alt="M&M Associates team"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              At the heart of M&M Associates is our diverse and talented team of
              professionals. Our workforce includes experienced architects,
              skilled engineers, creative interior designers, and certified lift
              technicians.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in fostering a collaborative environment where ideas
              flourish and innovation thrives. Our team&apos;s expertise,
              combined with their passion for excellence, enables us to tackle
              projects of any scale and complexity.
            </p>
          </div>
        </div>
      </section>
      
      
    

      {/* <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ValueCard
            icon={<Award className="h-8 w-8 mb-4" />}
            title="Excellence"
            description="We strive for excellence in every project, big or small. Our commitment to quality is unwavering."
          />
          <ValueCard
            icon={<Users className="h-8 w-8 mb-4" />}
            title="Client-Centric"
            description="Our clients' vision and satisfaction are at the core of everything we do. We listen, adapt, and deliver."
          />
          <ValueCard
            icon={<TrendingUp className="h-8 w-8 mb-4" />}
            title="Innovation"
            description="We constantly seek innovative solutions and stay ahead of industry trends to provide cutting-edge services."
          />
          <ValueCard
            icon={<Lightbulb className="h-8 w-8 mb-4" />}
            title="Sustainability"
            description="We are committed to sustainable practices, minimizing our environmental impact in all our operations."
          />
        </div>
      </section> */}
    </div>
      <CoreValues/>
      <Achievments />
      </>
  );
}

// function ValueCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md">
//       <div className="flex flex-col items-center text-center">
//         {icon}
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-muted-foreground">{description}</p>
//       </div>
//     </div>
//   );
// }
