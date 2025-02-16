import Image from "next/image";
import React from "react";
import crane from "@/utils/OurProject/cranes.jpg";
import interior from "@/utils/OurProject/interior.jpg";
import planning from "@/utils/OurProject/planning.jpg";
import lift from "@/utils/OurProject/lift.jpg";

const OurProjects = () => {
  return (
    <>
     <section className="py-16 px-4  mx-auto bg-bgGray">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2">Our Projects</h2>
      <p className="text-muted-foreground">Who are in extremely love with eco friendly system.</p>
    </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 ">
        <div className="col-span-2 relative group">
          <Image
            src={crane}
            alt="crane"
            width={500}
            height={500}
        
            className="w-full h-auto rounded-xl transition duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-blue-900">
              crane
            </h2>
          </div>
        </div>
        <div className="row-span-2 col-start-3 relative group">
          <Image
            src={interior}
            alt="interior"
            width={500}
            height={500}
            className="w-full h-full rounded-xl transition duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="uppercase text-3xl md:text-3xl lg:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-blue-900">
              interior
            </h2>
          </div>
        </div>
        <div className="row-start-2 relative group">
          <Image
            src={planning}
            alt="planning"
            width={500}
            height={500}
            className="w-full h-full rounded-xl transition duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-blue-900">
              planning
            </h2>
          </div>
        </div>
        <div className="row-start-2 relative group">
          <Image
            src={lift}
            alt="lift"
            width={500}
            height={500}
            className="w-full h-full rounded-xl transition duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-colors duration-300 group-hover:text-blue-900">
              lift
            </h2>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default OurProjects;
