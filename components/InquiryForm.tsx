import React from "react";
import { Button } from "@/components/ui/button";

const InquiryForm = () => {
  return (
    <section className="py-16 md:py-24 bg-darkBlue text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-white/90">
            Contact M&M today to discuss your Vision & Needs. We are here to transform your Vision into Reality according to your Budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="font-medium bg-golden hover:bg-golden/90 text-white"
              >
                Get your first Consultancy for free, NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10"
                onClick={()=>window.location.href="/projects"}
              >
                View Our Projects
              </Button>
            </div>
          </div>
          <div className="bg-blue/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Free Consultation (Request Information)</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project-type"
                  className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="" className="bg-darkBlue text-white">
                    Select project type
                  </option>
                  <option value="commercial" className="bg-darkBlue text-white">
                    Commercial
                  </option>
                  <option
                    value="residential"
                    className="bg-darkBlue text-white"
                  >
                    Residential
                  </option>
                  <option
                    value="institutional"
                    className="bg-darkBlue text-white"
                  >
                    Institutional
                  </option>
                  <option value="industrial" className="bg-darkBlue text-white">
                    Industrial
                  </option>
                </select>

                <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <input
                    id="location"
                    className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your Location"
                  />

              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                Project Details
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Tell us about your project"
                  rows={4}
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-golden hover:bg-golden/90 text-white"
              >
                Consult with M&M
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
